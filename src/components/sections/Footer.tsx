import { LogoMark } from '@/components/ui/LogoMark';
import { NAV_LINKS } from '@/components/nav-links';
import { PHONE_NUMBERS } from '@/components/phone-numbers';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-navy-line/40 bg-navy-deep px-6 pb-10 pt-20 md:px-10 lg:px-16 lg:pt-28"
    >
      {/* Contact as destination: the approved contact line, set large */}
      <ScrollReveal className="mx-auto max-w-[1200px] border-b border-navy-line/60 pb-16 lg:pb-24">
        <div className="mb-6 text-[13px] uppercase tracking-[3.5px] text-gold-bright">
          Contact
        </div>
        <a
          href="mailto:info@rondason.com"
          className="font-display text-[clamp(28px,5vw,60px)] font-medium leading-[1.1] text-on-navy transition-colors duration-200 hover:text-gold-bright"
        >
          info@rondason.com
        </a>
        <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
          {PHONE_NUMBERS.map(({ label, tel, display }) => (
            <div key={tel}>
              <dt className="text-[11px] uppercase tracking-[2.5px] text-on-navy-muted">
                {label}
              </dt>
              <dd className="mt-1.5 text-[15px] tracking-[0.3px] text-on-navy-body">
                <a
                  href={`tel:${tel}`}
                  className="transition-colors duration-200 hover:text-gold-bright"
                >
                  {display}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 text-[14px] tracking-[0.3px] text-on-navy-muted">
          www.rondason.com
        </div>
      </ScrollReveal>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-10 pt-12">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <LogoMark size={26} className="text-gold-bright" />
            <span className="font-display text-[16px] tracking-[1px] text-on-navy">
              RONDASON GROUP
            </span>
          </div>
          <address className="text-[13px] not-italic leading-[1.8] text-on-navy-muted">
            Gateway East, 152 Beach Road
            <br />
            Singapore #10-07 189761
          </address>
        </div>
        <nav className="flex flex-wrap gap-7 text-[13px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-navy-body transition-colors duration-200 hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-16 max-w-[1200px] text-[11.5px] text-on-navy-muted/70">
        © 2026 Rondason Group Pte. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
