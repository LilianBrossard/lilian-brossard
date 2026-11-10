import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Dict } from "@/utils/i18n";

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
  context: "perso" | "etudes" | null;
  images: string[];
  git?: string | null;
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
    context: data.context === "perso" || data.context === "etudes" ? data.context : null,
    content,
    git: data.git || null,
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
