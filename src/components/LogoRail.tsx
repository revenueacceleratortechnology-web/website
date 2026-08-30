import { clients } from "@/lib/content";

function monogram(name: string) {
  const parts = name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export function LogoRail() {
  return (
    <section className="border-b border-hairline bg-paper py-12 md:py-14">
      <div className="shell">
        <p className="text-center text-sm text-ash">
          Trusted by brands across 14 categories on Amazon, Walmart, and Shopify
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.slice(0, 12).map((name) => (
            <li
              key={name}
              className="flex items-center gap-2.5 rounded-xl border border-hairline bg-mineral/40 px-3 py-2.5 transition-colors duration-300 hover:border-ink/25 hover:bg-mineral"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink font-mono text-[0.5625rem] font-semibold text-paper"
              >
                {monogram(name)}
              </span>
              <span className="display truncate text-[0.8125rem] text-ink/70">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
