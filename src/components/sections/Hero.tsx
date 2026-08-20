import Image from 'next/image';
import { MeridianGlobe } from '@/components/ui/MeridianGlobe';
import { MarketTicker } from './MarketTicker';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--utility-bar-h)-var(--header-h))] flex-col overflow-hidden border-b border-navy-line/40 bg-navy"
    >
      {/* Client photograph sunk into the navy field as texture */}
      <Image
        src="/images/hero-trade-routes.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="hero-overlay absolute inset-0" />
      {/* Everything above the docked ticker, vertically centred in the fold */}
      <div className="relative flex flex-1 items-center">
        {/* Signature: the meridian globe draws itself on load. Width also
            tracks viewport height so short laptop screens don't clip it. */}
        <MeridianGlobe
          animated
          className="pointer-events-none absolute top-1/2 h-auto w-[420px] -translate-y-1/2 max-lg:right-[-45%] max-lg:opacity-30 lg:right-[-60px] lg:w-[min(560px,72svh)] xl:right-16"
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-10 md:px-10 lg:px-16">
          <div className="max-w-[680px]">
            <div className="rise mb-6 text-[13px] uppercase tracking-[3.5px] text-gold-bright">
              Global Commodity Markets
            </div>
            {/* Height-aware clamp: the headline yields on short viewports so
                the statement + CTA stay above the fold. */}
            <h1 className="rise rise-1 mb-6 text-[clamp(36px,min(6vw,8.5svh),72px)] leading-[1.05] text-on-navy">
              Connecting Global Commodity Markets
            </h1>
            <p className="rise rise-2 mb-8 max-w-[560px] text-[17px] leading-[1.75] text-on-navy-body">
              Rondason Group uses its extensive global network to facilitate
              connections between buyers and sellers in the energy, metals, and
              agriculture sectors.
            </p>
            <div className="rise rise-3">
              <a
                href="#contact"
                className="inline-block rounded-[2px] bg-gold-bright px-8 py-[13px] text-[13px] font-semibold tracking-[0.5px] text-navy transition-colors duration-200 hover:bg-gold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Ticker docked at the fold line — part of the first screen without
          pushing the hero down. */}
      <MarketTicker />
    </section>
  );
}
