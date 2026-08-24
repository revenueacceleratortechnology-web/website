import { AuditForm } from "./AuditForm";
import { site } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="audit" className="scroll-mt-24 bg-signal">
      <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-white/70">Free account audit</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)] text-white">
            Book 30 minutes. Leave with three things to fix.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/85">
            We open your account with you, name the largest revenue leak, and put
            it in writing. You keep the findings whether or not you hire us.
          </p>

          <ul className="mt-7 space-y-2.5">
            {[
              "A written diagnosis of your three worst-performing listings",
              "A rebuild plan with the first change we would make",
              "No obligation, and no percentage of your ad spend, ever",
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm text-white/90">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5l4 4 8-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-sm text-white/75">
            Prefer to talk now?{" "}
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="font-semibold text-white underline underline-offset-4"
            >
              Call {site.phone}
            </a>
          </p>
        </div>

        <AuditForm />
      </div>
    </section>
  );
}
