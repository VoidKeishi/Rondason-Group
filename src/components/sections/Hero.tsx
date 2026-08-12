import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-[420px] lg:h-[520px]">
      <Image
        src="/images/hero-placeholder.avif"
        alt="Container ship over an illuminated map of global trade routes"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0 flex flex-col justify-end px-6 pb-12 md:px-10 lg:px-16">
        <div className="max-w-[760px]">
          <div className="mb-[18px] text-[14px] uppercase tracking-[3px] text-gold-bright">
            Global Commodity Markets
          </div>
          <h1 className="hero-title-shadow mb-5 text-[32px] leading-[1.15] text-on-navy lg:text-[44px]">
            Connecting Global Commodity Markets
          </h1>
          <p className="text-[16px] leading-[1.7] text-on-navy-body">
            Founded by industry experts with global expertise, Rondason Group is
            built for the next era of commodity trading — spanning energy,
            metals, and the infrastructure that connects them.
          </p>
        </div>
      </div>
    </section>
  );
}
