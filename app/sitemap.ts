import type { MetadataRoute } from "next";
import { getAllProjects } from "@/utils/MarkdownReader";
import { SITE_URL } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projet`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/experiences`, changeFrequency: "yearly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projet/${project.slug}`,
      lastModified: project.date ? new Date(project.date) : undefined,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
