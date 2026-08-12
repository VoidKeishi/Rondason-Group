import { Eyebrow } from '@/components/ui/Eyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/* 4-step sequence from the client's marketing pack (HOW WE WORK, p.3) —
   a true ordered process, so the numbering carries meaning.
   Harvested copy: pending client approval, tracked in TODO.md. */
const STEPS = [
  {
    number: '01',
    title: 'Sourcing',
    description:
      'Origination directly from producers and established supply networks.',
  },
  {
    number: '02',
    title: 'Trading',
    description: 'Physical execution backed by disciplined risk management.',
  },
  {
    number: '03',
    title: 'Logistics',
    description: 'Freight, storage and delivery coordinated door to door.',
  },
  {
    number: '04',
    title: 'Finance',
    description:
      'Settlement and trade finance structured around counterparty needs.',
  },
] as const;

export function Process() {
  return (
    <section id="process" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-[120px] lg:px-16">
        <ScrollReveal className="mx-auto mb-16 max-w-[760px] text-center lg:mb-20">
          <Eyebrow className="mb-4">Our Process</Eyebrow>
          <h2 className="mb-6 text-[clamp(30px,4vw,44px)] leading-[1.15]">
            A disciplined process, built for scale
          </h2>
          <p className="text-[16px] leading-[1.8] text-body-soft">
            As a global commodity trading company, we source energy and metals
            from producers worldwide and deliver them to buyers across every
            major market. Our process spans global market analysis,
            procurement, logistics and risk management — combining data-driven
            forecasting with on-the-ground relationships to navigate volatile
            markets and deliver dependable outcomes as trade networks continue
            to evolve.
          </p>
        </ScrollReveal>
        <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.number}>
              {/* Stations on a meridian: hairline + the brand's diamond tick */}
              <ScrollReveal
                delay={i * 120}
                className="relative border-t border-line pt-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[4.5px] left-0 h-2 w-2 rotate-45 bg-gold-deep"
                />
                <div className="mb-3 text-[12px] font-semibold tracking-[2px] text-gold-deep">
                  {step.number}
                </div>
                <h3 className="mb-2 text-[22px]">{step.title}</h3>
                <p className="text-[15px] leading-[1.7] text-body-softer">
                  {step.description}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
