import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Circuit from "@/components/Circuit";
import ParallaxLetter from "@/components/ParallaxLetter";
import Translate from "@/utils/Translate";
import MainTitle, { type SectionLink } from "@/components/MainTitle";
import Apropos from "@/components/Apropos";
import ExperiencesSection from "@/components/ExperiencesSection";
import ContactSection from "@/components/ContactSection";
import ActionButton from "@/components/ActionButton";
import {
  ArrowRightIcon,
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  MailIcon,
} from "@/components/icons";

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { getAllProjects } from "@/utils/MarkdownReader";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Sections de l'accueil, dans l'ordre (utilisées par les titres de section)
const sections: SectionLink[] = [
  { href: "#apropos", label: { FRA: "À propos", ENG: "About", SPA: "Acerca de", DEU: "Über Mich" } },
  { href: "#experiences", label: { FRA: "Expériences", ENG: "Experience", SPA: "Experiencia", DEU: "Erfahrung" } },
  { href: "#projects", label: { FRA: "Projets", ENG: "Projects", SPA: "Proyectos", DEU: "Projekte" } },
  { href: "#contact", label: { FRA: "Contact", ENG: "Contact", SPA: "Contacto", DEU: "Kontakt" } },
];

// Décalage des ancres sous la barre de navigation collante
const anchor = "scroll-mt-16 lg:scroll-mt-20";

export default function Home() {
  const projects = getAllProjects();
  const nom = "Lilian Brossard".split("");

  return (
    <div className="w-full">
      <h1 className="sr-only">Lilian Brossard - Portfolio</h1>
      {/* Barre de navigation visible dès l'arrivée, par-dessus l'en-tête */}
      <div className="sticky top-0 z-50 h-0">
        <Navbar />
      </div>
      <main className="flex flex-col w-full">
        {/* En-tête =================================================================================================================================*/}
        <section className="sticky top-0 overflow-hidden w-full h-[100svh] min-h-[540px] bg-background flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 -z-10 opacity-25">
            <Circuit />
          </div>
          <div className="relative w-full max-w-[1600px] px-6 md:px-12 pt-16 lg:pt-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
            <div className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-60 lg:h-60 group max-lg:[@media(max-height:760px)]:hidden">
              <div className="absolute w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-2 border-l-2 lg:border-t-4 lg:border-l-4 border-(--primary) group-hover:scale-110 duration-300"></div>
              <div className="absolute w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-2 border-l-2 lg:border-t-4 lg:border-l-4 border-(--primary) scale-110 group-hover:scale-125 duration-300"></div>
              <div className="absolute w-1/2 h-1/2 top-[55%] left-[55%] border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 border-(--primary) group-hover:scale-110 duration-300"></div>
              <div className="absolute w-1/2 h-1/2 top-[55%] left-[55%] border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 border-(--primary) scale-110 group-hover:scale-125 duration-300"></div>
              <Image
                src="/portrait.jpg"
                alt="Portrait de Lilian Brossard"
                fill
                priority
                sizes="(min-width: 1024px) 240px, 128px"
                className="object-cover group-hover:scale-105 duration-300"
              />
            </div>
            <div className="flex flex-col items-center gap-4 lg:gap-6 min-w-0">
              <h2 className="text-5xl sm:text-6xl xl:text-8xl min-[1700px]:text-9xl font-bold uppercase font-(family-name:--font-aquire) whitespace-nowrap leading-none">
                {nom.map((letter, index) => (
                  <ParallaxLetter
                    key={index}
                    letter={letter}
                    index={index}
                    isPrimary={letter === "L" || letter === "B"}
                  />
                ))}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.35em] text-(--accentuation)">
                <Translate
                  dict={{
                    FRA: "Développeur",
                    ENG: "Developer",
                    SPA: "Desarrollador",
                    DEU: "Entwickler",
                  }}
                />
              </p>
              <p className="max-w-3xl text-base md:text-lg xl:text-xl leading-relaxed text-(--foreground-secondary)">
                <Translate
                  dict={{
                    FRA: "Diplômé d'un ",
                    ENG: "Holding a ",
                    SPA: "Titulado con un ",
                    DEU: "Als Absolvent eines ",
                  }}
                />
                <strong className="font-semibold text-foreground">
                  <Translate
                    dict={{
                      FRA: "Bachelor Universitaire de Technologie Informatique",
                      ENG: "Bachelor of Technology in Computer Science",
                      SPA: "Bachelor Universitario de Tecnología en Informática",
                      DEU: "Bachelor of Technology in Informatik",
                    }}
                  />
                </strong>
                <Translate
                  dict={{
                    FRA: " à l'",
                    ENG: " from the ",
                    SPA: " por el ",
                    DEU: " am ",
                  }}
                />
                <a
                  href="https://iut-lannion.univ-rennes.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline decoration-(--accentuation) decoration-2 underline-offset-4 hover:text-(--accentuation) transition-colors duration-200"
                >
                  <Translate
                    dict={{
                      FRA: "Institut Universitaire de Technologie de Lannion",
                      ENG: "University Institute of Technology of Lannion",
                      SPA: "Instituto Universitario de Tecnología de Lannion",
                      DEU: "Universitätsinstitut für Technologie in Lannion",
                    }}
                  />
                </a>
                <Translate
                  dict={{
                    FRA: ", je suis ouvert aux ",
                    ENG: ", I am open to ",
                    SPA: ", estoy abierto a ",
                    DEU: " bin ich offen für ",
                  }}
                />
                <strong className="font-semibold text-foreground">
                  <Translate
                    dict={{
                      FRA: "propositions d'emploi",
                      ENG: "job offers",
                      SPA: "ofertas de empleo",
                      DEU: "Stellenangebote",
                    }}
                  />
                </strong>
                .
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-1">
                <ActionButton href="/projet" variant="primary" icon={<ArrowRightIcon size={18} />}>
                  <Translate
                    dict={{
                      FRA: "Voir mes projets",
                      ENG: "See my projects",
                      SPA: "Ver mis proyectos",
                      DEU: "Meine Projekte",
                    }}
                  />
                </ActionButton>
                <ActionButton
                  href="/CV_LilianBrossard.pdf"
                  download="CV_LilianBrossard.pdf"
                  icon={<DownloadIcon size={18} />}
                >
                  <Translate
                    dict={{
                      FRA: "Télécharger mon CV",
                      ENG: "Download my resume",
                      SPA: "Descargar mi CV",
                      DEU: "Lebenslauf herunterladen",
                    }}
                  />
                </ActionButton>
                <ActionButton href="#contact" icon={<MailIcon size={18} />}>
                  <Translate
                    dict={{
                      FRA: "Me contacter",
                      ENG: "Contact me",
                      SPA: "Contactarme",
                      DEU: "Kontakt aufnehmen",
                    }}
                  />
                </ActionButton>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-14 [@media(max-height:700px)]:mt-6">
            <hr className="bg-(--primary) w-full h-1 border-0 shadow-[0_0_10px_var(--glow),0_0_20px_var(--glow-soft)]" />
          </div>
          <Link
            href="/#apropos"
            className="mt-6 p-2 animate-bounce [@media(max-height:700px)]:hidden"
            aria-label="À propos"
          >
            <svg
              viewBox="0 0 24 24"
              fill="var(--foreground)"
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              width="40px"
              aria-hidden="true"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="var(--background)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path d="M12 6V14" stroke="var(--background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M15 11L12 14L9 11" stroke="var(--background)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>
        </section>
        <div className="relative w-full h-[25vh] overflow-hidden z-20">
          <div className="absolute h-full w-full bg-(--primary) clipPath-Transition-1"></div>
          <div className="absolute h-full w-full bg-background clipPath-Transition-2"></div>
        </div>

        {/* À propos ================================================================================================================================*/}
        <section id="apropos" className={`relative w-full bg-background z-10 overflow-hidden pt-4 ${anchor}`}>
          <MainTitle titre={sections[0].label} position={1} sections={sections} />
          <Apropos />
        </section>

        {/* Expériences =============================================================================================================================*/}
        <section id="experiences" className={`relative w-full bg-background z-10 overflow-hidden pt-8 ${anchor}`}>
          <MainTitle titre={sections[1].label} position={2} sections={sections} />
          <ExperiencesSection />
        </section>

        {/* Projets =================================================================================================================================*/}
        <section id="projects" className={`relative w-full bg-background z-10 overflow-hidden pt-8 ${anchor}`}>
          <MainTitle
            titre={{
              FRA: "Mes Projets",
              ENG: "My Projects",
              SPA: "Mis Proyectos",
              DEU: "Meine Projekte",
            }}
            position={3}
            sections={sections}
          />
          <p className="mt-10 mb-8 px-4 text-lg lg:text-2xl text-(--foreground-secondary) text-center">
            <Translate
              dict={{
                FRA: "Voici mes trois derniers projets réalisés",
                ENG: "Here are my three latest completed projects",
                SPA: "Aquí están mis tres últimos proyectos completados",
                DEU: "Hier sind meine drei neuesten abgeschlossenen Projekte",
              }}
            />
          </p>
          <div className="flex flex-col gap-10 lg:gap-14 items-center w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16">
            {projects.slice(0, 3).map((project) => {
              const detail = project.details[0] ?? [];
              return (
                <article
                  key={project.slug}
                  className="group/circle relative w-full bg-(--background-secondary) lg:clip-sdcard overflow-hidden grid gap-6 lg:gap-12 lg:grid-cols-2 items-center p-6 md:p-8 xl:p-14"
                >
                  <div className="absolute top-0 left-0 w-0 h-0 group-hover/circle:w-[75vw] group-hover/circle:h-[75vw] transition-all duration-700 rounded-br-full bg-background opacity-30 pointer-events-none"></div>
                  <div className="relative flex flex-col gap-4 min-w-0">
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold font-(family-name:--font-aquire) uppercase">
                      <Link
                        href={`/projet/${project.slug}`}
                        className="hover:text-(--accentuation) transition-colors duration-300"
                      >
                        <Translate dict={project.title} />
                      </Link>
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed">
                      <Translate dict={project.description} />
                    </p>
                    {detail.length > 1 && (
                      <>
                        <hr className="h-0.5 border-0 w-full bg-(--muted)" />
                        <p className="text-sm lg:text-base leading-relaxed text-(--foreground-secondary) line-clamp-4">
                          <Translate dict={detail[1]} />
                        </p>
                      </>
                    )}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <ActionButton href={`/projet/${project.slug}`} variant="primary" icon={<ArrowRightIcon size={18} />}>
                        <Translate
                          dict={{
                            FRA: "En savoir plus",
                            ENG: "Learn more",
                            SPA: "Más información",
                            DEU: "Mehr erfahren",
                          }}
                        />
                      </ActionButton>
                      {project.site && (
                        <ActionButton href={project.site} external icon={<ExternalIcon size={18} />}>
                          <Translate dict={{ FRA: "Site web", ENG: "Website", SPA: "Sitio web", DEU: "Webseite" }} />
                        </ActionButton>
                      )}
                      {project.git && (
                        <ActionButton href={project.git} external icon={<GithubIcon size={18} />}>
                          GitHub
                        </ActionButton>
                      )}
                    </div>
                  </div>
                  {project.images[0] && (
                    <Link
                      href={`/projet/${project.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="relative block order-first lg:order-none"
                    >
                      <div className="absolute w-1/2 h-1/2 -top-[4%] -left-[3%] border-t-2 border-l-2 border-(--primary)"></div>
                      <div className="absolute w-1/2 h-1/2 top-[54%] left-[53%] border-b-2 border-r-2 border-(--primary)"></div>
                      <Image
                        src={`/projets/${project.images[0]}`}
                        alt=""
                        width={1000}
                        height={1000}
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="relative object-contain w-full h-auto border-2 border-(--primary)"
                      />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
          <div className="w-full flex justify-center my-12 lg:my-16">
            <ActionButton href="/projet" icon={<ArrowRightIcon size={18} />}>
              <Translate
                dict={{
                  FRA: "Tous mes projets",
                  ENG: "All my projects",
                  SPA: "Todos mis proyectos",
                  DEU: "Alle meine Projekte",
                }}
              />
            </ActionButton>
          </div>
        </section>

        {/* Contact =================================================================================================================================*/}
        <section id="contact" className={`relative w-full bg-background z-10 overflow-hidden pt-8 ${anchor}`}>
          <MainTitle
            titre={{
              FRA: "Contactez-moi",
              ENG: "Contact Me",
              SPA: "Contáctame",
              DEU: "Kontakt",
            }}
            position={4}
            sections={sections}
          />
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
