"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslate } from "@/contexts/LangContext";
import ActionButton from "@/components/ActionButton";
import { ArrowRightIcon } from "@/components/icons";
import { CONTEXT_LABELS } from "@/utils/projectLabels";
import type { Dict } from "@/utils/i18n";

export interface CircuitProject {
  slug: string;
  title: Dict;
  description: Dict;
  date: string;
  tags: string[];
  context: "perso" | "etudes" | null;
  image: string | null;
}

type Row =
  | { kind: "year"; year: string }
  | { kind: "project"; project: CircuitProject; index: number };

// Longueur des pistes entre le bus et chaque puce (varie pour un rendu "circuit")
const TRACES = ["w-6 lg:w-10", "w-12 lg:w-24", "w-9 lg:w-16"];

function Pins({ position }: { position: "top" | "bottom" }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-3 right-3 flex justify-between ${
        position === "top" ? "-top-2" : "-bottom-2"
      }`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="w-1 h-2 bg-current opacity-70"></span>
      ))}
    </span>
  );
}

export default function ProjetCircuit({ projects }: { projects: CircuitProject[] }) {
  const t = useTranslate();
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  // La piste s'allume aussi au défilement : le projet au centre de l'écran devient actif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  // Lignes de la frise : un nœud par année, puis les projets de cette année
  const rows: Row[] = [];
  projects.forEach((project, index) => {
    const year = project.date.slice(0, 4);
    const previous = projects[index - 1];
    if (!previous || previous.date.slice(0, 4) !== year) rows.push({ kind: "year", year });
    rows.push({ kind: "project", project, index });
  });
  const activeRow = rows.findIndex((row) => row.kind === "project" && row.index === active);
  const current = projects[active];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16 py-10 lg:py-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_30rem]">
      <ol className="relative">
        {rows.map((row, rowIndex) => {
          const first = rowIndex === 0;
          const last = rowIndex === rows.length - 1;
          const lit = rowIndex < activeRow ? "full" : rowIndex === activeRow ? "half" : "none";

          // Segment du bus pour cette ligne (gris), et sa partie allumée (couleur d'accent)
          const bus = (
            <>
              <span
                aria-hidden="true"
                className={`absolute left-[11px] w-0.5 bg-(--background-secondary) ${
                  first ? "top-1/2 bottom-0" : last ? "top-0 h-1/2" : "top-0 bottom-0"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute left-[11px] w-0.5 bg-(--primary) shadow-[0_0_8px_var(--glow)] transition-[height] duration-300 ${
                  first ? "top-1/2" : "top-0"
                } ${lit === "full" ? (first ? "h-1/2" : "h-full") : lit === "half" ? "h-1/2" : "h-0"}`}
              ></span>
            </>
          );

          if (row.kind === "year") {
            const yearLit = rowIndex < activeRow;
            return (
              <li key={`year-${row.year}`} aria-hidden="true" className="relative h-16 lg:h-20 flex items-center pl-12">
                {bus}
                <span
                  className={`absolute left-0.5 top-1/2 -translate-y-1/2 w-5 h-5 rotate-45 border-2 bg-background transition-colors duration-300 ${
                    yearLit ? "border-(--primary) shadow-[0_0_10px_var(--glow)]" : "border-(--muted)"
                  }`}
                ></span>
                <span className="font-(family-name:--font-aquire) text-2xl lg:text-3xl text-(--accentuation)">
                  {row.year}
                </span>
              </li>
            );
          }

          const { project, index } = row;
          const isActive = index === active;
          return (
            <li
              key={project.slug}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              data-index={index}
              className="relative py-4 lg:py-5 pl-[11px]"
            >
              {bus}
              <div className="relative flex items-start lg:items-center">
                {/* Piste entre le bus et la puce (alignée sur le centre de la puce) */}
                <span
                  aria-hidden="true"
                  className={`relative h-0.5 shrink-0 mt-[27px] lg:mt-0 transition-colors duration-300 ${TRACES[index % TRACES.length]} ${
                    isActive ? "bg-(--primary) shadow-[0_0_8px_var(--glow)]" : "bg-(--muted)"
                  }`}
                >
                  <span
                    className={`absolute -left-[5px] -top-[5px] w-3 h-3 rounded-full border-2 bg-background transition-colors duration-300 ${
                      isActive ? "border-(--primary)" : "border-(--muted)"
                    }`}
                  ></span>
                </span>
                <div className="flex-1 min-w-0 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  {/* La puce : lien vers le projet */}
                  <Link
                    href={`/projet/${project.slug}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={`relative self-start lg:self-center shrink-0 inline-flex items-center px-5 py-3 lg:px-6 lg:py-4 border-2 bg-background transition-all duration-300 ${
                      isActive
                        ? "border-(--primary) text-(--accentuation) shadow-[0_0_18px_var(--glow-soft)]"
                        : "border-(--muted) text-foreground"
                    }`}
                  >
                    <Pins position="top" />
                    <Pins position="bottom" />
                    <span aria-hidden="true" className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                    <span className="font-(family-name:--font-aquire) uppercase text-lg sm:text-xl xl:text-2xl whitespace-nowrap">
                      {t(project.title)}
                    </span>
                  </Link>
                  <div className="min-w-0 flex flex-col gap-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-(--muted)">
                      {project.date.slice(0, 4)}
                      {project.context && ` · ${t(CONTEXT_LABELS[project.context])}`}
                    </p>
                    <p className="text-sm lg:text-base leading-relaxed text-(--foreground-secondary) line-clamp-2">
                      {t(project.description)}
                    </p>
                    {project.tags.length > 0 && (
                      <ul className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <li key={tag} className="text-xs px-2 py-0.5 border border-(--background-secondary) text-(--foreground-secondary)">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.image && (
                      <Link
                        href={`/projet/${project.slug}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className="lg:hidden block relative mt-2 w-full max-w-sm aspect-video border-2 border-(--background-secondary) overflow-hidden"
                      >
                        <Image src={`/projets/${project.image}`} alt="" fill sizes="(max-width: 640px) 80vw, 384px" className="object-cover" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Écran d'aperçu (ordinateur) */}
      {current && (
        <aside className="hidden lg:block sticky top-28 self-start" aria-label={t({ FRA: "Aperçu", ENG: "Preview", SPA: "Vista previa", DEU: "Vorschau" })}>
          <div className="relative border-2 border-(--primary) bg-background shadow-[0_0_30px_var(--glow-soft)]">
            <div aria-hidden="true" className="absolute -top-4 -left-4 w-24 h-16 border-t-4 border-l-4 border-(--primary)"></div>
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 w-24 h-16 border-b-4 border-r-4 border-(--primary)"></div>
            <div className="flex justify-between items-center px-4 py-2 border-b-2 border-(--primary) text-xs font-bold uppercase tracking-widest text-(--accentuation)">
              <span>{t({ FRA: "Aperçu", ENG: "Preview", SPA: "Vista previa", DEU: "Vorschau" })}</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="relative aspect-video bg-(--background-secondary) overflow-hidden">
              {current.image && (
                <Image
                  key={current.slug}
                  src={`/projets/${current.image}`}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 480px, 384px"
                  className="object-cover animate-[fadeIn_300ms_ease-out]"
                />
              )}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2px,rgba(0,0,0,0.15)_3px)]"></div>
            </div>
            <div className="p-5 xl:p-6 flex flex-col gap-3">
              <p className="font-(family-name:--font-aquire) uppercase text-2xl xl:text-3xl">{t(current.title)}</p>
              <p className="leading-relaxed text-(--foreground-secondary)">{t(current.description)}</p>
              <div className="pt-1">
                <ActionButton href={`/projet/${current.slug}`} variant="primary" icon={<ArrowRightIcon size={18} />}>
                  {t({ FRA: "Voir le projet", ENG: "View project", SPA: "Ver el proyecto", DEU: "Projekt ansehen" })}
                </ActionButton>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
