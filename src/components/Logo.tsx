type Props = {
  /** Render for a dark background */
  invert?: boolean;
  /** Hide the wordmark, show the mark only */
  markOnly?: boolean;
  className?: string;
};

/**
 * Mark: three bars whose gaps widen as they rise — acceleration, not linear growth.
 * The leading bar carries the signal color; the trailing bars recede.
 */
export function Logo({ invert = false, markOnly = false, className = "" }: Props) {
  const base = invert ? "#E9EDE9" : "#0E1B1E";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="48" height="48" rx="12" fill={invert ? "#162C31" : "#0E1B1E"} />
        <rect x="10" y="26" width="6" height="11" rx="3" fill={base} opacity="0.4" />
        <rect x="20" y="19" width="6" height="18" rx="3" fill={base} opacity="0.7" />
        <rect x="32" y="10" width="6" height="27" rx="3" fill="#FF5C2B" />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`display text-[0.98rem] tracking-[-0.02em] ${
              invert ? "text-paper" : "text-ink"
            }`}
          >
            Revenue Accelerator
          </span>
          <span
            className={`eyebrow mt-1 text-[0.5rem] ${
              invert ? "text-ash" : "text-ash"
            }`}
          >
            Technology
          </span>
        </span>
      )}
    </span>
  );
}
