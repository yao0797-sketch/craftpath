import './globals.css';
import Link from 'next/link';
export const metadata={title:'CraftPath — Infinite Craft Recipes',description:'Find Infinite Craft recipes, combinations, and step-by-step paths.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><Link href="/" className="brand">CraftPath</Link><nav><Link href="/elements">Elements</Link><Link href="/popular">Popular Recipes</Link></nav></header><main>{children}</main><footer><p>CraftPath is an independent, unofficial fan-made tool. It is not affiliated with or endorsed by Neal.fun or NEALFUN INC.</p><nav><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></footer></body></html>}
