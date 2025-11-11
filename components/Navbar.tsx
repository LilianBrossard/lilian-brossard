"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LinkStyle from "@/components/LinkStyle";
import LangSelector from "@/components/LangSelector";
import { useLangContext } from "@/contexts/LangContext";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

export default function Navbar() {
  const { LangVariable } = useLangContext();
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
      href: "/projet",
      label: translateText({
        FRA: "projets",
        ENG: "projects",
        SPA: "proyectos",
        DEU: "projekte",
      }),
    },
    {
      href: "/#about",
      label: translateText({
        FRA: "À propos",
        ENG: "About",
        SPA: "Acerca de",
        DEU: "Über",
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
  return (
    <nav className="py-4 px-8 flex justify-around items-center bg-background">
      <Link
        href="/"
        className="flex flex-row gap-4 justify-center items-center"
      >
        <Image src="/LB.png" alt="LB" width={50} height={50} />
        <h3 className="text-lg uppercase font-(family-name:--font-aquire) whitespace-nowrap">
          <span className="text-(--accentuation) font-bold">L</span>ilian{" "}
          <span className="text-(--accentuation) font-bold">B</span>rossard
        </h3>
      </Link>
      <ul className="flex gap-6">
        {link.map((item) => (
          <li key={item.href}>
            <LinkStyle lien={item.href} info={item.label} />
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <LangSelector />
        <ThemeToggle />
      </div>
    </nav>
  );
}
