# Revenue Accelerator Technology — website

Marketing site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/app/          layout (fonts, metadata), page composition, globals.css, icon.svg
src/components/   one file per page section, plus Logo / Button / Sparkline primitives
src/lib/content.ts  all page copy and data — edit here, not in the components
public/brand/     standalone logo mark SVGs (dark and light grounds)
```

Every string on the page comes from `src/lib/content.ts`. Change copy, nav, FAQs,
case studies, and footer links there; the components read from it.

## Design system

Tokens live in the `@theme` block at the top of `src/app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0E1B1E` | Body text, dark bands |
| `--color-slate` | `#162C31` | Raised surfaces on dark |
| `--color-mineral` | `#E9EDE9` | Alternating light band |
| `--color-paper` | `#FBFCFA` | Page ground, cards |
| `--color-signal` | `#FF5C2B` | Accent — CTAs, metrics, eyebrows |

Type: **Bricolage Grotesque** (display), **Inter** (body), **IBM Plex Mono**
(eyebrows, metrics). The recurring device is the sparkline in `Sparkline.tsx` —
a bare trend line with no axes, used wherever a number needs a direction.

The logo mark is three bars whose gaps widen as they rise: acceleration rather
than linear growth. It is drawn inline in `src/components/Logo.tsx` so it picks
up theme colors, with static copies in `public/brand/`.

## Before launch — placeholder content to replace

The layout is production-ready; the content is not. Replace before going live:

- **All metrics** — stats band, case-study figures, review scores, hero ticker
- **Client and press names** in `clients` / `press` — currently invented
- **Testimonials** — invented names, roles, and quotes
- **Contact details** — phone, email, and address are placeholders
- **Certification badges** — only claim partner status once it is granted
- Footer and nav links all point to `#`; wire them up as pages are built
