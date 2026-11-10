import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import ProjetCircuit, { type CircuitProject } from "@/components/ProjetCircuit";
import Circuit from "@/components/Circuit";
import Translate from "@/utils/Translate";
import type { Metadata } from "next";

import { getAllProjects } from "@/utils/MarkdownReader";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Tous les projets de Lilian Brossard : sites web, applications, bases de données et algorithmes réalisés pendant son BUT Informatique et en projets personnels.",
  alternates: { canonical: "/projet" },
};

export default function ProjetsPage() {
  // On ne transmet au composant que ce qu'il affiche
  const projects: CircuitProject[] = getAllProjects().map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    date: project.date,
    tags: project.tags,
    context: project.context,
    image: project.images[0] ?? null,
  }));

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 opacity-25 pointer-events-none">
        <Circuit />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1 w-full pt-8 lg:pt-12">
        <MainTitle
          as="h1"
          titre={{
            FRA: "Projets",
            ENG: "Projects",
            SPA: "Proyectos",
            DEU: "Projekte",
          }}
        />
        <p className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16 mt-10 text-lg lg:text-xl leading-relaxed text-(--foreground-secondary)">
          <Translate
            dict={{
              FRA: "Du plus récent au plus ancien. Chaque puce mène au détail du projet.",
              ENG: "From newest to oldest. Each chip leads to the project details.",
              SPA: "Del más reciente al más antiguo. Cada chip lleva al detalle del proyecto.",
              DEU: "Vom neuesten zum ältesten. Jeder Chip führt zu den Projektdetails.",
            }}
          />
        </p>
        <ProjetCircuit projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
