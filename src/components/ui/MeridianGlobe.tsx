import { useId } from 'react';
import { MAP_FILL_PATH, MAP_OUTLINE_PATH } from './globe-map-data';

/**
 * The signature graphic: the brand mark blown up into a globe (client request
 * 2026-08-19 — "similar line work to the logo, mask a global map on there").
 * Primary strokes are the logo's exact geometry — circle, one curved meridian
 * ellipse at rx = 0.365 r, straight full-width equator bar — over a real
 * continent layer masked inside the circle. The view is an equatorial
 * orthographic centered on lon 100°E, which is what the logo's geometry
 * already implies (straight parallels + elliptical meridians) and puts the
 * Singapore HQ on the equator bar. Map data: Natural Earth 110m land (public
 * domain), pre-projected by scripts/generate-globe-map.mjs.
 *
 * Ports are real places: the three offices (Singapore, Tokyo, Port Hedland)
 * plus the Gulf (energy) and Shanghai (metals) route endpoints.
 *
 * `animated` runs the one-time draw-in orchestration (CSS, reduced-motion
 * safe: base state is fully drawn, animation only under no-preference).
 */

const C = 320; // center
const R = 300; // radius
// Logo meridian: rx = 0.365 r (client-settled geometry, see DESIGN_GUIDELINE)
const LOGO_MERIDIAN_RX = 0.365 * R;
// Secondary graticule meridians at Δlon 45° / 72° (rx = R·sin Δlon)
const MERIDIANS = [212, 285];
// Parallels at lat ±20° / ±40°: [y, halfWidth] — straight, like the equator bar
const PARALLELS: Array<[number, number]> = [
  [217.4, 281.9],
  [422.6, 281.9],
  [127.2, 229.8],
  [512.8, 229.8],
];
// Projected real locations: offices + trade endpoints
const PORTS: Array<[number, number]> = [
  [340.1, 312.9], // Singapore (HQ)
  [475.9, 145], // Tokyo
  [409.7, 424.1], // Port Hedland
  [115, 185.5], // Ras Tanura (Gulf)
  [413.9, 164.5], // Shanghai
];
const ROUTES = [
  'M115 185.5 Q 200 305 340.1 312.9', // Gulf energy → Singapore
  'M340.1 312.9 Q 452 255 475.9 145', // Singapore → Tokyo
  'M409.7 424.1 Q 495 295 413.9 164.5', // Port Hedland iron ore → Shanghai
];

export function MeridianGlobe({
  animated = false,
  className = '',
}: {
  animated?: boolean;
  className?: string;
}) {
  const clipId = useId();
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
      <clipPath id={clipId}>
        <circle cx={C} cy={C} r={R - 1} />
      </clipPath>
      {/* Continents masked into the mark */}
      <g clipPath={`url(#${clipId})`}>
        <path
          d={MAP_FILL_PATH}
          fill="var(--color-gold-bright)"
          fillOpacity={0.08}
          fillRule="evenodd"
          {...fade(400)}
        />
        <path
          d={MAP_OUTLINE_PATH}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.3}
          strokeWidth={1}
          {...fade(550)}
        />
      </g>
      {/* Logo geometry, scaled up: circle + curved meridian + equator bar */}
      <circle
        cx={C}
        cy={C}
        r={R}
        stroke="var(--color-gold-bright)"
        strokeOpacity={0.6}
        strokeWidth={2}
        pathLength={1}
        {...draw(0)}
      />
      <ellipse
        cx={C}
        cy={C}
        rx={LOGO_MERIDIAN_RX}
        ry={R}
        stroke="var(--color-gold-bright)"
        strokeOpacity={0.42}
        strokeWidth={2}
        pathLength={1}
        {...draw(250)}
      />
      <line
        x1={C - R}
        y1={C}
        x2={C + R}
        y2={C}
        stroke="var(--color-gold-bright)"
        strokeOpacity={0.5}
        strokeWidth={2}
        pathLength={1}
        {...draw(250)}
      />
      {/* Secondary graticule, hairline */}
      {MERIDIANS.map((rx, i) => (
        <ellipse
          key={rx}
          cx={C}
          cy={C}
          rx={rx}
          ry={R}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.2}
          strokeWidth={1}
          pathLength={1}
          {...draw(650 + i * 120)}
        />
      ))}
      {PARALLELS.map(([y, half], i) => (
        <line
          key={y}
          x1={C - half}
          y1={y}
          x2={C + half}
          y2={y}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.2}
          strokeWidth={1}
          pathLength={1}
          {...draw(650 + i * 100)}
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
          {...draw(1100 + i * 180)}
        />
      ))}
      {/* Port points with pulsing halos */}
      {PORTS.map(([x, y], i) => (
        <g key={`${x}-${y}`} {...fade(1600 + i * 120)}>
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
              style={{ animationDelay: `${2100 + i * 700}ms` }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}
