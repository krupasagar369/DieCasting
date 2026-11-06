# Pighalitadhatu website — Next.js migration

Migrated from the static HTML/CSS/vanilla-JS site (`die-casting-main.zip`) to
**Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · CVA · clsx · tailwind-merge**.

## Run
```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint
npm run build && npm start
```
Optional: copy `.env.example` to `.env.local` to change the WhatsApp number used by the contact form.

## Routes
`/` splash → `/home` · `/about` · `/leaders` · `/contact` · `/faqs` · `/blogs` ·
industries (`/aerospace`, `/automotive`, `/oil-and-gas`, `/energy`, `/railway`, `/heavy-engineering`,
`/consumer-appliances`, `/electronics-and-telecom`, `/industrial-equipment`).
Old `*.html` URLs redirect to these (see `next.config.ts`).

## Structure
- `src/app` – routes; `src/app/[slug]` renders all industry pages from `src/data/industries.ts`
- `src/components/layout` – TopBar, SiteNavbar, SiteFooter, SiteShell, PageEffects
- `src/components/{home,common,industries,ui}` – carousel, FAQ, contact form, Collapse, CountUp, ButtonLink (CVA)
- `src/styles` – the ORIGINAL stylesheets, scoped under wrapper classes (`:where(.site)`, `.page-about`, `.industries`…)
  by `scripts/scope-css.mjs` so per-page sheets can coexist. Visual accuracy was prioritised over Tailwind-only styling.
- `scripts/` – one-time migration helpers (HTML→JSX, CSS scoping, data extraction); not needed at runtime.

## Notes
- Bootstrap CSS is kept (the original design depends on it); Bootstrap JS is replaced by React components.
- Tailwind v4 has no preflight and only scans `not-found.tsx` (its utilities clash with Bootstrap class names).
- External image URLs are unchanged; hosts are whitelisted in `next.config.ts` (`images.remotePatterns`).
- Poppins is loaded from Google Fonts, as in the original.
