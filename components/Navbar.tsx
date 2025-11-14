"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LinkStyle from "@/components/LinkStyle";
import LangSelector from "@/components/LangSelector";
import { useLangContext } from "@/contexts/LangContext";
import { useEffect, useRef, useState } from "react";
import { menu } from "framer-motion/client";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

export default function Navbar() {
  const { LangVariable } = useLangContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        menuRef.current.classList.remove("-translate-x-[100vw]");
        menuRef.current.classList.add("translate-x-0");
      } else {
        menuRef.current.classList.add("-translate-x-[100vw]");
        menuRef.current.classList.remove("translate-x-0");
      }
    }
  }, [isMenuOpen]);

  const translateText = (
    dict: Partial<Record<LangType, string>>,
    fallback = ""
  ): string => {
    return dict[LangVariable] || fallback;
  };
  const link = [
    {
      href: "/",
      label: translateText({
        FRA: "Accueil",
        ENG: "Home",
        SPA: "Inicio",
        DEU: "Startseite",
      }),
    },
    {
      href: "/#apropos",
      label: translateText({
        FRA: "À propos",
        ENG: "About",
        SPA: "Acerca de",
        DEU: "Über Mich",
      }),
    },
    {
      href: "/projet",
      label: translateText({
        FRA: "Projets",
        ENG: "Projects",
        SPA: "Proyectos",
        DEU: "Projekte",
      }),
    },
    {
      href: "/#contact",
      label: translateText({
        FRA: "Contact",
        ENG: "Contact",
        SPA: "Contacto",
        DEU: "Kontakt",
      }),
    },
  ];

  const navigationLink = (
    <ul className="flex flex-col lg:flex-row gap-6">
      {link.map((item) => (
        <li key={item.href} onClick={() => setIsMenuOpen(false)}>
          <LinkStyle lien={item.href} info={item.label} />
        </li>
      ))}
    </ul>
  );
  const Settings = (
    <div className="flex flex-col-reverse lg:flex-row gap-8 mt-16 lg:m-0 items-center">
      <LangSelector />
      <ThemeToggle />
    </div>
  );
  return (
    <nav className="relative p-0 m-0 w-full lg:py-4 lg:px-8 lg:bg-background lg:shadow-(color:--accentuation)/10 lg:shadow-md">
      <div
        className="flex lg:hidden flex-col items-center justify-center absolute -translate-x-[100vw] transition-transform duration-300 ease-in-out bg-background w-full h-screen top-0 right-0 z-10"
        ref={menuRef}
      >
        <div className="relative flex flex-col items-center justify-center gap-8 mb-52">
          <div className="absolute -top-4 -left-4 w-1/2 h-1/4 border-t-(--accentuation) border-t-4 border-l-(--accentuation) border-l-4 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-2/3 h-1/6 border-b-(--accentuation) border-b-4 border-r-(--accentuation) border-r-4 -z-10"></div>

          {navigationLink}
          {Settings}
        </div>
      </div>
      <div
        className="absolute pt-4 pl-4 lg:hidden z-50 w-16 h-16 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative w-12 h-12">
          <svg
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
            viewBox="0 -2 20 20"
            version="1.1"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="var(--foreground)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>align_text_distribute [#914]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-300.000000, -4161.000000)"
                  fill="var(--foreground)"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M244,4017 L264,4017 L264,4015 L244,4015 L244,4017 Z M244,4003 L264,4003 L264,4001 L244,4001 L244,4003 Z M244,4010 L264,4010 L264,4008 L244,4008 L244,4010 Z"
                      id="align_text_distribute-[#914]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-0"
            }`}
            fill="var(--foreground)"
            viewBox="0 0 16 16"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-around lg:items-center">
        <Link
          href="/"
          className="hidden xl:flex flex-row gap-4 justify-center items-center"
        >
          <Image src="/LB.png" alt="LB" width={50} height={50} />
          <h3 className="text-lg uppercase font-(family-name:--font-aquire) whitespace-nowrap">
            <span className="text-(--accentuation) font-bold">L</span>ilian{" "}
            <span className="text-(--accentuation) font-bold">B</span>rossard
          </h3>
        </Link>
        {navigationLink}
        {Settings}
      </div>
    </nav>
  );
}
