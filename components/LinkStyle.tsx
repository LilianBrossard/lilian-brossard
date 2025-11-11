"use client";
import Link from "next/link";
import { useState } from "react";
import style from "../app/styles/link.module.css";

interface LinkStyleProps {
  lien?: string;
  info?: string;
}

export default function LinkStyle({
  lien = "/#",
  info = "not definded",
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
      className="group relative w-36 h-12 text-foreground hover:text-background text-lg md:text-xl lg:text-2xl text-center transition-all duration-200 block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute w-full h-full scale-y-105 scale-x-[1.02] clipPath-Button-Simple bg-(--accentuation) pointer-events-none"></div>
      <div className="clipPath-Button w-full h-full relative overflow-hidden flex items-center justify-center bg-background duration-200">
        <div className="absolute h-full w-0 group-hover:w-full duration-500 group-hover:bg-(--accentuation)"></div>
        <div className="flex flex-col items-center justify-center overflow-hidden relative">
          <p className="absolute -top-full">{getAnimatedChars()}</p>
          <p>{getAnimatedChars()}</p>
        </div>
      </div>
    </Link>
  );
}
