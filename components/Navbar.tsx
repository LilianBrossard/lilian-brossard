"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LinkStyle from "@/components/LinkStyle";
import LangSelector from "@/components/LangSelector";
import { useTranslate } from "@/contexts/LangContext";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    {
      href: "/#apropos",
      label: t({ FRA: "À propos", ENG: "About", SPA: "Acerca de", DEU: "Über Mich" }),
    },
    {
      href: "/experiences",
      label: t({
        FRA: "Expériences",
        ENG: "Experience",
        SPA: "Experiencia",
        DEU: "Erfahrung",
      }),
    },
    {
      href: "/projet",
      label: t({ FRA: "Projets", ENG: "Projects", SPA: "Proyectos", DEU: "Projekte" }),
    },
    {
      href: "/#contact",
      label: t({ FRA: "Contact", ENG: "Contact", SPA: "Contacto", DEU: "Kontakt" }),
    },
  ];

  const logo = (
    <Link
      href="/"
      onClick={closeMenu}
      className="flex flex-row gap-3 items-center shrink-0"
      aria-label={t({
        FRA: "Accueil - Lilian Brossard",
        ENG: "Home - Lilian Brossard",
        SPA: "Inicio - Lilian Brossard",
        DEU: "Startseite - Lilian Brossard",
      })}
    >
      <Image src="/LB.png" alt="" width={44} height={44} className="w-10 h-10 lg:w-11 lg:h-11" />
      <span className="text-sm lg:hidden xl:inline xl:text-base uppercase font-(family-name:--font-aquire) whitespace-nowrap">
        <span className="text-(--accentuation) font-bold">L</span>ilian{" "}
        <span className="text-(--accentuation) font-bold">B</span>rossard
      </span>
    </Link>
  );

  return (
    <nav className="relative w-full">
      {/* Barre principale (mobile et ordinateur) */}
      <div className="relative z-20 flex items-center justify-between gap-4 h-16 lg:h-20 px-4 lg:px-6 xl:px-10 bg-background/90 backdrop-blur-sm border-b border-(--background-secondary)">
        {logo}

        <ul className="hidden lg:flex flex-row gap-3 xl:gap-5">
          {links.map((item) => (
            <li key={item.href}>
              <LinkStyle lien={item.href} info={item.label} specialClass="w-32 xl:w-36" />
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex flex-row gap-3 xl:gap-5 items-center shrink-0">
          <LangSelector />
          <ThemeToggle />
        </div>

        {/* Bouton menu (mobile) */}
        <button
          type="button"
          className="lg:hidden relative w-11 h-11 -mr-1 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={
            isMenuOpen
              ? t({ FRA: "Fermer le menu", ENG: "Close menu", SPA: "Cerrar el menú", DEU: "Menü schließen" })
              : t({ FRA: "Ouvrir le menu", ENG: "Open menu", SPA: "Abrir el menú", DEU: "Menü öffnen" })
          }
        >
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 bg-foreground transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 bg-foreground transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 bg-foreground transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Menu plein écran (mobile) */}
      <div
        id="menu-mobile"
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-10 bg-background flex flex-col items-center justify-center gap-10 transition-[transform,visibility] duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-5">
          <li>
            <LinkStyle
              lien="/"
              info={t({ FRA: "Accueil", ENG: "Home", SPA: "Inicio", DEU: "Startseite" })}
              specialClass="w-48"
              onClick={closeMenu}
            />
          </li>
          {links.map((item) => (
            <li key={item.href}>
              <LinkStyle lien={item.href} info={item.label} specialClass="w-48" onClick={closeMenu} />
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-4 items-center">
          <LangSelector />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
