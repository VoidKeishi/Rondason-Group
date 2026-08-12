export function UtilityBar() {
  return (
    <div className="flex justify-end gap-6 bg-navy-deep px-6 py-2 text-[11.5px] tracking-[0.3px] text-on-navy-body md:px-10 lg:px-16">
      <span>
        Email:{' '}
        <a href="mailto:info@rondason.com" className="hover:text-on-navy">
          info@rondason.com
        </a>
      </span>
      <a href="tel:+6590404928" className="hidden hover:text-on-navy sm:inline">
        +65 9040 4928
      </a>
      <span className="hidden sm:inline">Singapore</span>
    </div>
  );
}
