import {MetadataRoute} from 'next'; import {elements,slug} from '@/lib/recipes';
const base=process.env.NEXT_PUBLIC_SITE_URL||'https://example.com';
export default function sitemap():MetadataRoute.Sitemap{return [{url:base,lastModified:new Date()},...elements.map(e=>({url:`${base}/recipes/${slug(e)}`,lastModified:new Date()}))]}
