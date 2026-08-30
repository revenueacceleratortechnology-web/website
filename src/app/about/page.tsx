import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHead } from "@/components/sections/SectionHead";
import { CardGrid } from "@/components/sections/CardGrid";
import { Timeline } from "@/components/sections/Timeline";
import {
  aboutHero,
  journey,
  built,
  problems,
  trial,
  relationship,
  aboutCta,
} from "@/lib/about";

export const metadata: Metadata = {
  title: "About RA Tech",
  description:
    "RA Tech began working in the Amazon ecosystem in 2023 and registered formally in 2026. An Amazon agency built around showing real work before asking for a retainer.",
};

export default function AboutPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1">
        <PageHero
          eyebrow={aboutHero.eyebrow}
          heading={aboutHero.heading}
          body={aboutHero.body}
          cta={aboutHero.cta}
        />

        <section id="journey" className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Company history"
              heading={journey.heading}
              intro={journey.intro}
            />
            <Timeline entries={journey.entries} />
          </div>
        </section>

        {/* The thesis behind the model */}
        <section className="band border-b border-hairline bg-ink">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display text-[length:var(--text-h2)] text-paper">
              {built.heading}
            </h2>
            <div>
              {built.body.map((p, i) => (
                <p
                  key={p}
                  className={`leading-relaxed text-paper/70 ${
                    i === 0 ? "text-lg text-paper/85" : "mt-5"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="What we look at"
              heading={problems.heading}
              intro={problems.intro}
            />
            <CardGrid items={problems.items} numbered />
          </div>
        </section>

        {/* Trial: prose plus the terms at a glance */}
        <section className="band border-b border-hairline bg-mineral">
          <div className="shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow text-signal">Seven-day trial</p>
              <h2 className="display mt-4 text-[length:var(--text-h2)]">
                {trial.heading}
              </h2>
              {trial.body.map((p, i) => (
                <p
                  key={p}
                  className={`leading-relaxed text-ash ${i === 0 ? "mt-5 text-lg" : "mt-4"}`}
                >
                  {p}
                </p>
              ))}
            </div>

            <dl className="self-start divide-y divide-hairline rounded-2xl border border-hairline bg-paper p-7">
              {trial.points.map((pt) => (
                <div key={pt.k} className="py-4 first:pt-0 last:pb-0">
                  <dt className="eyebrow text-ash">{pt.k}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">
                    {pt.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="band border-b border-hairline bg-paper">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display text-[length:var(--text-h2)]">
              {relationship.heading}
            </h2>
            <div>
              {relationship.body.map((p, i) => (
                <p
                  key={p}
                  className={`leading-relaxed text-ash ${i === 0 ? "text-lg" : "mt-5"}`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow={aboutCta.eyebrow}
          heading={aboutCta.heading}
          body={aboutCta.body}
          bullets={aboutCta.bullets}
        />
      </main>

      <Footer />
      <StickyContact />
    </>
  );
}
