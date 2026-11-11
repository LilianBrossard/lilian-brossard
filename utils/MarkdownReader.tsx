import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Dict } from "@/utils/i18n";
import { CONTEXT_LABELS, type ProjectContext } from "@/utils/projectLabels";

const projectsDirectory = path.join(process.cwd(), "content/projets");

export interface Project {
  slug: string;
  title: Dict;
  description: Dict;
  date: string;
  details: Dict[][];
  /** Technologies citées dans la description du projet */
  tags: string[];
  /** Contexte : projet personnel ou d'études (si connu) */
  context: ProjectContext | null;
  images: string[];
  git?: string | null;
  /** Plusieurs dépôts : un bouton par lien, avec son propre libellé */
  gitLinks: { url: string; label: Dict }[];
  site?: string | null;
  content?: string;
}

function readProject(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    details: data.details ?? [],
    images: data.images ?? [],
    tags: Array.isArray(data.tags) ? data.tags : [],
    context: typeof data.context === "string" && Object.hasOwn(CONTEXT_LABELS, data.context) ? (data.context as ProjectContext) : null,
    content,
    git: data.git || null,
    gitLinks: Array.isArray(data.gitLinks) ? data.gitLinks : [],
    site: data.site || null,
  };
}

export function getAllProjects(): Project[] {
  const projects = fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readProject(fileName.replace(/\.md$/, "")));

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    return readProject(slug);
  } catch {
    return null;
  }
}
