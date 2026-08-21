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
 * Region labels (client 2026-08-21): Middle East, Southeast Asia,
 * Australia, Japan — each anchored to a real projected place (Ras Tanura,
 * Singapore, Port Hedland, Tokyo). Connection arcs run hub-and-spoke
 * through Singapore, smoothed and fainter than the first iteration, and
 * under `animated` they perpetually draw/dissolve — the globe's continuous
 * motion.
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
// Labeled regions (client 2026-08-21: the connection dots/lines were "not
// in keeping" — fade in place names instead, no lines; his list: Middle
// East, South East Asia, Australia, Japan). Each anchor dot is still a
// real projected place — Ras Tanura, Singapore (HQ), Port Hedland, Tokyo.
// Shanghai (the old iron-ore route endpoint) is dropped: not on the list.
// Text positions dodge the equator bar and stay inside the disc.
const LABELS: Array<{
  name: string;
  dot: [number, number];
  text: [number, number];
  anchor: 'start' | 'middle';
}> = [
  { name: 'MIDDLE EAST', dot: [115, 185.5], text: [131, 190.5], anchor: 'start' },
  { name: 'SOUTHEAST ASIA', dot: [340.1, 312.9], text: [356, 343], anchor: 'start' },
  { name: 'AUSTRALIA', dot: [409.7, 424.1], text: [424, 452], anchor: 'start' },
  { name: 'JAPAN', dot: [475.9, 145], text: [475.9, 128], anchor: 'middle' },
];
// Connection arcs, restored smoothed (user 2026-08-21: keep the lines —
// they illustrate the "Connecting…" headline — but calmer). Hub-and-spoke
// through the Singapore HQ dot, so no endpoint needs the dropped Shanghai
// point. Gentler control points and a finer, fainter stroke than the
// original arcs; under `animated` each perpetually draws itself, holds and
// dissolves (the continuous motion, replacing the meridian sweep).
const ROUTES = [
  'M115 185.5 Q 210 290 340.1 312.9', // Middle East → Singapore
  'M409.7 424.1 Q 392 372 340.1 312.9', // Australia → Singapore
  'M340.1 312.9 Q 440 250 475.9 145', // Singapore → Japan
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
      {/* Connection arcs — with `animated`, each endlessly draws itself
          tip-first, holds, then dissolves (staggered thirds of the cycle,
          so a line is always in motion somewhere). Static/reduced-motion
          base state: all three fully drawn. */}
      {ROUTES.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="var(--color-gold-bright)"
          strokeOpacity={0.5}
          strokeWidth={1.25}
          pathLength={1}
          className={animated ? 'globe-route' : undefined}
          style={animated ? { animationDelay: `${1400 + i * 5000}ms` } : undefined}
        />
      ))}
      {/* Region names — each fades in with the load orchestration, then
          breathes slowly out of phase with the others, so attention drifts
          around the globe and the graphic never sits still. Static base
          opacity keeps every name legible under reduced motion. */}
      {LABELS.map(({ name, dot: [dx, dy], text: [tx, ty], anchor }, i) => (
        <g key={name} {...fade(1100 + i * 200)}>
          <circle
            cx={dx}
            cy={dy}
            r={3}
            fill="var(--color-gold-bright)"
            fillOpacity={0.9}
          />
          <text
            x={tx}
            y={ty}
            textAnchor={anchor}
            fill="var(--color-gold-bright)"
            opacity={0.75}
            className={animated ? 'globe-label' : undefined}
            style={{
              font: '600 15px var(--font-public-sans), system-ui, sans-serif',
              letterSpacing: '2.5px',
              animationDelay: `${-i * 4.5}s`,
            }}
          >
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
}
