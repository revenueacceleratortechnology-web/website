import documents from '@/content/documents.json';

export type ContentSection = { title: string; body: string[]; cards: { title: string; body: string[] }[]; after?: string[] };
export type ContentPage = { title: string; intro: string[]; sections: ContentSection[]; faqs: { q: string; a: string }[]; source?: string; cta?: string; heroCta?: string };
export const pages: Record<string, ContentPage> = { ...documents };

const services: [string, string, string][] = [
 ['listing-optimization','Listing optimization','Make titles, bullets, descriptions, and backend terms work together around product relevance and shopper questions. We review the existing listing, research search intent, and prepare copy for your approval.'],
 ['full-listing-optimization','Full listing optimization','Coordinate search research, written content, image direction, and A+ content in one product-page brief. The work starts with your priority ASINs and the gaps that prevent shoppers from understanding the offer.'],
 ['listing-images','Listing image design','Show shoppers what the product does, how it is used, and what makes it relevant to them. A clear image sequence combines product photography, benefit graphics, dimensions, and practical context.'],
 ['main-image-optimization','Main image optimization','Review your product’s first impression in search. We consider framing, packaging, product visibility, and category requirements before preparing a focused creative test.'],
 ['a-plus-content','A+ content','Build a richer product story with comparison modules, useful product information, and consistent visual design. Scope and publishing depend on your account’s eligibility and the modules available.'],
 ['brand-story','Brand story','Give customers a clear introduction to your brand and its product range. We connect your positioning, visual identity, and catalog into a coherent Brand Story experience.'],
 ['brand-store','Brand Store','Create an Amazon storefront that makes your range easy to explore. We plan navigation, category pages, product collections, and mobile layouts around how shoppers discover your products.'],
 ['brand-guidelines','Brand guidelines','Define the typography, color, imagery, and layout rules that keep your Amazon creative consistent. Existing brand assets are the starting point, with practical guidance for marketplace applications.'],
 ['account-suspension','Account suspension support','Understand the stated reason for an account restriction and organize the facts needed for a response. We review relevant notices and account history, identify corrective actions, and help prepare supporting material. Amazon controls reinstatement decisions.'],
 ['listing-reinstatement','Listing reinstatement','Investigate suppressed or deactivated ASINs through the notice, listing data, and supporting documents. The engagement focuses on the specific issue, required corrections, and follow-up with Amazon.'],
 ['brand-name-change','Brand name changes','Review the current catalog identity, evidence of brand ownership, and requested naming change. We help organize the marketplace submission and track the response without assuming Amazon will approve the request.'],
 ['upc-gs1','UPC / GS1 assistance','Investigate product identifier conflicts against catalog records and the documentation you provide. The next step depends on the identifier history, affected ASINs, and Amazon’s response.'],
 ['troubleshooting','Amazon troubleshooting','Resolve a defined Seller Central problem with a clear working brief. We review error messages, affected listings, previous cases, and account context before deciding what to change or escalate.'],
 ['advertising-audit','Advertising audit','Examine campaign structure, search terms, targeting, bids, and budget distribution to identify where paid activity needs attention. Findings separate wasted spend, testing opportunities, and constraints outside advertising.'],
 ['remote-fulfillment','Remote fulfilment','Assess whether eligible inventory and destination marketplaces fit your expansion plan. Setup support covers the account configuration and product checks agreed in the engagement.'],
 ['amazon-dsp','Amazon DSP','Plan programmatic advertising around an agreed audience, commercial objective, and measurement approach. Media scope, creative needs, investment, and reporting are established before campaigns begin.'],
 ['brand-registry','Brand Registry','Prepare the marketplace information needed for Brand Registry enrollment and access. Support covers Amazon-side preparation and coordination using the brand ownership documentation you provide.'],
 ['trademark-registration','Trademark registration','Organize brand and marketplace requirements before engaging a qualified trademark professional. Legal filing, availability, and registration advice need a separately agreed professional engagement.'],
 ['vendor-central','Vendor Central','Support the first-party account model through an agreed vendor-side work plan. Catalog, content, operational issues, and reporting are reviewed separately from Seller Central responsibilities.'],
 ['walmart-management','Walmart full service management','Define a Walmart marketplace operating plan covering catalog quality, advertising priorities, and recurring account responsibilities. We begin by reviewing your assortment, access, and operational readiness.'],
 ['walmart-account-audit','Walmart account audit','Review your Walmart account’s listings, catalog structure, operational concerns, and available performance data. The output is a prioritized set of findings and next steps.'],
 ['walmart-advertising-audit','Walmart advertising audit','Examine available advertising reports, product readiness, targeting, and spend distribution. Findings inform an agreed action plan for campaigns and the listings they support.'],
 ['sops','Amazon SOPs','Turn recurring marketplace tasks into clear working instructions. Document access, ownership, review steps, and escalation so your team can repeat the process consistently.'],
];
const dtc: [string,string,string][] = [
 ['ecommerce-audit','Ecommerce audit','Review your storefront journey, product information, acquisition channels, and available analytics to identify the most useful next improvements.'],
 ['website-seo','SEO for websites','Align technical search foundations, site structure, and page content with the searches relevant to your business. Priorities begin with your existing website and available search data.'],
 ['email-marketing','Email marketing','Plan welcome, cart recovery, post-purchase, and retention messages around the customer lifecycle. Content, consent, audience segments, and measurement are agreed before sending.'],
 ['backlink-building','Backlink building','Develop relevant editorial and partnership opportunities that support your website’s visibility. Begin with the pages that deserve attention and the audiences they can genuinely help.'],
 ['google-ads','Google Ads management','Connect search intent, campaign structure, ad copy, landing pages, and conversion measurement. Budgets and testing priorities follow your commercial goals.'],
 ['meta-ads','Meta Ads management','Develop paid social campaigns around audience relevance, creative testing, and conversion goals. Review the customer journey and measurement setup before increasing investment.'],
];
const categories: [string,string,string][] = [
 ['beauty-products','Beauty products','Beauty shoppers need clear product benefits, textures, usage instructions, and visual consistency. We connect product storytelling with relevant search terms and advertising priorities.'],
 ['consumables','Consumables','Repeat purchases depend on clear pack sizes, dependable availability, and a useful product experience. We review replenishment context alongside acquisition and listing performance.'],
 ['consumer-packaged-goods','Consumer packaged goods','Make packaging, quantities, variations, and product benefits easy to understand across a growing assortment. Connect your catalog organization with search and campaign priorities.'],
 ['hard-line-goods','Hard line goods','Help shoppers evaluate specifications, compatibility, dimensions, and practical use. Listing clarity and well-structured product data support better purchase decisions.'],
 ['home-and-kitchen','Home and kitchen','Show how products fit into everyday spaces through scale, materials, demonstrations, and use cases. Match discovery and creative to the questions shoppers ask before buying.'],
 ['soft-line-goods','Soft line goods','Bring clarity to size, material, fit, care instructions, and variations. Consistent imagery and a well-organized catalog help shoppers find the right product.'],
 ['supplements','Supplements','Keep ingredient information, serving details, and product positioning clear and supported. Creative and advertising briefs need to account for category restrictions and the documentation available.'],
];
function add(path: string,title: string,body: string,group: string) {
 pages[path]={title,intro:[body],sections:[
  {title:`A focused plan for ${title.toLowerCase()}`,body:[`We start with your current ${group}, the priorities you want to address, and the information available. The engagement is defined before work begins, with clear responsibilities and review points.`],cards:[
   {title:'Review the current position',body:['Bring recent performance data, existing assets, and the issue or opportunity you want to address. We establish the starting point together.']},
   {title:'Agree the scope',body:['Confirm deliverables, access, timing, approvals, and responsibilities. Your team retains control of commercial decisions.']},
   {title:'Execute and review',body:['Specialists complete the agreed work and explain the changes. The review identifies completed actions and any next steps.']},
  ]},
 ],faqs:[{q:'How do we get started?',a:'Contact RA Tech with your account or website context and the outcome you want to work toward. We use that conversation to confirm whether the service fits and define the scope.'},{q:'How is the service priced?',a:'Pricing depends on the agreed deliverables, complexity, and ongoing workload. Scope and commercial terms are confirmed before work begins.'}]};
}
for(const [slug,title,body] of services) add(`services/${slug}`,title,body,'Amazon account');
for(const [slug,title,body] of dtc) add(`dtc/${slug}`,title,body,'website and marketing channels');
for(const [slug,title,body] of categories) add(`categories/${slug}`,`Amazon agency for ${title.toLowerCase()}`,body,'catalog and category');
export const serviceLinks = [
 {label:'Full-service management',href:'/services/full-service-management'},
 {label:'PPC management',href:'/services/ppc-management'},
 {label:'Amazon SEO',href:'/services/amazon-seo'},
 {label:'Account audit',href:'/services/account-audit'},
 {label:'Growth consulting',href:'/services/growth-consulting'},
 {label:'Amazon design services',href:'/services/design'},
 ...services.map(([slug,label])=>({label,href:`/services/${slug}`}))
];
export const categoryLinks=categories.map(([slug,label])=>({label,href:`/categories/${slug}`}));
export const dtcLinks=dtc.map(([slug,label])=>({label,href:`/dtc/${slug}`}));
for(const [path,title,body] of [
 ['categories','Amazon category expertise','Different categories create different customer questions. Explore how account strategy, advertising, search, and creative can work together for your products.'],
 ['resources','Amazon seller resources','Explore practical starting points for understanding account performance, planning advertising, and improving product listings.'],
 ['results','Account performance and results','Evaluate the work through account data, clear reporting, and the changes that matter to your business. Contact RA Tech to discuss relevant experience for your category and scope.'],
 ['testimonials','Working with RA Tech','Choosing an agency means choosing the people responsible for recurring work. Talk with RA Tech about communication, ownership, reporting, and the experience relevant to your account.'],
 ['careers','Careers at RA Tech','Interested in Amazon advertising, creative, account operations, or technology? Contact the team about your experience and areas of interest. Current opportunities can be discussed directly.'],
 ['events','Events and learning','Speak with RA Tech about upcoming learning opportunities and practical Amazon sessions. For help with an immediate account question, contact the team directly.'],
 ['partnerships','Partner with RA Tech','Connect your marketplace, creative, or ecommerce capabilities with RA Tech. Start a conversation about the businesses you support and where our work could fit together.'],
 ['press','About RA Tech for the press','RA Tech began working in the Amazon ecosystem in 2023 and formally registered in 2026. Contact the team for company information and interview requests.'],
 ['digital-products','Amazon workflows and learning','Explore structured operating procedures to support your internal Amazon team. Discuss the process or capability you want to develop with RA Tech.'],
] ) add(path,title,body,'business');
const aliases: Record<string,string> = {
 'Amazon PPC':'/services/ppc-management','Amazon Design & Creative':'/services/design','Design & creative':'/services/design','Design & listing':'/services/design','Troubleshooting & recovery':'/services/troubleshooting','Specialist capabilities':'/services/amazon-dsp','Platform management':'/services/troubleshooting','Account management':'/services/full-service-management','Free account audit':'/services/account-audit','DTC services':'/dtc','Category Expertise':'/categories','Digital Products':'/digital-products','Results':'/results','Case studies':'/results','Testimonials':'/testimonials','Client testimonials':'/testimonials','About RA Tech':'/about','About Us':'/about','Our specialists':'/about','Our journey':'/about#our-journey-through-the-amazon-marketplace','Leadership':'/about','Contact':'/contact','Contact us':'/contact','All services':'/services','Services':'/services','Resources':'/resources','News':'/resources','Articles':'/resources','Webinar library':'/resources','FAQs':'/#faq','Careers':'/careers','Events':'/events','Partnerships':'/partnerships','Press':'/press','SOPs':'/services/sops','Free Amazon resources':'/resources','Remote Fulfillment':'/services/remote-fulfillment','E-commerce Audit':'/dtc/ecommerce-audit','Website SEO':'/dtc/website-seo','Grow your supplement brand':'/categories/supplements','Sell more beauty on marketplaces':'/categories/beauty-products','Build growth beyond marketplaces':'/dtc','Turn emails into revenue':'/dtc/email-marketing',
};
export function destination(label: string, fallback='/contact') {
 return aliases[label] || [...serviceLinks,...categoryLinks,...dtcLinks].find(l=>l.label.toLowerCase()===label.toLowerCase())?.href || fallback;
}
