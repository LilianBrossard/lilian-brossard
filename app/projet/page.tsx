import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";

import Link from "next/link";
import { getAllProjects } from "@/utils/MarkdownReader";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="w-screen min-h-screen">
      <h1 className="sr-only">Lilian Brossard Portfolio</h1>
      <main className="flex flex-col w-full h-full">
        <Navbar />
        <h2 className="text-4xl font-bold uppercase font-[--font-aquire]">
          Mes projets :
        </h2>
        <div className="sticky top-0 z-40"></div>
        <p className="mt-4 text-lg">Découvrez mes projets ci-dessous :</p>
        <div className="mt-8 flex flex-col gap-4">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projet/${project.slug}`}>
              <Translate dict={project.title} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
