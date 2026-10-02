import { Pool } from "pg";

export type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  storeUrl?: string;
  revenue?: string;
  services?: string[];
  message?: string;
  source?: string;
  userAgent?: string;
};

const globalForPg = globalThis as unknown as {
  __raLeadsPool?: Pool;
  __raLeadsPoolKey?: string;
  __raLeadsTableReady?: Promise<void>;
};

function getConnectionString(): string | undefined {
  const raw = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
  if (!raw) return undefined;
  // Supabase URLs carry sslmode=require, which pg now reads as verify-full and then rejects
  // Supabase's certificate chain. Drop it and rely on the explicit ssl option below.
  try {
    const url = new URL(raw);
    url.searchParams.delete("sslmode");
    return url.toString();
  } catch {
    return raw;
  }
}

function getPool(): Pool | undefined {
  const connectionString = getConnectionString();
  if (!connectionString) return undefined;

  if (!globalForPg.__raLeadsPool || globalForPg.__raLeadsPoolKey !== connectionString) {
    // Rebuild if the connection string changed (e.g. after an env edit during dev).
    void globalForPg.__raLeadsPool?.end();
    globalForPg.__raLeadsTableReady = undefined;
    globalForPg.__raLeadsPoolKey = connectionString;
    globalForPg.__raLeadsPool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });
  }
  return globalForPg.__raLeadsPool;
}

export function leadStorageConfigured(): boolean {
  return Boolean(getConnectionString());
}

async function ensureTable(pool: Pool): Promise<void> {
  if (!globalForPg.__raLeadsTableReady) {
    globalForPg.__raLeadsTableReady = pool
      .query(
        `CREATE TABLE IF NOT EXISTS leads (
          id bigserial primary key,
          created_at timestamptz not null default now(),
          name text not null,
          email text not null,
          phone text,
          company text,
          store_url text,
          revenue text,
          services text[],
          message text,
          source text,
          user_agent text
        )`
      )
      // Lock the table out of Supabase's public REST API; the owner role used here is unaffected.
      .then(() => pool.query("ALTER TABLE leads ENABLE ROW LEVEL SECURITY"))
      .then(() => undefined)
      .catch((err) => {
        // Allow retry on next call if table creation failed.
        globalForPg.__raLeadsTableReady = undefined;
        throw err;
      });
  }
  return globalForPg.__raLeadsTableReady;
}

export async function insertLead(lead: LeadInput): Promise<void> {
  const pool = getPool();
  if (!pool) {
    throw new Error("Lead storage is not configured");
  }

  await ensureTable(pool);

  await pool.query(
    `INSERT INTO leads
      (name, email, phone, company, store_url, revenue, services, message, source, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      lead.name,
      lead.email,
      lead.phone ?? null,
      lead.company,
      lead.storeUrl ?? null,
      lead.revenue ?? null,
      lead.services ?? [],
      lead.message ?? null,
      lead.source ?? null,
      lead.userAgent ?? null,
    ]
  );
}
