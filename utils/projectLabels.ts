import type { Dict } from "@/utils/i18n";

export type ProjectContext = "perso" | "etudes" | "pro";

// Libellés du contexte d'un projet (champ "context" des fichiers markdown)
export const CONTEXT_LABELS: Record<ProjectContext, Dict> = {
  perso: {
    FRA: "Projet perso",
    ENG: "Personal project",
    SPA: "Proyecto personal",
    DEU: "Privates Projekt",
  },
  etudes: {
    FRA: "Projet d'études",
    ENG: "School project",
    SPA: "Proyecto académico",
    DEU: "Studienprojekt",
  },
  pro: {
    FRA: "Projet pro",
    ENG: "Professional project",
    SPA: "Proyecto profesional",
    DEU: "Berufliches Projekt",
  },
};
