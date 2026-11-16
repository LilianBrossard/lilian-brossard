"use client";

import { useSyncExternalStore } from "react";
import { useTranslate } from "@/contexts/LangContext";
import { MoonIcon, SunIcon } from "@/components/icons";

type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Le thème est porté par l'attribut data-theme de <html> : on l'observe
// pour que le bouton reste synchronisé quel que soit l'endroit du changement.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

// Bouton carré : soleil en thème clair, lune en thème sombre.
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = useTranslate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {}
  };

  const icone = "absolute transition-all duration-500";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t({
        FRA: "Changer de thème",
        ENG: "Toggle theme",
        SPA: "Cambiar el tema",
        DEU: "Design wechseln",
      })}
      className="relative inline-flex items-center justify-center h-11 w-11 shrink-0 border border-(--line) text-(--foreground-secondary) hover:border-(--accentuation) hover:text-(--accentuation) transition-colors duration-200 cursor-pointer"
    >
      <SunIcon
        size={20}
        className={`${icone} ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}
      />
      <MoonIcon
        size={20}
        className={`${icone} ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
    </button>
  );
}
