# CraviAwesome Studios — Affiliate Landing Page

A mobile-friendly, static affiliate landing page ready for **Cloudflare Pages**. No framework, build command, or paid hosting required.

## Preview locally

Open `index.html` in a browser or run `python -m http.server 8000` from this directory.

## Add affiliate products

Edit `products.js`. Each entry needs `title`, `category`, `description`, `image` (optional image URL or local path), and `url` (your affiliate URL). An empty URL displays **Coming soon** rather than a broken link. Keep product images licensed/authorized for your use, including any Amazon image requirements.

## Publish on Cloudflare Pages

1. Create a new GitHub repository (suggested name: `craviawesome-affiliates`) and upload these files to its root.
2. In Cloudflare, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (exact menu wording may vary).
3. Authorize the GitHub integration and select your repository.
4. Framework preset: **None**. Build command: **leave blank**. Output directory: `/` (repository root, if requested).
5. Choose an available project name, e.g. `craviawesome-studios`. Cloudflare will provide a `https://<project-name>.pages.dev` address. Availability is not guaranteed.
6. Deploy. Future pushes to the production branch will trigger deployments.

## Before sharing publicly

- Add a verified business contact method when available (the placeholder email has been removed).
- Add your own verified affiliate links and appropriate product imagery.
- Review the affiliate disclosure for every program you join. Ensure disclosures are conspicuous on relevant pages and social posts; verify the current Amazon Associates wording and requirements.
- Add a privacy policy if you collect visitor information, enable analytics, or use third-party services requiring one.
- Test links on mobile, and ensure your approved website/social properties are listed in your affiliate account as required.

This is a curated link site, not a checkout or inventory system.


## Official branding
The `assets/` directory contains the supplied official CraviAwesome gold wordmark and emblem, plus a favicon derived from the emblem. These are included in the header, hero, and footer. Keep these files when uploading to GitHub/Cloudflare Pages.

## Approved visual system (November 2026)
Blue `#202F57`, green `#193224` and `#0f6b4d`, gold `#DE9632`, light gold `#E1B747`, ivory `#F6EEDE`. No garnet or rose. Typography uses Cormorant Garamond for vintage editorial headings, with Cinzel available for small formal display accents and DM Sans for legibility. These are stylistic approximations of the Pinterest reference, not verified Canva font matches.
