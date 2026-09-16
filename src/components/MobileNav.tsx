"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Button } from "./Button";
import { nav, utilityNav, site } from "@/lib/content";
import type { NavColumn } from "@/lib/content";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** One accordion row: the label navigates, the chevron expands. */
function Row({
  label,
  href,
  open,
  onToggle,
  size = "lg",
  children,
}: {
  label: string;
  href: string;
  open: boolean;
  onToggle: () => void;
  size?: "lg" | "md";
  children?: ReactNode;
}) {
  return (
    <li className="border-b border-hairline">
      <div className="flex items-center gap-2">
        <Link
          href={href}
          className={`flex-1 py-3.5 ${size === "lg" ? "display text-xl" : "text-[0.9375rem] font-semibold"}`}
        >
          {label}
        </Link>
        {children && (
          <button
            type="button"
            aria-expanded={open}
            aria-label={`${open ? "Collapse" : "Expand"} ${label}`}
            onClick={onToggle}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
              open ? "bg-ink text-paper" : "bg-mineral text-ink"
            }`}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>
      {children && (
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          inert={!open}
        >
          <div className="overflow-hidden">
            <div className="pb-4">{children}</div>
          </div>
        </div>
      )}
    </li>
  );
}

function Column({ col }: { col: NavColumn }) {
  if (col.card) {
    return (
      <Link href={col.card.href} className="mt-2 block rounded-lg bg-mineral px-4 py-3 text-sm font-semibold text-ink">
        {col.card.title} ↗
      </Link>
    );
  }
  return (
    <div className="mb-3 last:mb-0">
      {col.lead && (
        <Link href={col.lead.href} className="eyebrow block py-1.5 text-signal">
          {col.lead.label}
        </Link>
      )}
      {col.heading && <p className="eyebrow py-1.5 text-ash">{col.heading}</p>}
      <ul>
        {col.links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="block py-2 text-[0.9375rem] text-ink/80">
              {l.label}
              {l.badge && (
                <sup className="ml-1 font-mono text-[0.5625rem] font-semibold uppercase tracking-wide text-signal">{l.badge}</sup>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {col.tail && (
        <Link href={col.tail.href} className="block py-2 text-[0.9375rem] font-semibold text-signal">
          {col.tail.label} →
        </Link>
      )}
    </div>
  );
}

export function MobileNav({ open }: { open: boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (key: string) => setExpanded((k) => (k === key ? null : key));

  return (
    <div
      id="mobile-nav"
      inert={!open}
      className={`fixed inset-x-0 top-[3.75rem] bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-hairline bg-paper px-5 pb-16 transition-[opacity,translate] duration-300 lg:hidden ${
        open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <ul>
        {nav.map((item) => (
          <Row
            key={item.label}
            label={item.label}
            href={item.href}
            open={expanded === item.label}
            onToggle={() => toggle(item.label)}
          >
            {item.columns && item.columns.map((col, i) => <Column key={col.lead?.label ?? col.card?.title ?? i} col={col} />)}
          </Row>
        ))}
      </ul>

      <ul className="mt-5">
        {utilityNav.map((u) => (
          <Row key={u.label} label={u.label} href={u.href} size="md" open={expanded === u.label} onToggle={() => toggle(u.label)}>
            {u.links && (
              <ul>
                {u.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="block py-2 text-[0.9375rem] text-ink/80">
                      {l.label}
                    </Link>
                    {l.links && (
                      <ul className="border-l border-hairline pl-4">
                        {l.links.map((c) => (
                          <li key={c.label}>
                            <Link href={c.href} className="block py-1.5 text-sm text-ash">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Row>
        ))}
      </ul>

      <Button href="/contact" className="mt-8 w-full">
        Fast quote
      </Button>
      <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="mt-4 block text-center font-mono text-sm text-ash">
        {site.phone}
      </a>
    </div>
  );
}
