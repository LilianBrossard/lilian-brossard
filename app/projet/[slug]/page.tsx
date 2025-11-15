import { getAllProjects, getProjectBySlug } from "@/utils/MarkdownReader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";
import LinkProjets from "@/components/LinkProjets";
import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full sticky top-0 z-40">
        <Navbar />
        <div className="block lg:hidden h-16"></div>
      </div>
      <div>
        <div
          key={project.slug}
          className="relative w-11/12 transition-colors duration-300"
        >
          <div className="hidden lg:flex group/circle w-full h-full relative flex-row justify-center items-start overflow-hidden">
            <div className="absolute -z-10 top-0 left-0 w-0 h-0 group-hover/circle:w-[75vw] group-hover/circle:h-[75vw] transition-all duration-700 rounded-br-full bg-background opacity-30"></div>
            <div className="w-1/2 h-full p-8 xl:p-16 flex flex-col justify-start items-start overflow-hidden">
              <h4 className="text-3xl xl:text-4xl font-bold font-(family-name:--font-aquire) uppercase text-foreground hover:text-(--accentuation) transition-colors duration-300">
                <Translate dict={project.title} />
              </h4>
              <p className="my-4 text-lg text-foreground">
                <Translate dict={project.description} />
              </p>
              <hr className="h-1 w-full bg-(--foreground-secondary)" />
              {project.details.map((detail, index) => (
                <p key={index} className="mt-8 text-md text-foreground">
                  <Translate dict={detail} />
                </p>
              ))}
            </div>
            <div className="w-1/2 h-full p-16 flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-2 border-l-2 border-(--primary)"></div>
                <div className="absolute inset-0 w-1/2 h-1/2 top-[55%] left-[55%] border-b-2 border-r-2 border-(--primary)"></div>
                {project.images[0] && (
                  <Image
                    src={`/projets/${project.images[0]}`}
                    alt={project.title.FRA}
                    width={1000}
                    height={1000}
                    className="object-contain border-2 border-(--primary)"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:block py-16">
            <LinkProjets
              site={project.site}
              git={project.git}
              project={`/projet/${project.slug}`}
              horizontal={true}
            />
          </div>
          <div className="flex lg:hidden w-full h-full relative flex-col justify-start items-start gap-4 overflow-hidden p-6">
            <Link href={`/projet/${project.slug}`}>
              <h4 className="text-3xl font-bold font-(family-name:--font-aquire) uppercase text-foreground hover:text-(--accentuation) transition-colors duration-300">
                <Translate dict={project.title} />
              </h4>
            </Link>
            <p className="text-lg font-bold text-foreground">
              <Translate dict={project.description} />
            </p>
            <hr className="h-1 w-full bg-(--foreground-secondary)" />
            {project.details.map((detail, index) => (
              <p key={index} className="mt-4 text-md text-foreground">
                <Translate dict={detail} />
              </p>
            ))}
            <hr className="h-1 w-full bg-(--foreground-secondary)" />

            <div className="relative">
              <div className="absolute inset-0 w-1/2 h-1/2 -top-[2%] -left-[2%] border-t-2 border-l-2 border-(--primary)"></div>
              <div className="absolute inset-0 w-1/2 h-1/2 top-[52%] left-[52%] border-b-2 border-r-2 border-(--primary)"></div>
              {project.images[0] && (
                <Image
                  src={`/projets/${project.images[0]}`}
                  alt={project.title.FRA}
                  width={1000}
                  height={1000}
                  className="object-contain border-2 border-(--primary)"
                />
              )}
            </div>
            <hr className="h-1 w-full bg-(--foreground-secondary)" />
            <LinkProjets
              site={project.site}
              git={project.git}
              project={`/projet/${project.slug}`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
