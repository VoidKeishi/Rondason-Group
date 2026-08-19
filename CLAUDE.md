# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

Landing page for **Rondason Group** — a Singapore-based global physical commodity trading house (Energy + Metals & Mining + Agriculture), founded by David Richardson and Jason Antunovich. Single-route one-pager. The client supplied a **finished desktop design** (`Reference/Website/Rondason Website v2.dc.html`); our job is to implement it as a production Next.js site, then design what the reference leaves undefined (mobile, motion, contact mechanism).

**Status (2026-08-12)**: one-pager implemented, then **redesigned/elevated beyond v2** (see `DESIGN_GUIDELINE.md` → "Elevation pass"): drawn meridian-globe signature in the hero, display type scale, 4-step process, contact-as-destination footer. Client assets re-integrated on request: the three comps ship from `public/images/` as heavily dimmed texture layers (**unlicensed — licensing is a launch blocker, TODO**), and the circle-mark/lockup vectors are extracted verbatim from `Rondason_Logo.pptx` into `public/logos/` + `LogoMark.tsx`. Build/lint clean, fully static. Uses harvested copy (4 steps, pull quote, credential line) **pending client approval** — open questions in `TODO.md`.

## Content Source Rule (IMPORTANT)

**Every piece of content must come from the files in `Reference/` or from the client directly.** All approved copy is already extracted verbatim into `CONTENT.md` with per-section `Source:` citations. If content is needed that doesn't exist there (stats, team bios, extra sections):

1. **Ask the user** (preferred), or
2. Re-extract from the `Reference/` source files.

Never invent copy. Where reference files conflict, v2 (`Rondason Website v2.dc.html`) is canonical; conflicts are flagged inline in `CONTENT.md` and listed as client follow-ups in `TODO.md`.

## Tech Stack (Riviera-minimal convention)

- **Next.js 16.1.6** (App Router) + **React 19.2.3** + **TypeScript** strict — versions match `../Riviera/Riviera-Marine-Landing`
- **Tailwind CSS v4** via `@tailwindcss/postcss` — tokens in `@theme inline` in `src/app/globals.css`, **no `tailwind.config.js`**
- Fonts via `next/font/google` → CSS variables (Source Serif 4, Public Sans)
- **Dependency-minimal**: no icon lib, no animation lib. Motion = CSS tokens (`--ease-flow`, `--duration-*`) + one IntersectionObserver `ScrollReveal` client component
- ESLint flat config (`next/core-web-vitals` + `next/typescript`); no tests
- Static site, deploy on Vercel; path alias `@/*` → `./src/*`

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm run lint    # eslint
```

## Architecture

```
src/
  app/
    layout.tsx          # next/font (Source Serif 4 w/ opsz axis + italic, Public Sans), metadata, JSON-LD
    page.tsx            # the one-pager, composed of section components
    globals.css         # :root tokens + @theme inline + hero/globe load animations
    icon.svg            # favicon: extracted circle mark, gold on navy — pending circle-vs-diamond ruling
  hooks/
    use-reduced-motion.ts  # useSyncExternalStore over matchMedia
  components/
    nav-links.ts        # shared NAV_LINKS const (Header desktop nav, MobileMenu, Footer)
    phone-numbers.ts    # shared PHONE_NUMBERS const (UtilityBar, Footer, layout JSON-LD)
    ui/                 # ScrollReveal ('use client'), LogoMark (extracted circle-mark SVG),
                        # MeridianGlobe (signature hero SVG: logo geometry + masked continent
                        # layer from globe-map-data.ts, regenerate via
                        # scripts/generate-globe-map.mjs), Eyebrow
    sections/           # UtilityBar, Header, MobileMenu ('use client'), Hero, Process,
                        # Story, Pillars, Markets, Footer
```

`public/images/` — the three client comps with semantic names (hero/story/markets), always heavily dimmed; **unlicensed, see TODO**. `public/logos/` — mark + lockup SVGs extracted verbatim from `Reference/Rondason_Logo.pptx` (light + dark colorways).

- **Client-server boundary**: everything server-rendered except `ScrollReveal` and `MobileMenu`.
- **Fonts**: Source Serif 4 must load with `axes: ["opsz"]` — the optical-size axis is what keeps the 44px hero headline on one line, matching the reference.
- **Styling**: all colors/spacing through the `globals.css` tokens named in `DESIGN_GUIDELINE.md` — no ad-hoc hex values in components.

## Content Reference Files

Detailed content, design direction, and style specs live in separate files — **read these before making content or design changes**:

- `CONTEXT.md` — client brief provenance, brand directive, theme/vibe keywords
- `CONTENT.md` — full page copy (verbatim, source-cited), harvested extra copy, tone guidelines
- `DESIGN_GUIDELINE.md` — visual system: "Meridian" theme (navy/gold/cream), fonts, tokens, layout metrics, components, logo rules, imagery, motion & responsive intents
- `TODO.md` — open client questions and build tasks

## Site Structure

Single route `/`, section order:

1. Utility bar (navy — email · Singapore / Australia / Japan phone numbers)
2. Header (circle mark + RONDASON GROUP · anchor nav · "Get in Touch")
3. `#home` Hero — "Connecting Global Commodity Markets"
4. `#process` Our Process (white, centred)
5. `#about` Our Story (cream, 8% texture)
6. Three Pillars — Trust / Expertise / Foresight (white)
7. `#markets` Markets — Energy | Metals & Mining | Agriculture (navy, 35% collage)
8. `#contact` Footer (address, nav, email — no form in the design)

## Brand Quick Reference

- **Theme**: "Meridian" — navy / gold / cream, institutional and restrained (NOT startup-y)
- **Navy** `#08152C` / `oklch(0.2 0.05 260)` (from client pptx XML + dc.html — authored in oklch)
- **Gold**: bright `oklch(0.78 0.13 85)` on navy only; deep `oklch(0.6 0.11 82)` for links/eyebrows on light
- **Type**: Source Serif 4 headlines at **weight 500 (never bold)** · Public Sans body/UI; gold uppercase eyebrows, 3px tracking
- **Tagline** (unresolved variants): `GLOBAL COMMODITY MARKETS` vs "Connecting Global Commodity Markets" — see TODO
- **Logo**: circle globe-meridian mark on web (diamond-R on print); circle-mark + lockup vectors **extracted from the pptx** in `public/logos/`, with the meridian revised to the **curved ellipse** the client asked for (2026-08-12) in place of the pptx's two straight bars, and the **equator bar extended to the full diameter** (2026-08-19, settled — richer line-work treatments were tried and rejected by the client; the mark keeps only its three main strokes, the hero globe carries the rich line work); diamond-R still has no vector

## Resource Files

`Reference/` is client material — read-only, and must be **gitignored when the repo is initialized** (Riviera `# Local resources` convention).

- `Rondason_Group.pptx` — 6-slide company deck (copy source)
- `Rondason_Logo.pptx` — brand identity sheet (palette hexes in slide XML; brand note on slide 4)
- `Website/*.dc.html` — design-tool exports; **render standalone in a browser** (open v2 for the visual spec). Includes logo sheet, v1 site, deck template, marketing pack, letterhead, business cards, compliment slip (`Rondason Envelope.dc.html` is referenced but missing)
- `Website/uploads/` — stock comps, **all unlicensed** (Dreamstime watermark on the collage; Freepik AVIFs). The two `370ffc18…` PNGs are byte-identical; v2 uses the `-b5cd2277` one. `loaded-ships-…avif` and `R.jfif` are unused alternates
- `Website/*.js` + `.thumbnail` — design-canvas runtime + project thumbnail; ignore

## Implementation Notes

- Extract pptx text with `python3` + `zipfile`/XML (no pptx lib installed); AVIFs have no local decoder — view them in a browser.
- Use **Context7 MCP** for up-to-date Next.js/React/Tailwind docs during implementation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
