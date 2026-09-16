"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Elements that fade/slide in as they scroll into view. Hero content keeps its own `.rise` load animation.
const REVEAL = "main section .shell > *, main section .shell .grid > *, main section .shell article";

export function Motion() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  // Route change: land at the top (hash links keep their target), animate the new page in, arm scroll reveals.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    const main = document.getElementById("main");
    if (main && !reduce) {
      main.classList.remove("page-enter");
      void main.offsetWidth; // restart the animation when only the route changed
      main.classList.add("page-enter");
    }
    if (reduce) return;

    const targets = [...new Set(document.querySelectorAll<HTMLElement>(REVEAL))].filter(
      (el) =>
        !el.classList.contains("grid") &&
        !el.classList.contains("rise") &&
        !el.closest(".rise") &&
        !el.querySelector(":scope > .rise"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue; // already on screen — no flash
      el.classList.add("reveal");
      const parent = el.parentElement;
      if (parent?.classList.contains("grid")) {
        el.style.setProperty("--i", String(Array.from(parent.children).indexOf(el) % 12));
      }
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-[0_14px_30px_-12px_rgba(14,27,30,0.6)] transition-all duration-300 hover:bg-signal lg:bottom-6 lg:left-6 lg:right-auto ${
        showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="M7 12V2M2.5 6.5L7 2l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
