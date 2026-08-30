export const site = {
  name: "Revenue Accelerator Technology",
  short: "Revenue Accelerator",
  tagline: "Marketplace growth, engineered to compound.",
  phone: "+1 (555) 014-2200",
  email: "hello@revenueaccelerator.tech",
  address: "1100 Commerce Way, Suite 400, Austin, TX 78701",
};

export type NavItem = {
  label: string;
  href: string;
  /** Small superscript flag, e.g. "New" */
  badge?: string;
  /** Arrow bullet and heavier weight — a primary destination in the column */
  featured?: boolean;
};

export type NavCard = {
  title: string;
  body: string;
  href: string;
  /** Picks the fallback artwork palette when no photo is set */
  tone: "warm" | "cool";
  /** Chooses the drawn fallback illustration */
  motif?: "supplements" | "beauty" | "growth" | "email";
  /**
   * Drop a licensed photo in /public/menu and point at it here, e.g.
   * { src: "/menu/supplements.jpg", alt: "..." }. Without it the card
   * falls back to the generated gradient panel.
   */
  image?: { src: string; alt: string };
};

export type NavColumn = {
  /** Quiet eyebrow label */
  heading?: string;
  /** Arrow-marked link acting as the column head */
  lead?: { label: string; href: string };
  links: NavItem[];
  /** Divider plus one closing link */
  tail?: { label: string; href: string };
  /** Promo card rendered instead of a link list */
  card?: NavCard;
};

export type NavGroup = {
  label: string;
  href: string;
  columns?: NavColumn[];
};

export const nav: NavGroup[] = [
  {
    label: "Services",
    href: "#services",
    columns: [
      {
        links: [
          { label: "Full account management", href: "#services", featured: true },
          { label: "Advertising & PPC management", href: "#services", featured: true },
          { label: "Marketplace SEO", href: "#services", featured: true },
          { label: "Account audit", href: "#audit", featured: true },
          { label: "Playbooks & SOPs", href: "#resources", featured: true },
          { label: "All services", href: "#services", featured: true },
          { label: "Consulting", href: "#services", featured: true },
          { label: "Book a strategy call", href: "#audit", featured: true },
        ],
      },
      {
        lead: { label: "Design", href: "#services" },
        links: [
          { label: "Brand guidelines", href: "#services" },
          { label: "Brand story", href: "#services" },
          { label: "Brand storefront", href: "#services" },
          { label: "Listing images", href: "#services" },
          { label: "A+ and Premium A+ content", href: "#services" },
          { label: "Main image testing", href: "#services" },
          { label: "Listing optimization", href: "#services" },
          { label: "Full catalog optimization", href: "#services" },
        ],
      },
      {
        lead: { label: "Troubleshooting", href: "#services" },
        links: [
          { label: "Listing reinstatement", href: "#services" },
          { label: "Account suspension appeals", href: "#services" },
          { label: "Advertising audit", href: "#audit" },
          { label: "Brand name change", href: "#services" },
          { label: "Troubleshooting hours", href: "#services" },
          { label: "UPC to GS1 migration", href: "#services" },
          { label: "Remote fulfilment setup", href: "#services" },
        ],
      },
      {
        lead: { label: "Other services", href: "#services" },
        links: [
          { label: "Amazon DSP", href: "#services" },
          { label: "Trademark registration", href: "#services" },
          { label: "Vendor Central management", href: "#services" },
          { label: "Walmart full service", href: "#services", badge: "New" },
          { label: "Walmart account audit", href: "#audit", badge: "New" },
          { label: "Walmart advertising audit", href: "#audit", badge: "New" },
        ],
        tail: { label: "Free marketplace resources", href: "#resources" },
      },
    ],
  },
  {
    label: "Category Expertise",
    href: "#categories",
    columns: [
      {
        links: [
          { label: "Beauty products", href: "#categories", featured: true },
          { label: "Consumables", href: "#categories", featured: true },
          { label: "Consumer packaged goods", href: "#categories", featured: true },
          { label: "Hard line goods", href: "#categories", featured: true },
          { label: "Home and kitchen", href: "#categories", featured: true },
          { label: "Soft line goods", href: "#categories", featured: true },
          { label: "Supplements", href: "#categories", featured: true },
        ],
      },
      {
        links: [],
        card: {
          title: "Grow your supplement brand",
          body: "Ranking, compliance, and subscription strategy for a category where review velocity decides the winner.",
          href: "#categories",
          tone: "cool",
          motif: "supplements",
        },
      },
      {
        links: [],
        card: {
          title: "Sell more beauty on marketplaces",
          body: "Win shelf space in crowded beauty niches with creative testing and a deliberate variation strategy.",
          href: "#categories",
          tone: "warm",
          motif: "beauty",
        },
      },
    ],
  },
  {
    label: "DTC",
    href: "#dtc",
    columns: [
      {
        links: [
          { label: "DTC services", href: "#dtc", featured: true },
          { label: "Ecommerce audit", href: "#audit", featured: true },
          { label: "SEO for websites", href: "#dtc", featured: true },
          { label: "Email marketing", href: "#dtc", featured: true },
          { label: "Backlink building", href: "#dtc", featured: true },
          { label: "Google Ads management", href: "#dtc", featured: true },
          { label: "Meta Ads management", href: "#dtc", featured: true },
        ],
      },
      {
        links: [],
        card: {
          title: "Build growth beyond marketplaces",
          body: "Reach high-intent shoppers on your own storefront, where you keep the customer relationship and the margin.",
          href: "#dtc",
          tone: "cool",
          motif: "growth",
        },
      },
      {
        links: [],
        card: {
          title: "Turn emails into revenue",
          body: "Lifecycle flows that bring buyers back without paying for the same click a second time.",
          href: "#dtc",
          tone: "warm",
          motif: "email",
        },
      },
    ],
  },
  { label: "Digital Products", href: "#resources" },
  {
    label: "Results",
    href: "#results",
    columns: [
      {
        links: [
          { label: "Case studies", href: "#results", featured: true },
          { label: "Testimonials", href: "#results", featured: true },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "#company",
    columns: [
      {
        links: [
          { label: "Our journey", href: "#company", featured: true },
          { label: "Leadership", href: "#company", featured: true },
        ],
      },
    ],
  },
  { label: "Coaching", href: "#services" },
];

export type UtilityLink = {
  label: string;
  href: string;
  /** Second-level flyout */
  links?: { label: string; href: string }[];
};

export type UtilityItem = {
  label: string;
  href: string;
  /** Simple divided list shown on hover */
  links?: UtilityLink[];
};

export const utilityNav: UtilityItem[] = [
  { label: "Events", href: "#resources" },
  {
    label: "Resources",
    href: "#resources",
    links: [
      { label: "News", href: "#resources" },
      { label: "Articles", href: "#resources" },
      { label: "Webinar library", href: "#resources" },
      { label: "Partnerships", href: "#company" },
      { label: "Press", href: "#resources" },
    ],
  },
  {
    label: "Careers",
    href: "#company",
    links: [
      { label: "Apply here — we're hiring", href: "#company" },
      { label: "Employee reviews", href: "#company" },
      { label: "Internships (paid)", href: "#company" },
      { label: "Brand director", href: "#company" },
      { label: "Brand manager", href: "#company" },
      { label: "DTC jobs", href: "#company" },
      {
        label: "IT jobs",
        href: "#company",
        links: [
          { label: "IT specialist", href: "#company" },
          { label: "Automation specialist", href: "#company" },
        ],
      },
      { label: "Design", href: "#company" },
      { label: "Marketing", href: "#company" },
      { label: "PPC", href: "#company" },
      {
        label: "Sales",
        href: "#company",
        links: [
          { label: "Account executive", href: "#company" },
          { label: "Business development rep", href: "#company" },
          { label: "Outreach specialist", href: "#company" },
        ],
      },
      { label: "Social media specialist", href: "#company" },
      { label: "Remote roles", href: "#company" },
      { label: "International roles", href: "#company" },
    ],
  },
  { label: "Contact us", href: "#audit" },
];

export const promo = {
  kicker: "Peak season",
  headline: "Q4 readiness workshop",
  body: "Forecast demand, protect your inventory position, and keep best sellers in stock through the busiest ten weeks of the year.",
  cta: { label: "Save your seat", href: "#audit" },
};

export const hero = {
  eyebrow: "Amazon · Walmart · Shopify",
  headline: ["Your products are good.", "The way they are sold", "is costing you."],
  body: "Thin listings, untuned ad spend, and catalog defects quietly cap what a good catalog earns. We fix all three with one team, and show you the number moving.",
  primary: { label: "Grow my marketplace sales", href: "#audit" },
  secondary: { label: "Fix an account problem", href: "#audit" },
  tertiary: {
    lead: "Not sure where to start?",
    label: "Start with a free listing audit",
    href: "#audit",
  },
  ticker: [
    { label: "Ad-attributed sales", value: "+64%", trend: [8, 11, 10, 15, 19, 24, 31, 38] },
    { label: "Blended TACoS", value: "-7.2pt", trend: [38, 34, 33, 28, 24, 21, 17, 14] },
    { label: "Organic rank, head terms", value: "+18", trend: [4, 6, 9, 8, 13, 17, 22, 28] },
  ],
};

export const clients = [
  "Northbay", "Verdant", "Kestrel", "Harbor & Co", "Lumen", "Third Coast",
  "Pinegrove", "Salt & Stone", "Ardor", "Bellwether", "Mockingbird", "Foundry",
  "Cobalt", "Wildroot", "Juniper Lane", "Ironwood", "Marlowe", "Copperfield",
];

export const approach = {
  heading: "How we grow your brand on marketplaces",
  body: [
    "We work every lever that moves revenue — the traffic reaching your listings, the rate at which they convert, and the catalog sitting underneath both.",
    "Building ad campaigns, rewriting listings, testing imagery, and clearing the catalog defects nobody else looks at, we strengthen both the brand and what it earns.",
  ],
  cta: { label: "Explore all services", href: "#services" },
  footnote:
    "As a full-service marketplace agency we manage every pillar — including the unglamorous ones most agencies quietly skip.",
};

export const pillars = [
  {
    icon: "click" as const,
    title: "Advertising",
    body: "Traffic starts with disciplined ad management. Higher revenue, lower ACoS, and reporting you can audit line by line.",
    link: "More about advertising",
    href: "#services",
  },
  {
    icon: "search" as const,
    title: "Search & SEO",
    body: "A four-phase indexation and keyword plan built from live search data, aimed at head-term rank inside a quarter.",
    link: "How our SEO works",
    href: "#services",
  },
  {
    icon: "design" as const,
    title: "Design",
    body: "Stand apart with A+ content, Brand Stores, and listing imagery tested against conversion rate rather than taste.",
    link: "Design that converts",
    href: "#services",
  },
  {
    icon: "screen" as const,
    title: "Platform management",
    body: "Competition never pauses, so neither does the work. We hold the gains we make and keep compounding them.",
    link: "Platform management",
    href: "#services",
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
