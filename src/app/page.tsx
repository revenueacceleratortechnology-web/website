import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoStrip } from "@/components/PromoStrip";
import { LogoRail } from "@/components/LogoRail";
import { Pillars } from "@/components/Pillars";
import { CaseStudies } from "@/components/CaseStudies";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Coverage } from "@/components/Coverage";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";

export default function Home() {
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
        <Hero />
        <PromoStrip />
        <LogoRail />
        <Pillars />
        <CaseStudies />
        <Stats />
        <Testimonials />
        <Coverage />
        <Process />
        <Faq />
        <CtaBand />
      </main>

      <Footer />
      <StickyContact />
    </>
  );
}
