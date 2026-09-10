"use client";

import { useState } from "react";
import { site, revenueBands } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "company", string>>;

export function AuditForm() {
  const [sent, setSent] = useState(false);
  const [enquiry, setEnquiry] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Enter your name so we know who we are meeting.";
    if (!company) next.company = "Enter your brand or company name.";
    if (!email) next.email = "Enter a work email so we can send the findings.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email address is missing an @ or a domain.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setEnquiry(`Hello RA Tech, I would like an Amazon account audit.\nName: ${name}\nBrand: ${company}\nEmail: ${email}\nMonthly revenue: ${String(data.get("revenue") ?? "")}`);
      setSent(true);
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
        <p className="display mt-5 text-xl text-ink">Your enquiry is ready</p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          Copy your enquiry and share it with the team using your preferred messaging app, or call {site.phone}. Your details have not been sent.
        </p>
        <textarea aria-label="Prepared enquiry" readOnly value={enquiry} className="mt-5 h-40 w-full rounded-lg border border-hairline p-3 text-left text-sm text-ink" />
        <a href={`tel:${site.phone}`} className="mt-4 block font-semibold text-signal">Call {site.phone}</a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-signal underline underline-offset-4"
        >
          Edit enquiry
        </button>
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
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-slate"
      >
        Prepare my enquiry
      </button>

      <p className="mt-3 text-center text-xs text-ash">
        This prepares your enquiry on your device. It does not send or save your details.
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
