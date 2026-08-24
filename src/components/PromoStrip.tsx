"use client";

import Link from "next/link";
import { useState } from "react";
import { promo } from "@/lib/content";

export function PromoStrip() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;

  return (
    <aside className="border-b border-hairline bg-slate">
      <div className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-4">
        <p className="flex-1 text-sm text-paper">
          <span className="font-semibold">{promo.headline}</span>{" "}
          <span className="text-paper/60">{promo.body}</span>
        </p>

        <Link
          href={promo.cta.href}
          className="rounded-full bg-signal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e64a1c]"
        >
          {promo.cta.label}
        </Link>

        <button
          type="button"
          onClick={() => setShown(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-paper/50 transition-colors hover:bg-white/10 hover:text-paper"
        >
          <span className="sr-only">Dismiss this offer</span>
          <svg viewBox="0 0 14 14" className="h-3 w-3" aria-hidden="true">
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
