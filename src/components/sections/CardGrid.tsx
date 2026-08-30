import Link from "next/link";

type Item = {
  title: string;
  body: string;
  cta?: string;
  href?: string;
};

export function CardGrid({
  items,
  numbered = false,
  columns = 3,
  tone = "light",
}: {
  items: Item[];
  numbered?: boolean;
  columns?: 2 | 3;
  tone?: "light" | "mineral" | "dark";
}) {
  const surface =
    tone === "dark" ? "bg-slate" : tone === "mineral" ? "bg-mineral" : "bg-paper";
  const ground =
    tone === "dark" ? "bg-hairline-dark" : "bg-hairline";
  const border =
    tone === "dark" ? "border-hairline-dark" : "border-hairline";

  return (
    <ul
      className={`mt-12 grid gap-px overflow-hidden rounded-2xl border ${border} ${ground} md:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {items.map((item, i) => (
        <li key={item.title} className={`${surface} flex flex-col p-7`}>
          {numbered && (
            <span className="font-mono text-xs text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <h3
            className={`display text-[1.25rem] ${numbered ? "mt-4" : ""} ${
              tone === "dark" ? "text-paper" : ""
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed ${
              tone === "dark" ? "text-paper/65" : "text-ash"
            }`}
          >
            {item.body}
          </p>

          {item.cta && item.href && (
            <Link
              href={item.href}
              className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-signal transition-colors hover:text-ink"
            >
              {item.cta}
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
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
