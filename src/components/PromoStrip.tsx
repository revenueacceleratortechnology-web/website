"use client";

import Link from "next/link";
import { useState } from "react";
import { promo } from "@/lib/content";

export function PromoStrip() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;

  return (
    <aside className="border-b border-hairline bg-ink">
      <div className="shell flex flex-wrap items-center gap-x-7 gap-y-5 py-6">
        {/* Drawn badge — stands in for the banner artwork */}
        <div
          aria-hidden="true"
          className="relative hidden h-[4.5rem] w-28 shrink-0 overflow-hidden rounded-xl sm:block"
          style={{ background: "linear-gradient(135deg, #21424A 0%, #0E1B1E 120%)" }}
        >
          <svg viewBox="0 0 112 72" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <g fill="#FF5C2B">
              <rect x="22" y="40" width="10" height="18" rx="2" opacity="0.5" />
              <rect x="38" y="31" width="10" height="27" rx="2" opacity="0.7" />
              <rect x="54" y="22" width="10" height="36" rx="2" />
              <rect x="70" y="34" width="10" height="24" rx="2" opacity="0.6" />
            </g>
            <path
              d="M18 20h76"
              stroke="#E9EDE9"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.15"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <p className="eyebrow text-signal">{promo.kicker}</p>
          <p className="display mt-1.5 text-xl text-paper md:text-2xl">
            {promo.headline}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper/60">
            {promo.body}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={promo.cta.href}
            className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e64a1c]"
          >
            {promo.cta.label}
          </Link>

          <button
            type="button"
            onClick={() => setShown(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-paper/40 transition-colors hover:bg-white/10 hover:text-paper"
          >
            <span className="sr-only">Dismiss this offer</span>
            <svg viewBox="0 0 14 14" className="h-3 w-3" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
