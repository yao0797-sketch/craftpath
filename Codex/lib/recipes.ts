import data from '@/data/recipes.json';
export type Recipe={a:string;b:string;output:string};
export const recipes:Recipe[]=data.recipes;
export const slug=(s:string)=>s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const elements=Array.from(new Set(recipes.flatMap(r=>[r.a,r.b,r.output]))).sort();
export function findRecipes(q:string){const n=q.toLowerCase();return recipes.filter(r=>[r.a,r.b,r.output].some(x=>x.toLowerCase().includes(n))).slice(0,30)}
export function outputRecipes(name:string){return recipes.filter(r=>r.output.toLowerCase()===name.toLowerCase())}
export function inputRecipes(name:string){return recipes.filter(r=>r.a.toLowerCase()===name.toLowerCase()||r.b.toLowerCase()===name.toLowerCase())}
