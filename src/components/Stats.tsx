import { stats, trust } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-b border-hairline bg-mineral pt-14">
      <div className="shell">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-mineral px-6 py-12 text-center">
              <p className="display text-[length:var(--text-h1)] text-ink">
                {s.value}
              </p>
              <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-ash">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="shell mt-12 flex flex-wrap justify-center gap-x-14 gap-y-6 border-t border-hairline py-8">
        {trust.map((t) => (
          <div key={t.label} className="flex items-center gap-4">
            <p className="font-mono text-3xl font-semibold text-ink">
              {t.score}
              <span className="text-lg text-ash">{t.of === "%" ? "%" : `/${t.of}`}</span>
            </p>
            <div>
              <p className="text-sm font-semibold text-ink">{t.label}</p>
              <p className="eyebrow text-ash">{t.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
