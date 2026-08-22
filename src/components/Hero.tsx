import { Button } from "./Button";
import { Sparkline } from "./Sparkline";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      {/* Ruled ground: a faint measurement grid, the only ornament on this band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "clamp(60px, 8vw, 110px) 100%",
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 60%, transparent)",
        }}
      />

      <div className="shell relative grid gap-14 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow rise text-signal">{hero.eyebrow}</p>

          <h1 className="display mt-6 text-[length:var(--text-mega)]">
            {hero.headline.map((line, i) => (
              <span
                key={line}
                className="rise block"
                style={{ animationDelay: `${0.08 + i * 0.09}s` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-ash"
            style={{ animationDelay: "0.28s" }}
          >
            {hero.body}
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.36s" }}
          >
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="ghost">
              {hero.secondary.label}
            </Button>
          </div>

          <p
            className="rise mt-6 text-sm text-ash"
            style={{ animationDelay: "0.42s" }}
          >
            No ad-spend percentage. No annual lock-in. Audit is yours to keep.
          </p>
        </div>

        {/* Signature: the live-account readout. Three metrics, three drawn trend lines. */}
        <div
          className="rise rounded-2xl border border-hairline bg-mineral/60 p-6 md:p-7"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-baseline justify-between border-b border-hairline pb-4">
            <p className="eyebrow text-ash">Median client, first 6 months</p>
            <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          </div>

          <dl className="divide-y divide-hairline">
            {hero.ticker.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] items-center gap-4 py-5"
              >
                <div>
                  <dt className="text-sm text-ash">{row.label}</dt>
                  <dd className="font-mono mt-1 text-2xl font-semibold tracking-tight text-ink">
                    {row.value}
                  </dd>
                </div>
                <div className="w-[110px]" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                  <Sparkline points={row.trend} height={38} />
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-2 text-xs leading-relaxed text-ash">
            Figures are medians across active retainers, not best cases.
          </p>
        </div>
      </div>
    </section>
  );
}
