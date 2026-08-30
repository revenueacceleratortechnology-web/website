import { process, processIntro } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="band border-b border-hairline bg-paper">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">How an engagement runs</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            {processIntro.heading}
          </h2>
          <p className="mt-5 leading-relaxed text-ash">{processIntro.intro}</p>
        </div>

        {/* Timed sequence — the step labels carry real duration, so they are dates, not decoration */}
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <li key={s.title} className="bg-paper p-7">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs text-signal">{s.step}</p>
                <span
                  aria-hidden="true"
                  className="display text-4xl leading-none text-ink/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="display mt-4 text-[length:var(--text-h3)]">
                {s.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-10 bg-signal"
              />
              <p className="mt-4 text-sm leading-relaxed text-ash">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
