# TODO

## Client follow-ups

- [] **Which logo mark is official — circle globe-meridian or diamond-R?** The website design uses the circle, all stationery uses the diamond-R. Now load-bearing: the header, footer, favicon and OG image all need one answer. Circle-mark + lockup vectors are now extracted from `Rondason_Logo.pptx` into `public/logos/`; the diamond-R still has no vector. Meridian geometry is now settled — the client supplied reference artwork and chose the **curved meridian**, so the two straight pptx bars were replaced by a meridian ellipse everywhere. Still open on this item: gold-on-light differs (`#C6952C` pptx vs `#DDB049` dc.html).
- [] **Exact legal entity name?** Website footer says "Rondason Group Pte. Ltd."; letterhead says "Rondason Pte. Ltd." — the footer legal line must match the ACRA registration.
- [] **Official tagline?** Brand note demands one tagline "consistently across every touchpoint", but material alternates between `GLOBAL COMMODITY MARKETS` (eyebrow/stationery) and "Connecting Global Commodity Markets" (deck/marketing-pack cover).
- [] **Image licensing — LAUNCH BLOCKER.** The site now ships the three client comps (`public/images/`) per the client-asset request, and all are unlicensed — the Markets collage carries a Dreamstime watermark; hero + alternates are Freepik previews. Client must buy licenses or approve replacements before launch (budget for stock or commissioned photography?).
- [] **Contact mechanism.** The design has no form — "Get in Touch" anchors to the footer's mailto link. Is mailto-only acceptable, or add a contact form (then: where do submissions go — Formspree/Resend to info@rondason.com)?
- [] **Phone attribution.** Three numbers are now live — Singapore `+65 9040 4928` (main), Australia `+61 430 353 343`, Japan `+81 70 1253 3343` (client, 2026-08-13). Still open: whose lines are these, and should the business cards (still placeholder `+65 0000 0000`) and the deck carry the same set? Also — are Australia and Japan actual offices? If so the JSON-LD should list real branch addresses rather than only contact points, and "headquartered in Singapore" copy may want a "with a presence in Australia and Japan" line.
- [] **Domain & hosting.** Brand note says "secure rondason.com early" — is it registered? DNS access for Vercel? Who owns the registrar account?
- [] **Optional substance.** Any stats (volumes, offices, founding year), team photos/bios, partner or bank logos they can supply? The About section is ~90 words and the page has no credentials beyond copy.
- [] **Agriculture vertical — knock-on copy.** The third market card (added 2026-08-12 from the client's screenshot) is live, and the Markets headline now reads "Three trading verticals". Other copy still describes the business as energy + metals only: the Expertise pillar ("Decades of combined trading experience across **energy, metals and mining** markets worldwide") and the Our Story / deck text. Should those be reworded to include agriculture? Also: does the deck/stationery need the same update, and is there a softs-specific image for the Markets background?
- [] **Harvested copy approval.** OK to use the marketing-pack 4-step process (Sourcing/Trading/Logistics/Finance), the pull quote, and the trade-finance credential line on the site? They exist in client material but not in the approved v2 page (see CONTENT.md → Harvested copy).

## Design & build

- [] Client sign-off on the **elevation redesign** (drawn meridian globe hero signature; 4-step process, pull quote and credential line surfaced from their marketing pack; their imagery re-integrated as dimmed texture).
- [] OG share image (1200×630) from the extracted mark/lockup (`public/logos/`); favicon (`src/app/icon.svg`) now uses the extracted mark but stays provisional pending the circle-vs-diamond ruling.
- [] Draw/extract the diamond-R mark as SVG if the client rules for it (circle mark + lockups are extracted — `public/logos/`, `src/components/ui/LogoMark.tsx`).
- [] Set the real production domain in `layout.tsx` `metadataBase` once rondason.com is confirmed; deploy to Vercel.
- [] CMS_PLAN.md deferred — write after the page exists, if the client wants content self-service (Riviera convention).

---

# DONE

## Client assets + logo extraction session (2026-08-12)

- [x] Re-integrated the client's three comps as dimmed texture layers (user request): hero photo 50% under a 100° navy `.hero-overlay` gradient with the globe drawing on top; Story texture at the client's 8%; Markets collage 30% under a `.markets-overlay` veil (replacing the 10% globe echo — globe signature is hero-only now). Licensing re-flagged as a launch blocker.
- [x] **Extracted the logo vectors verbatim from `Reference/Rondason_Logo.pptx`** (no image files inside — the logos are DrawingML shapes): LibreOffice headless → PDF → `pdftocairo -svg`, then card backgrounds dropped and viewBox cropped, path data untouched. Produced `public/logos/rondason-{mark,lockup}-on-{light,dark}.svg`; `LogoMark.tsx` + `icon.svg` now use the extracted slide-4 small cut (colors → currentColor).
- [x] Verified via headless screenshots (logo proof sheet on light/dark + hero/story/markets/footer); build + lint clean.
- Notes / gotchas:
  - The pptx wordmark fonts must be installed before rendering or LibreOffice substitutes: Source Serif 4 variable TTF works, but **variable Public Sans exports as Type3 bitmaps** — use the static USWDS release TTFs (fontconfig via `FONTCONFIG_FILE` pointing at a scratch fonts dir, no system install).
  - pdftocairo emits stroked paths with a `matrix(1,0,0,-1,0,810)` flip transform — account for it when computing crop boxes.
  - pptx raw shape offsets don't match the render (group transforms); trust the rendered PDF/SVG, not hand-decoded EMU.
  - Mark geometry discrepancy discovered: pptx = two straight meridian lines; dc.html web export = ellipse meridian. pptx adopted (brand identity source); flagged for client confirmation — **later overridden by the client, see below**.

## Logo meridian revision (2026-08-12)

- [x] Client supplied reference artwork of the mark with a **curved meridian** and asked us to match it. Measured the reference image (circle stroke centerline radius vs. meridian half-width) → the meridian is an ellipse with `rx ≈ 0.365 × r` and poles meeting the circle. Replaced the two straight vertical bars with a single `<ellipse>` in `LogoMark.tsx`, `src/app/icon.svg` and all four `public/logos/*.svg`; circle, equator bar, stroke weights and the wordmark outlines are untouched.
- [x] Verified by re-rendering the marks and overlaying them against the client's reference (widths match within ~1px at reference scale); build + lint clean.
- Note: `MeridianGlobe.tsx` (hero signature) already drew ellipse meridians, so the hero graphic and the logo now share the same geometry — no change needed there.

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
