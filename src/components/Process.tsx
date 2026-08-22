import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="dtc" className="band border-b border-hairline bg-mineral">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">How an engagement runs</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            Diagnose first. Spend later.
          </h2>
        </div>

        {/* Timed sequence — the step labels carry real duration, so they are dates, not decoration */}
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {process.map((s) => (
            <li key={s.title} className="bg-mineral p-8">
              <p className="font-mono text-xs text-signal">{s.step}</p>
              <h3 className="display mt-4 text-[length:var(--text-h3)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
