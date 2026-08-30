import Link from "next/link";
import { testimonials, testimonialIntro } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="band border-b border-hairline bg-paper">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">In their words</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            {testimonialIntro.heading}
          </h2>
          <p className="mt-5 leading-relaxed text-ash">{testimonialIntro.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.focus}
              className="flex flex-col rounded-2xl border border-hairline bg-mineral/50 p-7 transition-colors duration-300 hover:border-ink/20"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 19" className="h-3.5 w-3.5 text-signal">
                    <path
                      fill="currentColor"
                      d="M10 0l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L10 14.3 4.2 17.8l1.6-6.6L.6 6.8l6.8-.5z"
                    />
                  </svg>
                ))}
              </span>

              <blockquote className="mb-8 mt-5 text-[1.0625rem] leading-relaxed text-ink">
                {t.quote}
              </blockquote>

              <figcaption className="mt-auto border-t border-hairline pt-5">
                <span className="eyebrow text-ash">Focus</span>
                <span className="mt-1.5 block text-sm font-medium text-ink">
                  {t.focus}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Link
          href={testimonialIntro.link.href}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-colors hover:text-ink"
        >
          {testimonialIntro.link.label}
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
      </div>
    </section>
  );
}
