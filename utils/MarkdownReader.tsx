import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projets");
type LangType = "ENG" | "FRA" | "SPA" | "DEU";
type DictTraductionType = {
  [K in LangType]?: string; // Notez le "?" qui rend chaque langue optionnelle
};

export interface Project {
  slug: string;
  title: DictTraductionType;
  description: DictTraductionType;
  date: string;
  details: Partial<DictTraductionType>[][];
  images: string[];
  git?: string | null;
  site?: string | null;
  content?: string;
}

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      details: data.details,
      images: data.images,
      content,
      git: data.git || null,
      site: data.site || null,
    };
  });

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      details: data.details,
      images: data.images,
      content,
      git: data.git || null,
      site: data.site || null,
    };
  } catch {
    return null;
  }
}
