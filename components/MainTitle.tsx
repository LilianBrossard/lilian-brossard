"use client";
import Link from "next/link";
import { useLangContext } from "@/contexts/LangContext";
import { div } from "framer-motion/client";
type LangType = "ENG" | "FRA" | "SPA" | "DEU";

interface MainTitleProps {
  titre?: Partial<Record<LangType, string>>;
  postion?: number;
  links?: string[];
}

export default function MainTitle({
  titre = {
    FRA: "Undifind",
    ENG: "Undifind",
    SPA: "Undifind",
    DEU: "Undifind",
  },
  postion = 1,
  links = ["/"],
}: MainTitleProps) {
  const { LangVariable } = useLangContext();
  const translateText = (
    dict: Partial<Record<LangType, string>>,
    fallback = ""
  ): string => {
    return dict[LangVariable] || fallback;
  };

  return (
    <div className="relative flex flex-row justify-around items-center text-6xl font-bold uppercase font-(family-name:--font-aquire) whitespace-nowrap">
      <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <hr
            key={index}
            className="w-full h-1 bg-foreground border-0 shadow-[0_0_5px_rgba(255,255,255,0.3),0_0_10px_rgba(255,255,255,0.1)]"
          />
        ))}
      </div>
      <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center gap-2 overflow-hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-1/12 animation-flux h-1 bg-foreground border-0 shadow-[0_0_10px_rgba(255,250,0,1),0_0_20px_rgba(255,250,0,0.5)]"
          />
        ))}
      </div>
      {links.map((element, index) => (
        <div key={index} className="z-10 p-2 bg-background">
          <Link href={element} className="hover:animate-pulse">
            {postion === index + 1 ? (
              <h2 className="px-1">{translateText(titre)}</h2>
            ) : (
              <div className="w-12 h-12 bg-foreground opacity-80"></div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
