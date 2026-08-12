import { MeridianGlobe } from '@/components/ui/MeridianGlobe';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-navy-line/40 bg-navy"
    >
      {/* Signature: the meridian globe draws itself on load */}
      <MeridianGlobe
        animated
        className="pointer-events-none absolute top-1/2 h-auto w-[420px] -translate-y-1/2 max-lg:right-[-45%] max-lg:opacity-30 lg:right-[-60px] lg:w-[560px] xl:right-16"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <div className="max-w-[680px]">
          <div className="rise mb-6 text-[13px] uppercase tracking-[3.5px] text-gold-bright">
            Global Commodity Markets
          </div>
          <h1 className="rise rise-1 mb-7 text-[clamp(40px,6vw,72px)] leading-[1.05] text-on-navy">
            Connecting Global Commodity Markets
          </h1>
          <p className="rise rise-2 mb-10 max-w-[560px] text-[17px] leading-[1.75] text-on-navy-body">
            Founded by industry experts with global expertise, Rondason Group is
            built for the next era of commodity trading — spanning energy,
            metals, and the infrastructure that connects them.
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
    </section>
  );
}
