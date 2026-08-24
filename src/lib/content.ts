export const site = {
  name: "Revenue Accelerator Technology",
  short: "Revenue Accelerator",
  tagline: "Marketplace growth, engineered to compound.",
  phone: "+1 (555) 014-2200",
  email: "hello@revenueaccelerator.tech",
  address: "1100 Commerce Way, Suite 400, Austin, TX 78701",
};

export type NavGroup = {
  label: string;
  href: string;
  columns?: { heading: string; links: { label: string; href: string }[] }[];
};

export const nav: NavGroup[] = [
  {
    label: "Services",
    href: "#services",
    columns: [
      {
        heading: "Marketplace",
        links: [
          { label: "Full account management", href: "#services" },
          { label: "Advertising & PPC", href: "#services" },
          { label: "Search & listing optimization", href: "#services" },
          { label: "Creative & A+ content", href: "#services" },
        ],
      },
      {
        heading: "Operations",
        links: [
          { label: "Catalog troubleshooting", href: "#services" },
          { label: "Inventory & forecasting", href: "#services" },
          { label: "Brand protection", href: "#services" },
          { label: "Reimbursement recovery", href: "#services" },
        ],
      },
    ],
  },
  {
    label: "Categories",
    href: "#categories",
    columns: [
      {
        heading: "Consumables",
        links: [
          { label: "Supplements", href: "#categories" },
          { label: "Grocery & beverage", href: "#categories" },
          { label: "Beauty & personal care", href: "#categories" },
          { label: "Pet", href: "#categories" },
        ],
      },
      {
        heading: "Durables",
        links: [
          { label: "Home & kitchen", href: "#categories" },
          { label: "Electronics", href: "#categories" },
          { label: "Apparel", href: "#categories" },
          { label: "Toys & games", href: "#categories" },
        ],
      },
    ],
  },
  {
    label: "Direct-to-consumer",
    href: "#dtc",
    columns: [
      {
        heading: "Channels",
        links: [
          { label: "Shopify growth", href: "#dtc" },
          { label: "Email & SMS", href: "#dtc" },
          { label: "Paid social", href: "#dtc" },
          { label: "Site SEO", href: "#dtc" },
        ],
      },
    ],
  },
  { label: "Results", href: "#results" },
  {
    label: "Resources",
    href: "#resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Articles", href: "#resources" },
          { label: "Webinars", href: "#resources" },
          { label: "Playbooks", href: "#resources" },
          { label: "Press", href: "#resources" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "#company",
    columns: [
      {
        heading: "About",
        links: [
          { label: "Our team", href: "#company" },
          { label: "Careers", href: "#company" },
          { label: "Partnerships", href: "#company" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
  },
];

export const utilityNav = [
  { label: "Events", href: "#resources" },
  { label: "Resources", href: "#resources" },
  { label: "Careers", href: "#company" },
  { label: "Contact us", href: "#audit" },
];

export const promo = {
  headline: "Get a free listing teardown with any audit booked this month.",
  body: "We record a 15-minute walkthrough of your three worst-performing listings.",
  cta: { label: "Book a call", href: "#audit" },
};

export const hero = {
  eyebrow: "Amazon · Walmart · Shopify",
  headline: ["Your marketplace revenue,", "engineered to compound."],
  body: "We run advertising, listings, creative, and catalog operations for brands that have outgrown doing it in-house. One team, one plan, one number to move.",
  primary: { label: "Get a free account audit", href: "#audit" },
  secondary: { label: "See client results", href: "#results" },
  tertiary: { lead: "Not sure where to start?", label: "Get a free listing audit", href: "#audit" },
  ticker: [
    { label: "Ad-attributed sales", value: "+64%", trend: [8, 11, 10, 15, 19, 24, 31, 38] },
    { label: "Blended TACoS", value: "−7.2pt", trend: [38, 34, 33, 28, 24, 21, 17, 14] },
    { label: "Organic rank, head terms", value: "+18", trend: [4, 6, 9, 8, 13, 17, 22, 28] },
  ],
};

export const clients = [
  "Northbay", "Verdant", "Kestrel", "Harbor & Co", "Lumen", "Third Coast",
  "Pinegrove", "Salt & Stone", "Ardor", "Bellwether", "Mockingbird", "Foundry",
  "Cobalt", "Wildroot", "Juniper Lane", "Ironwood", "Marlowe", "Copperfield",
];

export const pillars = [
  {
    code: "01",
    title: "Advertising",
    href: "#services",
    body: "Sponsored Products, Brands, Display, and DSP managed against profit — not impressions. Weekly bid governance and search-term hygiene.",
    points: ["Campaign architecture rebuilds", "Dayparting & placement control", "DSP retargeting", "Profit-weighted bidding"],
  },
  {
    code: "02",
    title: "Search & listings",
    href: "#services",
    body: "Indexation, keyword coverage, and conversion copy built from live search data — so paid traffic stops subsidizing weak pages.",
    points: ["Keyword & indexation audits", "Title, bullet, backend copy", "Variation strategy", "Review velocity"],
  },
  {
    code: "03",
    title: "Creative",
    href: "#services",
    body: "Main images, infographics, A+ modules, Brand Store, and video produced in-house and tested against conversion rate.",
    points: ["Image stack testing", "A+ / Premium A+ modules", "Brand Store builds", "Short-form video"],
  },
  {
    code: "04",
    title: "Operations",
    href: "#services",
    body: "The unglamorous work that protects revenue: suppressed listings, stranded inventory, case escalation, and reimbursements.",
    points: ["Catalog & flat-file fixes", "Case management", "Inventory forecasting", "Reimbursement recovery"],
  },
];

export const badges = [
  { title: "Amazon Ads", note: "Advanced Partner" },
  { title: "Walmart Connect", note: "Certified Agency" },
  { title: "Shopify", note: "Partner" },
];

export const caseStudies = [
  {
    href: "#results",
    category: "Supplements",
    headline: "Rebuilt campaign structure after two years of flat spend",
    metric: "+212%",
    metricLabel: "Ad-attributed revenue, 9 months",
    support: [
      { k: "TACoS", v: "31% → 14%" },
      { k: "Sessions", v: "+88%" },
    ],
    trend: [10, 12, 14, 13, 20, 28, 36, 47, 58, 72],
  },
  {
    href: "#results",
    category: "Home & kitchen",
    headline: "Fixed catalog suppression, then scaled the winning variation",
    metric: "+$4.1M",
    metricLabel: "Incremental revenue, 12 months",
    support: [
      { k: "Buy Box", v: "72% → 97%" },
      { k: "Conversion", v: "+3.4pt" },
    ],
    trend: [22, 20, 24, 30, 29, 38, 45, 52, 61, 68],
  },
  {
    href: "#results",
    category: "Beauty",
    headline: "Creative testing lifted conversion before spend increased",
    metric: "+58%",
    metricLabel: "Unit session percentage",
    support: [
      { k: "ROAS", v: "2.1x → 4.6x" },
      { k: "Rank, head term", v: "#41 → #6" },
    ],
    trend: [15, 18, 17, 25, 31, 34, 42, 49, 55, 63],
  },
];

export const stats = [
  { value: "290+", label: "Brands scaled since 2016" },
  { value: "$840M", label: "Marketplace revenue under management" },
  { value: "260", label: "Specialists across 6 offices" },
  { value: "11", label: "Marketplaces supported" },
];

export const trust = [
  { score: "4.9", of: "5", label: "Verified client reviews", count: "212 reviews" },
  { score: "94", of: "%", label: "Clients renewing past year one", count: "Trailing 24 months" },
];

export const testimonials = [
  {
    quote:
      "They found $600K of suppressed listings in the first month. That paid for the engagement before a single campaign changed.",
    name: "Dana Whitfield",
    role: "VP Ecommerce",
    company: "Northbay Provisions",
  },
  {
    quote:
      "Our old agency reported on spend. This team reports on contribution margin. It changed how our board looks at the channel.",
    name: "Marcus Ellery",
    role: "Founder",
    company: "Kestrel Outdoors",
  },
  {
    quote:
      "Creative, ads, and catalog finally sit in one meeting. We stopped losing weeks to handoffs between three vendors.",
    name: "Priya Raman",
    role: "Director of Growth",
    company: "Salt & Stone",
  },
];

export const marketplaces = [
  "Amazon US", "Amazon CA", "Amazon UK", "Amazon DE", "Amazon JP", "Amazon AU",
  "Walmart", "Target Plus", "Shopify", "TikTok Shop", "Faire",
];

export const press = ["Commerce Weekly", "Retail Brief", "The Margin", "Channel Report", "Modern Seller", "Fulfilled", "Basket", "Ledger"];

export const process = [
  {
    step: "Week 1–2",
    title: "Audit",
    body: "We pull 24 months of your data and return a written diagnosis: where revenue leaks, what ranks, what is suppressed, and what we would change first.",
  },
  {
    step: "Week 3–6",
    title: "Rebuild",
    body: "Campaign structure, listing copy, and creative are rebuilt in parallel. Catalog defects get cleared before spend increases, so budget lands on pages that convert.",
  },
  {
    step: "Ongoing",
    title: "Compound",
    body: "Weekly bid governance, monthly creative tests, quarterly category planning. You get one dashboard, one strategist, and a call every week.",
  },
];

export const faqs = [
  {
    q: "What size brand do you work with?",
    a: "Most clients do between $1M and $60M a year on marketplaces. Below roughly $1M, a full retainer rarely pays for itself — we will tell you that on the call rather than sell you a plan.",
  },
  {
    q: "How is pricing structured?",
    a: "A flat monthly retainer based on catalog size and channel count, with no percentage of ad spend. We do not earn more when your spend goes up.",
  },
  {
    q: "Is there a long-term contract?",
    a: "The initial term is 90 days, because a rebuild takes about that long to show in the numbers. After that it runs month to month with 30 days' notice.",
  },
  {
    q: "Who actually works on my account?",
    a: "A named strategist plus specialists for ads, creative, and catalog. The strategist runs your weekly call and stays on the account — you are not handed to a junior after onboarding.",
  },
  {
    q: "How long until we see results?",
    a: "Catalog and suppression fixes show up in days. Advertising restructures typically take 6–10 weeks to stabilize. Organic rank movement is a 3–6 month story.",
  },
  {
    q: "Do you take our ad spend through your account?",
    a: "No. Spend stays on your card, in your account. You keep ownership of every asset we build, including campaigns, copy, and creative files.",
  },
  {
    q: "Can you work alongside our in-house team?",
    a: "Often that is the best setup. We can own advertising while your team keeps catalog, or take everything and leave your team on brand and product.",
  },
  {
    q: "What reporting do we get?",
    a: "A live dashboard, a written weekly summary, and a monthly review against the plan. Every number traces back to a source you can open yourself.",
  },
  {
    q: "Do you handle international marketplaces?",
    a: "Yes — North America, EU, UK, Japan, and Australia. Listings are localized by native speakers, not machine-translated.",
  },
  {
    q: "What if our listings are suppressed or stranded?",
    a: "That is usually the first thing we fix. Catalog defects cap everything else, so we clear them before touching advertising budget.",
  },
  {
    q: "Do you offer a one-time audit without a retainer?",
    a: "Yes. The audit is a fixed-fee engagement and it is yours to keep, whether or not you continue with us.",
  },
  {
    q: "How do we start?",
    a: "Book a 30-minute call. We look at your account together, and you leave with two or three specific things to fix regardless of what you decide.",
  },
];

export const revenueBands = [
  "Under $1M",
  "$1M – $5M",
  "$5M – $20M",
  "$20M – $60M",
  "Over $60M",
];

export const footer = [
  {
    heading: "Services",
    links: ["Full account management", "Advertising & PPC", "Search & listings", "Creative & A+", "Catalog troubleshooting", "Reimbursement recovery"],
  },
  {
    heading: "Marketplaces",
    links: ["Amazon", "Walmart", "Target Plus", "TikTok Shop", "Shopify", "Faire"],
  },
  {
    heading: "Direct-to-consumer",
    links: ["Shopify growth", "Email & SMS", "Paid social", "Site SEO", "Conversion design"],
  },
  {
    heading: "Categories",
    links: ["Supplements", "Beauty", "Grocery", "Home & kitchen", "Pet", "Apparel"],
  },
  {
    heading: "Company",
    links: ["About us", "Our team", "Careers", "Partnerships", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Case studies", "Articles", "Webinars", "Playbooks", "Reporting glossary"],
  },
];

export const socials = ["LinkedIn", "YouTube", "Instagram", "X", "Podcast"];
