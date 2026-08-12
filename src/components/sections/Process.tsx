import { Eyebrow } from '@/components/ui/Eyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[960px] px-6 py-16 text-center md:px-10 md:py-[100px] lg:px-16"
    >
      <ScrollReveal>
        <Eyebrow className="mb-4">Our Process</Eyebrow>
        <h2 className="mb-6 text-[26px] lg:text-[32px]">
          A disciplined process, built for scale
        </h2>
        <p className="text-[16px] leading-[1.8] text-body-soft">
          As a global commodity trading company, we source energy and metals
          from producers worldwide and deliver them to buyers across every
          major market. Our process spans global market analysis, procurement,
          logistics and risk management — combining data-driven forecasting
          with on-the-ground relationships to navigate volatile markets and
          deliver dependable outcomes as trade networks continue to evolve.
        </p>
      </ScrollReveal>
    </section>
  );
}
