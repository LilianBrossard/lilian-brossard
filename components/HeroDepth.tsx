"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// En-tête collant de l'accueil : pendant que la section À propos passe
// par-dessus, son contenu recule (léger zoom arrière, flou) et un voile
// l'assombrit. La section elle-même ne bouge pas : ses bords restent couverts
// et le voile assombrit tout l'écran, sans bandes plus claires sur les côtés.
export default function HeroDepth({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // 0 en haut de page, 1 quand la section suivante recouvre tout l'écran
  const progress = useTransform(scrollY, (y) => {
    const height = ref.current?.offsetHeight || 1;
    return Math.min(1, Math.max(0, y / height));
  });
  const scale = useTransform(progress, [0, 1], [1, 0.92]);
  const y = useTransform(progress, [0, 1], [0, -40]);
  const filter = useTransform(progress, [0, 1], ["blur(0px)", "blur(3px)"]);
  const voile = useTransform(progress, [0, 1], [0, 0.7]);

  return (
    <section ref={ref} className={className}>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center"
        style={reduceMotion ? undefined : { scale, y, filter, originY: 0 }}
      >
        {children}
      </motion.div>
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: voile }}
        />
      )}
    </section>
  );
}
