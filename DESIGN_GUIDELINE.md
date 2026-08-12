# Rondason Group — Design Guideline

A human-friendly guide to the visual system. Theme name: **"Meridian"** — navy, gold and cream around the circle globe-meridian mark.

> **Direction: institutional, restrained, trustworthy.** Old-money-meets-commodities — the page should read like a private bank or an established trading house (Trafigura register), deliberately NOT startup-y. Navy + gold + warm cream, serif headlines at weight 500 (never bold), generous whitespace, wide-tracked uppercase eyebrows, thin-stroke geometric icons. Negative space of the brand: no bright/cyan/tech blues, no gradients as decoration (the only gradient is the hero's navy overlay), no rounded-pill buttons, no playful motion.

Everything below is measured from the client's own designs: `Reference/Website/Rondason Website v2.dc.html` (the page), `Reference/Website/Rondason Logo.dc.html` + `Reference/Rondason_Logo.pptx` (brand sheet). The client authored all colors in **oklch** — treat oklch as authoritative; hex values are converted/lifted from the pptx XML for tools that need them.

---

## Fonts

Loaded from Google Fonts in one URL (per all reference files): `Source Serif 4` (opsz 8..60, weights 400/500/600) + `Public Sans` (weights 400/500/600/700). In Next.js use `next/font/google` → CSS variables.

| Use | Font | Spec |
|---|---|---|
| Headlines (h1/h2), card & pillar titles, wordmark | Source Serif 4 | **Weight 500, never bold.** h1 44px / 1.15; h2 32px; card titles 24px |
| Body, UI, nav, footer | Public Sans | 400 body, 600 buttons/nav CTA. Body 16px / 1.7–1.8; small body 14.5–15px / 1.7 |
| Eyebrows | Public Sans | 13–14px, UPPERCASE, `letter-spacing: 3px`, gold |
| Wordmark `RONDASON GROUP` | Source Serif 4 | 16–17px, `letter-spacing: 1px` (brand sheet lockup: 44px, 2px tracking, with `GROUP` in Public Sans 12px / 4px tracking gold) |
| Utility bar / fine print | Public Sans | 11.5px, `letter-spacing: 0.3px` |

Type spec verbatim from the brand sheet: *"Source Serif 4 (headlines) · Public Sans (body/UI)"*.

## Colors

Proposed `globals.css` token names — create these in `@theme inline` during implementation.

### Brand core

| Name | oklch (authored) | Hex | Token | Usage |
|---|---|---|---|---|
| **Navy** | `oklch(0.2 0.05 260)` | `#08152C` | `--color-navy` | THE brand color: dark sections, header wordmark, buttons, logo mark on light, hero overlay. Hex from pptx XML (19 uses) |
| **Gold (bright)** | `oklch(0.78 0.13 85)` | `~#E7B643` | `--color-gold-bright` | Gold **on navy only**: eyebrows on dark, logo mark on dark, card borders on print. Hero eyebrow is one step brighter (`oklch(0.8 0.14 85)`) — treat as same token |
| **Gold (mid)** | `oklch(0.7 0.13 82)` | `~#DDB049` | `--color-gold` | Gold on light where text is large/decorative: `GROUP` in lockup, letterhead tagline, MP step numbers |
| **Gold (deep)** | `oklch(0.6 0.11 82)` | `~#A17924` | `--color-gold-deep` | **Links and eyebrows on light backgrounds** — the accessible gold (link hover: `oklch(0.5 0.11 82)`) |
| **Cream** | `oklch(0.97 0.012 90)` | `#F8F5EC` | `--color-cream` | Alternate section background (Our Story), light cards on print |
| **Off-white** | `oklch(0.99 0.005 90)` | `~#FCFBF7` | `--color-paper` | Page/document background (v1 slides, stationery); v2 page body is plain white |

### Neutrals

| Name | oklch | Hex | Token | Usage |
|---|---|---|---|---|
| Ink | `oklch(0.25 0.01 260)` | `~#343B45` | `--color-ink` | Nav links, default dark text |
| Body | `oklch(0.35 0.02 260)` | `~#414853` | `--color-body` | Story/About paragraphs |
| Body-soft | `oklch(0.4–0.45 0.02 260)` | `#4F5661`–`#565D68` | `--color-body-soft` | Process paragraph, pillar descriptions |
| Muted | `oklch(0.5 0.02 260)` | `~#5D646F` | `--color-muted` | Footer text, captions |
| Faint | `oklch(0.6 0.02 260)` | `~#767C86` | `--color-faint` | Copyright line |
| Border | `oklch(0.88 0.01 90)` | `#DAD7D0` | `--color-border` | Card borders, footer rule (header border is one step lighter: `oklch(0.9 0.01 90)`) |
| Canvas grey | `oklch(0.93 0.01 90)` | `#EAE8E1` | `--color-canvas` | Brand-sheet page bg — probably unused on the site |

### On-navy set

| Name | oklch | Usage |
|---|---|---|
| Text on navy | `oklch(0.97 0.01 90)` | Headlines/wordmark on dark |
| Body on navy | `oklch(0.82 0.02 90)` (cards), `oklch(0.9 0.02 90)` (hero sub), `oklch(0.78 0.02 90)` (contact) | Muted warm-white body text |
| Border on navy | `oklch(0.4 0.04 260)` | Markets card outlines |

Contrast notes: deep gold on white ≈ 4.9:1 (AA for the 13px bold-tracked eyebrows and links — verify in implementation); mid/bright gold are **decorative-only on light** (fails AA for text); bright gold on navy ≈ 8:1 (fine). Navy on white ≈ 16:1.

## Section Layout

- **Page padding**: 64px horizontal everywhere (`padding: … 64px`); utility bar 8px vertical; header 20px vertical.
- **Section padding**: 100px vertical; footer 80px top / 40px bottom.
- **Content width**: `max-width: 1200px` centred; the Process section narrows to `960px` (centred prose).
- **Background rhythm** (top to bottom): navy utility bar → white header → image hero (navy overlay) → **white** (Process) → **cream** (Story) → **white** (Pillars) → **navy** (Markets) → **white** (Footer).
- **Hero**: 520px tall, full-bleed image, overlay `linear-gradient(180deg, navy/0.35 0%, navy/0.9 78%)`, content bottom-aligned, `text-shadow: 0 2px 16px` dark navy on the h1.
- **Grids**: Story `0.7fr 1.3fr` gap 60px (eyebrow column left — signature editorial move, also used throughout v1/MP); Pillars `repeat(3, 1fr)` gap 44px; Markets `1fr 1fr` gap 40px.

## Components

| Component | Spec |
|---|---|
| **Primary button** ("Get in Touch") | Navy solid, warm-white text, Public Sans 600 13px, `padding: 10px 22px`, `border-radius: 2px`. No gradient, no shadow |
| **Card** (Markets, on navy) | `border: 1px solid oklch(0.4 0.04 260)`, `border-radius: 4px`, `padding: 40px`, transparent fill over the section image |
| **Card** (light, print/MP) | Cream fill, `--color-border` outline, radius 4px |
| **Eyebrow** | See Fonts. Gold-deep on light, gold-bright on navy. Always precedes the h2, `margin-bottom: 16px` |
| **Pillar icon** | 44×44px square, `border: 2px solid navy`, rotated 45° (diamond); inner glyph counter-rotated: dot (Trust), bar (Expertise), triangle (Foresight). Thin-stroke, geometric — the icon language for anything new |
| **Utility bar** | Navy, right-aligned inline spans, gap 24px |
| **Link** | `color: oklch(0.6 0.11 82)`, hover `oklch(0.5 0.11 82)`; nav links are ink-colored, no underline |

## Logo

Two marks exist in the client material, **no vector file for either** — both are built from CSS divs. An SVG must be drawn from the CSS geometry (TODO), and the client asked to rule on which mark wins (TODO).

1. **Circle mark** (globe/meridian) — **used on the website and brand sheet**: circle outline (2–2.5px stroke) containing a vertical ellipse (meridian) and a full-width horizontal bar (equator). Navy on light, gold-bright on navy. Header 30px, footer 26px, brand-sheet hero 76px.
2. **Diamond-R mark** — used on ALL stationery, deck template, marketing pack: 45°-rotated square outline with counter-rotated Source Serif 4 "R". Gold-bright outline + white R on navy; navy outline + navy R on light.

Working rule until the client decides: **website = circle mark** (matches v2), print = diamond-R.

Lockup: `RONDASON` in Source Serif 4 letter-spaced caps; website pairs it as `RONDASON GROUP` on one line; the brand sheet stacks `RONDASON` over gold `GROUP` (4px tracking).

## Imagery

Golden-hour industrial photography (ports, vessels, energy infrastructure) — always **heavily dimmed so it reads as texture, never subject**: hero under a 35→90% navy gradient, Story texture at **8% opacity**, Markets collage at **35% opacity** under navy.

Current assets in `Reference/Website/uploads/` — **all unlicensed comps, must be licensed or replaced before launch (TODO)**:

| File | Used | License problem |
|---|---|---|
| `cargo-ship-…_124507-307942.avif` | Hero | Freepik comp |
| `industries-future-photo-collage-…349228743.webp` | Markets bg (35%) | **Visible Dreamstime watermark** |
| `370ffc18…-b5cd2277.png` | Story texture (8%) | Unknown origin; byte-identical duplicate exists without suffix |
| `loaded-ships-port-…_1178410-17639.avif` | unused (alternate hero) | Freepik comp |
| `R.jfif` | unused | Bing-download, unknown origin |

When replacing: match the dusk/golden-hour warm-vs-navy palette so images sit naturally under the navy overlays.

## Motion

The reference material specifies **no motion** — this is ours to design (next session), with restraint matching the brand: slow fades and small translates, nothing springy.

Prescribed approach (Riviera-minimal convention): CSS tokens `--ease-flow` + `--duration-*` in `globals.css`, one `ScrollReveal` client component on IntersectionObserver, no animation library. Suggested starting point: sections fade-up 12–16px over ~600ms, staggered pillar/card reveals, `prefers-reduced-motion` respected.

## Responsive

**v2 is desktop-only** (fixed 64px padding, rigid grids, no media queries) — mobile is undesigned and is next-session work. Doc-level intents:

| Breakpoint | Intent |
|---|---|
| ≥1024px | As designed |
| ~768–1023px | Page padding 64→40px; Story grid stacks (eyebrow above content); Pillars 3→1 or 3→wrapped; Markets cards stack |
| <768px | Padding 24px; utility bar condenses (email only) or drops; nav collapses to menu; hero h1 44→32px, section h2 32→26px; hero height ~420px |

Type scale, exact breakpoints, and the mobile nav pattern to be decided during design.
