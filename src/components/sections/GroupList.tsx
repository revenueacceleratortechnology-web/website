import Link from "next/link";
import type { ServiceGroup } from "@/lib/services";

export function GroupList({ groups }: { groups: ServiceGroup[] }) {
  return (
    <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
      {groups.map((g) => (
        <div
          key={g.title}
          className="grid gap-6 bg-paper p-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:p-8"
        >
          <h3 className="display text-[1.25rem]">{g.title}</h3>

          <div>
            <p className="leading-relaxed text-ash">{g.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.links.map((l) => (
                <li key={l}>
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-mineral/50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
