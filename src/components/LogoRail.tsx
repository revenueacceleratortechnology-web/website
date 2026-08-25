import { clients } from "@/lib/content";

export function LogoRail() {
  return (
    <section className="border-b border-hairline bg-paper py-12 md:py-14">
      <div className="shell">
        <p className="text-center text-sm text-ash">
          Trusted by brands across 14 categories on Amazon, Walmart, and Shopify
        </p>

        <ul className="mt-8 grid grid-cols-2 justify-items-center gap-x-8 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {clients.slice(0, 12).map((name) => (
            <li
              key={name}
              className="display text-center text-lg text-ink/35 transition-colors duration-300 hover:text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
