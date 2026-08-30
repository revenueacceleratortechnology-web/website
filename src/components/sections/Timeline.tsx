export function Timeline({
  entries,
}: {
  entries: { year: string; title: string; body: string[] }[];
}) {
  return (
    <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
      {entries.map((e) => (
        <li
          key={e.year}
          className="grid gap-6 bg-paper p-7 md:grid-cols-[0.55fr_1.45fr] md:gap-12 md:p-9"
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-3 hidden h-px w-8 shrink-0 bg-signal md:block"
            />
            <span className="display text-[length:var(--text-h2)] leading-none text-signal">
              {e.year}
            </span>
          </div>

          <div>
            <h3 className="display text-[length:var(--text-h3)]">{e.title}</h3>
            {e.body.map((p, i) => (
              <p
                key={p}
                className={`leading-relaxed text-ash ${i === 0 ? "mt-4" : "mt-4"}`}
              >
                {p}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
