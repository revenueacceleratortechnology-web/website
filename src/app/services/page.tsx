import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHead } from "@/components/sections/SectionHead";
import { CardGrid } from "@/components/sections/CardGrid";
import { GroupList } from "@/components/sections/GroupList";
import { Button } from "@/components/Button";
import {
  servicesHero,
  startingPoint,
  coreServices,
  designServices,
  recoveryServices,
  specialist,
  dtcServices,
  servicesCta,
  servicesFaqs,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Amazon agency services",
  description:
    "Amazon agency services for growth, control, and recovery — full-service management, PPC, SEO, design, troubleshooting, specialist capabilities, and DTC.",
};

export default function ServicesPage() {
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
          eyebrow={servicesHero.eyebrow}
          heading={servicesHero.heading}
          body={servicesHero.body}
          cta={servicesHero.cta}
        />

        {/* Routing: help people name the problem before picking a service */}
        <section className="band border-b border-hairline bg-mineral">
          <div className="shell">
            <SectionHead
              eyebrow="Where to begin"
              heading={startingPoint.heading}
              intro={startingPoint.intro}
            />
            <CardGrid items={startingPoint.items} numbered tone="mineral" />
          </div>
        </section>

        <section id="core" className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Core services"
              heading={coreServices.heading}
              intro={coreServices.intro}
            />
            <CardGrid items={coreServices.items} />
          </div>
        </section>

        <section id="design" className="band border-b border-hairline bg-paper">
          <div className="shell">
            <SectionHead
              eyebrow="Design"
              heading={designServices.heading}
              intro={designServices.intro}
            />
            <GroupList groups={designServices.groups} />
            <Button href={designServices.cta.href} className="mt-8" arrow>
              {designServices.cta.label}
            </Button>
          </div>
        </section>

        <section className="band border-b border-hairline bg-mineral">
          <div className="shell">
            <SectionHead
              eyebrow="Recovery"
              heading={recoveryServices.heading}
              intro={recoveryServices.intro}
            />
            <GroupList groups={recoveryServices.groups} />
            <p className="mt-6 text-sm text-ash">{recoveryServices.footnote}</p>
          </div>
        </section>

        <section className="band bg-ink">
          <div className="shell">
            <SectionHead
              eyebrow="Specialist"
              heading={specialist.heading}
              intro={specialist.intro}
              invert
            />
            <CardGrid items={specialist.items} tone="dark" />
          </div>
        </section>

        <section id="dtc" className="band border-b border-hairline bg-paper">
          <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="Beyond Amazon"
              heading={dtcServices.heading}
              intro={dtcServices.intro}
            />

            <div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
                {dtcServices.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#dtc"
                      className="flex items-center gap-2.5 bg-paper px-5 py-5 text-sm font-medium text-ink transition-colors hover:bg-mineral"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                      />
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-ash">
                {dtcServices.footnote}
              </p>
              <Button href={dtcServices.cta.href} variant="ghost" className="mt-6" arrow>
                {dtcServices.cta.label}
              </Button>
            </div>
          </div>
        </section>

        <Faq
          heading="Questions about these services"
          intro="Platform rules change, so these answers describe Amazon's requirements as they currently stand."
          items={servicesFaqs}
        />

        <CtaBand
          eyebrow={servicesCta.eyebrow}
          heading={servicesCta.heading}
          body={servicesCta.body}
          bullets={servicesCta.bullets}
        />
      </main>

      <Footer />
      <StickyContact />
    </>
  );
}
