import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { ContentPage } from '@/components/ContentPage';
const existing = ['', 'about', 'services', 'services/full-service-management'];
export function generateStaticParams(){return Object.keys(pages).filter(p=>!existing.includes(p)).map(p=>({slug:p.split('/')}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{const {slug}=await params;const p=pages[slug.join('/')];return {title:p?.title,description:p?.intro[0],alternates:{canonical:'/'+slug.join('/')}};}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const {slug}=await params;const path=slug.join('/');if(!pages[path])notFound();return <ContentPage path={path}/>;}
