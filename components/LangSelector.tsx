"use client";
import { useLangContext } from "@/contexts/LangContext";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

interface Language {
  code: LangType;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "FRA", label: "Français", flag: "/flags/FlagFrance.png" },
  { code: "ENG", label: "English", flag: "/flags/FlagUnitedKingdom.png" },
  { code: "SPA", label: "Español", flag: "/flags/FlagEspagnol.png" },
  { code: "DEU", label: "Deutsch", flag: "/flags/FlagGermany.png" },
];

export default function LangSelector() {
  const { LangVariable, setLangVariable } = useLangContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((lang) => lang.code === LangVariable);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (code: LangType) => {
    setLangVariable(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block w-40 h-10 ">
      <div className="w-full h-full p-0.5 clipPath-Button-Double bg-(--accentuation)">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center group w-full h-full clipPath-Button-Double bg-background hover:bg-(--background-secondary) transition-colors"
          aria-label="Sélectionner la langue"
          aria-expanded={isOpen}
        >
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full h-full top-0 left-0 z-10">
            <Image
              src={currentLang?.flag || ""}
              alt={`${currentLang?.label} flag`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="hidden sm:inline">{currentLang?.label}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-background flex flex-col justify-around gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className={`w-full h-12 p-0.5 bg-(--foreground-secondary) clipPath-Button-Double ${
                lang.code === LangVariable ? "bg-(--accentuation)" : ""
              }`}
            >
              <div className="relative group w-full h-full clipPath-Button-Double flex items-center justify-start gap-3 bg-background hover:bg-(--background-secondary) transition-colors">
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full h-full top-0 left-0">
                  <Image
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="ml-6">{lang.label}</span>
                {lang.code === LangVariable && (
                  <span className="ml-auto text-foreground">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
