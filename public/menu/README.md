# Menu card images

Drop licensed photography here and reference it from `NavCard.image` in
`src/lib/content.ts`:

    card: {
      title: "Grow your supplement brand",
      image: { src: "/menu/supplements.jpg", alt: "Supplement bottles and capsules" },
      ...
    }

Without `image`, the card falls back to a generated gradient panel, so the menu
renders correctly either way.

Guidance:
- Roughly 800x250, or any 16:5 crop. Rendered with `object-cover` at 112px tall.
- Use photography you own or hold a stock licence for. Do not reuse images
  lifted from another company's website — those licences are not transferable.
