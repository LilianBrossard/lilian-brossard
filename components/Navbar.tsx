"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Circuit from "@/components/Circuit";
import ThemeToggle from "@/components/ThemeToggle";
import { useLangContext, useTranslate } from "@/contexts/LangContext";
import type { Dict, LangType } from "@/utils/i18n";

// Navigation : un seul bouton « Menu » en haut à gauche. Il ouvre un menu plein
// écran (en cercle depuis le bouton) avec les liens en grand, numérotés, une
// courte description au survol, le choix de la langue et du thème.

const liens: { href: string; label: Dict; description: Dict }[] = [
  {
    href: "/",
    label: { FRA: "Accueil", ENG: "Home", SPA: "Inicio", DEU: "Startseite" },
    description: {
      FRA: "Retour à la page d'accueil.",
      ENG: "Back to the home page.",
      SPA: "Volver a la página de inicio.",
      DEU: "Zurück zur Startseite.",
    },
  },
  {
    href: "/#apropos",
    label: { FRA: "À propos", ENG: "About", SPA: "Acerca de", DEU: "Über Mich" },
    description: {
      FRA: "Profil, parcours, formation et compétences.",
      ENG: "Profile, background, education and skills.",
      SPA: "Perfil, trayectoria, formación y competencias.",
      DEU: "Profil, Werdegang, Ausbildung und Kenntnisse.",
    },
  },
  {
    href: "/experiences",
    label: { FRA: "Expériences", ENG: "Experience", SPA: "Experiencia", DEU: "Erfahrung" },
    description: {
      FRA: "Stages et expériences professionnelles.",
      ENG: "Internships and work experience.",
      SPA: "Prácticas y experiencia profesional.",
      DEU: "Praktika und Berufserfahrung.",
    },
  },
  {
    href: "/projet",
    label: { FRA: "Projets", ENG: "Projects", SPA: "Proyectos", DEU: "Projekte" },
    description: {
      FRA: "Projets personnels, d'études et professionnels.",
      ENG: "Personal, academic and professional projects.",
      SPA: "Proyectos personales, académicos y profesionales.",
      DEU: "Private, Studien- und Berufsprojekte.",
    },
  },
  {
    href: "/#contact",
    label: { FRA: "Contact", ENG: "Contact", SPA: "Contacto", DEU: "Kontakt" },
    description: {
      FRA: "Une offre, une question ? Écrivez-moi.",
      ENG: "A job offer or a question? Get in touch.",
      SPA: "¿Una oferta, una pregunta? Escríbame.",
      DEU: "Ein Angebot, eine Frage? Schreiben Sie mir.",
    },
  },
];

const langues: { code: LangType; court: string; nom: string; html: string }[] = [
  { code: "FRA", court: "FR", nom: "Français", html: "fr" },
  { code: "ENG", court: "EN", nom: "English", html: "en" },
  { code: "SPA", court: "ES", nom: "Español", html: "es" },
  { code: "DEU", court: "DE", nom: "Deutsch", html: "de" },
];

// Sections de l'accueil, dans l'ordre des liens 1 à 4
const sectionsAccueil = ["apropos", "experiences", "projects", "contact"];

/** Lien correspondant à l'endroit où se trouve le visiteur (-1 : aucun). */
function lienActif(pathname: string): number {
  if (pathname.startsWith("/experiences")) return 2;
  if (pathname.startsWith("/projet")) return 3;
  if (pathname !== "/") return -1;
  let index = 0;
  sectionsAccueil.forEach((id, i) => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) index = i + 1;
  });
  return index;
}

export default function Navbar() {
  const t = useTranslate();
  const { LangVariable, setLangVariable } = useLangContext();
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [actif, setActif] = useState(-1);
  const [survol, setSurvol] = useState<number | null>(null);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Ouvert au clavier : on place le focus sur le premier lien
  const auClavierRef = useRef(false);

  const fermer = useCallback((rendreFocus = false) => {
    setOuvert(false);
    setSurvol(null);
    document.documentElement.style.overflow = "";
    if (rendreFocus) boutonRef.current?.focus();
  }, []);

  const ouvrir = (auClavier: boolean) => {
    auClavierRef.current = auClavier;
    setActif(lienActif(pathname));
    setOuvert(true);
    document.documentElement.style.overflow = "hidden";
  };

  // Menu ouvert : Échap pour fermer, Tab reste dans le menu
  useEffect(() => {
    if (!ouvert) return;
    const menu = menuRef.current;
    const frame = requestAnimationFrame(() => {
      if (auClavierRef.current) menu?.querySelector<HTMLElement>("a")?.focus();
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        fermer(true);
        return;
      }
      if (event.key !== "Tab" || !menu || !boutonRef.current) return;
      const elements = [boutonRef.current, ...menu.querySelectorAll<HTMLElement>("a, button")];
      const premier = elements[0];
      const dernier = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === premier) {
        event.preventDefault();
        dernier.focus();
      } else if (!event.shiftKey && document.activeElement === dernier) {
        event.preventDefault();
        premier.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
    };
  }, [ouvert, fermer]);

  // Si la page change menu ouvert, on rend le défilement
  useEffect(() => () => {
    document.documentElement.style.overflow = "";
  }, []);

  const description = liens[survol ?? Math.max(actif, 0)].description;
  const libelle = "text-xs font-bold uppercase tracking-[0.18em] text-(--muted)";

  return (
    <>
      <button
        ref={boutonRef}
        type="button"
        onClick={(event) => (ouvert ? fermer() : ouvrir(event.detail === 0))}
        aria-expanded={ouvert}
        aria-controls="menu-principal"
        className="group fixed z-[70] top-4 left-4 lg:top-6 lg:left-6 h-12 px-4 flex items-center gap-3 bg-background/75 backdrop-blur-md border border-(--line) text-[15px] font-bold text-foreground hover:border-(--accentuation) transition-colors duration-200 cursor-pointer"
      >
        <span aria-hidden="true" className="absolute -top-px -left-px size-3 border-t-2 border-l-2 border-(--accentuation)"></span>
        <span aria-hidden="true" className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-(--accentuation)"></span>
        <span aria-hidden="true" className="relative block w-[22px] h-3">
          <span
            className={`absolute left-0 h-0.5 w-[22px] bg-current transition-transform duration-300 ${
              ouvert ? "top-[5px] rotate-45" : "top-0"
            }`}
          ></span>
          <span
            className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${
              ouvert ? "top-[5px] w-[22px] -rotate-45" : "top-2.5 w-3.5 group-hover:w-[22px]"
            }`}
          ></span>
        </span>
        {ouvert
          ? t({ FRA: "Fermer", ENG: "Close", SPA: "Cerrar", DEU: "Schließen" })
          : t({ FRA: "Menu", ENG: "Menu", SPA: "Menú", DEU: "Menü" })}
      </button>

      <div
        id="menu-principal"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label={t({ FRA: "Menu principal", ENG: "Main menu", SPA: "Menú principal", DEU: "Hauptmenü" })}
        inert={!ouvert}
        className={`menu-plein-ecran fixed inset-0 z-[60] overflow-y-auto bg-background ${ouvert ? "is-open" : ""}`}
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-20 pointer-events-none">
          <Circuit />
        </div>
        <div className="relative min-h-full w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 pt-24 pb-12 lg:py-28 grid content-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <nav
            aria-label={t({
              FRA: "Navigation principale",
              ENG: "Main navigation",
              SPA: "Navegación principal",
              DEU: "Hauptnavigation",
            })}
          >
            <ul className="flex flex-col gap-1">
              {liens.map((lien, i) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    onClick={() => fermer()}
                    onMouseEnter={() => setSurvol(i)}
                    onFocus={() => setSurvol(i)}
                    aria-current={i === actif ? "page" : undefined}
                    style={{ transitionDelay: ouvert ? `${0.22 + i * 0.06}s` : "0s" }}
                    className={`menu-lien group/lien flex items-baseline gap-4 lg:gap-7 py-1.5 font-(family-name:--font-aquire) uppercase leading-[1.1] text-[clamp(30px,min(5.2vw,8.5vh),72px)] hover:text-(--accentuation) focus-visible:text-(--accentuation) ${
                      i === actif ? "text-(--accentuation)" : "text-foreground"
                    }`}
                  >
                    <span
                      className={`text-sm lg:text-lg transition-colors group-hover/lien:text-(--accentuation) ${
                        i === actif ? "text-(--accentuation)" : "text-(--muted)"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    {t(lien.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-8 pt-8 border-t border-(--line) lg:pt-0 lg:pl-10 lg:border-t-0 lg:border-l">
            <p className="hidden lg:block min-h-[3em] text-2xl leading-snug text-(--foreground-secondary)">
              {t(description)}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <div className="flex flex-col gap-3">
                <p className={libelle}>{t({ FRA: "Langue", ENG: "Language", SPA: "Idioma", DEU: "Sprache" })}</p>
                <div className="flex gap-2">
                  {langues.map((langue) => {
                    const choisie = LangVariable === langue.code;
                    return (
                      <button
                        key={langue.code}
                        type="button"
                        lang={langue.html}
                        aria-label={langue.nom}
                        aria-pressed={choisie}
                        onClick={() => setLangVariable(langue.code)}
                        className={`h-11 min-w-13 px-3 border text-sm font-bold transition-colors duration-200 cursor-pointer ${
                          choisie
                            ? "border-(--accentuation) text-(--accentuation)"
                            : "border-(--line) text-(--foreground-secondary) hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {langue.court}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className={libelle}>{t({ FRA: "Thème", ENG: "Theme", SPA: "Tema", DEU: "Design" })}</p>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
