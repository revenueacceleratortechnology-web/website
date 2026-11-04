import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
export default function sitemap():MetadataRoute.Sitemap{return [...Object.keys(pages),'contact','privacy','terms'].map(path=>({url:`https://www.revenueacceleratortech.com/${path}`,changeFrequency:'monthly',priority:path===''?1:0.7}));}
