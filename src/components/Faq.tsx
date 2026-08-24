"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="resources" className="band border-b border-hairline bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-signal">Questions</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            The things brands ask on the first call.
          </h2>
          <p className="mt-5 leading-relaxed text-ash">
            If yours is not here, ask it on the call — we answer pricing and
            staffing questions directly.
          </p>
        </div>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[1.0625rem] font-medium text-ink">
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ash"
                >
                  {f.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
