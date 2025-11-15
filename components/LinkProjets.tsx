"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LinkStyle from "@/components/LinkStyle";
import LangSelector from "@/components/LangSelector";
import { useLangContext } from "@/contexts/LangContext";
import { useEffect, useRef, useState } from "react";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

interface LinkProjetsProps {
  git?: string | null;
  site?: string | null;
  project?: string | null;
  toutProjet?: string | null;
  horizontal?: boolean;
}

export default function LinkProjets({
  git = null,
  site = null,
  project = null,
  toutProjet = null,
  horizontal = false,
}: LinkProjetsProps) {
  const { LangVariable } = useLangContext();

  const translateText = (
    dict: Partial<Record<LangType, string>>,
    fallback = ""
  ): string => {
    return dict[LangVariable] || fallback;
  };

  const link = [
    {
      label: translateText({
        FRA: "Github",
        ENG: "GitHub",
        SPA: "GitHub",
        DEU: "GitHub",
      }),
    },
    {
      label: translateText({
        FRA: "Site web",
        ENG: "Website",
        SPA: "Sitio web",
        DEU: "Webseite",
      }),
    },
    {
      label: translateText({
        FRA: "En savoir plus",
        ENG: "Learn more",
        SPA: "Más información",
        DEU: "Mehr erfahren",
      }),
    },
    {
      label: translateText({
        FRA: "Tous mes projets",
        ENG: "All my projects",
        SPA: "Todos mis proyectos",
        DEU: "Alle meine Projekte",
      }),
    },
  ];

  return (
    <div
      className={`w-full flex ${
        horizontal ? "flex-row" : "flex-col lg:w-1/6 lg:h-4/5"
      } gap-2 justify-around items-center lg:items-end`}
    >
      {git && (
        <LinkStyle
          lien={git}
          info={link[0].label}
          specialClass="w-full lg:max-w-[300px] noopener"
          target="_blank"
        />
      )}
      {site && (
        <LinkStyle
          lien={site}
          info={link[1].label}
          specialClass="w-full lg:max-w-[300px] noopener"
          target="_blank"
        />
      )}
      {project && (
        <LinkStyle
          lien={project}
          info={link[2].label}
          specialClass="w-full lg:max-w-[300px] noopener"
        />
      )}
      {toutProjet && (
        <LinkStyle
          lien={toutProjet}
          info={link[3].label}
          specialClass="w-full lg:max-w-[300px] noopener"
        />
      )}
    </div>
  );
}
