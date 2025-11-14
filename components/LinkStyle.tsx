"use client";
import Link from "next/link";
import { useState } from "react";
import style from "../app/styles/link.module.css";

interface LinkStyleProps {
  lien?: string;
  info?: string;
  specialClass?: string;
  target?: string | null;
}

export default function LinkStyle({
  lien = "/#",
  info = "not definded",
  specialClass = "",
  target = null,
}: LinkStyleProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getAnimatedChars = () =>
    info.split("").map((char, idx) => (
      <span
        key={idx}
        style={{
          display: "inline-block",
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          animation: hovered
            ? `${style.slideDown} 0.2s ${idx * 0.1}s forwards`
            : `${style.slideUp} 0.2s ${idx * 0.1}s forwards`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <Link
      href={lien}
      target={target ? target : undefined}
      className={`group relative clipPath-Button-Simple w-36 h-12 text-foreground hover:text-background text-lg md:text-xl lg:text-2xl text-center flex items-center justify-center bg-(--accentuation) duration-200 ${specialClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute p-0.5 w-full h-full clipPath-Button">
        <div className="bg-background w-full h-full clipPath-Button"></div>
      </div>

      <div className="absolute h-full w-0 group-hover:w-full duration-500 group-hover:bg-(--accentuation)"></div>
      <div className="flex flex-col items-center justify-center overflow-hidden relative">
        <p className="absolute -top-full">{getAnimatedChars()}</p>
        <p>{getAnimatedChars()}</p>
      </div>
    </Link>
  );
}
