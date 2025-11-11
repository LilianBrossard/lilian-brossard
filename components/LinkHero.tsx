"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import style from "../app/styles/glitch.module.css";
import { useLangContext } from "@/contexts/LangContext";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

export default function Navbar() {
  const linkRef = useRef<HTMLParagraphElement>(null);
  const { LangVariable } = useLangContext();
  const translateText = (
    dict: Partial<Record<LangType, string>>,
    fallback = ""
  ): string => {
    return dict[LangVariable] || fallback;
  };
  const linkHero = [
    [
      translateText({
        FRA: "Voir mes projets",
        ENG: "See my projects",
        SPA: "Ver mis proyectos",
        DEU: "Meine projekte",
      }),
      "/projet",
    ],
    [
      translateText({
        FRA: "Qui suis-je ?",
        ENG: "Who am I?",
        SPA: "¿Quién soy?",
        DEU: "Wer bin ich?",
      }),
      "/#about",
    ],
    [
      translateText({
        FRA: "Contactez-moi",
        ENG: "Contact me",
        SPA: "Contáctame",
        DEU: "Kontaktiere mich",
      }),
      "/#contact",
    ],
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
      <div className="absolute w-full h-full scale-y-105 scale-x-[1.01] clipPath-Button-Simple bg-(--primary) pointer-events-none"></div>
      <div className="clipPath-Button relative overflow-hidden text-center flex items-center justify-center w-[900px] text-xl lg:text-7xl uppercase font-(family-name:--font-aquire) text-foreground group-hover:text-background bg-background duration-200">
        <div className="absolute h-full w-0 group-hover:w-full duration-500 group-hover:bg-(--accentuation)"></div>
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
