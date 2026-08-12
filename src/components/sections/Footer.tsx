import { LogoMark } from '@/components/ui/LogoMark';
import { NAV_LINKS } from '@/components/nav-links';

export function Footer() {
  return (
    <footer id="contact" className="px-6 pb-10 pt-16 md:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-10 border-b border-line pb-10">
        <div>
          <div className="mb-4 flex items-center gap-3 text-navy">
            <LogoMark size={26} />
            <span className="font-display text-[16px] tracking-[1px]">
              RONDASON GROUP
            </span>
          </div>
          <address className="text-[13px] not-italic leading-[1.8] text-muted">
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
              className="text-gold-deep transition-colors duration-200 hover:text-gold-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-[13px] leading-[1.8] text-muted">
          <a
            href="mailto:info@rondason.com"
            className="block text-gold-deep transition-colors duration-200 hover:text-gold-hover"
          >
            info@rondason.com
          </a>
          <span className="mt-1 block">www.rondason.com</span>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-[1200px] text-[11.5px] text-faint">
        © 2026 Rondason Group Pte. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
