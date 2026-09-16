import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "signal" | "ink" | "ghost" | "ghost-dark";

const styles: Record<Variant, string> = {
  signal: "bg-signal text-white hover:bg-[#e64a1c]",
  ink: "bg-ink text-paper hover:bg-slate",
  ghost: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "ghost-dark":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "signal",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-[color,background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(14,27,30,0.5)] active:translate-y-0 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <svg
          viewBox="0 0 14 10"
          className="h-2.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
