"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxLetterProps {
  letter: string;
  index: number;
  isPrimary?: boolean;
}

const ParallaxLetter = ({ letter, index, isPrimary }: ParallaxLetterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll();

  // Chaque lettre a un décalage différent basé sur son index
  const y = useTransform(
    scrollYProgress,
    [0, 0.3], // modfier ces valeurs pour ajuster le timing
    [0, -50 * ((index % 3) + 1)] // Variation du mouvement selon la position
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.span
      ref={ref}
      style={{ y, opacity, display: "inline" }}
      className={isPrimary ? "text-(--primary)" : ""}
    >
      {letter === " " ? (
        <>
          <span className="md:hidden">
            <br />
          </span>
          <span className="hidden md:inline">&nbsp;</span>
        </>
      ) : (
        letter
      )}
    </motion.span>
  );
};

export default ParallaxLetter;
