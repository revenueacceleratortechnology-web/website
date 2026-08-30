export function SplitTable({
  rows,
}: {
  rows: { ours: string; yours: string }[];
}) {
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-hairline">
      <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
        <div className="bg-ink px-6 py-4">
          <p className="eyebrow text-signal">RA Tech manages</p>
        </div>
        <div className="bg-ink px-6 py-4">
          <p className="eyebrow text-paper/60">Your team controls</p>
        </div>

        {rows.map((r) => (
          <div key={r.ours} className="contents">
            <div className="flex gap-3 bg-paper px-6 py-5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
              />
              <p className="text-sm leading-relaxed text-ink">{r.ours}</p>
            </div>
            <div className="flex gap-3 bg-mineral/60 px-6 py-5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ash"
              />
              <p className="text-sm leading-relaxed text-ash">{r.yours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
