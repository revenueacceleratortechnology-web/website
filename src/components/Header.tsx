"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { nav, utilityNav, site } from "@/lib/content";
import type { NavColumn, NavCard } from "@/lib/content";

/** Circled chevron marking a primary destination inside a menu column. */
function Bullet() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#FF5C2B" />
      <path
        d="M6.5 4.5L10 8l-3.5 3.5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


const TONES: Record<NavCard["tone"], { from: string; to: string }> = {
  warm: { from: "#FFE3D6", to: "#FFB79B" },
  cool: { from: "#E7EFE8", to: "#BBD2C6" },
};

/** Drawn stand-ins for category photography — original artwork, no licence needed. */
function Motif({ kind }: { kind?: NavCard["motif"] }) {
  if (kind === "supplements") {
    const capsule = (x: number, y: number, r: number, o: number) => (
      <g key={`${x}-${y}`} transform={`rotate(${r} ${x} ${y})`} opacity={o}>
        <rect x={x - 11} y={y - 5} width="22" height="10" rx="5" fill="#FFFDF7" />
        <path d={`M${x} ${y - 5}v10`} stroke="#D9E2D2" strokeWidth="1.2" />
      </g>
    );
    const leaf = (x: number, y: number, r: number, sc: number) => (
      <path
        key={`l${x}-${y}`}
        transform={`translate(${x} ${y}) rotate(${r}) scale(${sc})`}
        d="M0 0c10-13 30-13 40 0-10 13-30 13-40 0z"
        fill="#4E7A5C"
        opacity="0.75"
      />
    );
    return (
      <svg
        viewBox="0 0 320 112"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="160" cy="56" r="37" fill="#B08A5E" opacity="0.85" />
        <circle cx="160" cy="56" r="29" fill="#EFF3E9" />
        {capsule(150, 48, -20, 1)}
        {capsule(170, 52, 25, 1)}
        {capsule(157, 66, 8, 1)}
        {capsule(62, 34, -35, 0.95)}
        {capsule(88, 84, 15, 0.95)}
        {capsule(252, 30, 40, 0.95)}
        {capsule(276, 74, -15, 0.95)}
        {leaf(24, 58, -25, 0.85)}
        {leaf(40, 86, 15, 0.7)}
        {leaf(214, 22, 160, 0.8)}
        {leaf(236, 96, 200, 0.65)}
      </svg>
    );
  }

  if (kind === "beauty") {
    return (
      <svg
        viewBox="0 0 320 112"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="232" cy="40" r="52" fill="#FFF3EC" opacity="0.9" />
        <circle cx="96" cy="82" r="34" fill="#FFD9CB" opacity="0.7" />
        <path
          d="M58 60c22-26 52-4 74-22s46 6 68-10"
          fill="none"
          stroke="#FFFDFB"
          strokeWidth="11"
          strokeLinecap="round"
          opacity="0.95"
        />
        <circle cx="270" cy="86" r="7" fill="#FFFDFB" opacity="0.9" />
        <circle cx="40" cy="26" r="5" fill="#FFFDFB" opacity="0.8" />
      </svg>
    );
  }

  if (kind === "growth") {
    const parcel = (x: number, y: number, sz: number, o: number) => (
      <g key={`p${x}-${y}`} opacity={o}>
        <rect x={x} y={y} width={sz} height={sz} rx="3" fill="#C4A279" />
        <path d={`M${x + sz / 2} ${y}v${sz}`} stroke="#A8875F" strokeWidth="2" />
        <path d={`M${x} ${y + sz / 3}h${sz}`} stroke="#A8875F" strokeWidth="2" />
      </g>
    );
    return (
      <svg
        viewBox="0 0 320 112"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {parcel(26, 54, 34, 0.9)}
        {parcel(64, 68, 26, 0.75)}
        {parcel(20, 22, 24, 0.6)}
        <rect x="196" y="34" width="96" height="58" rx="6" fill="#20404A" opacity="0.9" />
        <rect x="204" y="42" width="80" height="42" rx="3" fill="#EFF3E9" />
        <g fill="#FF5C2B">
          <rect x="212" y="66" width="10" height="12" rx="2" />
          <rect x="228" y="58" width="10" height="20" rx="2" />
          <rect x="244" y="50" width="10" height="28" rx="2" />
          <rect x="260" y="60" width="10" height="18" rx="2" />
        </g>
        <path
          d="M120 74c22 0 34-22 56-30"
          fill="none"
          stroke="#20404A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 9"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (kind === "email") {
    const env = (x: number, y: number, w: number, h: number, o: number) => (
      <g key={`e${x}-${y}`} opacity={o}>
        <rect x={x} y={y} width={w} height={h} rx="4" fill="#FFFDFB" />
        <path
          d={`M${x} ${y + 4}l${w / 2} ${h * 0.52} ${w / 2} -${h * 0.52}`}
          fill="none"
          stroke="#FFB79B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    );
    return (
      <svg
        viewBox="0 0 320 112"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="252" cy="30" r="46" fill="#FFF3EC" opacity="0.8" />
        {env(38, 20, 74, 48, 0.55)}
        {env(96, 40, 96, 60, 0.85)}
        {env(196, 26, 82, 52, 0.7)}
        <circle cx="186" cy="42" r="11" fill="#FF5C2B" />
        <text
          x="186"
          y="46"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
        >
          1
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 60"
      className="absolute -bottom-2 right-2 h-24 w-44 opacity-[0.18]"
      aria-hidden="true"
    >
      <g fill="none" stroke="#12303A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 52L60 30l28 22" opacity="0.45" />
        <path d="M32 38L60 16l28 22" opacity="0.8" />
      </g>
    </svg>
  );
}

function MenuCard({ card }: { card: NavCard }) {
  const t = TONES[card.tone];

  return (
    <Link href={card.href} className="group block">
      <div
        className="relative h-28 overflow-hidden rounded-xl"
        style={
          card.image
            ? undefined
            : { background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 140%)` }
        }
      >
        {card.image ? (
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Motif kind={card.motif} />
        )}
      </div>

      <p className="mt-3 text-[0.9375rem] font-bold text-ink transition-colors group-hover:text-signal">
        {card.title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-ash">{card.body}</p>
    </Link>
  );
}

function MenuColumn({ col }: { col: NavColumn }) {
  if (col.card) return <MenuCard card={col.card} />;

  return (
    <div className="min-w-0">
      {col.lead && (
        <Link
          href={col.lead.href}
          className="group mb-4 flex items-start gap-2.5 text-[0.9375rem] font-bold text-ink transition-colors hover:text-signal"
        >
          <Bullet />
          {col.lead.label}
        </Link>
      )}

      {col.heading && <p className="eyebrow mb-3 text-ash">{col.heading}</p>}

      <ul className="space-y-1">
        {col.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className={`flex items-start gap-2.5 rounded-lg py-1.5 transition-colors ${
                l.featured
                  ? "text-[0.9375rem] font-bold text-ink hover:text-signal"
                  : "px-2 text-sm text-ink/70 hover:bg-mineral hover:text-ink"
              }`}
            >
              {l.featured && <Bullet />}
              <span>
                {l.label}
                {l.badge && (
                  <sup className="ml-1 font-mono text-[0.5625rem] font-semibold uppercase tracking-wide text-signal">
                    {l.badge}
                  </sup>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {col.tail && (
        <>
          <span className="my-4 block border-t border-dashed border-hairline" />
          <Link
            href={col.tail.href}
            className="flex items-start gap-2.5 text-[0.9375rem] font-bold text-ink transition-colors hover:text-signal"
          >
            <Bullet />
            {col.tail.label}
          </Link>
        </>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const [util, setUtil] = useState<string | null>(null);

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

  const active = nav.find((i) => i.label === panel);
  const wide = (active?.columns?.length ?? 0) >= 3;

  return (
    <header
      className="sticky top-0 z-50 bg-paper"
      onMouseLeave={() => {
        setPanel(null);
        setUtil(null);
      }}
    >
      {/* Row one — identity and the utility links */}
      <div
        className={`border-b border-hairline transition-colors duration-300 ${
          stuck ? "bg-paper/90 backdrop-blur-md" : "bg-paper"
        }`}
      >
        <div className="shell flex h-[3.75rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="font-mono text-xs text-ash transition-colors hover:text-ink"
            >
              {site.phone}
            </a>
            <span className="h-3.5 w-px bg-hairline" aria-hidden="true" />
            {utilityNav.map((u) => (
              <div
                key={u.label}
                className="relative"
                onMouseEnter={() => setUtil(u.links ? u.label : null)}
              >
                <Link
                  href={u.href}
                  className={`flex items-center gap-1.5 py-3 text-[0.8125rem] transition-colors ${
                    util === u.label ? "text-ink" : "text-ash hover:text-ink"
                  }`}
                  onFocus={() => setUtil(u.links ? u.label : null)}
                >
                  {u.label}
                  {u.links && (
                    <svg
                      viewBox="0 0 10 6"
                      className={`h-[5px] w-[9px] transition-transform duration-200 ${
                        util === u.label ? "rotate-180" : ""
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

                {u.links && util === u.label && (
                  <div className="rise absolute left-0 top-full z-50 min-w-[14rem]">
                    <ul className="divide-y divide-hairline rounded-b-xl border border-hairline bg-paper shadow-[0_24px_60px_-24px_rgba(14,27,30,0.35)]">
                      {u.links.map((l) => (
                        <li key={l.label} className="group/sub relative">
                          <Link
                            href={l.href}
                            className="flex items-center justify-between gap-4 px-5 py-3 text-sm text-ink/80 transition-colors hover:bg-mineral hover:text-ink"
                          >
                            {l.label}
                            {l.links && (
                              <svg
                                viewBox="0 0 6 10"
                                className="h-2.5 w-1.5 shrink-0 text-ash"
                                aria-hidden="true"
                              >
                                <path
                                  d="M1 1l4 4-4 4"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </Link>

                          {l.links && (
                            <ul className="invisible absolute left-full top-0 min-w-[13rem] divide-y divide-hairline rounded-r-xl rounded-bl-xl border border-hairline bg-paper opacity-0 shadow-[0_24px_60px_-24px_rgba(14,27,30,0.35)] transition-opacity duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                              {l.links.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    className="block px-5 py-3 text-sm text-ink/80 transition-colors hover:bg-mineral hover:text-ink"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <Button href="#audit" className="px-5 py-2 text-xs">
              Fast quote
            </Button>
          </div>

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
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Row two — the primary nav, aligned to the container edge */}
      <div
        className={`hidden border-b border-hairline transition-colors duration-300 lg:block ${
          stuck ? "bg-paper/90 backdrop-blur-md" : "bg-paper"
        }`}
      >
        <nav className="shell flex h-[3.25rem] items-center gap-1">
          {nav.map((item) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] font-semibold transition-colors ${
                  panel === item.label ? "text-signal" : "text-ink hover:text-signal"
                }`}
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

              {/* Compact panel for the shallower menus */}
              {item.columns && panel === item.label && !wide && (
                <div className="absolute left-0 top-full z-50">
                  <div className="rise flex gap-8 rounded-b-xl border border-t-2 border-hairline border-t-signal bg-paper p-6 shadow-[0_24px_60px_-24px_rgba(14,27,30,0.35)]">
                    {item.columns.map((col, i) => (
                      <div key={col.heading ?? i} className="min-w-[11rem]">
                        <MenuColumn col={col} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="#audit"
            className="rounded-full px-3.5 py-2 text-[0.9375rem] font-semibold text-signal transition-colors hover:text-ink"
          >
            Free Audit
          </Link>
        </nav>
      </div>

      {/* Full-width panel for the deep menus */}
      {active?.columns && wide && (
        <div className="rise absolute inset-x-0 top-full z-50 hidden border-t-2 border-signal bg-paper shadow-[0_28px_60px_-28px_rgba(14,27,30,0.4)] lg:block">
          <div
            className="shell grid gap-10 py-9"
            style={{
              gridTemplateColumns: active.columns.some((c) => c.card)
                ? "0.85fr 1fr 1fr"
                : `repeat(${active.columns.length}, minmax(0, 1fr))`,
            }}
          >
            {active.columns.map((col, i) => (
              <MenuColumn key={col.lead?.label ?? i} col={col} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[3.75rem] bottom-0 z-40 overflow-y-auto border-t border-hairline bg-paper px-5 pb-10 pt-4 lg:hidden"
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
                  <div className="mt-3 space-y-3">
                    {item.columns.map((col, i) => (
                      <div key={col.lead?.label ?? col.heading ?? i}>
                        {(col.lead || col.heading) && (
                          <p className="eyebrow mb-1.5 text-signal">
                            {col.lead?.label ?? col.heading}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                          {col.links.map((l) => (
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
                      </div>
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
