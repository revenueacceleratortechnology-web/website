type Props = {
  points: number[];
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
};

/**
 * The recurring data device: a bare trend line, no axes, no grid.
 * Length is passed to CSS so the stroke draws itself on load.
 */
export function Sparkline({
  points,
  className = "",
  stroke = "#FF5C2B",
  width = 120,
  height = 34,
}: Props) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = width / (points.length - 1);

  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / span) * (height - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  // Rough path length for the draw-on animation.
  const len = Math.round(width * 1.6);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`spark overflow-visible ${className}`}
      style={{ ["--len" as string]: len }}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
