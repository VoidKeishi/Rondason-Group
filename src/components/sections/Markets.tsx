import { Eyebrow } from '@/components/ui/Eyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MeridianGlobe } from '@/components/ui/MeridianGlobe';

const MARKETS = [
  {
    title: 'Energy',
    description:
      "Crude, refined products, gas and coal — physical trading across the world's ports and terminals.",
  },
  {
    title: 'Metals & Mining',
    description:
      'Base metals and mined commodities, sourced and delivered across global supply chains.',
  },
] as const;

export function Markets() {
  return (
    <section id="markets" className="relative overflow-hidden bg-navy">
      {/* Whisper-opacity echo of the hero globe cresting from below */}
      <MeridianGlobe className="pointer-events-none absolute -bottom-[55%] left-1/2 h-auto w-[900px] -translate-x-1/2 opacity-[0.1] lg:w-[1100px]" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-[120px] lg:px-16">
        <ScrollReveal>
          <Eyebrow tone="dark" className="mb-4">
            Markets
          </Eyebrow>
          <h2 className="mb-12 max-w-[640px] text-[clamp(30px,4vw,44px)] leading-[1.15] text-on-navy lg:mb-16">
            Two trading verticals, one global reach
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {MARKETS.map((market, i) => (
            <ScrollReveal
              key={market.title}
              delay={i * 120}
              className="rounded-[4px] border border-navy-line bg-navy/60 p-8 transition-colors duration-700 hover:border-gold-bright/50 lg:p-12"
            >
              <h3 className="mb-4 text-[26px] text-on-navy">{market.title}</h3>
              <p className="max-w-[420px] text-[15px] leading-[1.75] text-on-navy-muted">
                {market.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
        {/* Credential line from v1/marketing pack — pending client approval (TODO) */}
        <ScrollReveal delay={200} className="mt-14 lg:mt-16">
          <p className="mx-auto max-w-[560px] text-center text-[14px] leading-[1.8] text-on-navy-muted">
            Backed by structured trade finance and long-standing banking and
            shipping relationships across the world&apos;s major ports.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
