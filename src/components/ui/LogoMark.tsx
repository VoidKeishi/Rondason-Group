/**
 * Circle globe-meridian mark — SVG drawn from the CSS geometry in
 * Reference/Website/Rondason Logo.dc.html (circle outline + vertical
 * meridian ellipse + horizontal equator bar). Inherits currentColor:
 * navy on light surfaces, gold-bright on navy.
 */
export function LogoMark({
  size = 30,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
      <ellipse
        cx="16"
        cy="16"
        rx="6.5"
        ry="15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="16"
        x2="31"
        y2="16"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
