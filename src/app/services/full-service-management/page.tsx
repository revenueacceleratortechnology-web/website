import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHead } from "@/components/sections/SectionHead";
import { CardGrid } from "@/components/sections/CardGrid";
import { SplitTable } from "@/components/sections/SplitTable";
import {
  fsHero,
  fsInside,
  fsCoverage,
  fsWhen,
  fsProcess,
  fsWhy,
  fsControl,
  fsCta,
  fsFaqs,
} from "@/lib/fullService";

export const metadata: Metadata = {
  title: "Full-service Amazon account management",
  description:
    "Recurring Amazon work across advertising, search, catalog, inventory, and account health, coordinated under one account plan with clear ownership.",
};

export default function FullServicePage() {
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
          eyebrow={fsHero.eyebrow}
          heading={fsHero.heading}
          body={fsHero.body}
          cta={fsHero.cta}
        />

        {/* How Seller Central's own signals drive the work */}
        <section className="border-b border-hairline bg-mineral">
          <div className="shell grid gap-8 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 className="display text-[length:var(--text-h3)]">
              {fsInside.heading}
            </h2>
            <p className="text-lg leading-relaxed text-ash">{fsInside.body}</p>
          </div>
        </section>

        <section className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Scope"
              heading={fsCoverage.heading}
              intro={fsCoverage.intro}
            />
            <CardGrid items={fsCoverage.items} />
          </div>
        </section>

        <section className="band border-b border-hairline bg-mineral">
          <div className="shell">
            <SectionHead
              eyebrow="When it fits"
              heading={fsWhen.heading}
              intro={fsWhen.intro}
            />
            <CardGrid items={fsWhen.items} columns={2} tone="mineral" />
          </div>
        </section>

        <section className="band bg-ink">
          <div className="shell">
            <SectionHead
              eyebrow="Operating cycle"
              heading={fsProcess.heading}
              intro={fsProcess.intro}
              invert
            />
            <CardGrid items={fsProcess.items} numbered tone="dark" />
            <p className="mt-8 text-sm text-paper/50">{fsProcess.footnote}</p>
          </div>
        </section>

        <section className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Why RA Tech"
              heading={fsWhy.heading}
              intro={fsWhy.intro}
            />
            <CardGrid items={fsWhy.items} />
          </div>
        </section>

        <section className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Ownership"
              heading={fsControl.heading}
              intro={fsControl.intro}
            />
            <SplitTable rows={fsControl.rows} />
          </div>
        </section>

        <Faq
          heading="Questions about full-service management"
          intro="If your situation is not covered here, bring it to the scoping conversation."
          items={fsFaqs}
        />

        <CtaBand
          eyebrow={fsCta.eyebrow}
          heading={fsCta.heading}
          body={fsCta.body}
          bullets={fsCta.bullets}
        />
      </main>

      <Footer />
      <StickyContact />
    </>
  );
}
