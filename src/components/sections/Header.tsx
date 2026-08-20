import { LogoMark } from '@/components/ui/LogoMark';
import { NAV_LINKS } from '@/components/nav-links';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-navy-line/40 bg-navy">
      <div className="relative flex h-full items-center justify-between px-6 md:px-10 lg:px-16">
        <a href="#home" className="flex items-center gap-3">
          <LogoMark size={30} className="text-gold-bright" />
          <span className="font-display text-[17px] tracking-[1px] text-on-navy">
            RONDASON GROUP
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] tracking-[0.5px] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-navy-body transition-colors duration-200 hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[2px] border border-gold-bright px-[22px] py-[9px] font-semibold text-gold-bright transition-colors duration-200 hover:bg-gold-bright hover:text-navy"
          >
            Get in Touch
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
