"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Transition « circuit » entre l'en-tête et la section À propos.
// Trois pistes lumineuses descendent de l'en-tête, traversent le bord de la
// section et deviennent les trois lignes de son titre. Les lignes ne sont
// dessinées que dans les espaces visibles entre le titre et les carrés : elles
// s'arrêtent à leur bord et ne passent jamais sous leur fond.
// La variable --p (0 → 1) suit l'arrivée de la section ; le CSS (globals.css,
// classes circuit-*) s'en sert pour tracer les pistes au fil du défilement.

type Point = { x: number; y: number };

interface Geometry {
  width: number;
  height: number;
  lift: number;
  stroke: number;
  edge: string;
  traces: string[];
  pins: Point[];
  ends: Point[];
  /** x : abscisse de départ du segment (sert à caler la décharge) */
  segments: { d: string; k: number; x: number }[];
}

/** Mesure le titre de section pour placer pistes et segments. */
function measure(root: HTMLElement): Geometry | null {
  const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-title-lines] > hr"));
  const boxes = Array.from(root.querySelectorAll<HTMLElement>("[data-title-item]"))
    .filter((el) => el.offsetWidth > 0)
    .map((el) => el.getBoundingClientRect());
  if (lines.length === 0 || boxes.length === 0) return null;

  const frame = root.getBoundingClientRect();
  const width = frame.width;
  // Hauteur des pistes au-dessus de la section
  const lift = Math.round(Math.min(220, window.innerHeight * 0.25));
  const ys = lines.map((line) => {
    const r = line.getBoundingClientRect();
    return r.top - frame.top + r.height / 2 + lift;
  });
  const stroke = Math.max(2, lines[0].getBoundingClientRect().height);
  const spans = boxes
    .map((r) => ({ left: r.left - frame.left, right: r.right - frame.left }))
    .sort((a, b) => a.left - b.left);

  // Pistes : dans l'espace à gauche du titre, la plus à droite rejoint la ligne du haut
  const target = spans[0].left;
  const step = Math.min(14, Math.max(8, target * 0.1));
  const x0 = Math.max(34, target * 0.38);
  const xs = ys.map((_, i) => x0 + (ys.length - 1 - i) * step);
  const traces = ys.map((y, i) => `M${xs[i]} 0V${y - step}L${xs[i] + step} ${y}H${target}`);
  const pins = xs.map((x) => ({ x, y: lift }));
  const ends = ys.map((y) => ({ x: target, y }));

  // Segments : entre deux blocs, puis du dernier bloc au bord droit
  const segments: { d: string; k: number; x: number }[] = [];
  spans.forEach((span, k) => {
    const to = spans[k + 1]?.left ?? width;
    if (to - span.right < 4) return;
    ys.forEach((y) => segments.push({ d: `M${span.right} ${y}H${to}`, k, x: span.right }));
  });

  // Bord supérieur de la section : même forme que l'utilitaire clip-notch
  const notch = Math.min(150, width * 0.25);
  const mid = width / 2;
  const edge =
    `M0 ${lift + 28}L28 ${lift}H${mid - notch}L${mid - notch + 16} ${lift + 16}` +
    `H${mid + notch - 16}L${mid + notch} ${lift}H${width - 28}L${width} ${lift + 28}`;

  return {
    width,
    height: Math.max(...ys) + 12,
    lift,
    stroke,
    edge,
    traces,
    pins,
    ends,
    segments,
  };
}

export default function CircuitTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);

  // Géométrie : recalculée quand la taille change ou quand la police est chargée
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const update = () => setGeo(measure(root));
    const observer = new ResizeObserver(update);
    observer.observe(root);
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Progression : 0 quand la section entre en bas de l'écran, 1 quand elle atteint le haut
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;
    const apply = () => {
      frame = 0;
      const top = root.getBoundingClientRect().top;
      const p = reduceMotion ? 1 : Math.min(1, Math.max(0, 1 - top / window.innerHeight));
      root.style.setProperty("--p", p.toFixed(4));
      root.toggleAttribute("data-live", visible && p > 0.95);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(root);
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const pad = geo ? geo.stroke + 4 : 0;

  return (
    <div ref={ref} className="relative z-10">
      {children}
      {geo && (
        <svg
          aria-hidden="true"
          className="circuit-overlay"
          style={{ top: -geo.lift, height: geo.height }}
          viewBox={`0 0 ${geo.width} ${geo.height}`}
        >
          <defs>
            <linearGradient
              id="circuit-fade"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2={geo.lift * 0.85}
            >
              <stop offset="0" style={{ stopColor: "var(--foreground)", stopOpacity: 0 }} />
              <stop offset="1" style={{ stopColor: "var(--foreground)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <path className="circuit-edge" d={geo.edge} />

          {geo.traces.map((d) => (
            <path key={d} className="circuit-trace" d={d} pathLength={1} strokeWidth={geo.stroke} />
          ))}
          {geo.segments.map((s) => (
            <path
              key={s.d}
              className="circuit-seg"
              d={s.d}
              pathLength={1}
              strokeWidth={geo.stroke}
              style={{ "--k": s.k } as CSSProperties}
            />
          ))}

          {geo.pins.map((pin) => (
            <rect
              key={`pin-${pin.x}`}
              className="circuit-pin"
              x={pin.x - pad / 2}
              y={pin.y - pad / 2}
              width={pad}
              height={pad}
            />
          ))}
          {geo.ends.map((end) => (
            <rect
              key={`end-${end.y}`}
              className="circuit-end"
              x={end.x - pad}
              y={end.y - pad / 2}
              width={pad}
              height={pad}
            />
          ))}

          {/* Décharge rapide, comme sur les autres titres : une barre traverse
              toute la largeur en 1 s toutes les 4 s. Elle n'existe que sur les
              segments, donc elle disparaît derrière le titre et les carrés. */}
          <g className="circuit-decharge">
            {geo.segments.map((s) => (
              <path
                key={`flux-${s.d}`}
                className="circuit-flux"
                d={s.d}
                strokeWidth={geo.stroke}
                strokeDasharray={`${geo.width / 12} ${geo.width * 4}`}
                style={
                  {
                    "--x": `${s.x}px`,
                    "--bar": `${geo.width / 12}px`,
                    "--w": `${geo.width}px`,
                  } as CSSProperties
                }
              />
            ))}
          </g>
        </svg>
      )}
    </div>
  );
}
