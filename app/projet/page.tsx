import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";
import MainTitle from "@/components/MainTitle";
import ProjetList from "@/components/ProjetList";

import { getAllProjects } from "@/utils/MarkdownReader";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="w-screen min-h-screen">
      <h1 className="sr-only">Lilian Brossard Portfolio</h1>
      <main className="flex flex-col w-full h-full">
        <div className="w-full sticky top-0 z-40">
          <Navbar />
          <div className="block lg:hidden h-16"></div>
        </div>
        <MainTitle
          titre={{
            FRA: "Projets",
            ENG: "Projects",
            SPA: "Proyectos",
            DEU: "Projekte",
          }}
          links={["#"]}
        />
        <ProjetList projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
