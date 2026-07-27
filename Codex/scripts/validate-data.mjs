import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync('data/recipes.json','utf8'));
const seen=new Set(); let errors=0;
for(const r of d.recipes){
  if(!r.a||!r.b||!r.output){console.error('Missing field',r);errors++;continue}
  const k=[r.a,r.b].sort().join('|');
  if(seen.has(k)){console.error('Duplicate inputs:',k);errors++}
  seen.add(k);
}
if(errors) process.exit(1);
console.log(`Validated ${d.recipes.length} recipes and ${new Set(d.recipes.flatMap(r=>[r.a,r.b,r.output])).size} elements.`);
