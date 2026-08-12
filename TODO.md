# TODO

## Client follow-ups

- [] **Which logo mark is official — circle globe-meridian or diamond-R?** The website design uses the circle, all stationery uses the diamond-R. Now load-bearing: the header, footer, favicon and OG image all need one answer. Also request a vector (SVG/AI) file — none exists; both marks are CSS-only in the reference.
- [] **Exact legal entity name?** Website footer says "Rondason Group Pte. Ltd."; letterhead says "Rondason Pte. Ltd." — the footer legal line must match the ACRA registration.
- [] **Official tagline?** Brand note demands one tagline "consistently across every touchpoint", but material alternates between `GLOBAL COMMODITY MARKETS` (eyebrow/stationery) and "Connecting Global Commodity Markets" (deck/marketing-pack cover).
- [] **Image licensing.** All current images are unlicensed comps — the Markets collage carries a visible Dreamstime watermark; hero + alternates are Freepik previews. Client to buy licenses or approve replacements (budget for stock or commissioned photography?).
- [] **Contact mechanism.** The design has no form — "Get in Touch" anchors to the footer's mailto link. Is mailto-only acceptable, or add a contact form (then: where do submissions go — Formspree/Resend to info@rondason.com)?
- [] **Phone attribution.** Only one real number exists (`+65 9040 4928`, utility bar); business cards show placeholder `+65 0000 0000`. Confirm the number is correct for public display and whose it is.
- [] **Domain & hosting.** Brand note says "secure rondason.com early" — is it registered? DNS access for Vercel? Who owns the registrar account?
- [] **Optional substance.** Any stats (volumes, offices, founding year), team photos/bios, partner or bank logos they can supply? The About section is ~90 words and the page has no credentials beyond copy.
- [] **Harvested copy approval.** OK to use the marketing-pack 4-step process (Sourcing/Trading/Logistics/Finance), the pull quote, and the trade-finance credential line on the site? They exist in client material but not in the approved v2 page (see CONTENT.md → Harvested copy).

## Design & build

- [] Client sign-off on the **elevation redesign** (drawn meridian globe replaces all stock photography; 4-step process, pull quote and credential line surfaced from their marketing pack). If they insist on photography instead, imagery must be licensed — the old comps were unlicensed (Dreamstime watermark / Freepik).
- [] OG share image (1200×630) from the ruled logo mark; current favicon (`src/app/icon.svg`) is a placeholder (gold circle mark on navy) pending the client's logo ruling.
- [] Draw the diamond-R mark as SVG if the client rules for it (circle mark is done — `src/components/ui/LogoMark.tsx`).
- [] Set the real production domain in `layout.tsx` `metadataBase` once rondason.com is confirmed; deploy to Vercel.
- [] CMS_PLAN.md deferred — write after the page exists, if the client wants content self-service (Riviera convention).

---

# DONE

## Elevation redesign session (2026-08-12)

- [x] Redesigned the page beyond the v2 reference (user request: "elevate, not copy"): drawn `MeridianGlobe` SVG signature (hero draw-in orchestration + 10% echo in Markets) replaces **all** stock photography — no images ship, licensing problem designed out.
- [x] Continuous navy top field (deep-navy utility bar → navy header w/ gold-outline CTA → hero); deep-navy contact footer with `info@rondason.com` at display size ("contact as destination").
- [x] Display type scale (h1 40→72px, h2 30→44px clamps); italic Source Serif loaded for the marketing-pack pull-quote treatment.
- [x] Surfaced harvested copy: 4-step process as hairline "stations" with diamond ticks, pull quote above pillars, trade-finance credential under Markets — all pending client approval.
- [x] Verified via headless screenshots (desktop hero/full/mobile); build + lint clean, fully static; reduced-motion safe (base states visible, animation gated on `no-preference`).
- Notes / gotchas:
  - Globe geometry derives from the logo: straight parallels echo the mark's equator bar; stroke draw-in uses the `pathLength={1}` dasharray trick.
  - `ScrollReveal` renders a `div` — inside `<ol>` grids put it *inside* the `<li>`, never between `ol` and `li`.

## Build session (2026-08-12)

- [x] `git init` + `.gitignore` (`Reference/` under `# Local resources`); scaffolded Next.js 16.1.6 / React 19.2.3 / Tailwind v4 by hand, configs mirrored from Riviera Marine.
- [x] `globals.css` with the full "Meridian" token set (oklch, per DESIGN_GUIDELINE.md) in `:root` + `@theme inline`.
- [x] Implemented the whole one-pager: UtilityBar, Header (+ MobileMenu), Hero, Process, Story, Pillars, Markets, Footer — copy verbatim from CONTENT.md, metrics from v2.
- [x] Drew the circle globe-meridian mark as SVG (`LogoMark.tsx`) from the reference CSS geometry; placeholder favicon (`src/app/icon.svg`).
- [x] Designed mobile (nav collapses to hamburger panel, grids stack, padding 64→40→24, utility bar condenses to email) and motion (ScrollReveal fade-up 14px/600ms, staggered pillars/cards, `prefers-reduced-motion` respected via `useSyncExternalStore` hook).
- [x] Verified headless-browser screenshots against the v2 reference render (desktop + mobile); `npm run build` + `npm run lint` clean; fully static output.
- Notes / gotchas:
  - Source Serif 4 **must** be loaded with `axes: ["opsz"]` in `next/font` — without the optical-size axis the 44px hero h1 renders wider and wraps to two lines (reference loads `opsz 8..60`).
  - v2's global stylesheet colors footer nav links gold-deep (bare `a` rule) — replicated explicitly per-component; we set no global anchor color.
  - ESLint scans `Reference/` unless ignored — added `Reference/**` to `globalIgnores` in `eslint.config.mjs`.

## Documentation setup session (2026-08-12)

- [x] Explored all client material in `Reference/` and the doc conventions of previous approved projects (`../Riviera/Riviera-Marine-Landing` is the template).
- [x] Created the doc system: `CONTEXT.md`, `CONTENT.md`, `DESIGN_GUIDELINE.md`, `CLAUDE.md`, `TODO.md`, `README.md`.
- [x] Extracted all copy verbatim from `Rondason Website v2.dc.html` (canonical) + `Rondason_Group.pptx` (via zipfile/XML — no pptx lib installed) + v1/marketing-pack for harvested extras.
- [x] Extracted the visual system: all colors are authored in **oklch** in the dc.html files (hex anchors from pptx XML); named the theme "Meridian".
- Notes / gotchas:
  - v2's Process and Story paragraphs are extended versions of the deck's — v2 declared canonical.
  - v2 drops "financed" from the Metals card ("sourced, financed and delivered" in v1/MP) — flagged for client.
  - The two `370ffc18…` PNGs in uploads are byte-identical (v2 references the `-b5cd2277` one); `Rondason Envelope.dc.html` is referenced by the stationery pack but missing.
  - `.dc.html` files render standalone in a browser — fastest way to view the design.
