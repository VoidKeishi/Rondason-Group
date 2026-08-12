import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Story() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream px-6 py-16 md:px-10 md:py-[100px] lg:px-16"
    >
      <Image
        src="/images/story-texture-placeholder.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.08]"
      />
      <div className="relative mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-[60px]">
        <ScrollReveal>
          <Eyebrow>Our Story</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={100} className="flex flex-col gap-5">
          <h2 className="text-[26px] lg:text-[32px]">
            Built by industry experts, from day one global
          </h2>
          <p className="max-w-[700px] text-[16px] leading-[1.8] text-body">
            Rondason Group was founded by industry experts with decades of
            combined experience working within energy and metals across
            multiple continents. Rather than build around a single region, the
            company was structured from the outset with a global mandate —
            able to source, trade and deliver wherever the market demands.
          </p>
          <p className="max-w-[700px] text-[16px] leading-[1.8] text-body">
            Commodity markets are being reshaped by the energy transition, new
            trade corridors and shifting supply chains. Rondason is built to
            move with that change — expanding deliberately into new markets,
            products and services as the opportunity arises, with an eye
            firmly on where global trade is heading next.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
