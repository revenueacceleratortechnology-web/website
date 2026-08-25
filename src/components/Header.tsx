"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { nav, utilityNav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      {/* Utility row — collapses away once you start reading */}
      <div
        className={`hidden overflow-hidden border-b border-hairline transition-[height,opacity] duration-300 lg:block ${
          stuck ? "h-0 opacity-0" : "h-11 opacity-100"
        }`}
      >
        <div className="shell flex h-11 items-center justify-end gap-6">
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="font-mono text-xs text-ash transition-colors hover:text-ink"
          >
            {site.phone}
          </a>
          <span className="h-3.5 w-px bg-hairline" aria-hidden="true" />
          {utilityNav.map((u) => (
            <Link
              key={u.label}
              href={u.href}
              className="text-xs text-ash transition-colors hover:text-ink"
            >
              {u.label}
            </Link>
          ))}
          <Button href="#audit" className="px-4 py-1.5 text-xs">
            Fast quote
          </Button>
        </div>
      </div>

      {/* Main row */}
      <div
        className={`border-b transition-colors duration-300 ${
          stuck ? "border-hairline bg-paper/90 backdrop-blur-md" : "border-hairline bg-paper"
        }`}
      >
        <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            onMouseLeave={() => setPanel(null)}
          >
            {nav.map((item) => (
              <div key={item.label} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.875rem] font-medium text-ink/80 transition-colors hover:text-ink"
                  onMouseEnter={() => setPanel(item.columns ? item.label : null)}
                  onFocus={() => setPanel(item.columns ? item.label : null)}
                >
                  {item.label}
                  {item.columns && (
                    <svg
                      viewBox="0 0 10 6"
                      className={`h-[5px] w-[9px] transition-transform duration-200 ${
                        panel === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>

                {item.columns && panel === item.label && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                    <div className="rise flex gap-8 rounded-2xl border border-hairline bg-paper p-6 shadow-[0_24px_60px_-24px_rgba(14,27,30,0.35)]">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="min-w-[13rem]">
                          <p className="eyebrow mb-3 text-ash">{col.heading}</p>
                          <ul className="space-y-1">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="block rounded-lg px-2 py-1.5 text-sm text-ink/75 transition-colors hover:bg-mineral hover:text-ink"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* The conversion path stays visible as the last nav item */}
            <Link
              href="#audit"
              className="ml-1 rounded-full px-3 py-2 text-[0.875rem] font-semibold text-signal transition-colors hover:text-ink"
            >
              Free audit
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto border-t border-hairline bg-paper px-5 pb-10 pt-4 lg:hidden"
        >
          <ul className="divide-y divide-hairline">
            {nav.map((item) => (
              <li key={item.label} className="py-4">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block text-2xl"
                >
                  {item.label}
                </Link>
                {item.columns && (
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    {item.columns.flatMap((c) => c.links).map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-ash"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6">
            {utilityNav.map((u) => (
              <Link
                key={u.label}
                href={u.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ash"
              >
                {u.label}
              </Link>
            ))}
          </div>

          <Button href="#audit" className="mt-8 w-full">
            Get a free account audit
          </Button>
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="mt-3 block text-center font-mono text-sm text-ash"
          >
            {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
