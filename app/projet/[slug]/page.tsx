import { getAllProjects, getProjectBySlug } from "@/utils/MarkdownReader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Circuit from "@/components/Circuit";
import ProjectBody from "@/components/ProjectBody";
import ActionButton from "@/components/ActionButton";
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, GithubIcon } from "@/components/icons";
import Translate from "@/utils/Translate";
import { CONTEXT_LABELS } from "@/utils/projectLabels";
import Link from "next/link";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((projet) => ({
    slug: projet.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = project.title.FRA || slug;
  const description = project.description.FRA;
  const image = project.images[0] ? `/projets/${project.images[0]}` : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/projet/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${title} | Lilian Brossard`,
      description,
      url: `/projet/${project.slug}`,
      ...(image && { images: [image] }),
    },
    twitter: {
      title: `${title} | Lilian Brossard`,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Projets voisins (liste triée du plus récent au plus ancien)
  const all = getAllProjects();
  const position = all.findIndex((p) => p.slug === project.slug);
  const newer = position > 0 ? all[position - 1] : null;
  const older = position < all.length - 1 ? all[position + 1] : null;

  return (
    <div className="flex min-h-screen flex-col w-full">
      <div className="fixed inset-0 -z-10 opacity-15 pointer-events-none">
        <Circuit />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-16 py-8 lg:py-12">
        <Link
          href="/projet"
          className="inline-flex items-center gap-2 text-(--foreground-secondary) hover:text-(--accentuation) transition-colors"
        >
          <ArrowLeftIcon size={18} />
          <Translate dict={{ FRA: "Tous les projets", ENG: "All projects", SPA: "Todos los proyectos", DEU: "Alle Projekte" }} />
        </Link>

        {/* En-tête du projet */}
        <header className="mt-8 lg:mt-10 pb-10 lg:pb-14 mb-12 lg:mb-16 border-b-2 border-(--background-secondary)">
          <p className="text-sm font-bold uppercase tracking-widest text-(--accentuation)">
            {project.date.slice(0, 4)}
            {project.context && (
              <>
                {" · "}
                <Translate dict={CONTEXT_LABELS[project.context]} />
              </>
            )}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl xl:text-6xl font-bold font-(family-name:--font-aquire) uppercase leading-tight">
            <Translate dict={project.title} />
          </h1>
          <p className="mt-5 max-w-3xl text-lg lg:text-xl leading-relaxed text-(--foreground-secondary)">
            <Translate dict={project.description} />
          </p>
          {project.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className="text-sm px-3 py-1 border border-(--accentuation) text-(--accentuation)">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {(project.site || project.git || project.gitLinks.length > 0) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.site && (
                <ActionButton href={project.site} external variant="primary" icon={<ExternalIcon size={18} />}>
                  <Translate dict={{ FRA: "Voir le site", ENG: "Visit website", SPA: "Ver el sitio", DEU: "Webseite öffnen" }} />
                </ActionButton>
              )}
              {project.git && (
                <ActionButton href={project.git} external icon={<GithubIcon size={18} />}>
                  <Translate dict={{ FRA: "Code sur GitHub", ENG: "Code on GitHub", SPA: "Código en GitHub", DEU: "Code auf GitHub" }} />
                </ActionButton>
              )}
              {project.gitLinks.map((link) => (
                <ActionButton key={link.url} href={link.url} external icon={<GithubIcon size={18} />}>
                  <Translate dict={link.label} />
                </ActionButton>
              ))}
            </div>
          )}
        </header>

        <ProjectBody title={project.title} details={project.details} images={project.images} />

        {/* Navigation entre projets */}
        <nav
          aria-label="Projets"
          className="mt-20 lg:mt-28 pt-10 border-t-2 border-(--background-secondary) grid gap-4 sm:grid-cols-2"
        >
          {newer ? (
            <Link
              href={`/projet/${newer.slug}`}
              className="group flex flex-col gap-1 p-5 border-2 border-(--background-secondary) hover:border-(--accentuation) transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-sm text-(--muted)">
                <ArrowLeftIcon size={16} />
                <Translate dict={{ FRA: "Projet plus récent", ENG: "Newer project", SPA: "Proyecto más reciente", DEU: "Neueres Projekt" }} />
              </span>
              <span className="font-(family-name:--font-aquire) uppercase text-xl group-hover:text-(--accentuation) transition-colors">
                <Translate dict={newer.title} />
              </span>
            </Link>
          ) : (
            <span></span>
          )}
          {older && (
            <Link
              href={`/projet/${older.slug}`}
              className="group flex flex-col items-end text-right gap-1 p-5 border-2 border-(--background-secondary) hover:border-(--accentuation) transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-sm text-(--muted)">
                <Translate dict={{ FRA: "Projet plus ancien", ENG: "Older project", SPA: "Proyecto más antiguo", DEU: "Älteres Projekt" }} />
                <ArrowRightIcon size={16} />
              </span>
              <span className="font-(family-name:--font-aquire) uppercase text-xl group-hover:text-(--accentuation) transition-colors">
                <Translate dict={older.title} />
              </span>
            </Link>
          )}
        </nav>
      </main>
      <Footer />
    </div>
  );
}
