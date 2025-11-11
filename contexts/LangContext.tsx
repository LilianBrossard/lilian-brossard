"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LangType = "ENG" | "FRA" | "SPA" | "DEU";

interface LangContext {
  LangVariable: LangType;
  setLangVariable: (value: LangType) => void;
}

const LangContext = createContext<LangContext | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [LangVariable, setLangVariable] = useState<LangType>("FRA");
  return (
    <LangContext.Provider value={{ LangVariable, setLangVariable }}>
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
