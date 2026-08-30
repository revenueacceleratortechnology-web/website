export const servicesHero = {
  eyebrow: "Services",
  heading: "Amazon agency services for growth, control, and recovery",
  body: [
    "Sustainable Amazon growth depends on several priorities working in sync. Advertising, search, creative, account management, recovery, and specialist marketplace work all need to support the same commercial priorities.",
    "At RA Tech we bring those areas together, with the scope matched to what your account actually needs — specialist attention in one area today, or coordinated ownership across several functions as the workload expands.",
    "Our full-service model supports either approach without putting every business into the same service package.",
  ],
  cta: { label: "Explore RA Tech services", href: "#core" },
};

export const startingPoint = {
  heading: "Find your starting point",
  intro:
    "Choosing the wrong service usually starts with defining the problem too broadly. “Amazon performance” could mean expensive ads, poor organic reach, a weak product page, or an account issue. Narrow down what is happening first, and the right service becomes much easier to identify.",
  items: [
    {
      title: "Account ownership",
      body: "Full-service management suits accounts with several recurring responsibilities. Agreed workstreams are managed together, so a change in one area is coordinated with the others instead of creating ownership gaps.",
    },
    {
      title: "PPC performance",
      body: "Advertising needing regular intervention belongs under PPC management — spend, targeting, and campaign results as ongoing work. If you need diagnosis first, an advertising audit provides the evidence.",
    },
    {
      title: "Organic visibility",
      body: "When organic search is the problem, Amazon SEO focuses on the factors affecting discovery: indexing, keyword alignment, listing relevance, and visibility across the products in scope.",
    },
    {
      title: "Listing performance",
      body: "Listing optimization and design solve different parts of the same page. The first addresses written content, the second visual presentation. A product page may need either independently, or both together.",
    },
    {
      title: "Account issues",
      body: "Use troubleshooting and recovery when the problem is already disrupting marketplace activity. Suspensions, deactivations, technical faults, identifier conflicts, and catalog errors all require concentrated resolution.",
    },
    {
      title: "Strategic direction",
      body: "If you need diagnosis, start with an account audit. If the bigger question concerns what the business should do next, growth consulting provides input on priorities, expansion, and account direction.",
    },
  ],
};

export const coreServices = {
  heading: "The core of Amazon growth",
  intro:
    "These services carry the largest share of ongoing commercial responsibility across an Amazon account, covering day-to-day ownership, paid growth, organic visibility, diagnosis, and strategic direction.",
  items: [
    {
      title: "Full-service management",
      body: "Brings several recurring responsibilities into one coordinated engagement. The agreed scope follows your account priorities, internal capacity, and the work requiring continuous ownership.",
      cta: "Explore full-service management",
      href: "#core",
    },
    {
      title: "PPC management",
      body: "Paid media needs active control over spend, efficiency, and campaign direction. We manage the agreed advertising workload against your commercial priorities, with performance data informing where budget moves next.",
      cta: "Explore PPC management",
      href: "#core",
    },
    {
      title: "Amazon SEO",
      body: "Search visibility depends on how Amazon interprets and surfaces each product. Our work focuses on relevance, indexing, and organic discoverability across the products included in scope.",
      cta: "Explore Amazon SEO",
      href: "#core",
    },
    {
      title: "Account audit",
      body: "A structured view of the areas selected for review. Findings are organised around business significance, bringing important problems and missed opportunities into clearer priority before further work begins.",
      cta: "Explore account audit",
      href: "#audit",
    },
    {
      title: "Growth consulting",
      body: "Certain marketplace decisions benefit from experienced judgment before execution starts. Supports expansion choices, account direction, and complex strategic questions while you retain execution internally.",
      cta: "Explore growth consulting",
      href: "#core",
    },
  ],
};

export type ServiceGroup = {
  title: string;
  body: string;
  links: string[];
};

export const designServices = {
  heading: "Design and listing services",
  intro:
    "Strong product presentation gives shoppers useful information without forcing them to work for it. We separate copy, imagery, enhanced content, and brand assets so each creative requirement receives attention according to its role on Amazon.",
  cta: { label: "Explore all design services", href: "#design" },
  groups: [
    {
      title: "Listing copy",
      body: "Product-page copy needs to explain value clearly and support discoverability at the same time. Our work covers the written elements influencing product understanding, relevance, and purchase consideration.",
      links: ["Listing optimization", "Full listing optimization"],
    },
    {
      title: "Listing visuals",
      body: "Shoppers scan images before studying detailed information. Our visual work communicates features, dimensions, use cases, and important purchase details through a deliberate image sequence.",
      links: ["Listing image design", "Main image optimization"],
    },
    {
      title: "A+ and brand story",
      body: "Enhanced content creates additional room for product education, comparison, and brand context, expanding the information available beyond the standard product-detail fields.",
      links: ["A+ content", "Brand story"],
    },
    {
      title: "Storefront and guidelines",
      body: "A Brand Store organises the wider catalog within a dedicated branded destination. Brand guidelines provide a consistent visual reference for future Amazon creative across customer-facing assets.",
      links: ["Brand Store", "Brand guidelines"],
    },
  ] as ServiceGroup[],
};

export const recoveryServices = {
  heading: "Troubleshooting and recovery",
  intro:
    "Marketplace problems interrupt revenue, availability, or normal account operations for very different reasons. We separate recovery, catalog correction, and operational diagnostics so each issue reaches work suited to its technical context.",
  footnote:
    "Each route keeps the work centred on the issue already interfering with normal marketplace activity.",
  groups: [
    {
      title: "Account recovery",
      body: "Suspensions and listing deactivations require attention tied to the specific enforcement action involved. The recovery path depends on the affected account or ASIN, Amazon's notice, and the information relevant to the case.",
      links: ["Account suspension support", "Listing reinstatement"],
    },
    {
      title: "Catalog fixes",
      body: "Incorrect brand data, identifier conflicts, and catalog errors affect how products appear or connect inside Amazon. These cases move through the correction route matching the underlying record problem.",
      links: ["Brand name changes", "UPC / GS1 assistance", "Amazon troubleshooting"],
    },
    {
      title: "Operational diagnostics",
      body: "Certain problems require investigation before larger changes are justified. An advertising audit examines campaign conditions deserving closer review; remote fulfilment support addresses setup for eligible cross-border FBA expansion.",
      links: ["Advertising audit", "Remote fulfilment"],
    },
  ] as ServiceGroup[],
};

export const specialist = {
  heading: "Specialist Amazon capabilities",
  intro:
    "Certain requirements fall outside routine account management and need a narrower brief. We keep these capabilities separate, giving programmatic advertising, brand enrolment, and Vendor Central work their own defined commercial scope.",
  items: [
    {
      title: "Amazon DSP",
      body: "Covers programmatic media requirements outside standard sponsored-ad management. The engagement is scoped around the advertising objective, audience strategy, and media activity agreed for the brand.",
    },
    {
      title: "Brand Registry",
      body: "We assist with the marketplace side of Brand Registry, including preparation and relevant enrolment steps covered by the engagement. This supports Amazon requirements only and does not replace legal advice.",
    },
    {
      title: "Vendor Central",
      body: "Brands working through Amazon's first-party model may need dedicated Vendor Central support. We manage vendor-side responsibilities separately from Seller Central activity so each account model keeps clear ownership.",
    },
  ],
};

export const dtcServices = {
  heading: "DTC services: growth beyond Amazon",
  intro:
    "Alongside our Amazon work, RA Tech supports e-commerce activity outside the marketplace. These sit in a separate group because owned-site growth and external acquisition channels have their own commercial context, measurement, and execution requirements.",
  footnote:
    "Each discipline has a defined scope, so your team can select one channel or build a broader off-Amazon engagement around several requirements.",
  links: [
    "E-commerce audit",
    "Website SEO",
    "Email marketing",
    "Backlink building",
    "Google Ads management",
    "Meta Ads management",
  ],
  cta: { label: "Explore DTC services", href: "#dtc" },
};

export const servicesCta = {
  eyebrow: "Next step",
  heading: "Put the right Amazon support in place",
  body: "Bring the account issues, priorities, and responsibilities you want RA Tech to take on. We use that conversation to define what belongs in scope, who owns each part of the work, and how the commercial arrangement should be structured before anything starts.",
  bullets: [
    "New clients can begin with a complimentary account audit",
    "Eligible recurring services may be available through a seven-day trial",
    "More context on current performance means a clearer starting point",
  ],
};

export const servicesFaqs = [
  {
    q: "Who can access A+ Content?",
    a: "Amazon requires a Professional selling account for A+ Content. Access also depends on having an eligible Brand Registry selling role, or qualifying generic products within the catalog.",
  },
  {
    q: "Does Amazon DSP require Amazon sales?",
    a: "No. Amazon states that DSP is available to advertisers that sell through Amazon and advertisers that do not, which makes the platform relevant to broader programmatic advertising requirements beyond marketplace sales.",
  },
  {
    q: "How does Remote Fulfilment handle inventory?",
    a: "Remote Fulfilment can use eligible FBA stock already held within Amazon's fulfilment network for orders placed through participating destination stores. Sellers do not need to position separate inventory in every supported market before making qualifying offers available.",
  },
  {
    q: "Which products qualify for Remote Fulfilment?",
    a: "Eligibility depends on Amazon's Remote Fulfilment rules and a valid offer in the destination store. Trade requirements still apply, and restricted, prohibited, dangerous, or otherwise excluded products cannot be enrolled.",
  },
  {
    q: "Is Vendor Central available to every seller?",
    a: "No. Vendor Central is based on an invitation from Amazon, where vendors sell inventory wholesale to Amazon under a first-party arrangement. Seller Central follows a different model, with third-party businesses selling through Amazon's store.",
  },
  {
    q: "Can authorised resellers receive Brand Registry access?",
    a: "Yes, where a brand administrator assigns the Reseller role. Amazon gives that authorised seller selected Brand Registry selling benefits, although access to certain sensitive information and tools remains restricted.",
  },
  {
    q: "Can Brand Registry begin before Amazon selling?",
    a: "Amazon states that intellectual-property owners with qualifying trademark rights can use Brand Registry even without selling products directly through the Amazon store. Individual selling benefits can still depend on the account and assigned role.",
  },
];
