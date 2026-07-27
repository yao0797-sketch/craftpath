# CraftPath

SEO-first MVP for an unofficial Infinite Craft recipe reference site.

## Run locally

```bash
npm install
npm run data:validate
npm run dev
```

Import a reviewed JSON dataset with:

```bash
npm run data:import -- data/incoming/recipes.json
npm run data:validate
```

Imported records default to `unverified`; only data with a clear source should be promoted for indexing.

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment. Replace `data/recipes.json` only with data that has a clear source and verification status. The current dataset is intentionally small demo data and should not be treated as a complete game database.

## Deploy

Import the repository into Vercel (or any Next.js host), use `npm run build`, and connect the production domain to Google Search Console. Add ads only after useful pages are indexed and the site has passed publisher-policy review.

The included `vercel.json` keeps the deployment defaults explicit. Set `NEXT_PUBLIC_SITE_URL` in the hosting environment before the first production build.
