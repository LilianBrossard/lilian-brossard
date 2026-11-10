export type LangType = "FRA" | "ENG" | "SPA" | "DEU";

export type Dict = Partial<Record<LangType, string>>;

export const LANGS: LangType[] = ["FRA", "ENG", "SPA", "DEU"];

// Code utilisé pour l'attribut <html lang="...">
export const HTML_LANG: Record<LangType, string> = {
  FRA: "fr",
  ENG: "en",
  SPA: "es",
  DEU: "de",
};

export function isLang(value: unknown): value is LangType {
  return typeof value === "string" && (LANGS as string[]).includes(value);
}

// Si une traduction manque, on retombe sur le français, puis l'anglais.
export function translate(dict: Dict, lang: LangType, fallback = ""): string {
  return (
    dict[lang] || dict.FRA || dict.ENG || Object.values(dict)[0] || fallback
  );
}
