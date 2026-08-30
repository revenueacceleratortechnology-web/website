type Props = {
  /** Render the wordmark for a dark background */
  invert?: boolean;
  /** Hide the wordmark, show the mark only */
  markOnly?: boolean;
  className?: string;
};

/**
 * Mark: three ascending chevrons whose gaps widen as they climb — acceleration
 * rather than steady growth. The leading chevron carries the signal color and
 * the trailing two recede, so the silhouette still reads at favicon size.
 *
 * The mark keeps its own dark ground in both themes; `invert` only lightens the
 * ground enough to separate it from the ink footer, and recolors the wordmark.
 */
export function Logo({ invert = false, markOnly = false, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          width="48"
          height="48"
          rx="13"
          fill={invert ? "#21424A" : "#0E1B1E"}
        />
        <g
          fill="none"
          stroke="#E9EDE9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 39L24 31l10 8" opacity="0.3" />
          <path d="M14 30L24 22l10 8" opacity="0.62" />
        </g>
        <path
          d="M14 19L24 11l10 8"
          fill="none"
          stroke="#FF5C2B"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`display text-[0.98rem] tracking-[-0.02em] ${
              invert ? "text-paper" : "text-ink"
            }`}
          >
            RA Tech
          </span>
          <span
            className={`eyebrow mt-1 text-[0.5rem] ${
              invert ? "text-paper/50" : "text-ash"
            }`}
          >
            Amazon agency
          </span>
        </span>
      )}
    </span>
  );
}
