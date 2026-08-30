export function SectionHead({
  eyebrow,
  heading,
  intro,
  invert = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-signal">{eyebrow}</p>
      <h2
        className={`display mt-4 text-[length:var(--text-h2)] ${
          invert ? "text-paper" : ""
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-5 leading-relaxed ${invert ? "text-paper/65" : "text-ash"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
