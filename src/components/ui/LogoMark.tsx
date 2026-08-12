/**
 * Circle globe-meridian mark — client vector artwork extracted verbatim from
 * Reference/Rondason_Logo.pptx (rendered via LibreOffice + pdftocairo with
 * the brand fonts installed; path data untouched, colors → currentColor).
 * This is the slide-4 letterhead cut — the client's own small-size version,
 * whose stroke is proportionally thicker than the large slide-2 mark, so it
 * stays legible at header size. Inherits currentColor: navy on light
 * surfaces, gold on navy. Full extracted assets live in public/logos/.
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
      viewBox="146.595 446.896 51.732 51.732"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        fill="none"
        strokeWidth="2.23933"
        strokeLinecap="butt"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M 147.714844 337.238281 C 147.714844 341.574219 148.847656 345.855469 151.03125 349.597656 C 153.214844 353.367188 156.332031 356.484375 160.101562 358.667969 C 163.84375 360.851562 168.121094 361.984375 172.460938 361.984375 C 176.796875 361.984375 181.078125 360.851562 184.847656 358.667969 C 188.589844 356.484375 191.707031 353.367188 193.890625 349.597656 C 196.070312 345.855469 197.207031 341.574219 197.207031 337.238281 C 197.207031 332.902344 196.070312 328.621094 193.890625 324.851562 C 191.707031 321.109375 188.589844 317.992188 184.847656 315.808594 C 181.078125 313.625 176.796875 312.492188 172.460938 312.492188 C 168.121094 312.492188 163.84375 313.625 160.101562 315.808594 C 156.332031 317.992188 153.214844 321.109375 151.03125 324.851562 C 148.847656 328.621094 147.714844 332.902344 147.714844 337.238281 Z M 147.714844 337.238281"
        transform="matrix(1, 0, 0, -1, 0, 810)"
      />
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M 164.238281 495.242188 L 163.132812 495.242188 L 163.132812 450.253906 L 165.34375 450.253906 L 165.34375 495.242188 Z M 164.238281 495.242188"
      />
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M 180.738281 495.242188 L 179.632812 495.242188 L 179.632812 450.253906 L 181.84375 450.253906 L 181.84375 495.242188 Z M 180.738281 495.242188"
      />
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M 170.21875 473.867188 L 147.714844 473.867188 L 147.714844 471.65625 L 192.699219 471.65625 L 192.699219 473.867188 Z M 170.21875 473.867188"
      />
    </svg>
  );
}
