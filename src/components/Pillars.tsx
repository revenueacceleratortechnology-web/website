import Link from "next/link";
import { approach, pillars, badges } from "@/lib/content";

const ICONS = {
  click: (
    <>
      <path d="M9 4l1.5 4M4 9l4 1.5M6.5 6.5l3 3M4.5 15.5l3-3" strokeLinecap="round" />
      <path d="M12 11l9 3.5-3.8 1.3L15.6 21z" strokeLinejoin="round" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5L21 21" strokeLinecap="round" />
    </>
  ),
  design: (
    <>
      <path d="M4 20l3-1 11-11-2-2L5 17l-1 3z" strokeLinejoin="round" />
      <path d="M14.5 5.5l4 4" strokeLinecap="round" />
      <path d="M8 16l-2-2" strokeLinecap="round" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" strokeLinecap="round" />
    </>
  ),
};

export function Pillars() {
  return (
    <section id="services" className="band border-b border-hairline bg-paper">
      <div className="shell">
        <div className="grid gap-12 rounded-3xl bg-ink p-8 md:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intro */}
          <div className="lg:border-r lg:border-hairline-dark lg:pr-14">
            <h2 className="display text-[length:var(--text-h2)] text-paper">
              {approach.heading}
            </h2>

            {approach.body.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-paper/65">
                {p}
              </p>
            ))}

            <Link
              href={approach.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e64a1c]"
            >
              {approach.cta.label}
            </Link>

            <p className="mt-8 text-sm leading-relaxed text-paper/50">
              {approach.footnote}
            </p>
          </div>

          {/* Four pillars */}
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {pillars.map((p) => (
              <article key={p.title}>
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-paper"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  {ICONS[p.icon]}
                </svg>

                <h3 className="display mt-5 text-[1.375rem] text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/65">
                  {p.body}
                </p>

                <Link
                  href={p.href}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-colors hover:text-paper"
                >
                  {p.link}
                  <svg
                    viewBox="0 0 14 10"
                    className="h-2.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Partner badges */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {badges.map((b) => (
            <li key={b.title} className="flex items-center gap-3">
              <span className="display text-lg text-ink">{b.title}</span>
              <span className="h-5 w-px bg-hairline" aria-hidden="true" />
              <span className="text-sm text-ash">Official {b.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
