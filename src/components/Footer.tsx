import Link from "next/link";
import { Logo } from "./Logo";
import { footer, socials, site } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="shell py-16 pb-28 md:py-20 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.4fr] lg:gap-16">
          <div>
            <Logo invert />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              {site.tagline} We connect strategic direction with execution and
              treat the account as one commercial system.
            </p>

            <address className="mt-7 space-y-1.5 text-sm not-italic text-paper/60">
              <p>
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-signal"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-signal"
                >
                  {site.email}
                </a>
              </p>
              <p className="max-w-[16rem]">{site.address}</p>
            </address>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {footer.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-signal">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-sm text-paper/60 transition-colors hover:text-paper"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-hairline-dark pt-8">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} {site.legal}. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <li key={s}>
                <Link
                  href="#"
                  className="eyebrow text-paper/50 transition-colors hover:text-signal"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-6">
            <li>
              <Link href="#" className="text-xs text-paper/45 hover:text-paper">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-xs text-paper/45 hover:text-paper">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
