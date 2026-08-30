const BARS = [34, 41, 38, 52, 61, 58, 76, 92];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

/**
 * An original seller-dashboard mockup. It carries the hero visually where the
 * reference uses photography — same job, drawn rather than shot.
 */
export function DashboardMock() {
  const max = Math.max(...BARS);

  return (
    <div className="relative">
      {/* Warm bloom so the dark frame sits on the page rather than on top of it */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-signal/12 blur-2xl"
      />

      <div className="relative rounded-[1.75rem] border border-hairline-dark bg-ink p-5 shadow-[0_40px_80px_-32px_rgba(14,27,30,0.55)] md:p-6">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-hairline-dark pb-4">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-paper/20" />
            <span className="h-2 w-2 rounded-full bg-paper/20" />
            <span className="h-2 w-2 rounded-full bg-signal/70" />
          </span>
          <p className="eyebrow ml-2 text-paper/40">Seller central · rolling 8 months</p>
        </div>

        {/* Headline figure */}
        <div className="flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="eyebrow text-paper/40">Gross marketplace revenue</p>
            <p className="font-mono mt-2 text-4xl font-semibold tracking-tight text-paper md:text-[2.75rem]">
              $1.84<span className="text-paper/50">M</span>
            </p>
          </div>
          <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-signal/15 px-3 py-1.5 font-mono text-sm font-semibold text-signal">
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
              <path
                d="M6 10V2M2.5 5.5L6 2l3.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            64%
          </span>
        </div>

        {/* Bars */}
        <div className="mt-7">
          <div className="flex h-36 items-end gap-2 md:h-40 md:gap-2.5">
            {BARS.map((v, i) => (
              <div
                key={MONTHS[i]}
                className={`flex-1 rounded-t-md ${
                  i === BARS.length - 1 ? "bg-signal" : "bg-paper/15"
                }`}
                style={{ height: `${(v / max) * 100}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-2 md:gap-2.5">
            {MONTHS.map((m) => (
              <span
                key={m}
                className="flex-1 text-center font-mono text-[0.5625rem] text-paper/35"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Supporting rows */}
        <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-hairline-dark pt-5">
          {[
            { k: "TACoS", v: "14.2%" },
            { k: "Buy Box", v: "97%" },
            { k: "Sessions", v: "412K" },
            { k: "Rank", v: "#6" },
          ].map((s) => (
            <div key={s.k}>
              <dt className="eyebrow text-paper/40">{s.k}</dt>
              <dd className="font-mono mt-1.5 text-base font-semibold text-paper">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

    </div>
  );
}
