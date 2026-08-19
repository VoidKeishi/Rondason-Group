// Regenerates src/components/ui/globe-map-data.ts — the continent layer of
// the MeridianGlobe hero graphic.
//
// Projects Natural Earth 110m land (public domain) onto the globe's
// equatorial orthographic view: center lon 100°E / lat 0°, viewBox 640,
// C=320, R=300. Equatorial view is what the logo's geometry already implies
// (straight parallels + elliptical meridians); lon 100°E puts the Singapore
// HQ on the equator bar.
//
// Run: node scripts/generate-globe-map.mjs   (fetches the data, no deps)
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const DATA_URL =
  'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json';
const OUT = fileURLToPath(
  new URL('../src/components/ui/globe-map-data.ts', import.meta.url)
);

const C = 320;
const R = 300;
const LON0 = 100;
const D2R = Math.PI / 180;

const geo = await (await fetch(DATA_URL)).json();

function project(lon, lat) {
  const dl = (lon - LON0) * D2R;
  const ph = lat * D2R;
  return {
    x: C + R * Math.cos(ph) * Math.sin(dl),
    y: C - R * Math.sin(ph),
    visible: Math.cos(ph) * Math.cos(dl) >= 0,
  };
}

// subdivide long edges so limb crossings stay smooth
function densify(ring, maxDeg = 1.2) {
  const out = [];
  for (let i = 0; i < ring.length - 1; i++) {
    const [a, b] = [ring[i], ring[i + 1]];
    const steps = Math.max(
      1,
      Math.ceil(Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])) / maxDeg)
    );
    for (let s = 0; s < steps; s++) {
      out.push([
        a[0] + ((b[0] - a[0]) * s) / steps,
        a[1] + ((b[1] - a[1]) * s) / steps,
      ]);
    }
  }
  out.push(ring[ring.length - 1]);
  return out;
}

const r1 = (n) => Math.round(n * 10) / 10;

// drop points closer than tol px to the last kept point
function simplify(pts, tol = 1.4) {
  const out = [pts[0]];
  for (const p of pts.slice(1)) {
    const q = out[out.length - 1];
    if (Math.hypot(p.x - q.x, p.y - q.y) >= tol) out.push(p);
  }
  return out;
}

const screenSpan = (pts) => {
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  return Math.max(
    Math.max(...xs) - Math.min(...xs),
    Math.max(...ys) - Math.min(...ys)
  );
};

const outlineSegs = [];
const fillRings = [];

for (const f of geo.features) {
  const polys =
    f.geometry.type === 'Polygon'
      ? [f.geometry.coordinates]
      : f.geometry.coordinates;
  for (const poly of polys) {
    for (const ring of poly) {
      const proj = densify(ring).map(([lon, lat]) => project(lon, lat));
      if (!proj.some((p) => p.visible)) continue;

      // outlines: consecutive visible runs become open polylines
      let run = [];
      const flush = () => {
        if (run.length >= 3) {
          const s = simplify(run);
          if (s.length >= 3 && screenSpan(s) >= 5) outlineSegs.push(s);
        }
        run = [];
      };
      for (const p of proj) {
        if (p.visible) run.push(p);
        else flush();
      }
      flush();

      // fill: whole ring, far-side points clamped radially to the limb
      const clamped = [];
      for (const p of proj) {
        if (p.visible) {
          clamped.push(p);
        } else {
          const dx = p.x - C;
          const dy = p.y - C;
          const d = Math.hypot(dx, dy);
          if (d >= 1e-6) clamped.push({ x: C + (dx / d) * R, y: C + (dy / d) * R });
        }
      }
      const s = simplify(clamped);
      if (s.length >= 3 && screenSpan(s) >= 6) fillRings.push(s);
    }
  }
}

const toPath = (pts, close) =>
  `M${pts.map((p) => `${r1(p.x)} ${r1(p.y)}`).join('L')}${close ? 'Z' : ''}`;

const outlinePath = outlineSegs.map((s) => toPath(s, false)).join('');
const fillPath = fillRings.map((s) => toPath(s, true)).join('');

writeFileSync(
  OUT,
  `/**
 * Generated file — do not hand-edit.
 * Natural Earth 110m land (public domain), projected onto the MeridianGlobe's
 * equatorial orthographic view: center lon 100°E / lat 0°, viewBox 640,
 * C=320, R=300. Regenerate: node scripts/generate-globe-map.mjs
 */

/** Visible land coastline segments (open polylines). */
export const MAP_OUTLINE_PATH =
  '${outlinePath}';

/** Land silhouettes with far-side points clamped to the limb (for a faint fill). */
export const MAP_FILL_PATH =
  '${fillPath}';
`
);
console.log(
  `wrote ${OUT}: outline ${outlinePath.length}B (${outlineSegs.length} segs), ` +
    `fill ${fillPath.length}B (${fillRings.length} rings)`
);
