"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import {
  HTML_LANG,
  isLang,
  translate,
  type Dict,
  type LangType,
} from "@/utils/i18n";

export const LANG_STORAGE_KEY = "lang";

// Petit store partagé : la langue choisie est gardée dans le localStorage
// pour survivre au rechargement de la page.
const listeners = new Set<() => void>();
let currentLang: LangType | null = null;

function readStoredLang(): LangType {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {}
  return "FRA";
}

function getSnapshot(): LangType {
  if (currentLang === null) currentLang = readStoredLang();
  return currentLang;
}

function getServerSnapshot(): LangType {
  return "FRA";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function setLang(lang: LangType) {
  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((listener) => listener());
}

interface LangContextValue {
  LangVariable: LangType;
  setLangVariable: (value: LangType) => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const LangVariable = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[LangVariable];
  }, [LangVariable]);

  return (
    <LangContext.Provider value={{ LangVariable, setLangVariable: setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider");
  }
  return context;
};

// Renvoie une fonction t(dict) qui traduit dans la langue courante.
export const useTranslate = () => {
  const { LangVariable } = useLangContext();
  return useCallback(
    (dict: Dict, fallback?: string) => translate(dict, LangVariable, fallback),
    [LangVariable]
  );
};
