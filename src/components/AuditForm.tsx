"use client";

import { useState } from "react";
import { site, revenueBands } from "@/lib/content";

type Errors = Partial<
  Record<"name" | "email" | "company" | "phone" | "storeUrl" | "message" | "form", string>
>;

const SERVICE_OPTIONS = [
  "Full-service management",
  "PPC management",
  "Amazon SEO",
  "Account audit",
  "Design & creative",
  "Troubleshooting & recovery",
  "DTC / website growth",
  "Not sure yet",
];

export function AuditForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [services, setServices] = useState<string[]>([]);

  function toggleService(option: string) {
    setServices((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const storeUrl = String(data.get("storeUrl") ?? "").trim();
    const revenue = String(data.get("revenue") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const websiteUrl = String(data.get("website_url") ?? "");

    const next: Errors = {};
    if (!name) next.name = "Enter your name so we know who we are meeting.";
    if (!company) next.company = "Enter your brand or company name.";
    if (!email) next.email = "Enter a work email so we can send the findings.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email address is missing an @ or a domain.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          storeUrl,
          revenue,
          services,
          message,
          website_url: websiteUrl,
          source: window.location.pathname,
        }),
      });

      const result = await res.json().catch(() => ({ ok: false }));

      if (res.ok && result.ok) {
        setSent(true);
      } else {
        if (result.errors && typeof result.errors === "object") {
          setErrors(result.errors as Errors);
        } else {
          setErrors({
            form: `We couldn't send that just now. Please try again or call ${site.phone}.`,
          });
        }
      }
    } catch {
      setErrors({
        form: `We couldn't send that just now. Please try again or call ${site.phone}.`,
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal-soft"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-signal">
            <path
              d="M4 10.5l4 4 8-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="display mt-5 text-xl text-ink">Thanks — we have your details</p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          A member of the RA Tech team will be in touch shortly. Need us sooner? Call{" "}
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-signal">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 md:p-7"
    >
      <p className="display text-lg text-ink">Request your audit</p>
      <p className="mt-1.5 text-sm text-ash">
        Prepare your details for a conversation with our team.
      </p>

      <div className="mt-5 space-y-4">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Brand or company"
          name="company"
          autoComplete="organization"
          error={errors.company}
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
        <Field
          label="Amazon store or website URL"
          name="storeUrl"
          type="url"
          error={errors.storeUrl}
        />

        <div>
          <label
            htmlFor="revenue"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Monthly marketplace revenue
          </label>
          <select
            id="revenue"
            name="revenue"
            defaultValue={revenueBands[1]}
            className="w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink transition-colors focus:border-signal"
          >
            {revenueBands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="mb-1.5 block text-sm font-medium text-ink">
            What do you need help with?
          </span>
          <div className="grid grid-cols-2 gap-2">
            {SERVICE_OPTIONS.map((option) => {
              const checked = services.includes(option);
              return (
                <label
                  key={option}
                  className={`cursor-pointer rounded-full border px-3 py-2 text-center text-xs font-medium transition-colors ${
                    checked
                      ? "border-ink bg-ink text-paper"
                      : "border-hairline text-ink"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={option}
                    checked={checked}
                    onChange={() => toggleService(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink transition-colors focus:border-signal"
          />
        </div>

        <div className="relative">
          <input
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute -left-[9999px]"
          />
        </div>
      </div>

      {errors.form && (
        <p className="mt-4 text-sm text-signal">{errors.form}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-slate disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request my free audit"}
      </button>

      <p className="mt-3 text-center text-xs text-ash">
        We only use your details to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink transition-colors focus:border-signal ${
          error ? "border-signal" : "border-hairline"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-signal">
          {error}
        </p>
      )}
    </div>
  );
}
