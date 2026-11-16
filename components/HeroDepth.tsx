"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// En-tête collant de l'accueil : pendant que la section À propos passe
// par-dessus, il recule (léger zoom arrière), s'assombrit et se floute.
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
  const filter = useTransform(
    progress,
    [0, 1],
    ["brightness(1) blur(0px)", "brightness(0.3) blur(3px)"]
  );

  return (
    <motion.section
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { scale, y, filter, originY: 0 }}
    >
      {children}
    </motion.section>
  );
}
