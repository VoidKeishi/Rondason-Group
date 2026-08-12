import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PILLARS = [
  {
    title: 'Trust',
    glyph: 'dot',
    description:
      'Durable relationships and disciplined risk management, applied consistently to every counterparty.',
  },
  {
    title: 'Expertise',
    glyph: 'bar',
    description:
      'Decades of combined trading experience across energy, metals and mining markets worldwide.',
  },
  {
    title: 'Foresight',
    glyph: 'triangle',
    description:
      "Built for where global markets are heading, not just where they've been.",
  },
] as const;

/* 44px diamond (rotated square) with a counter-rotated geometric glyph —
   the brand icon language, built from divs per the reference (no icon lib). */
function PillarIcon({ glyph }: { glyph: (typeof PILLARS)[number]['glyph'] }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto mb-6 flex h-11 w-11 rotate-45 items-center justify-center border-2 border-navy"
    >
      {glyph === 'dot' && (
        <div className="h-[9px] w-[9px] -rotate-45 rounded-full bg-navy" />
      )}
      {glyph === 'bar' && <div className="h-[2.5px] w-4 -rotate-45 bg-navy" />}
      {glyph === 'triangle' && (
        <div className="-rotate-45 border-x-[6px] border-b-[9px] border-x-transparent border-b-navy" />
      )}
    </div>
  );
}

export function Pillars() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-[120px] lg:px-16">
        {/* Pull quote from the marketing pack (p.3), in its italic-gold-serif
            cover treatment. Harvested copy — pending client approval (TODO). */}
        <ScrollReveal className="mx-auto mb-16 max-w-[820px] text-center lg:mb-24">
          <p className="font-display text-[clamp(24px,3vw,34px)] font-medium italic leading-[1.35] text-gold-deep">
            A single standard of trust, applied to every counterparty, every
            trade.
          </p>
        </ScrollReveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-11">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal
              key={pillar.title}
              delay={i * 120}
              className="text-center"
            >
              <PillarIcon glyph={pillar.glyph} />
              <h3 className="mb-3 text-[24px]">{pillar.title}</h3>
              <p className="mx-auto max-w-[300px] text-[14.5px] leading-[1.7] text-body-softer">
                {pillar.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
