"use client";
import Translate from "@/utils/Translate";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Apropos() {
  const listOriginY = [13, 38, 63, 88]; // Positions verticales de départ possibles
  const [originY, setOriginY] = useState(listOriginY[0]); // Position verticale de départ
  const [tempOriginY, setTempOriginY] = useState(listOriginY[0]); // Position verticale de départ
  const beamCount = 120; // Nombre de faisceaux

  const outilsTechniques = [
    ["Next.js", "/outils/nextjs.svg"],
    ["React", "/outils/react.svg"],
    ["TailwindCSS", "/outils/tailwind.svg"],
    ["Typescript", "/outils/typescript.svg"],
    ["HTML / CSS / Javascript", "/outils/html5.png"],
    ["Python", "/outils/python.svg"],
    ["Bash", "/outils/bash.svg"],
    ["C", "/outils/c.png"],
    ["Java", "/outils/java.svg"],
    ["PHP", "/outils/php.svg"],
    ["PostgreSQL", "/outils/postgresql.svg"],
    ["Git", "/outils/git.png"],
    ["Docker", "/outils/docker.svg"],
    ["Linux", "/outils/linux.svg"],
    ["Shadcn", "/outils/shadcn.png"],
    ["Hygraph", "/outils/hygraph.jpg"],
  ];

  const RefInfo = useRef<HTMLDivElement>(null);
  const RefButtons = useRef<HTMLDivElement>(null);

  function ChangeOrigine(newTempOriginY: number | null) {
    if (newTempOriginY === null) {
      ShowInfo(listOriginY.indexOf(originY));
      ActiveServeur(listOriginY.indexOf(originY));
      setTempOriginY(originY);
      //   console.log("leave : ", originY);
    } else {
      setTempOriginY(listOriginY[newTempOriginY]);
      ShowInfo(newTempOriginY);
      ActiveServeur(newTempOriginY);
      //   console.log("pass : ", listOriginY[newTempOriginY]);
    }
  }
  function ChangePermanentOrigin(newOriginY: number) {
    ShowInfo(newOriginY);
    setOriginY(listOriginY[newOriginY]);
    setTempOriginY(listOriginY[newOriginY]);
    ActiveServeur(newOriginY);
    // console.log("clicked : ", listOriginY[newOriginY]);
  }

  function ShowInfo(index: number) {
    if (RefInfo.current) {
      const children = RefInfo.current.children;
      for (let i = 0; i < children.length; i++) {
        if (i === index) {
          children[i].classList.add("opacity-100", "pointer-events-auto");
          children[i].classList.remove("opacity-0", "pointer-events-none");
        } else {
          children[i].classList.remove("opacity-100", "pointer-events-auto");
          children[i].classList.add("opacity-0", "pointer-events-none");
        }
      }
    }
  }

  function ActiveServeur(index: number) {
    index = index + 1;
    if (RefButtons.current) {
      const children = RefButtons.current.children;
      for (let i = 0; i < children.length; i++) {
        if (i === index && i !== 0) {
          const icones = [children[i].children[0], children[i].children[1]];
          icones.forEach((icon) => {
            if (icon) {
              console.log(icon);
              icon.classList.add("bg-(--primary)", "animate-pulse");
              icon.classList.remove("bg-(--foreground-secondary)");
            }
          });
        } else if (i !== 0) {
          const icones = [children[i].children[0], children[i].children[1]];
          icones.forEach((icon) => {
            if (icon) {
              icon.classList.remove("bg-(--primary)", "animate-pulse");
              icon.classList.add("bg-(--foreground-secondary)");
            }
          });
        }
      }
    }
  }

  return (
    <div className="w-full h-[80vh] flex flex-row">
      <div
        ref={RefButtons}
        className="w-1/3 h-full relative flex flex-col justify-around pl-16"
      >
        <div className="w-3/4 h-5/6 left-1/6 flex justify-center items-center absolute bg-foreground -z-10 p-4">
          <div className="bg-background w-full h-full"></div>
        </div>
        {(
          [
            [
              // https://www.svgrepo.com/svg/69867/graduation-diploma
              <svg
                fill="var(--foreground)"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 401.168 401.168"
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
                      <path d="M401.004,250.538c-0.834-5.295-4.759-9.572-9.961-10.859c-0.872-0.215-71.379-17.925-123.181-49.804l-56.563-56.576 c-31.844-51.777-49.596-122.305-49.811-123.174c-1.286-5.203-5.565-9.128-10.859-9.962c-5.293-0.834-10.572,1.585-13.396,6.14 l-17.078,27.542c-9.682-8.729-24.245-12.872-36.144-9.729l-0.973,0.259C40.87,37.292,14.092,64.07,1.175,106.237l-0.258,0.974 c-2.961,13.143,1.392,27.9,11.09,37.599c0.729,0.729,1.494,1.433,2.272,2.092l0.294,0.241 c32.075,25.631,63.309,52.74,93.259,80.913c-26.838,14.876-50.168,22.272-67.996,21.479c-2.969-0.133-5.679,1.683-6.688,4.479 s-0.084,5.923,2.286,7.719l20.133,15.26l-22.844,21.916c-1.961,1.882-2.611,4.751-1.653,7.293 c0.348,0.924,0.882,1.737,1.552,2.407c1.177,1.178,2.772,1.906,4.501,1.982c20.176,0.897,42.373-3.433,66.34-12.889 c-9.457,23.967-13.786,46.163-12.889,66.339c0.077,1.729,0.806,3.325,1.983,4.502c0.67,0.67,1.485,1.204,2.408,1.552 c2.542,0.958,5.412,0.31,7.293-1.651l21.917-22.846l15.258,20.136c1.796,2.367,4.922,3.295,7.718,2.283 c2.795-1.009,4.61-3.72,4.478-6.688c-0.792-17.828,6.604-41.159,21.481-67.999c28.188,29.964,55.298,61.198,80.914,93.263 l0.243,0.3c0.657,0.774,1.359,1.536,2.086,2.266c9.698,9.698,24.457,14.053,37.601,11.094l0.978-0.259 c42.17-12.923,68.947-39.7,81.861-81.865c0,0,7.035-21.217-9.47-37.115l27.542-17.076 C399.419,261.109,401.838,255.832,401.004,250.538z M144.092,45.804c2.646,8.297,5.908,17.908,9.772,28.236 c-5.276-6.201-10.505-12.439-15.675-18.717L144.092,45.804z M131.16,213.438c-31.956-30.331-65.39-59.483-99.773-86.967 c-0.182-0.159-0.363-0.328-0.539-0.504c-3.135-3.135-5.27-8.371-4.02-12.497c10.398-33.443,30-53.046,63.446-63.445 c3.783-1.262,9.22-0.221,13,4.559c2.096,2.622,4.204,5.238,6.319,7.85l4.047,4.964c24.407,29.881,50.045,58.988,76.598,86.963 L131.16,213.438z M351.141,310.894c-10.395,33.441-29.996,53.046-63.441,63.446c-4.096,0.889-9.366-0.887-12.501-4.021 c-0.175-0.177-0.345-0.354-0.501-0.535c-27.465-34.371-56.617-67.807-86.965-99.775l59.076-59.075 c27.979,26.561,57.088,52.198,86.968,76.603l4.958,4.041c2.61,2.115,5.229,4.225,7.854,6.32c0.181,0.157,0.36,0.325,0.535,0.501 C350.255,301.531,352.291,306.884,351.141,310.894z M345.843,262.979c-6.276-5.17-12.517-10.397-18.72-15.677 c10.33,3.864,19.943,7.126,28.241,9.773L345.843,262.979z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>,
              {
                FRA: "Formation",
                ENG: "Education and Training",
                SPA: "Educación y formación",
                DEU: "Ausbildung und Schulung",
              },
            ],
            [
              // https://www.svgrepo.com/svg/440005/person
              <svg
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"
                    fill="var(--foreground)"
                  ></path>{" "}
                </g>
              </svg>,
              {
                FRA: "Qui suis-je ?",
                ENG: "Profile",
                SPA: "Perfil",
                DEU: "Profil",
              },
            ],
            [
              // https://www.svgrepo.com/svg/456202/computer-memory
              <svg
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs>
                    <style>{`.cls-1{fill:none;stroke:var(--foreground);stroke-miterlimit:10;stroke-width:1.91px;}`}</style>
                  </defs>
                  <polyline
                    className="cls-1"
                    points="0.5 2.46 2.41 2.46 2.41 22.54"
                  ></polyline>
                  <polygon
                    className="cls-1"
                    points="22.5 4.37 22.5 18.72 15.8 18.72 15.8 17.76 10.06 17.76 9.11 18.72 2.41 18.72 2.41 4.37 22.5 4.37"
                  ></polygon>
                  <rect
                    className="cls-1"
                    x="2.41"
                    y="8.2"
                    width="4.78"
                    height="6.7"
                  ></rect>
                  <rect
                    className="cls-1"
                    x="11.02"
                    y="9.15"
                    width="7.65"
                    height="3.83"
                  ></rect>
                  <line
                    className="cls-1"
                    x1="11.98"
                    y1="7.24"
                    x2="11.98"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="14.85"
                    y1="7.24"
                    x2="14.85"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="17.72"
                    y1="7.24"
                    x2="17.72"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="11.98"
                    y1="12.98"
                    x2="11.98"
                    y2="14.89"
                  ></line>
                  <line
                    className="cls-1"
                    x1="14.85"
                    y1="12.98"
                    x2="14.85"
                    y2="14.89"
                  ></line>
                  <line
                    className="cls-1"
                    x1="17.72"
                    y1="12.98"
                    x2="17.72"
                    y2="14.89"
                  ></line>
                </g>
              </svg>,
              {
                FRA: "Compétences informatiques",
                ENG: "Technical Skills",
                SPA: "Competencias técnicas",
                DEU: "Technische Kenntnisse",
              },
            ],
            [
              // https://www.svgrepo.com/svg/90790/science
              <svg
                fill="var(--foreground)"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
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
                    <path d="M195.234,357.719L260.313,245l-65.078-112.719H65.078L0,245l65.078,112.719H195.234z M82.76,162.906h94.794L224.95,245 l-47.396,82.094H82.76L35.362,245L82.76,162.906z"></path>{" "}
                    <path d="M294.766,0l-65.078,112.718l65.078,112.718h130.156L490,112.718L424.922,0H294.766z M407.241,194.812h-94.794 l-47.397-82.093l47.397-82.093h94.794l47.396,82.093L407.241,194.812z"></path>{" "}
                    <path d="M294.766,264.563l-65.078,112.718L294.766,490h130.156L490,377.281l-65.078-112.718H294.766z M407.241,459.375h-94.794 l-47.397-82.094l47.397-82.093h94.794l47.396,82.093L407.241,459.375z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>,
              {
                FRA: "Compétences complémentaires",
                ENG: "Additional Skills",
                SPA: "Competencias complementarias",
                DEU: "Ergänzende Kenntnisse",
              },
            ],
          ] as const
        ).map(([icon, dict], index) => (
          <button
            key={index}
            className="w-full relative p-2 bg-(--foreground-secondary) cursor-pointer hover:bg-foreground transition-colors duration-300 group"
            onMouseEnter={() => ChangeOrigine(index)}
            onMouseLeave={() => ChangeOrigine(null)}
            onClick={() => ChangePermanentOrigin(index)}
          >
            {index === 0 && (
              <>
                <div className="absolute top-6 left-6 bg-(--primary) animate-pulse w-4 h-4 z-10 "></div>
                <div className="absolute top-6 left-14 bg-(--primary) animate-pulse w-4 h-4 z-10 "></div>
              </>
            )}
            {index !== 0 && (
              <>
                <div className="absolute top-6 left-6 bg-(--foreground-secondary) w-4 h-4 z-10"></div>
                <div className="absolute top-6 left-14 bg-(--foreground-secondary) w-4 h-4 z-10"></div>
              </>
            )}
            <div className=" clipPath-Button-Double flex flex-row items-center gap-4 p-8 pl-20 w-full text-left bg-background group-hover:bg-(--background-secondary) transition-colors duration-300">
              <div className="w-12 h-12">{icon}</div>
              <p className="text-2xl font-semibold">
                <Translate dict={dict as Partial<Record<string, string>>} />
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="w-2/3 h-full relative overflow-hidden mr-16 flex flex-row">
        <div className="relative w-80 h-full">
          {/* faisceau */}
          {Array.from({ length: beamCount }).map((_, i) => {
            const minY = -1.35 * tempOriginY; // Angle plus grand vers le haut
            const maxY = -1.35 * tempOriginY + 235; // Angle plus grand vers le bas
            const targetY = minY + (i / (beamCount - 1)) * (maxY - minY);
            const deltaY = targetY - tempOriginY;
            const angle = Math.atan2(deltaY, 100) * (180 / Math.PI);
            const length = Math.sqrt(100 * 100 + deltaY * deltaY);

            const randomWidth = length * (1 + Math.random() * 4);
            return (
              <div
                key={i}
                className="absolute left-0 h-px bg-(--primary) opacity-40"
                suppressHydrationWarning={true}
                style={{
                  top: `${tempOriginY}%`,
                  width: `${randomWidth}%`,
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg)`,
                  transition: "all 0ms ease-in-out",
                  boxShadow: "0 0 8px rgba(255, 255, 0, 0.5)",
                }}
              />
            );
          })}
        </div>
        <div className="flex-1 h-full z-10 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-background opacity-70"></div>
          <div className="absolute top-4 left-4 w-1/4 h-1/4 border-t-(--primary) border-t-4 border-l-(--primary) border-l-4 z-10"></div>
          <div className="absolute bottom-4 right-4 w-1/6 h-1/6 border-b-(--primary) border-b-4 border-r-(--primary) border-r-4 z-10"></div>
          <div
            ref={RefInfo}
            className="w-full h-full relative border-(--primary) border-4"
          >
            <div className="absolute p-8 w-full h-full text-foreground opacity-100 pointer-events-auto transition-opacity duration-300">
              <h3 className="text-4xl font-bold mb-4">
                <Translate
                  dict={{
                    FRA: "Formation",
                    ENG: "Education and Training",
                    SPA: "Educación y formación",
                    DEU: "Ausbildung und Schulung",
                  }}
                />
              </h3>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "Je suis actuellement en dernière année de BUT Informatique, parcours Data et IA, à l'IUT de Lannion.",
                    ENG: "I am currently in my final year of a Bachelor's in Computer Science, specializing in Data and AI, at the IUT of Lannion.",
                    SPA: "Actualmente estoy en mi último año del Grado en Informática, con especialización en Datos e Inteligencia Artificial, en el IUT de Lannion.",
                    DEU: "Ich befinde mich derzeit im letzten Jahr meines Informatikstudiums mit dem Schwerpunkt Daten und KI am IUT von Lannion.",
                  }}
                />
              </p>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "Je suis diplômé d'un baccalauréat général avec les spécialisations physique-chimie et NSI (numérique et sciences informatiques), ainsi que des options de droit et de robotique, obtenu en 2023.",
                    ENG: "I hold a general French baccalaureate with specializations in Physics-Chemistry and Computer Science (NSI), along with electives in Law and Robotics, obtained in 2023.",
                    SPA: "Poseo el bachillerato general francés con especializaciones en Física-Química e Informática (NSI), además de optativas en Derecho y Robótica, obtenido en 2023.",
                    DEU: "Ich habe das französische Abitur mit den Schwerpunkten Physik-Chemie und Informatik (NSI) sowie den Wahlfächern Recht und Robotik im Jahr 2023 erworben.",
                  }}
                />
              </p>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "J'ai également obtenu le PSC1 (diplôme de premiers secours) en 2019.",
                    ENG: "I also obtained the PSC1 (First Aid Certificate) in 2019.",
                    SPA: "También obtuve el PSC1 (certificado de primeros auxilios) en 2019.",
                    DEU: "Ich habe außerdem 2019 das PSC1-Zertifikat (Erste-Hilfe-Diplom) erworben.",
                  }}
                />
              </p>
            </div>
            <div className="absolute p-8 w-full h-full text-foreground opacity-0 pointer-events-none transition-opacity duration-300">
              <h3 className="text-4xl font-bold mb-4">
                <Translate
                  dict={{
                    FRA: "Qui suis-je ?",
                    ENG: "Profile",
                    SPA: "Perfil",
                    DEU: "Profil",
                  }}
                />
              </h3>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "Je suis passionné depuis longtemps par l'informatique, la programmation et plus récemment par le design. Je poursuis mes études dans l'objectif d'en apprendre toujours plus sur ces sujets.",
                    ENG: "I have been passionate about computer science, programming, and more recently, design for a long time. I am continuing my studies with the goal of constantly learning more about these fields.",
                    SPA: "Desde hace mucho tiempo me apasiona la informática, la programación y, más recientemente, el diseño. Continúo mis estudios con el objetivo de seguir aprendiendo cada vez más sobre estos temas.",
                    DEU: "Ich begeistere mich seit langem für Informatik, Programmierung und in jüngerer Zeit auch für Design. Ich setze mein Studium mit dem Ziel fort, in diesen Bereichen immer mehr zu lernen.",
                  }}
                />
              </p>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "Je vis entre Lorient et Lannion en Bretagne. Et j'aime écouter de la musique, jouer à des jeux vidéo, regarder des films et des séries.",
                    ENG: "I live between Lorient and Lannion in Brittany. I enjoy listening to music, playing video games, and watching movies and TV shows.",
                    SPA: "Vivo entre Lorient y Lannion, en Bretaña. Me gusta escuchar música, jugar a videojuegos y ver películas y series.",
                    DEU: "Ich lebe zwischen Lorient und Lannion in der Bretagne. Ich höre gerne Musik, spiele Videospiele und schaue Filme und Serien.",
                  }}
                />
              </p>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "J'adore créer, de tout ! J'ai pour objectif de toujours m'améliorer afin de me rapprocher un jour de la perfection dans le plus grand nombre de domaines possible.",
                    ENG: "I love creating — anything! My goal is to keep improving myself and one day come as close as possible to perfection in as many fields as I can.",
                    SPA: "¡Me encanta crear, de todo! Mi objetivo es mejorar constantemente y acercarme algún día a la perfección en el mayor número posible de ámbitos.",
                    DEU: "Ich liebe es, Dinge zu erschaffen – alles Mögliche! Mein Ziel ist es, mich ständig zu verbessern und eines Tages in so vielen Bereichen wie möglich der Perfektion näherzukommen.",
                  }}
                />
              </p>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "De plus, j'aime travailler en équipe : cela permet d'échanger, d'obtenir des retours et de s'adapter en conséquence pour produire le meilleur résultat possible.",
                    ENG: "Moreover, I enjoy working in a team — it allows for exchange, feedback, and adaptation to achieve the best possible result.",
                    SPA: "Además, me gusta trabajar en equipo, ya que permite intercambiar ideas, recibir comentarios y adaptarse para lograr el mejor resultado posible.",
                    DEU: "Außerdem arbeite ich gerne im Team – das ermöglicht Austausch, Feedback und Anpassung, um das bestmögliche Ergebnis zu erzielen.",
                  }}
                />
              </p>
            </div>
            <div className="absolute p-8 w-full h-full text-foreground opacity-0 pointer-events-none transition-opacity duration-300">
              <h3 className="text-4xl font-bold mb-4">
                <Translate
                  dict={{
                    FRA: "Compétences informatiques",
                    ENG: "Computer Skills",
                    SPA: "Habilidades Informáticas",
                    DEU: "Computerkenntnisse",
                  }}
                />
              </h3>
              <p className="py-4 text-xl">
                <Translate
                  dict={{
                    FRA: "Au cours de mes études et de mes projets personnels, j'ai acquis des compétences en programmation dans plusieurs langages et outils.",
                    ENG: "Throughout my studies and personal projects, I have gained programming skills in various languages and tools.",
                    SPA: "A lo largo de mis estudios y proyectos personales, he adquirido competencias en programación en varios lenguajes y herramientas.",
                    DEU: "Im Laufe meines Studiums und meiner persönlichen Projekte habe ich Programmierkenntnisse in verschiedenen Sprachen und Tools erworben.",
                  }}
                />
              </p>
              <div className="flex flex-row flex-wrap w-full gap-4 justify-around">
                {outilsTechniques.map(([nom, src], index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center w-[30%] gap-4 clipPath-Button-Double py-1 px-2 bg-(--foreground-secondary) transition-colors duration-300 cursor-default"
                  >
                    <div className="relative inline-block">
                      <Image
                        src={src}
                        alt={nom}
                        width={48}
                        height={48}
                        className="grayscale"
                      />
                      <div
                        className="absolute inset-0 bg-(--primary) mix-blend-multiply"
                        style={{
                          maskImage: `url(${src})`,
                          maskSize: "contain",
                          maskRepeat: "no-repeat",
                          maskPosition: "center",
                        }}
                      ></div>
                    </div>
                    <p className="text-xl text-background">{nom}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute p-8 w-full h-full text-foreground opacity-0 pointer-events-none transition-opacity duration-300">
              <h3 className="text-4xl font-bold mb-4">
                <Translate
                  dict={{
                    FRA: "Compétences complémentaires",
                    ENG: "Additional Skills",
                    SPA: "Competencias complementarias",
                    DEU: "Ergänzende Kenntnisse",
                  }}
                />
                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "En BUT Informatique, je suis également formé à de nombreuses compétences transversales.",
                      ENG: "In my Bachelor's in Computer Science, I am also trained in many cross-disciplinary skills.",
                      SPA: "En mi Grado en Informática, también estoy formado en muchas competencias transversales.",
                      DEU: "Im Rahmen meines Informatikstudiums werde ich auch in vielen übergreifenden Kompetenzen ausgebildet.",
                    }}
                  />
                </p>

                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "Je suis notamment formé en gestion de projet, et j'ai pu mener des projets concrets durant ma formation. L'utilisation de méthodologies agiles comme Scrum ou Kanban fait partie de mes compétences.",
                      ENG: "I am particularly trained in project management and have led real-world projects during my studies. Using agile methodologies such as Scrum or Kanban is part of my skill set.",
                      SPA: "Estoy especialmente formado en gestión de proyectos y he dirigido proyectos reales durante mis estudios. El uso de metodologías ágiles como Scrum o Kanban forma parte de mis competencias.",
                      DEU: "Ich bin besonders in Projektmanagement geschult und habe während meines Studiums praktische Projekte geleitet. Die Anwendung agiler Methoden wie Scrum oder Kanban gehört zu meinen Fähigkeiten.",
                    }}
                  />
                </p>
                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "J'ai également des compétences en management d'équipe, répartition des tâches et gestion des conflits.",
                      ENG: "I also have skills in team management, task distribution, and conflict resolution.",
                      SPA: "También tengo competencias en gestión de equipos, distribución de tareas y resolución de conflictos.",
                      DEU: "Ich verfüge außerdem über Kenntnisse im Teammanagement, in der Aufgabenverteilung und im Konfliktmanagement.",
                    }}
                  />
                </p>
                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "J'ai des notions en communication, notamment en communication interne à l'entreprise et en gestion des plans de communication lors de changements liés au numérique.",
                      ENG: "I have knowledge in communication, particularly in internal corporate communication and in managing communication plans during digital transformations.",
                      SPA: "Tengo conocimientos en comunicación, especialmente en comunicación interna empresarial y en la gestión de planes de comunicación durante transformaciones digitales.",
                      DEU: "Ich habe Kenntnisse in Kommunikation, insbesondere in der internen Unternehmenskommunikation und im Management von Kommunikationsplänen bei digitalen Veränderungen.",
                    }}
                  />
                </p>
                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "J'ai pu réaliser, durant ma formation, des présentations en anglais technique et non technique, ce qui m'a permis d'améliorer mes compétences orales dans cette langue.",
                      ENG: "During my studies, I was able to give both technical and non-technical presentations in English, which helped me improve my speaking skills in the language.",
                      SPA: "Durante mi formación, pude realizar presentaciones en inglés técnico y no técnico, lo que me permitió mejorar mis competencias orales en este idioma.",
                      DEU: "Während meines Studiums konnte ich technische und nicht-technische Präsentationen auf Englisch halten, was mir half, meine mündlichen Sprachkenntnisse in dieser Sprache zu verbessern.",
                    }}
                  />
                </p>
                <p className="py-4 text-xl">
                  <Translate
                    dict={{
                      FRA: "Enfin, j'ai les bases du droit informatique liées à la protection des données (RGPD, CNIL), à la propriété intellectuelle et aux contrats.",
                      ENG: "Finally, I have basic knowledge of IT law related to data protection (GDPR, CNIL), intellectual property, and contracts.",
                      SPA: "Por último, tengo conocimientos básicos de derecho informático relacionados con la protección de datos (RGPD, CNIL), la propiedad intelectual y los contratos.",
                      DEU: "Schließlich habe ich Grundkenntnisse im IT-Recht in Bezug auf Datenschutz (DSGVO, CNIL), geistiges Eigentum und Verträge.",
                    }}
                  />
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
