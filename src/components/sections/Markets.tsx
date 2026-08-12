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
    <section
      id="markets"
      className="relative overflow-hidden bg-navy px-6 py-16 md:px-10 md:py-[100px] lg:px-16"
    >
      <Image
        src="/images/markets-collage-placeholder.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <ScrollReveal>
          <Eyebrow tone="dark" className="mb-4">
            Markets
          </Eyebrow>
          <h2 className="mb-12 text-[26px] text-on-navy lg:text-[32px]">
            Two trading verticals, one global reach
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {MARKETS.map((market, i) => (
            <ScrollReveal
              key={market.title}
              delay={i * 100}
              className="rounded-[4px] border border-navy-line p-8 lg:p-10"
            >
              <h3 className="mb-3.5 text-[24px] text-on-navy">
                {market.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-on-navy-muted">
                {market.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
