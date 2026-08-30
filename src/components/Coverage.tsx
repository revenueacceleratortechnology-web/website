import { marketplaces, press } from "@/lib/content";

export function Coverage() {
  return (
    <section id="categories" className="band border-b border-hairline bg-paper">
      <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-signal">Where we operate</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            Eleven marketplaces, one catalog of record.
          </h2>
          <p className="mt-5 leading-relaxed text-ash">
            Listings are localized by native speakers and kept in sync with a
            single source catalog, so a change in one region does not quietly
            break another.
          </p>

          <div className="mt-10">
            <p className="eyebrow mb-4 text-ash">Coverage in the press</p>
            <ul className="flex flex-wrap gap-2">
              {press.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-hairline bg-mineral/50 px-3 py-1.5 text-xs font-medium text-ink/60"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {marketplaces.map((m) => (
            <li
              key={m}
              className="flex items-center gap-2.5 bg-paper px-5 py-5 text-sm font-medium text-ink"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
              />
              {m}
            </li>
          ))}
          <li className="flex items-center gap-2.5 bg-paper px-5 py-5 text-sm font-medium text-ash">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-hairline" />
            More on request
          </li>
        </ul>
      </div>
    </section>
  );
}
