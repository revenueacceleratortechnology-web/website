import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "signal" | "ink" | "ghost" | "ghost-dark";

const styles: Record<Variant, string> = {
  signal:
    "bg-signal text-white hover:bg-[#e64a1c] focus-visible:outline-ink",
  ink: "bg-ink text-paper hover:bg-slate",
  ghost:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "ghost-dark":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "signal",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
