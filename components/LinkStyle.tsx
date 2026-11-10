"use client";
import Link from "next/link";
import { useState } from "react";
import style from "../app/styles/link.module.css";

interface LinkStyleProps {
  lien?: string;
  info?: string;
  /** Classes ajoutées au lien (largeur, etc.). Par défaut : w-36. */
  specialClass?: string;
  target?: string | null;
  onClick?: () => void;
}

export default function LinkStyle({
  lien = "/#",
  info = "",
  specialClass = "w-36",
  target = null,
  onClick,
}: LinkStyleProps) {
  const [hovered, setHovered] = useState(false);
  // Pas d'animation tant que le lien n'a pas été survolé : évite l'effet
  // de lettres décalées au chargement de la page.
  const [touched, setTouched] = useState(false);

  const getAnimatedChars = () =>
    info.split("").map((char, idx) => (
      <span
        key={idx}
        style={{
          display: "inline-block",
          transform:
            touched && hovered ? "translateY(0%)" : touched ? "translateY(100%)" : "none",
          animation: !touched
            ? "none"
            : hovered
            ? `${style.slideDown} 0.2s ${idx * 0.04}s forwards`
            : `${style.slideUp} 0.2s ${idx * 0.04}s forwards`,
        }}
      >
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <Link
      href={lien}
      target={target ? target : undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group relative clipPath-Button-Simple h-12 shrink-0 text-foreground hover:text-background focus-visible:text-background text-base xl:text-lg text-center flex items-center justify-center bg-(--accentuation) duration-200 ${specialClass}`}
      onMouseEnter={() => {
        setTouched(true);
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="absolute p-0.5 w-full h-full clipPath-Button">
        <div className="bg-background w-full h-full clipPath-Button"></div>
      </div>

      <div className="absolute h-full w-0 group-hover:w-full group-focus-visible:w-full duration-500 group-hover:bg-(--accentuation) group-focus-visible:bg-(--accentuation)"></div>
      <div className="flex flex-col items-center justify-center overflow-hidden relative px-2">
        <p aria-hidden="true" className="absolute -top-full">
          {getAnimatedChars()}
        </p>
        <p>{getAnimatedChars()}</p>
      </div>
    </Link>
  );
}
