import data from '@/data/recipes.json';
import targetData from '@/data/collection-targets.json';
export type Recipe={a:string;b:string;output:string};
export const recipes:Recipe[]=data.recipes;
export const slug=(s:string)=>s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const allElements=Array.from(new Set(recipes.flatMap(r=>[r.a,r.b,r.output]))).sort();
const targetNames=new Set(targetData.targets.map(name=>name.toLowerCase()));
// Keep the public page set deliberately curated. The imported 2024 candidate
// archive is useful for search and future review, but must not create tens of
// thousands of thin programmatic pages in one deployment.
export const elements=allElements.filter(name=>targetNames.has(name.toLowerCase()));
export function findRecipes(q:string){const n=q.toLowerCase();return recipes.filter(r=>[r.a,r.b,r.output].some(x=>x.toLowerCase().includes(n))).slice(0,30)}
export function outputRecipes(name:string){return recipes.filter(r=>r.output.toLowerCase()===name.toLowerCase())}
export function inputRecipes(name:string){return recipes.filter(r=>r.a.toLowerCase()===name.toLowerCase()||r.b.toLowerCase()===name.toLowerCase())}
