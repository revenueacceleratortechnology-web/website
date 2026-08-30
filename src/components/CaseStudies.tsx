import Link from "next/link";
import { Sparkline } from "./Sparkline";
import { Button } from "./Button";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="results" className="band bg-ink text-paper">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-signal">Selected results</p>
            <h2 className="display mt-4 text-[length:var(--text-h2)] text-paper">
              The work, with the numbers attached.
            </h2>
          </div>
          <Button href="#results" variant="ghost-dark" arrow>
            All case studies
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.headline}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-hairline-dark bg-slate p-7 transition-colors duration-300 hover:border-signal/60"
            >
              <p className="eyebrow text-ash">{c.category}</p>

              <p className="font-mono mt-6 text-5xl font-semibold tracking-tight text-signal">
                {c.metric}
              </p>
              <p className="mt-2 text-sm text-paper/60">{c.metricLabel}</p>

              <div className="mt-6">
                <Sparkline points={c.trend} width={260} height={54} stroke="#FF5C2B" />
              </div>

              <h3 className="mb-7 mt-7 text-lg font-semibold leading-snug text-paper">
                {c.headline}
              </h3>

              <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-hairline-dark pt-6">
                {c.support.map((s) => (
                  <div key={s.k}>
                    <dt className="eyebrow text-ash">{s.k}</dt>
                    <dd className="font-mono mt-1.5 text-sm text-paper">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                Read the case study
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

        <p className="mt-8 text-xs text-paper/45">
          Results shown are from named client engagements and are not a promise of
          comparable outcomes.
        </p>
      </div>
    </section>
  );
}
