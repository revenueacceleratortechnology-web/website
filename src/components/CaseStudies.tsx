import Link from "next/link";
import { Sparkline } from "./Sparkline";
import { Button } from "./Button";
import { caseStudies, results } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="results" className="band bg-ink text-paper">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-signal">Selected results</p>
            <h2 className="display mt-4 text-[length:var(--text-h2)] text-paper">
              {results.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-paper/60">{results.intro}</p>
          </div>
          <Button href="#results" variant="ghost-dark" arrow>
            All case studies
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((c) => (
            <Link
              key={c.metricLabel}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-hairline-dark bg-slate p-8 transition-colors duration-300 hover:border-signal/60"
            >
              <p className="eyebrow text-ash">{c.category}</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-mono text-5xl font-semibold tracking-tight text-signal">
                  {c.metric}
                </p>
                <p className="text-lg text-paper/70">{c.metricLabel}</p>
              </div>

              <div className="mt-7">
                <Sparkline points={c.trend} width={420} height={60} />
              </div>

              <p className="mt-7 leading-relaxed text-paper/80">{c.headline}</p>

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
      </div>
    </section>
  );
}
