import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="band border-b border-hairline bg-paper">
      <div className="shell">
        <p className="eyebrow text-signal">In their words</p>
        <h2 className="display mt-4 max-w-2xl text-[length:var(--text-h2)]">
          What changes after the first quarter.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-hairline bg-mineral/50 p-7 transition-colors duration-300 hover:border-ink/20"
            >
              <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 19"
                    className="h-3.5 w-3.5 text-signal"
                    aria-hidden="true"
                  >
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
              <figcaption className="mt-auto flex items-center gap-3 border-t border-hairline pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-ash">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
