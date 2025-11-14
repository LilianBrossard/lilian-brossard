"use client";
import Translate from "@/utils/Translate";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

type DictTraductionType = {
  [K in LangType]: string;
};

interface ProjetListProps {
  projects: Array<{
    slug: string;
    title: DictTraductionType;
    description: DictTraductionType;
    date: string;
    details: DictTraductionType[];
    images: string[];
    git?: string | null;
    site?: string | null;
    content?: string;
  }>;
}

export default function ProjetList({ projects }: ProjetListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoverID, setHoverID] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (hoverID !== null) {
        for (let i = 0; i < projects.length; i++) {
          const element = containerRef.current.children[i] as HTMLAnchorElement;
          if (i === hoverID) {
            element.classList.add(
              "translate-x-4",
              "md:translate-x-8",
              "lg:translate-x-12",
              "xl:translate-x-16"
            );
            element.classList.remove(
              "translate-x-2",
              "md:translate-x-4",
              "lg:translate-x-6",
              "xl:translate-x-8"
            );
          } else if (i === hoverID + 1 || i === hoverID - 1) {
            element.classList.add(
              "translate-x-2",
              "md:translate-x-4",
              "lg:translate-x-6",
              "xl:translate-x-8"
            );
            element.classList.remove(
              "translate-x-4",
              "md:translate-x-8",
              "lg:translate-x-12",
              "xl:translate-x-16"
            );
          } else {
            element.classList.remove(
              "translate-x-4",
              "md:translate-x-8",
              "lg:translate-x-12",
              "xl:translate-x-16",
              "translate-x-2",
              "md:translate-x-4",
              "lg:translate-x-6",
              "xl:translate-x-8"
            );
          }
        }
      } else {
        for (let i = 0; i < projects.length; i++) {
          const element = containerRef.current.children[i] as HTMLAnchorElement;
          element.classList.remove(
            "translate-x-4",
            "md:translate-x-8",
            "lg:translate-x-12",
            "xl:translate-x-16",
            "translate-x-2",
            "md:translate-x-4",
            "lg:translate-x-6",
            "xl:translate-x-8"
          );
        }
      }
    }
  }, [hoverID]);

  return (
    <div
      className="w-max flex flex-col items-start justify-start my-16"
      ref={containerRef}
      onMouseLeave={() => setHoverID(null)}
    >
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/projet/${project.slug}`}
          className="w-full overflow-hidden group flex justify-start items-center transition-transform duration-300"
          onMouseEnter={() => setHoverID(index)}
        >
          <h2 className="uppercase scale-y-130 font-(family-name:--font-aquire) text-2xl md:text-5xl lg:text-6xl xl:text-7xl group-hover:text-(--accentuation) transition-colors duration-300">
            <Translate dict={project.title} />
          </h2>
        </Link>
      ))}
    </div>
  );
}
