# CraviAwesome Studios — Affiliate Landing Page

A mobile-friendly, static affiliate landing page ready for **Cloudflare Pages**. No framework, build command, or paid hosting required.

## Preview locally

Open `index.html` in a browser or run `python -m http.server 8000` from this directory.

## Add affiliate products

Edit `products.js`, the product log and source for the searchable catalog. Each entry has these fields.

| Field | What to enter |
| --- | --- |
| `id` | A permanent, unique URL slug. Keep it when the product listing, title, or artwork changes. |
| `legacyPinId` | For existing products, preserve this alias so previously shared numeric links still work. |
| `title` | Product name as shown in the catalog |
| `category` | A collection name or a new category. The catalog adds filters for new categories automatically. |
| `description` | A short description that also contributes to search results |
| `image` | An authorized image URL or local asset path |
| `imageAlt` | A short description of the image |
| `url` | The full HTTPS Amazon Associates link from SiteStripe, using the website tracking ID. Leave blank to show **Coming soon**. |
| `pinUrl` | The corresponding canonical `https://www.pinterest.com/pin/<id>/` URL |
| `available` | Set to `false` if a listing is no longer usable. The card stays reachable and is marked unavailable. |
| `alternativeId` | Optional ID of a verified alternative already in the catalog. |

The initial catalog uses existing Geek Gift Guide creatives and Amazon affiliate URLs from the studio’s published Pins. Each entry was matched to its Pin and Amazon destination, with duplicate products consolidated. When adding or replacing a link, open the intended listing in a browser and copy the **Full Link** from SiteStripe with the website tracking ID selected. Check that the stored URL points to the correct listing and contains the website’s `tag` parameter. For routine catalog checks, inspect the stored URLs without automatically visiting affiliate links.

## Pinterest gallery

The site uses Pinterest’s [Profile Add-On](https://help.pinterest.com/en/business/article/build-a-website-widget) to display the latest Pins from `@craviawesome`. The gallery updates through Pinterest and the **Browse all Pins on Pinterest** link goes to the full profile. Maintain the catalog independently in `products.js`.

Link roundup Pins to `https://craviawesome-affiliates.pages.dev/geek-gift-guide/`. Link individual Pins to `https://craviawesome-affiliates.pages.dev/geek-gift-guide/?product=<id>` with the permanent ID from the product log. Open that URL to confirm it lands on the intended product before saving it as the Pin’s destination. Earlier numeric Pin links still work. The guide's existing studio artwork is served from `assets/gift-guide/`.

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
