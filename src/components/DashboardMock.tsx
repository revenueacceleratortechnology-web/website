const BARS = [42, 55, 48, 68, 74, 92];
const MONTHS = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const ROWS = [
  { label: "Manage orders", badge: "8" },
  { label: "Manage returns" },
  { label: "Case log" },
];

/**
 * A phone showing a seller dashboard — original artwork standing in for the
 * product photography this composition would otherwise use.
 */
export function DashboardMock() {
  const max = Math.max(...BARS);

  return (
    <div className="relative mx-auto w-full max-w-[19rem]">
      {/* Warm bloom so the device sits on the page rather than on top of it */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-signal/12 blur-3xl"
      />

      <div className="relative rounded-[2.75rem] bg-ink p-2.5 shadow-[0_50px_90px_-30px_rgba(14,27,30,0.6)]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-paper">
          {/* Notch */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink"
          />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3">
            <span className="font-mono text-[0.625rem] font-semibold text-ink">
              9:41
            </span>
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
              <span className="h-2 w-4 rounded-[3px] border border-ink/30" />
            </span>
          </div>

          {/* App bar */}
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
            <span className="flex flex-col gap-[3px]" aria-hidden="true">
              <span className="h-[2px] w-4 rounded bg-ink" />
              <span className="h-[2px] w-4 rounded bg-ink" />
              <span className="h-[2px] w-4 rounded bg-ink" />
            </span>
            <span className="display text-sm text-ink">Seller</span>
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-2 border-ink/25"
            />
          </div>

          {/* Figure */}
          <div className="px-5 pt-4">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-[0.5rem] text-ash">Product sales</span>
              <span className="eyebrow text-[0.5rem] text-ash">This month</span>
            </div>

            <div className="mt-1.5 flex items-baseline justify-between gap-2">
              <p className="font-mono text-2xl font-semibold tracking-tight text-ink">
                $1.84<span className="text-ash">M</span>
              </p>
              <span className="flex items-center gap-1 font-mono text-base font-semibold text-signal">
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                  <path
                    d="M6 10V2M2.5 5.5L6 2l3.5 3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                64%
              </span>
            </div>

            {/* Bars */}
            <div className="mt-4 flex h-24 items-end gap-2">
              {BARS.map((v, i) => (
                <div
                  key={MONTHS[i]}
                  className={`flex-1 rounded-t-[3px] ${
                    i === BARS.length - 1 ? "bg-signal" : "bg-signal/45"
                  }`}
                  style={{ height: `${(v / max) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex gap-2">
              {MONTHS.map((m) => (
                <span
                  key={m}
                  className="flex-1 text-center font-mono text-[0.5rem] text-ash"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* List rows */}
          <ul className="mt-4 divide-y divide-hairline border-t border-hairline">
            {ROWS.map((r) => (
              <li
                key={r.label}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="flex items-center gap-2.5 text-xs text-ink/80">
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rounded-[3px] border border-ink/25"
                  />
                  {r.label}
                </span>
                <span className="flex items-center gap-2">
                  {r.badge && (
                    <span className="rounded-[4px] bg-signal px-1.5 py-0.5 font-mono text-[0.5625rem] font-semibold text-white">
                      {r.badge}
                    </span>
                  )}
                  <svg viewBox="0 0 6 10" className="h-2 w-1.5 text-ash" aria-hidden="true">
                    <path
                      d="M1 1l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </li>
            ))}
          </ul>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
