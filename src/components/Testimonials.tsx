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
              className="flex flex-col rounded-2xl border border-hairline bg-mineral/50 p-7"
            >
              <span
                aria-hidden="true"
                className="display text-4xl leading-none text-signal"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 text-[1.0625rem] leading-relaxed text-ink">
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
