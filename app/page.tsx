import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Circuit from "@/components/Circuit";
import LinkHero from "@/components/LinkHero";
import LinkProjets from "@/components/LinkProjets";
import ParallaxLetter from "@/components/ParallaxLetter";
import Translate from "@/utils/Translate";
import MainTitle from "@/components/MainTitle";
import Apropos from "@/components/Apropos";

import Link from "next/link";
import Image from "next/image";

import { getAllProjects } from "@/utils/MarkdownReader";

export default function Home() {
  const projects = getAllProjects();
  const nom = "Lilian Brossard".split("");

  return (
    <div className="w-screen">
      <h1 className="sr-only">Lilian Brossard Portfolio</h1>
      <main className="flex flex-col w-full h-full">
        {/* Hero Section ==============================================================================================================================*/}
        <section className="sticky top-0 overflow-hidden w-full h-screen bg-[--background] flex flex-col justify-center items-center text-center">
          <div className="absolute w-full h-screen -z-10 opacity-25">
            <Circuit />
          </div>
          <div className="relative flex flex-row mt-[20vh] items-center justify-around w-full">
            <div className="hidden lg:flex flex-row justify-center items-center w-1/4">
              <div className="relative w-60 h-60 group Transition-all">
                <div className="absolute inset-0 w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-4 border-l-4 border-(--primary) -z-10 group-hover:scale-110 duration-300"></div>
                <div className="absolute inset-0 w-1/2 h-1/2 -top-[5%] -left-[5%] border-t-4 border-l-4 border-(--primary) -z-10 scale-110 group-hover:scale-125 duration-300"></div>
                <div className="absolute inset-0 w-1/2 h-1/2 top-[55%] left-[55%] border-b-4 border-r-4 border-(--primary) -z-10 group-hover:scale-110 duration-300"></div>
                <div className="absolute inset-0 w-1/2 h-1/2 top-[55%] left-[55%] border-b-4 border-r-4 border-(--primary) -z-10 scale-110 group-hover:scale-125 duration-300"></div>
                <Image
                  src="/portrait.jpg"
                  alt="portrait lilian brossard"
                  width={240}
                  height={240}
                  className="object-cover group-hover:scale-105 duration-300"
                />
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <h2 className="text-6xl md:text-6xl xl:text-8xl 2xl:text-9xl font-bold uppercase font-(family-name:--font-aquire) whitespace-nowrap">
                {nom.map((letter, index) => (
                  <ParallaxLetter
                    key={index}
                    letter={letter}
                    index={index}
                    isPrimary={letter === "L" || letter === "B"}
                  />
                ))}
              </h2>
              <p className="text-xl md:text-2xl xl:text-3xl py-8 px-8">
                <Translate
                  dict={{
                    FRA: "Je suis un",
                    ENG: "I am a",
                    SPA: "Soy un",
                    DEU: "Ich bin ein",
                  }}
                />{" "}
                <span className="font-bold text-(--accentuation) relative group md:cursor-help underline">
                  <Translate
                    dict={{
                      FRA: "Étudiant",
                      ENG: "Student",
                      SPA: "Estudiante",
                      DEU: "Student",
                    }}
                  />
                  <span className="hidden md:inline absolute invisible group-hover:visible bg-(--background-secondary) text-foreground text-sm py-2 px-3 bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Translate
                      dict={{
                        FRA: "3ème année BUT Informatique - Parcours Data et IA - IUT de Lannion",
                        ENG: "3rd year Bachelor's in Computer Science - Data and AI Track - IUT of Lannion",
                        SPA: "3er año de Licenciatura en Informática - Especialización en Datos e IA - IUT de Lannion",
                        DEU: "3. Jahr Bachelor in Informatik - Daten- und KI-Schwerpunkt - IUT Lannion",
                      }}
                    />
                  </span>
                </span>{" "}
                <Translate
                  dict={{
                    FRA: "en informatique à la recherche d'un",
                    ENG: "computer science student looking for a",
                    SPA: "de informática en busca de un",
                    DEU: "Informatikstudent auf der Suche nach einem",
                  }}
                />{" "}
                <span className="font-bold text-(--accentuation) relative group md:cursor-help underline">
                  <Translate
                    dict={{
                      FRA: "Stage",
                      ENG: "Internship",
                      SPA: "Pasantía",
                      DEU: "Praktikum",
                    }}
                  />
                  <span className="hidden md:inline absolute invisible group-hover:visible bg-(--background-secondary) text-foreground text-sm py-2 px-3 bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Translate
                      dict={{
                        FRA: "Stage de 14 semaines à partir de mars 2026",
                        ENG: "14-week internship starting from March 2026",
                        SPA: "Pasantía de 14 semanas a partir de marzo de 2026",
                        DEU: "14-wöchiges Praktikum ab März 2026",
                      }}
                    />
                  </span>
                </span>
                {". "}
                <Link
                  href="/CV_LilianBrossard.pdf"
                  download="CV_LilianBrossard.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--accentuation-inverse) p-2 clipPath-Button-Double hover:bg-(--accentuation) duration-200 group font-bold text-(--accentuation) relative group underline"
                >
                  <svg
                    className="inline-block group-hover:fill-(--accentuation-inverse) duration-200"
                    fill="var(--accentuation)"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 498.436 498.436"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M389.277,0H74.15v68.25H22.941v181.13h51.187v249.056h401.368V80.653L389.277,0z M293.805,151.125v14.841H257.07v37.49 h-17.731v-87.987h60.355v14.884H257.07v20.773H293.805z M224.261,160.314c0,7.248-0.906,13.482-2.696,18.723 c-2.2,6.385-5.371,11.584-9.405,15.531c-3.128,3.063-7.226,5.371-12.425,7.032c-4.012,1.23-9.232,1.877-15.747,1.877h-33.392 v-88.009h32.399c7.312,0,12.921,0.539,16.76,1.661c5.134,1.553,9.534,4.228,13.201,8.111c3.689,3.883,6.471,8.585,8.434,14.258 C223.312,145.171,224.261,152.052,224.261,160.314z M86.359,170.258v33.241H68.627v-0.022v-88.009h28.452 c10.785,0,17.817,0.453,21.053,1.337c5.004,1.337,9.297,4.185,12.64,8.542c3.451,4.465,5.134,10.181,5.134,17.127 c0,5.436-0.971,9.923-2.934,13.611c-1.941,3.753-4.422,6.601-7.485,8.736c-2.955,2.049-5.997,3.473-9.103,4.12 c-4.293,0.82-10.354,1.316-18.4,1.316H86.359z M446.375,469.186c-25.842,0-317.306,0-343.105,0c0-13.223,0-116.482,0-219.806 h244.613V68.25H103.292c0-20.535,0-34.751,0-39.108c25.756,0,263.983,0,274.531,0c6.989,6.601,60.873,56.968,68.595,64.151 C446.375,105.136,446.375,442.654,446.375,469.186z"></path>{" "}
                            <path d="M199.066,135.357c-2.157-2.071-4.875-3.408-8.175-4.12c-2.545-0.582-7.334-0.863-14.539-0.863h-7.981v58.22h13.201 c4.94,0,8.499-0.259,10.721-0.841c2.912-0.712,5.285-1.985,7.161-3.667c1.941-1.726,3.451-4.53,4.681-8.456 c1.186-3.969,1.812-9.362,1.812-16.135c0-6.73-0.604-12.015-1.812-15.596C202.884,140.232,201.201,137.406,199.066,135.357z"></path>{" "}
                            <path d="M114.724,134.882c-1.855-2.071-4.249-3.343-7.118-3.904c-2.049-0.41-6.363-0.604-12.705-0.604h-8.542v24.957h9.621 c7.01,0,11.648-0.431,13.999-1.381c2.373-0.906,4.228-2.33,5.587-4.293c1.337-1.963,1.963-4.228,1.963-6.86 C117.55,139.628,116.687,136.996,114.724,134.882z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>{" "}
                  <Translate
                    dict={{
                      FRA: "CV",
                      ENG: "Resume",
                      SPA: "Reanudar",
                      DEU: "Lebenslauf",
                    }}
                  />
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full my-16">
            <hr className="bg-(--primary) w-full h-1 border-0 shadow-[0_0_10px_rgba(255,255,0,0.5),0_0_20px_rgba(255,255,0,0.3)]" />
          </div>
          <div className="w-full flex justify-center my-8 items-center">
            <LinkHero />
          </div>
          <Link href="/#apropos" className="bounce mt-16 animate-bounce">
            <svg
              viewBox="0 0 24 24"
              fill="var(--foreground)"
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              width="48px"
              className="hidden lg:block"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="var(--background)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="var(--background)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="var(--background)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <svg
              viewBox="-0.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="var(--foreground)"
              height="48px"
              width="48px"
              className="block lg:hidden"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>scroll_up [#1381]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-420.000000, -760.000000)"
                    fill="var(--foreground)"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M369.277343,604 C369.859711,604 370.332357,603.552 370.332357,603 L370.332357,601 C370.332357,600.448 369.859711,600 369.277343,600 C368.694975,600 368.222329,600.448 368.222329,601 L368.222329,603 C368.222329,603.552 368.694975,604 369.277343,604 M373.296948,614.464 L371.382097,616.147 C371.049767,616.462 370.332357,616.239 370.332357,615.793 L370.332357,610.657 C370.332357,610.104 369.859711,609.657 369.277343,609.657 C368.694975,609.657 368.222329,610.104 368.222329,610.657 L368.222329,615.791 C368.222329,616.237 367.803488,616.46 367.471159,616.145 L365.726165,614.464 C365.314709,614.073 364.707021,614.073 364.29451,614.464 C363.882,614.854 363.912595,615.488 364.325106,615.879 L367.695877,619.059 L368.079902,619.415 C368.903868,620.195 370.245846,620.195 371.068757,619.415 L374.807728,615.878 C375.220239,615.488 375.231844,614.855 374.820389,614.464 C374.407878,614.074 373.709458,614.074 373.296948,614.464 M382.776252,608.36 L378.654311,610.516 C378.23969,610.787 377.679477,610.731 377.323938,610.394 C376.866061,609.96 376.931472,609.223 377.461089,608.87 L378.719722,608 L369.757375,608 C369.175007,608 368.69814,607.586 368.69814,607.033 C368.69814,606.323 369.376514,606.066 369.748935,606.066 L375.061987,606.059 L375.466057,601.741 C375.802607,600.784 376.75001,600.215 377.793419,600.413 L381.53661,600.745 C382.523048,600.932 382.99253,601.753 382.99253,602.706 L382.99253,607.541 C382.99253,607.87 383.062161,608.174 382.776252,608.36"
                        id="scroll_up-[#1381]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </Link>
        </section>
        <div className="relative w-full h-[25vh] overflow-hidden z-20">
          <div className="absolute h-full w-full bg-(--primary) clipPath-Transition-1"></div>
          <div className="absolute h-full w-full bg-background clipPath-Transition-2"></div>
        </div>
        {/* Nav Section ==============================================================================================================================*/}
        <div className="block absolute lg:hidden top-[125vh] z-10 w-full h-96 bg-background"></div>
        <div className="w-full sticky top-0 z-40">
          <Navbar />
          <div className="block lg:hidden h-16"></div>
        </div>
        {/* apropos Section ==============================================================================================================================*/}
        <section className="relative w-full bg-background z-10 overflow-hidden">
          <div className="absolute top-0 lg:-top-[82px]" id="apropos"></div>
          <MainTitle
            titre={{
              FRA: "À Propos",
              ENG: "About Me",
              SPA: "Acerca de mí",
              DEU: "Über Mich",
            }}
            postion={1}
            links={["#apropos", "#projects", "#contact"]}
          />
          <Apropos />
        </section>
        {/* Projects Section ===========================================================================================================================*/}
        <section className="relative w-full bg-background z-10 overflow-hidden">
          <div className="absolute top-0 lg:-top-[82px]" id="projects"></div>
          <MainTitle
            titre={{
              FRA: "Mes Projets",
              ENG: "My Projects",
              SPA: "Mis Proyectos",
              DEU: "Meine Projekte",
            }}
            postion={2}
            links={["#apropos", "#projects", "#contact"]}
          />
          <h3 className="my-4 text-lg lg:text-2xl xl:text-4xl text-foreground text-center p-8 clipPath-s">
            <Translate
              dict={{
                FRA: "Voici mes trois derniers projets réalisés",
                ENG: "Here are my three latest completed projects",
                SPA: "Aquí están mis tres últimos proyectos completados",
                DEU: "Hier sind meine drei neuesten abgeschlossenen Projekte",
              }}
            />
          </h3>
          <div className="flex flex-col gap-16 items-center w-full">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="relative w-11/12 lg:h-[80vh] transition-colors duration-300"
              >
                <div className="hidden lg:flex group/circle w-full h-full relative bg-(--background-secondary) clipPath-SdCard flex-row justify-center items-start overflow-hidden">
                  <div className="absolute -z-10 top-0 left-0 w-0 h-0 group-hover/circle:w-[75vw] group-hover/circle:h-[75vw] transition-all duration-700 rounded-br-full bg-background opacity-30"></div>
                  <div className="w-5/12 h-full p-8 xl:p-16 flex flex-col justify-start items-start overflow-hidden">
                    <Link href={`/projet/${project.slug}`}>
                      <h4 className="text-3xl xl:text-4xl font-bold font-(family-name:--font-aquire) uppercase text-foreground hover:text-(--accentuation) transition-colors duration-300">
                        <Translate dict={project.title} />
                      </h4>
                    </Link>
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
                  <div className="w-5/12 h-full p-16 flex justify-center items-center">
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
                  <LinkProjets
                    git={project.git}
                    site={project.site}
                    project={`/projet/${project.slug}`}
                    toutProjet="/projet"
                  />
                </div>
                <div className="flex lg:hidden w-full h-full relative bg-(--background-secondary) flex-col justify-start items-start gap-4 overflow-hidden p-6">
                  <Link href={`/projet/${project.slug}`}>
                    <h4 className="text-3xl font-bold font-(family-name:--font-aquire) uppercase text-foreground hover:text-(--accentuation) transition-colors duration-300">
                      <Translate dict={project.title} />
                    </h4>
                  </Link>
                  <p className="text-md text-foreground">
                    <Translate dict={project.description} />
                  </p>
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
                    project={`/projet/${project.slug}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center my-16 items-center">
            <LinkHero projet={true} />
          </div>
        </section>
        {/* Contact Section ===========================================================================================================================*/}
        <section className="relative w-full bg-background z-10 overflow-hidden">
          <div className="absolute top-0 lg:-top-[82px]" id="contact"></div>
          <MainTitle
            titre={{
              FRA: "Contactez Moi",
              ENG: "Contact Me",
              SPA: "Contáctame",
              DEU: "Kontaktiere Mich",
            }}
            postion={3}
            links={["#apropos", "#projects", "#contact"]}
          />
          <div className="w-full h-[90vh] flex"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
