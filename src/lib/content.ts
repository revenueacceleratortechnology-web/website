import { pages, destination } from "./pages";
export const site = {
  name: "RA Tech",
  legal: "Revenue Accelerator Technology",
  tagline: "A full-service Amazon agency for growing brands.",
  phone: "+91 85085 04042",
  email: "",
  address: "",
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
    href: "/services",
    columns: [
      {
        links: [
          { label: "Full-service management", href: "/services/full-service-management", featured: true },
          { label: "PPC management", href: "/services#core", featured: true },
          { label: "Amazon SEO", href: "/services#core", featured: true },
          { label: "Account audit", href: "/services#core", featured: true },
          { label: "Growth consulting", href: "/services#core", featured: true },
          { label: "SOPs", href: "/services/sops", featured: true },
          { label: "Book a coaching call", href: "/coaching", featured: true },
          { label: "Free Amazon resources", href: "/resources", featured: true },
          { label: "All services", href: "/services", featured: true },
        ],
      },
      {
        lead: { label: "Design & listing", href: "/services#design" },
        links: [
          { label: "Listing optimization", href: "/services#design" },
          { label: "Full listing optimization", href: "/services#design" },
          { label: "Listing image design", href: "/services#design" },
          { label: "Main image optimization", href: "/services#design" },
          { label: "A+ content", href: "/services#design" },
          { label: "Brand story", href: "/services#design" },
          { label: "Brand Store", href: "/services#design" },
          { label: "Brand guidelines", href: "/services#design" },
        ],
      },
      {
        lead: { label: "Troubleshooting & recovery", href: "/services" },
        links: [
          { label: "Account suspension support", href: "/services" },
          { label: "Listing reinstatement", href: "/services" },
          { label: "Brand name changes", href: "/services" },
          { label: "UPC / GS1 assistance", href: "/services" },
          { label: "Amazon troubleshooting", href: "/services" },
          { label: "Advertising audit", href: "/services" },
          { label: "Remote fulfilment", href: "/services" },
        ],
      },
      {
        lead: { label: "Specialist capabilities", href: "/services" },
        links: [
          { label: "Amazon DSP", href: "/services" },
          { label: "Brand Registry", href: "/services" },
          { label: "Vendor Central", href: "/services" },
          { label: "Trademark registration", href: "/services/trademark-registration" },
          { label: "Walmart full service management", href: "/services/walmart-management", badge: "New" },
          { label: "Walmart account audit", href: "/services/walmart-account-audit", badge: "New" },
          { label: "Walmart advertising audit", href: "/services/walmart-advertising-audit", badge: "New" },
        ],
        tail: { label: "DTC services", href: "/services#dtc" },
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
          { label: "DTC services", href: "/services#dtc", featured: true },
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
    href: "/about",
    columns: [
      {
        links: [
          { label: "Our journey", href: "/about#journey", featured: true },
          { label: "Leadership", href: "/about", featured: true },
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
  kicker: "New clients",
  headline: "Try eligible services free for seven days",
  body: "Eligible recurring services include PPC management and account management, plus an initial free audit. Creative, image design, and content services are excluded.",
  cta: { label: "Start the trial", href: "#audit" },
};

export const hero = {
  eyebrow: "Full-service Amazon agency",
  headline: ["A full-service Amazon", "agency for growing", "brands"],
  body: "Amazon gets harder to manage when separate priorities compete for attention. RA Tech brings them into one working relationship, connecting strategic direction with execution and treating the account as a commercial system rather than a list of unrelated tasks.",
  primary: { label: "Talk Amazon growth with RA Tech", href: "#audit" },
  secondary: { label: "See what we have delivered", href: "#results" },
  tertiary: {
    lead: "Not sure where to start?",
    label: "Start with a free account audit",
    href: "#audit",
  },
};

export const clients = [
  "Northbay", "Verdant", "Kestrel", "Harbor & Co", "Lumen", "Third Coast",
  "Pinegrove", "Salt & Stone", "Ardor", "Bellwether", "Mockingbird", "Foundry",
  "Cobalt", "Wildroot", "Juniper Lane", "Ironwood", "Marlowe", "Copperfield",
];

export const approach = {
  heading: "How RA Tech helps you build a stronger Amazon business",
  body: [
    "You can improve one part of Amazon and still lose ground somewhere else. PPC may bring the click, but weak SEO or poor creative can stop the sale. Better listings still struggle when catalog or Seller Central issues interrupt performance.",
    "Our experts look across the account before deciding what needs attention first, working across the areas that directly influence how your business performs on the marketplace.",
  ],
  cta: { label: "Explore all services", href: "#services" },
  footnote:
    "Every area below is owned by an Amazon specialist, and the priorities between them stay connected rather than running as separate jobs.",
};

export const pillars = [
  {
    icon: "click" as const,
    title: "Amazon PPC",
    body: "We manage paid campaigns around relevant traffic, budget control, and the products that deserve stronger advertising support.",
    link: "More about PPC",
    href: "#services",
  },
  {
    icon: "search" as const,
    title: "Amazon SEO",
    body: "We work on keywords, indexing, and listing relevance so your products have a better chance of appearing for useful Amazon searches.",
    link: "More about SEO",
    href: "#services",
  },
  {
    icon: "design" as const,
    title: "Design & creative",
    body: "Your images, A+ Content, and brand assets need to explain the product quickly and give shoppers confidence to keep considering it.",
    link: "More about creative",
    href: "#services",
  },
  {
    icon: "screen" as const,
    title: "Platform management",
    body: "Catalog health, listing issues, and Seller Central problems need attention before they interfere with visibility, availability, or sales.",
    link: "More about platform work",
    href: "#services",
  },
  {
    icon: "account" as const,
    title: "Account management",
    body: "RA Tech keeps the wider account organised, connects ongoing priorities, and keeps your decisions aligned to broader marketplace growth.",
    link: "More about account management",
    href: "#services",
  },
];

export const whyUs = {
  heading: "Why brands choose RA Tech as their Amazon agency",
  intro:
    "Choosing an Amazon agency means trusting another team with your account. We keep that relationship transparent and tethered to your priorities.",
  items: [
    {
      title: "Your account has clear ownership",
      body: "You know who owns each priority, who is handling the work, and what happens next.",
    },
    {
      title: "Your priorities start with account data",
      body: "Your account data, business needs, and marketplace conditions guide what receives attention first.",
    },
    {
      title: "You work with Amazon-focused specialists",
      body: "Your account stays with people who understand Amazon and the context behind each task.",
    },
    {
      title: "You get clear visibility into the work",
      body: "You receive clear updates on changes, the reasons behind them, and the areas that need your attention.",
    },
    {
      title: "Your Amazon work remains connected",
      body: "PPC, SEO, creative, platform, and account priorities stay connected instead of running as separate jobs.",
    },
  ],
};

export const badges = [
  { title: "Amazon Ads", note: "Advanced Partner" },
  { title: "Walmart Connect", note: "Certified Agency" },
  { title: "Shopify", note: "Partner" },
];

export const results = {
  heading: "See what our Amazon work has delivered",
  intro:
    "You should not have to rely on an Amazon growth agency purely on the strength of its claims. The stronger evidence comes from accounts where the work can be tied to a measurable outcome.",
};

export const caseStudies = [
  {
    href: "#results",
    category: "[Client / category]",
    metric: "[X%]",
    metricLabel: "Sales growth",
    headline:
      "Follow the account changes that led to stronger revenue performance across [defined period].",
    trend: [10, 14, 13, 22, 30, 38, 47, 58, 66, 74],
  },
  {
    href: "#results",
    category: "[Client / category]",
    metric: "[X%]",
    metricLabel: "Better advertising efficiency",
    headline:
      "See where paid performance improved after specific account and campaign changes were put into place.",
    trend: [18, 22, 20, 29, 34, 43, 50, 58, 64, 71],
  },
];

export const testimonialIntro = {
  heading: "What clients say about working with RA Tech",
  intro:
    "Choosing an Amazon management agency also means choosing the people you work with week after week. You need communication that is easy to follow, dependable support, and a team that takes your account seriously. Our clients can speak to that better than we can.",
  link: { label: "Read more client testimonials", href: "#results" },
};

export const testimonials = [
  { quote: "[Client testimonial 1]", focus: "Communication and responsiveness" },
  { quote: "[Client testimonial 2]", focus: "Reliability and account ownership" },
  { quote: "[Client testimonial 3]", focus: "Expertise and overall working experience" },
];

export const processIntro = {
  heading: "How RA Tech works with your Amazon account",
  intro:
    "Your account already has a history before RA Tech comes in, so we start there. We need to understand what is active, what has changed recently, and where your team is already involved.",
};

export const process = [
  {
    step: "Step one",
    title: "Set up the account and working context",
    body: "Access to Seller Central, current account notes, active campaigns, and open issues gives us the working picture we need.",
  },
  {
    step: "Step two",
    title: "Agree the first work cycle",
    body: "We define the first body of work with you. Immediate needs take priority, while lower-priority items move into later cycles.",
  },
  {
    step: "Step three",
    title: "Put the agreed work into motion",
    body: "Our Amazon specialists take ownership of the agreed tasks, with your existing team kept in the loop where their input matters.",
  },
  {
    step: "Step four",
    title: "Review the cycle and set what comes next",
    body: "Each cycle closes with a review of completed work and current account conditions. That becomes the basis for the next stage of your growth plan.",
  },
];

export const finalCta = {
  heading: "Bring your next Amazon move into focus",
  body: "Every Amazon account reaches a point where the next decision matters more than another round of activity. If you want an Amazon marketplace agency to look at what is holding the account back, bring RA Tech the current picture. We can start with the priorities that matter most to your business.",
  cta: { label: "Talk Amazon growth with RA Tech", href: "#audit" },
};

export const faqs = [
  {
    q: "What is an Amazon agency, and how much does it cost to hire one?",
    a: "An Amazon agency is an external team brought in for specialist marketplace work. Brands may use one for PPC, SEO, listing improvements, creative, or wider account management. Cost depends on what the agency is expected to own — a larger scope and heavier account workload generally require more support.",
  },
  {
    q: "When should a brand hire an Amazon agency instead of managing Amazon in-house?",
    a: "The tipping point often comes when Amazon begins competing with other priorities for staff time. A lack of specialist knowledge can create the same problem. Hiring an agency lets your team retain strategic control while experienced external people manage defined areas of execution.",
  },
  {
    q: "How do I choose the right Amazon agency for my brand?",
    a: "Do not judge an agency by the length of its service list. Look at the people assigned to your account, the work they can prove, how they report progress, and how clearly they explain ownership. Experienced specialists should be visible before you sign.",
  },
  {
    q: "What access does an Amazon agency need to my Seller Central account?",
    a: "Permissions should follow the job. Someone managing advertising needs different Seller Central access from a team handling catalog management or listings. Give each external user the level of access their responsibility actually requires.",
  },
  {
    q: "Who owns my account, campaigns, data, and creative assets if I leave?",
    a: "Ownership is much easier when settled at the contracting stage. Include campaign history, account data, creative outputs, and editable source files in that discussion. Anything excluded from client ownership should be named clearly before the agency starts producing or managing assets.",
  },
  {
    q: "Do Amazon agencies require long-term contracts?",
    a: "A long commitment is not an automatic requirement, and different providers use different commercial terms. Before signing, identify the minimum term, renewal mechanism, cancellation notice, exit costs, and any obligations that continue after you stop using the service.",
  },
  {
    q: "Can an Amazon agency take over an account another agency currently manages?",
    a: "Yes. The practical issue is not the takeover itself but the transfer of context. Your next agency should receive current access, campaign records, active tasks, recent performance information, and working documents. Better handovers reduce unnecessary rework early on.",
  },
  {
    q: "Can an Amazon agency work alongside our existing ecommerce team?",
    a: "It can. The agency supports the functions your current team does not want to own — internal staff may keep product or commercial responsibilities while external specialists focus on execution. The arrangement works best when responsibilities are agreed before day-to-day work starts.",
  },
  {
    q: "How long should we work with an agency before judging the results?",
    a: "Not every part of Amazon moves at the same pace. Advertising can produce useful signals relatively quickly, whereas SEO, listing optimization, and broader marketplace growth need enough traffic and sales data before the results mean much.",
  },
  {
    q: "Can an Amazon agency manage brands across multiple Amazon marketplaces?",
    a: "Possibly, but do not assume experience in one marketplace transfers everywhere. Ask about the countries involved, local advertising practices, language needs, Seller Central, Vendor Central, and FBA. International management should be supported by relevant operating experience.",
  },
];

export const revenueBands = [
  "Under $1M",
  "$1M - $5M",
  "$5M - $20M",
  "$20M - $60M",
  "Over $60M",
];

export const footer = [
  {
    heading: "Services",
    links: ["Amazon PPC", "Amazon SEO", "Design & creative", "Platform management", "Account management", "Free account audit"],
  },
  {
    heading: "Company",
    links: ["About RA Tech", "Our specialists", "Careers", "Partnerships", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Case studies", "Client testimonials", "Articles", "Webinar library", "FAQs"],
  },
];

export const socials = ["LinkedIn", "YouTube", "Instagram", "X", "Podcast"];

// Every menu item resolves to a real page; anchors are reserved for page sections.
for (const group of nav) {
 group.href=destination(group.label,group.href.startsWith('/')?group.href:'/resources');
 for (const col of group.columns??[]) {
  if(col.lead) col.lead.href=destination(col.lead.label);
  if(col.tail) col.tail.href=destination(col.tail.label);
  if(col.card) col.card.href=destination(col.card.title);
  for(const link of col.links) link.href=destination(link.label);
 }
}
for(const item of utilityNav){
 item.href=destination(item.label);
 for(const link of item.links??[]){link.href=destination(link.label,item.label==='Careers'?'/careers':'/resources');for(const child of link.links??[])child.href='/careers';}
}
for(const pillar of pillars) pillar.href=destination(pillar.title);
approach.cta.href='/services';
hero.secondary.href='/services';
hero.secondary.label='Explore our services';

const homeCopy=pages[''];
hero.body=homeCopy.intro[0];
const homeApproach=homeCopy.sections.find(s=>s.title.startsWith('How RA Tech Helps'));
if(homeApproach){approach.body=homeApproach.body;for(let i=0;i<pillars.length;i++){if(homeApproach.cards[i])pillars[i].body=homeApproach.cards[i].body.join(' ');}}
const homeWhy=homeCopy.sections.find(s=>s.title.startsWith('Why Brands'));
if(homeWhy){whyUs.intro=homeWhy.body.join(' ');for(let i=0;i<whyUs.items.length;i++){if(homeWhy.cards[i])whyUs.items[i].body=homeWhy.cards[i].body.join(' ');}}
const homeProcess=homeCopy.sections.find(s=>s.title.startsWith('How RA Tech Works'));
if(homeProcess){processIntro.intro=homeProcess.body.join(' ');for(let i=0;i<process.length;i++){if(homeProcess.cards[i])process[i].body=homeProcess.cards[i].body.join(' ');}}
const homeClosing=homeCopy.sections.find(s=>s.title.startsWith('Bring Your'));
if(homeClosing) finalCta.body=homeClosing.body.join(' ');
faqs.splice(0,faqs.length,...homeCopy.faqs);
