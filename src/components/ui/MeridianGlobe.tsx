/**
 * The signature graphic: an orthographic line-globe drawn from the brand
 * mark's geometry (circle + meridian ellipses + straight parallels, like
 * the logo's equator bar), with trade-route arcs between port points.
 * Replaces stock photography entirely — gold line work on navy.
 *
 * `animated` runs the one-time draw-in orchestration (CSS, reduced-motion
 * safe: base state is fully drawn, animation only under no-preference).
 */

const C = 320; // center
const MERIDIANS = [105, 200, 262]; // ellipse rx values
// Straight chords like the logo's equator bar: [y, halfWidth]
const PARALLELS: Array<[number, number]> = [
  [140, 240],
  [230, 286],
  [320, 300],
  [410, 286],
  [500, 240],
];
// Port points, loosely: Gulf coast, NW Europe, Singapore, East Asia
const PORTS: Array<[number, number]> = [
  [140, 330],
  [225, 185],
  [430, 355],
  [470, 245],
];
const ROUTES = [
  'M140 330 Q 290 200 430 355',
  'M225 185 Q 350 130 470 245',
];

export function MeridianGlobe({
  animated = false,
  className = '',
}: {
  animated?: boolean;
  className?: string;
}) {
  const draw = (delay: number) =>
    animated
      ? { className: 'globe-draw', style: { animationDelay: `${delay}ms` } }
      : {};
  const fade = (delay: number) =>
    animated
      ? { className: 'globe-fade', style: { animationDelay: `${delay}ms` } }
      : {};

  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Globe outline */}
      <circle
        cx={C}
        cy={C}
        r={300}
        stroke="var(--color-gold-bright)"
        strokeOpacity={0.55}
        strokeWidth={1.5}
        pathLength={1}
        {...draw(0)}
      />
      {/* Meridians */}
      {MERIDIANS.map((rx, i) => (
        <ellipse
          key={rx}
          cx={C}
          cy={C}
          rx={rx}
          ry={300}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.28}
          strokeWidth={1}
          pathLength={1}
          {...draw(200 + i * 120)}
        />
      ))}
      {/* Parallels — straight chords, echoing the logo's equator bar */}
      {PARALLELS.map(([y, half], i) => (
        <line
          key={y}
          x1={C - half}
          y1={y}
          x2={C + half}
          y2={y}
          stroke="var(--color-gold-bright)"
          strokeOpacity={y === C ? 0.45 : 0.28}
          strokeWidth={y === C ? 1.5 : 1}
          pathLength={1}
          {...draw(550 + i * 100)}
        />
      ))}
      {/* Trade routes */}
      {ROUTES.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.85}
          strokeWidth={1.5}
          pathLength={1}
          {...draw(1000 + i * 180)}
        />
      ))}
      {/* Port points with pulsing halos */}
      {PORTS.map(([x, y], i) => (
        <g key={`${x}-${y}`} {...fade(1500 + i * 120)}>
          <circle cx={x} cy={y} r={4} fill="var(--color-gold-bright)" />
          {animated && (
            <circle
              cx={x}
              cy={y}
              r={8}
              stroke="var(--color-gold-bright)"
              strokeOpacity={0.5}
              strokeWidth={1}
              className="port-pulse"
              style={{ animationDelay: `${2000 + i * 700}ms` }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}
