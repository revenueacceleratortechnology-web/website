import { whyUs } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="why" className="band border-b border-hairline bg-mineral">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">Why RA Tech</p>
          <h2 className="display mt-4 text-[length:var(--text-h2)]">
            {whyUs.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">{whyUs.intro}</p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => (
            <li key={item.title} className="bg-mineral p-7">
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-4 text-[1.25rem]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{item.body}</p>
            </li>
          ))}
          {/* Keeps the final row square on a three-up grid */}
          <li aria-hidden="true" className="hidden bg-mineral lg:block" />
        </ul>
      </div>
    </section>
  );
}
