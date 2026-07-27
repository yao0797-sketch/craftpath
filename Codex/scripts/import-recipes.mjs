import fs from 'node:fs';
const input=process.argv[2];
if(!input){console.error('Usage: node scripts/import-recipes.mjs path/to/recipes.json');process.exit(1)}
const incoming=JSON.parse(fs.readFileSync(input,'utf8'));
const current=JSON.parse(fs.readFileSync('data/recipes.json','utf8'));
const rows=Array.isArray(incoming)?incoming:incoming.recipes;
if(!Array.isArray(rows)) throw new Error('Input must be an array or an object with a recipes array');
const map=new Map(current.recipes.map(r=>[[r.a,r.b].sort().join('|'),r]));
for(const r of rows){
  if(!r.a||!r.b||!r.output) throw new Error(`Invalid recipe: ${JSON.stringify(r)}`);
  const key=[r.a.trim(),r.b.trim()].sort().join('|');
  const previous=map.get(key);
  if(previous && previous.output!==r.output) throw new Error(`Conflict for ${key}: ${previous.output} vs ${r.output}`);
  map.set(key,{a:r.a.trim(),b:r.b.trim(),output:r.output.trim(),source:r.source||'imported',status:r.status||'unverified'});
}
const result={metadata:{...current.metadata,lastImportedAt:new Date().toISOString()},recipes:[...map.values()]};
fs.writeFileSync('data/recipes.json',JSON.stringify(result,null,2)+'\n');
console.log(`Imported ${rows.length} rows; dataset now has ${result.recipes.length} recipes.`);
