import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
      {/* Client port/industry collage sunk into the navy field
          (globe signature stays hero-only — photo replaces the echo here) */}
      <Image
        src="/images/industry-meets-sunset.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="markets-overlay absolute inset-0" />
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
