"use client";
import { useTranslate } from "@/contexts/LangContext";
import type { Dict } from "@/utils/i18n";

interface TransProps {
  dict: Dict;
  fallback?: string;
}

export default function Translate({ dict, fallback = "" }: TransProps): string {
  const t = useTranslate();
  return t(dict, fallback);
}
