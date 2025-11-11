import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LinkHero from "@/components/LinkHero";
import Circuit from "@/components/Circuit";
import Translate from "@/utils/Translate";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/utils/MarkdownReader";
import ParallaxLetter from "@/components/ParallaxLetter";

export default function Home() {
  const projects = getAllProjects();
  const nom = [
    "L",
    "i",
    "l",
    "i",
    "a",
    "n",
    " ",
    "B",
    "r",
    "o",
    "s",
    "s",
    "a",
    "r",
    "d",
  ];

  return (
    <div className="w-screen min-h-screen">
      <h1 className="sr-only">Lilian Brossard Portfolio</h1>
      <main className="flex flex-col w-full h-full">
        <section className="sticky top-0 w-full h-screen bg-[--background] flex flex-col justify-center items-center text-center">
          <div className="absolute w-full h-screen -z-10 opacity-25">
            <Circuit />
          </div>
          <div className="relative flex flex-row items-center justify-around w-full">
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
            <div>
              <h2 className="text-9xl font-bold uppercase font-(family-name:--font-aquire) whitespace-nowrap">
                {nom.map((letter, index) => (
                  <ParallaxLetter
                    key={index}
                    letter={letter}
                    index={index}
                    isPrimary={letter === "L" || letter === "B"}
                  />
                ))}
              </h2>
              <p className="text-2xl">
                <Translate
                  dict={{
                    FRA: "Je suis un",
                    ENG: "I am a",
                    SPA: "Soy un",
                    DEU: "Ich bin ein",
                  }}
                />{" "}
                <span className="font-bold text-(--accentuation) relative group cursor-help underline">
                  <Translate
                    dict={{
                      FRA: "Étudiant",
                      ENG: "Student",
                      SPA: "Estudiante",
                      DEU: "Student",
                    }}
                  />
                  <span className="absolute invisible group-hover:visible bg-(--background-secondary) text-foreground text-sm py-2 px-3 bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <span className="font-bold text-(--accentuation) relative group cursor-help underline">
                  <Translate
                    dict={{
                      FRA: "Stage",
                      ENG: "Internship",
                      SPA: "Pasantía",
                      DEU: "Praktikum",
                    }}
                  />
                  <span className="absolute invisible group-hover:visible bg-(--background-secondary) text-foreground text-sm py-2 px-3 bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                .
              </p>
            </div>
          </div>
          <div className="w-full py-20">
            <hr className="bg-(--red) w-full h-1 border-0 shadow-[0_0_10px_rgba(255,0,0,0.5),0_0_20px_rgba(255,0,0,0.3)]" />
          </div>
          <div className="w-full flex items-start ml-16">
            <LinkHero />
          </div>
          <div className="absolute bottom-1/6 scale-x-200 right-0 -rotate-12 h-36 w-96 bg-(--secondary) mask-cover mask-[url('/BlackPaint.png')] flex items-center justify-center text-3xl font-bold text-foreground mt-8 font-(family-name:--font-fruktur) text-shadow-lg text-shadow-background/50">
            <Link
              href="/CV_LilianBrossard.pdf"
              download="CV_LilianBrossard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background duration-200 scale-y-200 group"
            >
              <svg
                className="inline-block group-hover:fill-background duration-200"
                fill="var(--foreground)"
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
              CV
            </Link>
          </div>
        </section>
        <div className="relative w-full h-[25vh] overflow-hidden">
          <div className="absolute h-full w-full bg-(--primary) clipPath-Transition-1"></div>
          <div className="absolute h-full w-full bg-background clipPath-Transition-2"></div>
        </div>
        <div className="w-full sticky top-0 z-40 shadow-(color:--accentuation)/10 shadow-md">
          <Navbar />
        </div>
        <section className="h-screen w-full bg-background z-10">
          <p className="mt-4 text-lg">
            <Translate
              dict={{
                FRA: "Découvrez mes projets ci-dessous :",
                ENG: "Discover my projects below:",
                SPA: "Descubre mis proyectos a continuación:",
                DEU: "Entdecken Sie unten meine Projekte:",
              }}
            />
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projet/${project.slug}`}>
                {project.title}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
