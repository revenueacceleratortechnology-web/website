import Link from "next/link";
import { Button } from "./Button";
import { GrowthIllustration } from "./GrowthIllustration";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <div className="shell relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-16">
        <div>
          <p className="eyebrow rise text-signal">{hero.eyebrow}</p>

          <h1 className="display mt-5 text-[length:var(--text-mega)]">
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
            className="rise mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ash"
            style={{ animationDelay: "0.28s" }}
          >
            {hero.body}
          </p>

          <div
            className="rise mt-7 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.36s" }}
          >
            <Button href={hero.primary.href} arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="ink" arrow>
              {hero.secondary.label}
            </Button>
          </div>

          <p
            className="rise mt-5 text-sm text-ash"
            style={{ animationDelay: "0.42s" }}
          >
            {hero.tertiary.lead}{" "}
            <Link
              href={hero.tertiary.href}
              className="font-medium text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal"
            >
              {hero.tertiary.label}
            </Link>
            .
          </p>
        </div>

        <div
          className="rise"
          style={{ animationDelay: "0.5s" }}
        >
          <GrowthIllustration />
        </div>
      </div>
    </section>
  );
}
