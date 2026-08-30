import { Button } from "../Button";

export function PageHero({
  eyebrow,
  heading,
  body,
  cta,
}: {
  eyebrow: string;
  heading: string;
  body: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "clamp(60px, 8vw, 110px) 100%",
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 65%, transparent)",
        }}
      />

      <div className="shell relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow rise text-signal">{eyebrow}</p>
          <h1 className="display rise mt-5 text-[length:var(--text-mega)]">
            {heading}
          </h1>
        </div>

        <div className="rise lg:pt-4" style={{ animationDelay: "0.15s" }}>
          {body.map((p, i) => (
            <p
              key={p}
              className={`leading-relaxed text-ash ${i === 0 ? "text-lg" : "mt-4"}`}
            >
              {p}
            </p>
          ))}
          {cta && (
            <Button href={cta.href} className="mt-7" arrow>
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
