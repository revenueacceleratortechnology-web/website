import Link from 'next/link';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyContact } from './StickyContact';
import { CtaBand } from './CtaBand';
import { Faq } from './Faq';
import { Button } from './Button';
import { pages, serviceLinks, categoryLinks, dtcLinks, destination } from '@/lib/pages';

// Doc bullet lines ('* Label') become link pills when every label maps to a page, else a plain list.
function Body({ items, className }: { items: string[]; className: string }) {
 const out: ReactNode[]=[]; let list: string[]=[];
 const flush=()=>{ if(!list.length) return; const links=list.map(l=>({label:l,href:destination(l)}));
  out.push(links.every(l=>l.href!=='/contact')
   ?<ul key={'l'+out.length} className="mt-4 flex flex-wrap gap-2">{links.map(l=><li key={l.label}><Link href={l.href} className="inline-block rounded-full border border-hairline px-4 py-2 text-sm hover:border-signal hover:text-signal">{l.label} ↗</Link></li>)}</ul>
   :<ul key={'l'+out.length} className={`list-disc space-y-2 pl-5 ${className}`}>{links.map(l=><li key={l.label}>{l.label}</li>)}</ul>);
  list=[]; };
 items.forEach((p,i)=>{ if(p.startsWith('* ')) list.push(p.slice(2)); else { flush(); out.push(<p key={i} className={className}>{p}</p>); } }); flush();
 return <>{out}</>;
}
const slug=(t: string)=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export function ContentPage({ path }: { path: string }) {
 const page=pages[path];
 const visible=page.sections.filter(s=>!s.title.includes('Client')&&!s.title.includes('Delivered'));
 const links=path==='categories'?categoryLinks:path==='dtc'?dtcLinks:path==='services'?serviceLinks:path==='resources'||path==='digital-products'?[{label:'Amazon operating procedures',href:'/services/sops'},{label:'Advertising fundamentals',href:'/services/ppc-management'},{label:'Search and listing visibility',href:'/services/amazon-seo'},{label:'Book a coaching discussion',href:'/coaching'}]:[];
 return <><Header/><main id="main">
  <section className="detail-hero">
   <div className="shell">
    <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap gap-2 text-sm text-ash"><Link href="/">Home</Link><span>/</span><Link href={path.startsWith('services/')?'/services':path.startsWith('categories/')?'/categories':path.startsWith('dtc/')?'/dtc':'/'+path}>{path.split('/')[0].replaceAll('-',' ')}</Link></nav>
    <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_.85fr]">
     <div><p className="eyebrow text-signal">REVENUE ACCELERATOR TECHNOLOGY</p><h1 className="display mt-5 text-[length:var(--text-h1)]">{page.title}</h1><div className="mt-7 flex flex-wrap gap-3"><Button href="/contact" arrow>{page.heroCta??'Let’s talk about your growth'}</Button><Button href="#explore" variant="ghost">Explore the service</Button></div></div>
     <div className="space-y-4 text-base leading-relaxed text-ash">{page.intro.map((p,i)=><p key={i}>{p}</p>)}</div>
    </div>
   </div>
  </section>
  <div id="explore" className="scroll-mt-32"/>
  {links.length>0&&<section className="band bg-paper"><div className="shell"><p className="eyebrow text-signal">Find your starting point</p><h2 className="display mt-4 mb-8 text-[length:var(--text-h2)]">Explore {path==='resources'?'our resources':path==='digital-products'?'workflows and learning':path}</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{links.map((l,i)=><Link className="directory-card" key={l.href} href={l.href}><span className="text-sm text-signal">{String(i+1).padStart(2,'0')}</span><h3 className="mt-5 text-xl font-bold">{l.label}</h3><p className="mt-3 text-sm leading-relaxed text-ash">{pages[l.href.slice(1)]?.intro[0]?.split('. ')[0]}.</p><span className="mt-5 block font-semibold text-signal">Learn more ↗</span></Link>)}</div></div></section>}
  {visible.map((section,i)=><section id={slug(section.title)} key={i} className={`band border-t border-hairline ${i%2?'bg-mineral':'bg-paper'}`}><div className="shell">
   <div className="mb-9 max-w-3xl"><p className="eyebrow text-signal">{String(i+1).padStart(2,'0')} / {path==='about'?'Our story':'A clear path forward'}</p><h2 className="display mt-4 text-[length:var(--text-h2)]">{section.title}</h2><Body items={section.body} className="mt-5 text-base leading-relaxed text-ash"/>{i===visible.length-1&&page.cta&&<div className="mt-7"><Button href="/contact" arrow>{page.cta}</Button></div>}</div>
   {section.cards.length>0&&<div className={`grid gap-5 ${section.cards.length===1?'md:grid-cols-1':'md:grid-cols-2'} ${section.cards.length>2?'lg:grid-cols-3':''}`}>{section.cards.map((c,j)=><article key={j} className="rounded-xl border border-hairline bg-white p-7"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-signal-soft font-bold text-signal">↗</div><h3 className="text-xl font-bold leading-snug">{c.title}</h3><Body items={c.body} className="mt-3 text-sm leading-7 text-ash"/></article>)}</div>}
  </div></section>)}
  {page.faqs.length>0&&<Faq heading="Frequently asked questions" intro="More detail on scope, expectations, and working with RA Tech." items={page.faqs}/>}
  <section className="band border-t border-hairline"><div className="shell"><h2 className="display text-[length:var(--text-h3)]">Keep your Amazon work connected</h2><div className="mt-6 flex flex-wrap gap-3">{serviceLinks.slice(0,6).filter(l=>l.href!=='/'+path).map(l=><Link key={l.href} className="rounded-full border border-hairline px-5 py-3 text-sm hover:border-signal hover:text-signal" href={l.href}>{l.label} ↗</Link>)}</div></div></section>
  <CtaBand/>
 </main><Footer/><StickyContact/></>;
}
