# Rondason Group — Site Content

All copy below is extracted **verbatim** from the client's reference files. Never invent or "improve" copy — see the Content Source Rule in `CLAUDE.md`. Where the same passage differs between files, the newer `Rondason Website v2.dc.html` version is canonical and the variant is flagged.

Source files (all in `Reference/`):
- `Website/Rondason Website v2.dc.html` — **v2**, the designed landing page (canonical)
- `Website/Rondason Website.dc.html` — **v1**, earlier deck-stage version (superseded, but has extra copy)
- `Website/Rondason Marketing Pack.dc.html` — **MP**, 4-page company profile
- `Website/Rondason Business Card.dc.html` / `Rondason Letterhead.dc.html` — stationery
- `Rondason_Group.pptx` — **deck**, 6-slide company deck (same copy as v2, minus v2's added sentences)
- `Rondason_Logo.pptx` + `Website/Rondason Logo.dc.html` — brand identity sheet

---

## Global Elements

### Utility bar (navy, top of page)

```
Email: info@rondason.com    Singapore +65 9040 4928    Australia +61 430 353 343    Japan +81 70 1253 3343
```

- **Source**: v2 utility bar, plus the Australia and Japan numbers supplied by the client on 2026-08-13. The client also asked that the original number be labelled "Singapore" — that label replaces the bare "Singapore" location tag the v2 bar ended with.
- The Singapore number is the main line and stays visible from `sm` up; Australia and Japan appear from `lg` up, where the bar has room.
- The Singapore number also appears on deck slide 6. Business cards still show the placeholder `+65 0000 0000`.

### Contact numbers (all three locations)

| Location | Number |
|---|---|
| Singapore (main) | +65 9040 4928 |
| Australia | +61 430 353 343 |
| Japan | +81 70 1253 3343 |

- **Source**: client, 2026-08-13. Single source of truth in code: `src/components/phone-numbers.ts` (utility bar, footer, and JSON-LD contact points all read from it).

### Header

- **Logo lockup**: circle mark + `RONDASON GROUP` (Source Serif 4, letter-spaced)
- **Nav**: Home · About · Markets · Contact — all anchor links on the one-pager (`#home`, `#about`, `#markets`, `#contact`)
- **CTA button**: "Get in Touch" (navy solid, links to `#contact`)
- **Source**: v2 header.

### Footer (`#contact`)

- **Left**: circle mark + `RONDASON GROUP`, then address:
  ```
  Gateway East, 152 Beach Road
  Singapore #10-07 189761
  ```
- **Middle**: nav repeat (Home · About · Markets · Contact)
- **Right**: `info@rondason.com` (mailto link) · `www.rondason.com`
- **Contact block** (above the divider, under the large email): all three numbers as labelled `tel:` links — Singapore · Australia · Japan (added 2026-08-13), then `www.rondason.com`
- **Legal line**: `© 2026 Rondason Group Pte. Ltd. All rights reserved.` · `UEN 202637629K`
  - *Inconsistency*: letterhead footer says `Rondason Pte. Ltd. — Registered in Singapore`. Legal entity name unconfirmed — see TODO client follow-ups.
  - UEN also emitted in the Organization JSON-LD as an `identifier` PropertyValue (`propertyID: "UEN"`).
- **Source**: v2 footer; UEN from client, 2026-08-19.

Note: the footer IS the contact section. There is no contact form anywhere in the design — lead capture is the mailto link and the "Get in Touch" anchor. Open question for client (TODO).

---

## Page: Home (/) — one-pager, 6 sections

### Section 1: Hero (`#home`, full-bleed image, navy gradient overlay)

- **Layout**: 520px-tall image (container ship / glowing trade routes), 180° navy gradient overlay (35% → 90% at 78%), text bottom-left, max-width 760px
- **Eyebrow**: `GLOBAL COMMODITY MARKETS`
- **Headline (h1)**: "Connecting Global Commodity Markets"
- **Body**: "Rondason Group uses its extensive global network to facilitate connections between buyers and sellers in the energy, metals, and agriculture sectors." *(client revision, 2026-08-20 — replaces the v2 line "Founded by industry experts with global expertise, Rondason Group is built for the next era of commodity trading — spanning energy, metals, and the infrastructure that connects them.")*
- **CTA**: none in-section (header "Get in Touch" serves this role)
- **Image**: `uploads/cargo-ship-loaded-with-containers-digitallyilluminated-world-map-with-interconnected-trade-routes-depicting-global-shipping-logistics_124507-307942.avif` — Freepik comp, unlicensed (TODO)
- **Source**: v2 hero; identical copy on deck slide 1.

### Section 2: Our Process (`#process`, white bg, centred, 960px)

- **Layout**: single centred prose block
- **Eyebrow**: `OUR PROCESS`
- **Headline (h2)**: "A disciplined process, built for scale"
- **Body**: "As a global commercial intermediary in energy and metals, we connect producers and buyers across every major market. Our process spans global market analysis, counterparty due diligence, logistics coordination and risk management — combining data-driven insight with on-the-ground relationships to structure reliable trade flows between sellers and buyers as markets continue to evolve."
  - *(Client-supplied revision, 2026-08-21 — replaces the v2 paragraph "As a global commodity trading company, we source energy and metals from producers worldwide and deliver them to buyers across every major market. Our process spans global market analysis, procurement, logistics and risk management — combining data-driven forecasting with on-the-ground relationships to navigate volatile markets and deliver dependable outcomes as trade networks continue to evolve." Note the repositioning: "commercial intermediary" / "connect", not "trading company" / "source and deliver" — and still energy + metals only, no agriculture; see TODO.)*
- **Source**: client feedback, 2026-08-21 (previously v2 process section; deck slide 2).
- **Design opportunity**: the harvested 4-step process (see below) could upgrade this prose-only section — client approval needed.

### Section 3: Our Story (`#about`, cream bg, 8%-opacity texture image)

- **Layout**: 2-col grid `0.7fr / 1.3fr` — eyebrow left, content right; background image `uploads/370ffc18c53a96c069adb785f83556b9-b5cd2277.png` (pump-jack + tech-icon overlay) at 8% opacity as texture
- **Eyebrow**: `OUR STORY`
- **Headline (h2)**: "Built by industry experts, from day one global"
- **Body ¶1**: "Rondason Group was founded by industry experts with decades of combined experience working within energy and metals across multiple continents. Rather than build around a single region, the company was structured from the outset to introduce global sellers and buyers to deliver wherever the market demands." *(second sentence revised by the client, 2026-08-20 — was "…structured from the outset with a global mandate — able to source, trade and deliver wherever the market demands.")*
- **Body ¶2**: "Commodity markets are being reshaped by the energy transition, new trade corridors and shifting supply chains. Rondason is built to move with that change — expanding deliberately into new markets, products and services as the opportunity arises, with an eye firmly on where global trade is heading next."
  - *(Deck slide 3 has shorter versions of both paragraphs; v2 is canonical.)*
- **Source**: v2 about section; deck slide 3.

### Section 4: Three Pillars (white bg, 3-col grid)

- **Layout**: 3 centred columns, each with a rotated-square (diamond) outline icon containing a small glyph (dot / bar / triangle)
- **Pillar 1 — Trust**: "Durable relationships and disciplined risk management, applied consistently to every counterparty."
- **Pillar 2 — Expertise**: "Decades of combined experience across energy, metals and mining markets." *(client reword, 2026-08-20 — dropped "trading" and "worldwide")*
- **Pillar 3 — Foresight**: "Built for where global markets are heading, not just where they've been."
- **Source**: v2 pillars section; deck slide 4 (identical).

### Section 5: Markets (`#markets`, navy bg, 35%-opacity collage image)

- **Layout**: navy section, background collage `uploads/industries-future-photo-collage-modern-sustainable-energy-construction-mining-349228743.webp` at 35% opacity (**visibly Dreamstime-watermarked — must be licensed or replaced, TODO**); 3 bordered cards
- **Eyebrow**: `MARKETS`
- **Headline (h2)**: "Three verticals, one global reach" *(v2 says "Two trading verticals" — third vertical added, then "trading" removed at the client's request, 2026-08-20)*
- **Card 1 — Energy**: "Crude, refined products, gas and coal." *(client cut everything from the em dash onwards, 2026-08-20)*
- **Card 2 — Metals & Mining**: "Base metals and mined commodities." *(client cut the trailing clause, 2026-08-20)*
  - *(v1 and MP say "sourced, financed and delivered" — v2 drops "financed". v2 canonical; variant worth confirming with client since the finance credential is a selling point.)*
- **Card 3 — Agriculture**: "Grains, oilseeds and soft commodities." *(client cut the trailing clause, 2026-08-20)*
  - *(Not in v2. Supplied by the client directly on 2026-08-12 as a design screenshot of the card — copy transcribed verbatim from that image.)*
- **Source**: v2 markets section; deck slide 5. Agriculture card: client screenshot, 2026-08-12.

### Section 6: Footer / Contact — see Global Elements above.

---

## Harvested copy (exists in v1 / deck / marketing pack, NOT in v2)

Candidates for enriching the build — each needs client approval before use on the site:

- **4-step process with descriptions** (MP page 3 "HOW WE WORK — Global reach, end to end"; v1 has the titles only):
  - **01 Sourcing** — "Origination directly from producers and established supply networks."
  - **02 Trading** — "Physical execution backed by disciplined risk management."
  - **03 Logistics** — "Freight, storage and delivery coordinated door to door."
  - **04 Finance** — "Settlement and trade finance structured around counterparty needs."
- **Pull quote** (MP page 3): "A single standard of trust, applied to every counterparty, every trade."
- **Trade-finance credential** (v1 About + MP page 2, absent from v2): "Backed by structured trade finance and long-standing banking and shipping relationships across the world's major ports." — **removed from the site by the client, 2026-08-20. Do not reinstate.**
- **Alternate hero sub** (v1): "Rondason is a global trading house moving energy and metals across the world's markets — built on trust, expertise and an international outlook."
- **Alternate About body** (v1/MP): "Founded by industry experts, Rondason trades physical energy and metals across the world's ports and terminals — pairing established relationships with disciplined risk management, so counterparties can trade with confidence at every stage of the supply chain."
- **Alternate headlines**: "Built on trust and expertise" (v1/MP About), "Two trading desks" (v1 Markets), "Global reach, end to end" (MP process)
- **Italic tagline treatment** (MP cover): *"Connecting Global Commodity Markets"* in Source Serif 4 italic gold.

## People (from business cards — not on the website design)

- **David Richardson** — Co-Founder — david@rondason.com
- **Jason Antunovich** — Co-Founder — jason@rondason.com
- Both cards use placeholder phone `+65 0000 0000` (TODO: real numbers).

---

## Content Mapping: Source → Site

| Site element | Copy source | Notes |
|---|---|---|
| Utility bar | v2 + client 2026-08-13 | Singapore number from v2/deck slide 6; Australia + Japan supplied directly |
| Hero eyebrow + h1 + sub | v2 = deck slide 1 | Identical in both |
| Our Process | v2 (deck slide 2 shorter) | v2 canonical |
| Our Story ¶1–¶2 | v2 (deck slide 3 shorter) | v2 canonical |
| Pillars ×3 | v2 = deck slide 4 | Identical |
| Markets cards | v2 (v1/MP add "financed") | v2 canonical |
| Footer address/legal | v2 = deck slide 6 | Entity-name conflict with letterhead |
| 4-step process, pull quote, finance line | MP / v1 only | Harvest candidates, need approval |

## Copy Tone Guidelines

- **Voice**: institutional, measured, confident. Third person ("Rondason Group was founded…") or first-person plural for process ("we source…"). Statements, not sales pitches.
- **Sentence shape**: long, balanced sentences with an em-dash pivot ("— spanning energy, metals, and…") is the house pattern; keep it.
- **Vocabulary**: physical-trading register — counterparty, origination, mandate, trade corridors, supply chains, risk management, settlement.
- **Claims**: qualitative only. The client provides no stats, volumes, offices, or founding year — do not fabricate any.
- **Taglines in circulation** (inconsistent — client to rule, see TODO): eyebrow/stationery use `GLOBAL COMMODITY MARKETS`; deck/MP cover use italic "Connecting Global Commodity Markets"; the circle-mark lockup uses neither (just `GROUP`).
- **Avoid**: hype, superlatives, startup jargon ("disrupt", "revolutionize"), exclamation marks, invented numbers, bold headlines (brand uses weight 500).
