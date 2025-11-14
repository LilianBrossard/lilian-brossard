import { getAllProjects, getProjectBySlug } from "@/utils/MarkdownReader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((projet) => ({
    slug: projet.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    console.log("Project not found:", slug);
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            <Translate dict={project.title} />
          </h1>
          <p className="text-sm mb-8">{project.date}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
