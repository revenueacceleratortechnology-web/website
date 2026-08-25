import Link from "next/link";
import { pillars, badges } from "@/lib/content";

export function Pillars() {
  return (
    <section id="services" className="band border-b border-hairline bg-paper">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">What we run</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            Four disciplines, one account team.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">
            Most brands buy these separately and spend the difference on
            coordination. We run them in the same room, against the same number.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-mineral/70"
            >
              <span className="font-mono text-xs text-signal">{p.code}</span>
              <h3 className="display mt-4 text-[length:var(--text-h3)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{p.body}</p>

              <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-ink/75">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-signal"
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                Explore
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
              </span>
            </Link>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-3">
          {badges.map((b) => (
            <li
              key={b.title}
              className="flex items-center gap-2.5 rounded-full border border-hairline px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              <span className="text-sm font-semibold text-ink">{b.title}</span>
              <span className="eyebrow text-ash">{b.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
