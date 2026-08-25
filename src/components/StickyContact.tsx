"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/**
 * Two persistent conversion paths, both appearing only once the hero is behind you:
 * a compact desktop button, and a full-width action bar on mobile.
 */
export function StickyContact() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Link
        href="#audit"
        className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-paper shadow-[0_16px_40px_-12px_rgba(14,27,30,0.5)] transition-all duration-300 hover:bg-slate lg:inline-flex ${
          past ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-signal"
        />
        Talk to a strategist
      </Link>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-hairline bg-paper/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          past ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          className="flex-1 rounded-full border border-ink/20 py-3 text-center text-sm font-semibold text-ink"
        >
          Call
        </a>
        <Link
          href="#audit"
          className="flex-[2] rounded-full bg-signal py-3 text-center text-sm font-semibold text-white"
        >
          Get a free audit
        </Link>
      </div>
    </>
  );
}
