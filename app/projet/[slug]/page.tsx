import { getAllProjects, getProjectBySlug } from "@/utils/MarkdownReader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";
import LinkProjets from "@/components/LinkProjets";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";
import { div } from "framer-motion/client";

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
          className="relative w-full transition-colors duration-300"
        >
          <div className="flex group/circle w-full h-full relative flex-row justify-center items-start overflow-hidden">
            <div className="absolute -z-10 top-0 left-0 w-0 h-0 group-hover/circle:w-[75vw] group-hover/circle:h-[75vw] transition-all duration-700 rounded-br-full bg-background opacity-30"></div>
            <div className="w-full h-full p-8 xl:p-16 flex flex-col justify-start items-start overflow-hidden">
              <h4 className="text-3xl xl:text-4xl font-bold font-(family-name:--font-aquire) uppercase text-foreground">
                <Translate dict={project.title} />
              </h4>
              <p className="my-4 text-lg text-foreground">
                <Translate dict={project.description} />
              </p>
              <hr className="h-1 w-full bg-(--foreground-secondary)" />

              {project.details.map((detail, index) => (
                <div
                  key={index}
                  className={`mt-16 w-full h-full flex justify-around items-center gap-8 flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {project.images[index] ? (
                    <>
                      <div className="w-5/6 lg:w-1/2">
                        {detail.map((dict, numDict) => (
                          <p
                            key={`${index}-${numDict}`}
                            className={`mt-4 lg:mt-8 text-foreground ${
                              numDict === 0
                                ? "text-xl font-bold"
                                : "text-md pl-1 lg:pl-2"
                            }`}
                          >
                            <Translate dict={dict} />
                          </p>
                        ))}
                      </div>
                      <div className="relative w-3/4 lg:w-3/8">
                        <div className="absolute inset-0 w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-2 border-l-2 border-(--primary)"></div>
                        <div className="absolute inset-0 w-1/2 h-1/2 top-[55%] left-[55%] border-b-2 border-r-2 border-(--primary)"></div>
                        {project.images[0] && (
                          <Image
                            src={`/projets/${project.images[index]}`}
                            alt={project.title.FRA || "Project image"}
                            width={1000}
                            height={1000}
                            className="object-contain border-2 border-(--primary)"
                          />
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="w-5/6 lg:w-1/2">
                      {detail.map((dict, numDict) => (
                        <p
                          key={`${index}-${numDict}`}
                          className={`mt-8 text-foreground ${
                            numDict === 0 ? "text-xl font-bold" : "text-md pl-2"
                          }`}
                        >
                          <Translate dict={dict} />
                        </p>
                      ))}{" "}
                    </div>
                  )}
                </div>
              ))}
              {project.details.length < project.images.length &&
                project.images
                  .slice(project.details.length)
                  .map((image, index) => (
                    <div
                      key={`extra-image-${index}`}
                      className={`relative w-5/6 lg:w-1/2 flex flex-col justify-center items-center my-16 mx-auto lg:mx-0 ${
                        index % 2 === 0 ? "lg:ml-[20vw]" : "lg:ml-[40vw]"
                      }`}
                    >
                      <div className="absolute inset-0 w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-2 border-l-2 border-(--primary)"></div>
                      <div className="absolute inset-0 w-1/2 h-1/2 top-[55%] left-[55%] border-b-2 border-r-2 border-(--primary)"></div>
                      <Image
                        src={`/projets/${image}`}
                        alt={project.title.FRA || "Project image"}
                        width={1000}
                        height={1000}
                        className="object-contain border-2 border-(--primary)"
                      />
                    </div>
                  ))}
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
          <div className="block lg:hidden py-16">
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
