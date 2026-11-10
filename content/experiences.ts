import type { Dict } from "@/utils/i18n";

// Parcours affiché sur l'accueil (section Expériences) et sur la page /experiences.
// Contenu repris du CV. Pour ajouter une expérience, ajouter un objet en haut de la liste.

export interface ParcoursItem {
  id: string;
  kind: "experience" | "formation";
  /** Intitulé du poste ou du diplôme */
  title: Dict;
  organisation: string;
  place: string;
  /** "AAAA-MM" pour un mois précis, "AAAA" pour une année */
  start: string;
  end: string;
  /** Résumé court (accueil) */
  summary: Dict;
  /** Détails (page Expériences) */
  details: Dict[];
}

export const parcours: ParcoursItem[] = [
  {
    id: "naval-group",
    kind: "experience",
    title: {
      FRA: "Stage - Numérisation de processus",
      ENG: "Internship - Process digitalization",
      SPA: "Prácticas - Digitalización de procesos",
      DEU: "Praktikum - Prozessdigitalisierung",
    },
    organisation: "Naval Group",
    place: "Lorient",
    start: "2026-03",
    end: "2026-07",
    summary: {
      FRA: "Conception et développement d'outils internes pour automatiser le traitement et l'exploitation des données techniques.",
      ENG: "Design and development of internal tools to automate the processing and use of technical data.",
      SPA: "Diseño y desarrollo de herramientas internas para automatizar el tratamiento y la explotación de datos técnicos.",
      DEU: "Konzeption und Entwicklung interner Tools zur Automatisierung der Verarbeitung und Nutzung technischer Daten.",
    },
    details: [
      {
        FRA: "Conception et développement d'outils internes pour automatiser le traitement et l'exploitation des données techniques.",
        ENG: "Design and development of internal tools to automate the processing and use of technical data.",
        SPA: "Diseño y desarrollo de herramientas internas para automatizar el tratamiento y la explotación de datos técnicos.",
        DEU: "Konzeption und Entwicklung interner Tools zur Automatisierung der Verarbeitung und Nutzung technischer Daten.",
      },
      {
        FRA: "Intégration de solutions logicielles fiables pour optimiser les processus métiers au sein des équipes.",
        ENG: "Integration of reliable software solutions to optimize business processes within the teams.",
        SPA: "Integración de soluciones de software fiables para optimizar los procesos de negocio dentro de los equipos.",
        DEU: "Integration zuverlässiger Softwarelösungen zur Optimierung der Geschäftsprozesse in den Teams.",
      },
    ],
  },
  {
    id: "audelor",
    kind: "experience",
    title: {
      FRA: "Stage - Analyse du stockage de fichiers",
      ENG: "Internship - File storage analysis",
      SPA: "Prácticas - Análisis del almacenamiento de archivos",
      DEU: "Praktikum - Analyse der Dateiablage",
    },
    organisation: "Audélor",
    place: "Lorient",
    start: "2025-04",
    end: "2025-07",
    summary: {
      FRA: "Analyse des fichiers, des archives et des usages des salariés pour dresser un bilan du patrimoine numérique de l'agence et proposer des évolutions.",
      ENG: "Analysis of the agency's files, archives and staff usage to assess its digital assets and propose improvements.",
      SPA: "Análisis de los archivos, del archivo histórico y de los usos de los empleados para hacer un balance del patrimonio digital de la agencia y proponer mejoras.",
      DEU: "Analyse der Dateien, Archive und Nutzungsgewohnheiten der Mitarbeitenden, um eine Bilanz des digitalen Bestands der Agentur zu ziehen und Verbesserungen vorzuschlagen.",
    },
    details: [
      {
        FRA: "Analyse quantitative des fichiers et des archives de l'agence.",
        ENG: "Quantitative analysis of the agency's files and archives.",
        SPA: "Análisis cuantitativo de los archivos y del archivo histórico de la agencia.",
        DEU: "Quantitative Analyse der Dateien und Archive der Agentur.",
      },
      {
        FRA: "Analyse des usages et des besoins des salariés.",
        ENG: "Analysis of staff usage and needs.",
        SPA: "Análisis de los usos y necesidades de los empleados.",
        DEU: "Analyse der Nutzungsgewohnheiten und Bedürfnisse der Mitarbeitenden.",
      },
      {
        FRA: "Bilan des risques et des enjeux liés au patrimoine numérique de l'agence, et propositions d'évolutions.",
        ENG: "Assessment of the risks and challenges related to the agency's digital assets, with proposed improvements.",
        SPA: "Balance de los riesgos y retos ligados al patrimonio digital de la agencia, con propuestas de mejora.",
        DEU: "Bewertung der Risiken und Herausforderungen rund um den digitalen Bestand der Agentur, mit Verbesserungsvorschlägen.",
      },
    ],
  },
  {
    id: "but-informatique",
    kind: "formation",
    title: {
      FRA: "Bachelor Universitaire de Technologie Informatique",
      ENG: "Bachelor of Technology in Computer Science",
      SPA: "Bachelor Universitario de Tecnología en Informática",
      DEU: "Bachelor of Technology in Informatik",
    },
    organisation: "IUT de Lannion",
    place: "Lannion",
    start: "2023",
    end: "2026",
    summary: {
      FRA: "Parcours Data et IA. Programmation, systèmes, réseaux, anglais, droit, management et communication.",
      ENG: "Data and AI track. Programming, systems, networks, English, law, management and communication.",
      SPA: "Especialización en Datos e IA. Programación, sistemas, redes, inglés, derecho, gestión y comunicación.",
      DEU: "Schwerpunkt Daten und KI. Programmierung, Systeme, Netzwerke, Englisch, Recht, Management und Kommunikation.",
    },
    details: [
      {
        FRA: "Parcours Data et IA.",
        ENG: "Data and AI track.",
        SPA: "Especialización en Datos e IA.",
        DEU: "Schwerpunkt Daten und KI.",
      },
      {
        FRA: "Apprentissage de compétences en programmation, système, réseaux, anglais, droit, management et communication.",
        ENG: "Skills in programming, systems, networks, English, law, management and communication.",
        SPA: "Competencias en programación, sistemas, redes, inglés, derecho, gestión y comunicación.",
        DEU: "Kompetenzen in Programmierung, Systemen, Netzwerken, Englisch, Recht, Management und Kommunikation.",
      },
    ],
  },
  {
    id: "bac",
    kind: "formation",
    title: {
      FRA: "Baccalauréat général",
      ENG: "French general baccalaureate",
      SPA: "Bachillerato general francés",
      DEU: "Französisches Abitur",
    },
    organisation: "Lycée Jean-Baptiste Colbert",
    place: "Lorient",
    start: "2020",
    end: "2023",
    summary: {
      FRA: "Spécialités physique-chimie et NSI (informatique), option DGEMC (droit).",
      ENG: "Physics-Chemistry and Computer Science (NSI) specializations, Law (DGEMC) elective.",
      SPA: "Especialidades de Física-Química e Informática (NSI), optativa de Derecho (DGEMC).",
      DEU: "Schwerpunkte Physik-Chemie und Informatik (NSI), Wahlfach Recht (DGEMC).",
    },
    details: [
      {
        FRA: "Spécialités physique-chimie et NSI (numérique et sciences informatiques).",
        ENG: "Physics-Chemistry and Computer Science (NSI) specializations.",
        SPA: "Especialidades de Física-Química e Informática (NSI).",
        DEU: "Schwerpunkte Physik-Chemie und Informatik (NSI).",
      },
      {
        FRA: "Option DGEMC (droit et grands enjeux du monde contemporain).",
        ENG: "Law elective (DGEMC).",
        SPA: "Optativa de Derecho (DGEMC).",
        DEU: "Wahlfach Recht (DGEMC).",
      },
    ],
  },
];

const MONTHS: Record<string, string[]> = {
  FRA: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
  ENG: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  SPA: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
  DEU: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
};

// Mise en forme fixe (pas d'Intl) pour un rendu identique serveur / navigateur
export function formatPeriod(item: ParcoursItem, lang: string): string {
  const fmt = (value: string) => {
    const [year, month] = value.split("-");
    if (!month) return year;
    return `${(MONTHS[lang] ?? MONTHS.FRA)[Number(month) - 1]} ${year}`;
  };
  return `${fmt(item.start)} - ${fmt(item.end)}`;
}
