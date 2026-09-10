type Props = { invert?: boolean; markOnly?: boolean; className?: string };
export function Logo({ invert=false,markOnly=false,className='' }:Props){
 return <span className={`inline-flex items-center gap-3 ${className}`}>
  <svg viewBox="0 0 56 56" className="h-11 w-11 shrink-0" role="img" aria-label="RA Tech"><rect width="56" height="56" rx="12" fill="#F5793B"/><path d="M13 40V16h12c11 0 11 14 0 14H13m12 0 10 10M28 40l12-24 7 24M34 31h10" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round"/></svg>
  {!markOnly&&<span className="flex flex-col"><span className={`text-[1.65rem] font-extrabold leading-none tracking-[-.07em] ${invert?'text-white':'text-ink'}`}>RA<span className="font-medium tracking-[-.05em]">Tech</span><span className="text-signal">.</span></span><span className={`mt-1.5 text-[.48rem] font-semibold uppercase tracking-[.14em] ${invert?'text-white/65':'text-ash'}`}>Revenue Accelerator Technology</span></span>}
 </span>;
}
