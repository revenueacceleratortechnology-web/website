import { insertLead, leadStorageConfigured } from "@/lib/leads";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_STRING_LENGTH = 2000;
const MAX_SERVICES = 12;

type FieldErrors = Record<string, string>;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function trimOrUndefined(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, errors: { form: "Invalid request body" } },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null) {
    return Response.json(
      { ok: false, errors: { form: "Invalid request body" } },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;

  // Honeypot: bots that fill this hidden field are silently accepted.
  if (isNonEmptyString(data.website_url)) {
    return Response.json({ ok: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = trimOrUndefined(data.phone);
  const storeUrl = trimOrUndefined(data.storeUrl);
  const revenue = trimOrUndefined(data.revenue);
  const message = trimOrUndefined(data.message);
  const source =
    typeof data.source === "string" ? data.source.trim().slice(0, 200) : undefined;

  const rawServices = Array.isArray(data.services) ? data.services : [];
  const services = rawServices
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .slice(0, MAX_SERVICES)
    .map((s) => s.trim().slice(0, 80));

  const errors: FieldErrors = {};

  if (!name) errors.name = "Enter your name so we know who we are meeting.";
  else if (name.length > MAX_STRING_LENGTH) errors.name = "That name is too long.";

  if (!company) errors.company = "Enter your brand or company name.";
  else if (company.length > MAX_STRING_LENGTH)
    errors.company = "That company name is too long.";

  if (!email) errors.email = "Enter a work email so we can send the findings.";
  else if (!EMAIL_RE.test(email))
    errors.email = "That email address is missing an @ or a domain.";
  else if (email.length > MAX_STRING_LENGTH) errors.email = "That email is too long.";

  const longStringFields: Array<[string, string | undefined]> = [
    ["phone", phone],
    ["storeUrl", storeUrl],
    ["revenue", revenue],
    ["message", message],
  ];
  for (const [field, value] of longStringFields) {
    if (value && value.length > MAX_STRING_LENGTH) {
      errors[field] = "That value is too long.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  if (!leadStorageConfigured()) {
    return Response.json(
      { ok: false, error: "Lead storage is not configured" },
      { status: 503 }
    );
  }

  const userAgent = request.headers.get("user-agent") ?? undefined;

  try {
    await insertLead({
      name,
      email,
      company,
      phone,
      storeUrl,
      revenue,
      services,
      message,
      source,
      userAgent,
    });
  } catch (error) {
    console.error("Failed to insert lead", error);
    return Response.json(
      { ok: false, error: "Could not save your enquiry" },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
