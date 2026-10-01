# Lead capture

The audit request form (`src/components/AuditForm.tsx`) posts to
`POST /api/leads` (`src/app/api/leads/route.ts`), which writes rows into a
Postgres `leads` table via `src/lib/leads.ts`.

## Storage

- Table `leads` is created automatically (`CREATE TABLE IF NOT EXISTS`) the
  first time a lead is successfully submitted. No manual migration needed.
- Connection string comes from `POSTGRES_URL` (or `DATABASE_URL` as a
  fallback), provided in production by Vercel's Supabase integration.
- If neither env var is set, the API returns `503` and nothing is stored —
  the form shows a friendly error instead of crashing.

## Viewing leads

- **Vercel**: Project → Storage → the connected Supabase store → Table
  editor → `leads`.
- **Any Postgres client**: connect using the `POSTGRES_URL` value (psql,
  TablePlus, etc).

## Running locally

1. `vercel link` (once, to connect this repo to the Vercel project), then
   `vercel env pull .env.local` to pull `POSTGRES_URL`.
2. Alternatively, copy `.env.example` to `.env.local` and paste a Postgres
   connection string manually.
3. Without either, `/api/leads` responds `503` — the UI still works, it just
   can't persist submissions.
