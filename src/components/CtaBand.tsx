import { AuditForm } from "./AuditForm";
import { site, finalCta } from "@/lib/content";

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  bullets?: string[];
};

export function CtaBand({
  eyebrow = "Next step",
  heading = finalCta.heading,
  body = finalCta.body,
  bullets = [
    "Seven-day free trial on eligible recurring services",
    "An initial account audit at no cost",
    "Clear ownership of every priority from day one",
  ],
}: Props = {}) {
  return (
    <section id="audit" className="scroll-mt-24 bg-signal">
      <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-white/70">{eyebrow}</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)] text-white">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/85">
            {body}
          </p>

          <ul className="mt-7 space-y-2.5">
            {bullets.map((line) => (
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
