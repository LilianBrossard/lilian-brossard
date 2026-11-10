"use client";
import Link from "next/link";
import { useTranslate } from "@/contexts/LangContext";
import type { Dict } from "@/utils/i18n";

export interface SectionLink {
  href: string;
  label: Dict;
}

interface MainTitleProps {
  titre: Dict;
  /** Position du titre parmi les sections (1 = première). */
  position?: number;
  /** Sections de la page : les autres sont affichées en carrés cliquables. */
  sections?: SectionLink[];
  as?: "h1" | "h2";
}

export default function MainTitle({
  titre,
  position = 1,
  sections,
  as: Heading = "h2",
}: MainTitleProps) {
  const t = useTranslate();
  const items = sections ?? [{ href: "#", label: titre }];

  return (
    <div className="relative flex flex-row justify-center lg:justify-around items-center py-2 text-3xl lg:text-6xl font-bold uppercase font-(family-name:--font-aquire) whitespace-nowrap">
      <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center gap-1 lg:gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <hr
            key={index}
            className="w-full h-0.5 lg:h-1 bg-foreground border-0 shadow-[0_0_5px_rgba(255,255,255,0.3),0_0_10px_rgba(255,255,255,0.1)]"
          />
        ))}
      </div>
      <div className="absolute hidden w-full h-full left-0 top-0 lg:flex flex-col justify-center gap-2 overflow-hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-1/12 animation-flux h-1 bg-foreground border-0 shadow-[0_0_10px_var(--primary),0_0_20px_var(--glow)]"
          />
        ))}
      </div>
      {items.map((section, index) =>
        index + 1 === position ? (
          <div key={section.href} className="z-10 bg-background px-3 lg:px-4">
            <Heading className="py-1">{t(titre)}</Heading>
          </div>
        ) : (
          <div key={section.href} className="z-10 hidden lg:block bg-background px-2">
            <Link
              href={section.href}
              aria-label={t(section.label)}
              className="group/sq relative block w-12 h-12 border-2 border-(--muted) bg-background hover:bg-foreground hover:border-foreground focus-visible:bg-foreground transition-colors duration-200"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2 py-1 text-sm font-normal normal-case tracking-normal font-(family-name:--font-lato) bg-(--background-secondary) text-foreground opacity-0 group-hover/sq:opacity-100 group-focus-visible/sq:opacity-100 transition-opacity duration-200"
              >
                {t(section.label)}
              </span>
            </Link>
          </div>
        )
      )}
    </div>
  );
}
