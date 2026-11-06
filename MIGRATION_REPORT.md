# Migration report

## Completed
- All 16 HTML pages → App Router routes (9 industry pages share one template + typed data).
- Navbar/dropdowns/mobile menu, hero carousel, FAQ accordion + search, contact form (validation + WhatsApp),
  counters, scroll-reveal, scroll-to-top, image fallback → React/TypeScript.
- Original CSS preserved (scoped). Local assets copied to `public/assets`. External image URLs unchanged.
- Verified: `tsc`, ESLint (0 errors), `npm run build`, headless-Chromium sweep of all routes at 1440px and 375px
  (no console errors, no horizontal scroll), plus interaction tests.

## Not verified
- External images (sandbox has no access to the hosts) · pixel comparison with the original · real-device testing.

## Deliberate deviations
- Navbars/footers unified per site section (originals differed slightly page to page).
- Contact form no longer double-fires `script.js` (old bug: "thank you" alert + reset even on validation failure).
- FAQ "no results" link → `/contact` (was non-existent `Contact Us.html`).
- Skipped no-op scripts: console logging, Ctrl+P override, active-nav-on-scroll.
- Images stay `<img>` (not `next/image`) to keep original CSS selectors and fallback behaviour.

## Pending / source issues (left as in the original)
- Missing pages: Hydraulic, Auto Electrical, Careers, Comparison, footer "Products" (`/our`) → 404.
- `imgs/` folder referenced but absent; root logo PNG used.
- Main-page top bar `tel:`/`mailto:` and footer show placeholder data (+1 555…, info@diecastingpro.com, "Die Casting Pro").
- Leaders page has "Dummy Name 1/2". Two Logo_RAJ JPGs unused. Five industry pages not in the navbar.
