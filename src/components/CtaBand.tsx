import { Button } from "./Button";
import { site } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="audit" className="bg-signal">
      <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow text-white/70">Free account audit</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)] text-white">
            Book 30 minutes. Leave with three things to fix.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/85">
            We open your account with you, name the largest revenue leak, and put
            it in writing. You keep the findings whether or not you hire us.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button href="#contact" variant="ink" className="w-full">
            Book the audit call
          </Button>
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="w-full rounded-full border border-white/40 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-signal"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
