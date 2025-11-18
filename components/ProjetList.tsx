"use client";
import Translate from "@/utils/Translate";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { div } from "framer-motion/client";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";
type DictTraductionType = {
  [K in LangType]?: string; // Notez le "?" qui rend chaque langue optionnelle
};

interface ProjetListProps {
  projects: Array<{
    slug: string;
    title: DictTraductionType;
    description: DictTraductionType;
    date: string;
    details: Partial<DictTraductionType>[][];
    images: string[];
    git?: string | null;
    site?: string | null;
    content?: string;
  }>;
}

export default function ProjetList({ projects }: ProjetListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
    <section className="flex flex-row justify-start items-center w-full h-full overflow-hidden">
      <div
        className="w-max relative flex flex-col items-start justify-start m-8 lg:m-16"
        ref={containerRef}
        onMouseLeave={() => setHoverID(null)}
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projet/${project.slug}`}
            className="w-full group transition-transform duration-300 overflow-visible"
            onMouseEnter={() => setHoverID(index)}
          >
            <div className="flex justify-start items-center w-full overflow-hidden">
              <h2 className="uppercase scale-y-130 font-(family-name:--font-aquire) text-2xl md:text-5xl lg:text-6xl xl:text-7xl group-hover:text-(--accentuation) transition-colors duration-300">
                <Translate dict={project.title} />
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute overflow-hidden w-full h-full min-w-[99vw] min-h-[99vh] hidden lg:flex justify-end items-center -z-10 ">
        <div className="relative w-1/2 h-1/2 min-w-[40vw] flex justify-center items-center">
          {projects.map((project, index) => (
            <div
              ref={imageRef}
              key={index}
              className={`absolute block w-full h-full p-8 transition-opacity duration-300 pointer-events-none -z-10 ${
                hoverID === index ? "opacity-100" : "opacity-0"
              } ${
                index % 3 === 0
                  ? "rotate-5"
                  : index % 3 === 1
                  ? "-rotate-5"
                  : "rotate-0"
              } ${
                index % 5 === 0
                  ? "left-0"
                  : index % 5 === 1
                  ? "left-5"
                  : index % 5 === 2
                  ? "right-5"
                  : index % 5 === 3
                  ? "left-10"
                  : "right-15"
              } `}
            >
              <div className="absolute inset-0 w-1/2 h-1/2 top-0 left-0 border-t-2 border-l-2 border-(--primary)"></div>
              <div className="absolute inset-0 w-1/2 h-1/2 top-[40%] left-1/2 border-b-2 border-r-2 border-(--primary)"></div>
              <div className="w-full h-full p-4 bg-(--background-secondary) clipPath-imageCard">
                <Image
                  src={`/projets/${project.images[0]}`}
                  alt="Project image"
                  width={1920}
                  height={1080}
                  className="clipPath-imageCard object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
