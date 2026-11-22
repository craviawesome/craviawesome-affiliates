# CraviAwesome Studios — Affiliate Landing Page

A mobile-friendly, static affiliate landing page ready for **Cloudflare Pages**. No framework, build command, or paid hosting required.

## Preview locally

Open `index.html` in a browser or run `python -m http.server 8000` from this directory.

## Add affiliate products

Edit `products.js`, the product log and source for the searchable catalog. Each entry has these fields.

| Field | What to enter |
| --- | --- |
| `title` | Product name as shown in the catalog |
| `category` | A collection name or a new category. The catalog adds filters for new categories automatically. |
| `description` | A short description that also contributes to search results |
| `image` | An authorized image URL or local asset path |
| `imageAlt` | A short description of the image |
| `url` | The original HTTPS affiliate URL. Leave blank to show **Coming soon**. |
| `pinUrl` | The corresponding canonical `https://www.pinterest.com/pin/<id>/` URL |

The initial catalog uses existing Geek Gift Guide creatives and Amazon affiliate URLs from the studio’s published Pins. Each entry was matched to its Pin and Amazon destination, with duplicate products consolidated. Review these fields together when adding or updating an entry.

## Pinterest gallery

The site uses Pinterest’s [Profile Add-On](https://help.pinterest.com/en/business/article/build-a-website-widget) to display the latest Pins from `@craviawesome`. The gallery updates through Pinterest and the **Browse all Pins on Pinterest** link goes to the full profile. Maintain the catalog independently in `products.js`.

## Publish on Cloudflare Pages

The existing Cloudflare Pages Git integration deploys from `main`. The site is served from the repository root with no build step.

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
