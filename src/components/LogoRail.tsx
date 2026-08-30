import { clients } from "@/lib/content";

/** Rotating type treatments so the wall reads as separate marks, not one list. */
const STYLES = [
  "display text-xl font-extrabold tracking-[-0.04em]",
  "font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.28em]",
  "display text-lg font-medium tracking-[0.02em]",
  "text-[0.9375rem] font-light uppercase tracking-[0.3em]",
  "display text-2xl font-black tracking-[-0.05em]",
  "font-mono text-sm font-medium lowercase tracking-[-0.02em]",
];

export function LogoRail() {
  return (
    <section className="border-b border-hairline bg-paper py-14">
      <div className="shell">
        <p className="text-center text-sm text-ash">
          Trusted by growing brands on Amazon, Walmart, and Shopify
        </p>

        <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {clients.slice(0, 12).map((name, i) => (
            <li
              key={name}
              className={`text-center text-ink/40 transition-colors duration-300 hover:text-ink ${
                STYLES[i % STYLES.length]
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
