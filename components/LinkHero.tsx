"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import style from "../app/styles/glitch.module.css";

export default function Navbar() {
  const linkRef = useRef<HTMLParagraphElement>(null);
  const linkHero = [
    ["Voir mes projets", "/projet"],
    ["Qui suis-je ?", "/#about"],
    ["Contactez-moi", "/#contact"],
  ];
  const [currentLinkIndex, setcurrentLinkIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentLinkIndex((current) => (current + 1) % linkHero.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentLink = linkHero[currentLinkIndex];
  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.setAttribute("data-text", currentLink[0]);
    }
  }, [currentLink]);

  return (
    <Link
      href={currentLink[1]}
      id="linkHero"
      className="relative inline-block group"
    >
      <div className="absolute w-full h-full scale-y-105 scale-x-[1.01] clipPath-Button-Simple bg-(--primary) group-hover:bg-(--foreground) pointer-events-none"></div>
      <div className="clipPath-Button text-center flex items-center justify-center w-[900px] text-xl lg:text-7xl uppercase font-(family-name:--font-aquire) text-foreground group-hover:text-background bg-background group-hover:bg-(--primary) duration-200 ">
        <p
          ref={linkRef}
          className={`whitespace-nowrap w-full h-full ${style.glitch}`}
        >
          {currentLink[0]}
        </p>
      </div>
    </Link>
  );
}
