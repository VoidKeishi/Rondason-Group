import { PHONE_NUMBERS } from '@/components/phone-numbers';

export function UtilityBar() {
  return (
    <div className="flex h-[var(--utility-bar-h)] items-center justify-end gap-5 bg-navy-deep px-6 text-[11.5px] tracking-[0.3px] text-on-navy-body md:px-10 lg:gap-6 lg:px-16">
      <span>
        Email:{' '}
        <a href="mailto:info@rondason.com" className="hover:text-on-navy">
          info@rondason.com
        </a>
      </span>
      {/* Singapore is the main line, so it survives down to sm; the other
          offices only appear once the bar has room for them. */}
      {PHONE_NUMBERS.map(({ label, tel, display }, index) => (
        <a
          key={tel}
          href={`tel:${tel}`}
          className={`hover:text-on-navy ${index === 0 ? 'hidden sm:inline' : 'hidden lg:inline'}`}
        >
          <span className="text-on-navy-muted">{label}</span> {display}
        </a>
      ))}
    </div>
  );
}
