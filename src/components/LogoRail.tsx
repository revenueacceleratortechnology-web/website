import { clients } from "@/lib/content";

export function LogoRail() {
  const row = [...clients, ...clients];

  return (
    <section className="border-b border-hairline bg-paper py-9">
      <p className="eyebrow shell mb-7 text-ash">
        Trusted by brands in 14 categories
      </p>

      <div
        className="rail relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="rail-track items-center gap-12 px-6">
          {row.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="display shrink-0 text-xl text-ink/35 transition-colors duration-300 hover:text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
