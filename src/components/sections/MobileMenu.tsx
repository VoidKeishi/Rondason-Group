'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/components/nav-links';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-[2px] w-5 bg-on-navy transition-transform duration-200 ${
            open ? 'translate-y-[7px] rotate-45' : ''
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-on-navy transition-opacity duration-200 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-on-navy transition-transform duration-200 ${
            open ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full flex flex-col border-b border-navy-line/40 bg-navy px-6 py-4 md:px-10"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[14px] tracking-[0.5px] text-on-navy-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 self-start rounded-[2px] border border-gold-bright px-[22px] py-[9px] text-[13px] font-semibold text-gold-bright"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </div>
  );
}
