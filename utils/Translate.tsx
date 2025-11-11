"use client";
import { useLangContext } from "@/contexts/LangContext";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

interface TransProps {
  dict: Partial<Record<LangType, string>>;
  fallback?: string;
}

export default function Translate({ dict, fallback = "" }: TransProps): string {
  const { LangVariable } = useLangContext();

  return (
    dict[LangVariable] ||
    dict.FRA ||
    dict.ENG ||
    Object.values(dict)[0] ||
    fallback
  );
}
