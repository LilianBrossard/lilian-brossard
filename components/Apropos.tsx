"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { useTranslate } from "@/contexts/LangContext";
import type { Dict } from "@/utils/i18n";
import {
  ArrowRightIcon,
  ClapperboardIcon,
  CodeIcon,
  GamepadIcon,
  GlobeIcon,
  GraduationCapIcon,
  KanbanIcon,
  LayersIcon,
  MapPinIcon,
  MessageIcon,
  MusicIcon,
  PlaneIcon,
  ScaleIcon,
  TargetIcon,
  UserIcon,
  UsersIcon,
} from "@/components/icons";

// Section « À propos » de l'accueil : grille de cartes (bento), tout est visible
// d'un coup. Cartes : profil, parcours géographique, formation, compétences.

const texte = "text-base leading-relaxed text-(--foreground-secondary)";

const loisirs: [ReactNode, Dict][] = [
  [<MusicIcon key="musique" size={18} />, { FRA: "Musique", ENG: "Music", SPA: "Música", DEU: "Musik" }],
  [<GamepadIcon key="jeux" size={18} />, { FRA: "Jeux vidéo", ENG: "Video games", SPA: "Videojuegos", DEU: "Videospiele" }],
  [<ClapperboardIcon key="cinema" size={18} />, { FRA: "Cinéma", ENG: "Cinema", SPA: "Cine", DEU: "Kino" }],
  [<PlaneIcon key="voyage" size={18} />, { FRA: "Voyage", ENG: "Travel", SPA: "Viajes", DEU: "Reisen" }],
];

const outils: { label: Dict; items: [string, string][] }[] = [
  {
    label: { FRA: "Front-end", ENG: "Front-end", SPA: "Front-end", DEU: "Frontend" },
    items: [
      ["Next.js", "/outils/nextjs.svg"],
      ["React", "/outils/react.svg"],
      ["TailwindCSS", "/outils/tailwind.svg"],
      ["Typescript", "/outils/typescript.svg"],
      ["HTML / CSS / Javascript", "/outils/html5.png"],
      ["Astro", "/outils/astro.svg"],
      ["Shadcn", "/outils/shadcn.png"],
    ],
  },
  {
    label: { FRA: "Langages & systèmes", ENG: "Languages & systems", SPA: "Lenguajes y sistemas", DEU: "Sprachen & Systeme" },
    items: [
      ["Python", "/outils/python.svg"],
      ["Java", "/outils/java.svg"],
      ["PHP", "/outils/php.svg"],
      ["C", "/outils/c.png"],
      ["Bash", "/outils/bash.svg"],
      ["Linux", "/outils/linux.svg"],
    ],
  },
  {
    label: { FRA: "Données & CMS", ENG: "Data & CMS", SPA: "Datos y CMS", DEU: "Daten & CMS" },
    items: [
      ["PostgreSQL", "/outils/postgresql.svg"],
      ["MySQL", "/outils/mysql.svg"],
      ["Hygraph", "/outils/hygraph.jpg"],
    ],
  },
  {
    label: { FRA: "Outils", ENG: "Tools", SPA: "Herramientas", DEU: "Werkzeuge" },
    items: [
      ["Git", "/outils/git.png"],
      ["Docker", "/outils/docker.svg"],
      ["Figma", "/outils/figma.svg"],
      ["Jira", "/outils/jira.svg"],
    ],
  },
];

const complementaires: [ReactNode, Dict, Dict][] = [
  [
    <KanbanIcon key="projet" />,
    { FRA: "Gestion de projet", ENG: "Project management", SPA: "Gestión de proyectos", DEU: "Projektmanagement" },
    {
      FRA: "Je suis notamment formé en gestion de projet, et j'ai pu mener des projets concrets durant ma formation. L'utilisation de méthodologies agiles comme Scrum ou Kanban fait partie de mes compétences.",
      ENG: "I am particularly trained in project management and have led real-world projects during my studies. Using agile methodologies such as Scrum or Kanban is part of my skill set.",
      SPA: "Estoy especialmente formado en gestión de proyectos y he dirigido proyectos reales durante mis estudios. El uso de metodologías ágiles como Scrum o Kanban forma parte de mis competencias.",
      DEU: "Ich bin besonders in Projektmanagement geschult und habe während meines Studiums praktische Projekte geleitet. Die Anwendung agiler Methoden wie Scrum oder Kanban gehört zu meinen Fähigkeiten.",
    },
  ],
  [
    <UsersIcon key="equipe" />,
    { FRA: "Management d'équipe", ENG: "Team management", SPA: "Gestión de equipos", DEU: "Teamführung" },
    {
      FRA: "J'ai également des compétences en management d'équipe, répartition des tâches et gestion des conflits.",
      ENG: "I also have skills in team management, task distribution, and conflict resolution.",
      SPA: "También tengo competencias en gestión de equipos, distribución de tareas y resolución de conflictos.",
      DEU: "Ich verfüge außerdem über Kenntnisse im Teammanagement, in der Aufgabenverteilung und im Konfliktmanagement.",
    },
  ],
  [
    <MessageIcon key="communication" />,
    { FRA: "Communication", ENG: "Communication", SPA: "Comunicación", DEU: "Kommunikation" },
    {
      FRA: "J'ai des notions en communication, notamment en communication interne à l'entreprise et en gestion des plans de communication lors de changements liés au numérique.",
      ENG: "I have knowledge in communication, particularly in internal corporate communication and in managing communication plans during digital transformations.",
      SPA: "Tengo conocimientos en comunicación, especialmente en comunicación interna empresarial y en la gestión de planes de comunicación durante transformaciones digitales.",
      DEU: "Ich habe Kenntnisse in Kommunikation, insbesondere in der internen Unternehmenskommunikation und im Management von Kommunikationsplänen bei digitalen Veränderungen.",
    },
  ],
  [
    <GlobeIcon key="anglais" />,
    { FRA: "Anglais", ENG: "English", SPA: "Inglés", DEU: "Englisch" },
    {
      FRA: "J'ai pu réaliser, durant ma formation, des présentations en anglais technique et non technique, ce qui m'a permis d'améliorer mes compétences orales dans cette langue.",
      ENG: "During my studies, I was able to give both technical and non-technical presentations in English, which helped me improve my speaking skills in the language.",
      SPA: "Durante mi formación, pude realizar presentaciones en inglés técnico y no técnico, lo que me permitió mejorar mis competencias orales en este idioma.",
      DEU: "Während meines Studiums konnte ich technische und nicht-technische Präsentationen auf Englisch halten, was mir half, meine mündlichen Sprachkenntnisse in dieser Sprache zu verbessern.",
    },
  ],
  [
    <ScaleIcon key="droit" />,
    { FRA: "Droit informatique", ENG: "IT law", SPA: "Derecho informático", DEU: "IT-Recht" },
    {
      FRA: "Enfin, j'ai les bases du droit informatique liées à la protection des données (RGPD, CNIL), à la propriété intellectuelle et aux contrats.",
      ENG: "Finally, I have basic knowledge of IT law related to data protection (GDPR, CNIL), intellectual property, and contracts.",
      SPA: "Por último, tengo conocimientos básicos de derecho informático relacionados con la protección de datos (RGPD, CNIL), la propiedad intelectual y los contratos.",
      DEU: "Schließlich habe ich Grundkenntnisse im IT-Recht in Bezug auf Datenschutz (DSGVO, CNIL), geistiges Eigentum und Verträge.",
    },
  ],
];

// Carte aux coins coupés, avec son numéro et son icône en en-tête.
function Carte({
  numero,
  icone,
  titre,
  enAvant = false,
  className = "",
  children,
}: {
  numero: string;
  icone: ReactNode;
  titre?: ReactNode;
  /** Bordure couleur d'accent (carte principale) */
  enAvant?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`clip-corners flex min-w-0 ${enAvant ? "bg-(--accentuation) p-0.5" : "bg-(--line) p-px"} ${className}`}
    >
      <div className="clip-corners flex-1 min-w-0 bg-(--surface) p-6 lg:p-10 flex flex-col gap-5 lg:gap-6">
        <header className="flex items-center justify-between gap-4 text-(--accentuation)">
          <p
            aria-hidden="true"
            className="flex items-center gap-3 text-sm tracking-[0.08em] font-(family-name:--font-aquire)"
          >
            {numero}
            <span className="block w-10 h-px bg-(--accentuation)"></span>
          </p>
          {icone}
        </header>
        {titre}
        {children}
      </div>
    </article>
  );
}

function TitreCarte({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl lg:text-3xl font-black leading-tight">{children}</h3>;
}

// Petits crochets d'angle (motif du site) autour d'un bloc en position relative.
function Crochets() {
  return (
    <>
      <span aria-hidden="true" className="absolute top-0 left-0 size-4.5 border-t-2 border-l-2 border-(--accentuation)"></span>
      <span aria-hidden="true" className="absolute bottom-0 right-0 size-4.5 border-b-2 border-r-2 border-(--accentuation)"></span>
    </>
  );
}

// Tracé façon plan de métro : Lorient → Lannion → Lorient & Bassin → ailleurs ?
// Purement décoratif : le paragraphe qui suit donne les mêmes informations.
function Trajet() {
  const t = useTranslate();
  const nom = "fill-foreground text-[13px] tracking-[1px] font-(family-name:--font-aquire)";
  const sousTitre = "fill-(--muted) text-xs font-bold";
  return (
    <svg viewBox="0 0 420 320" aria-hidden="true" className="block w-full max-w-md mx-auto h-auto">
      <defs>
        <pattern id="apropos-points" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" className="fill-(--line)" />
        </pattern>
        <filter id="apropos-halo" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="420" height="320" fill="url(#apropos-points)" />
      {/* Passé : trait plein */}
      <path d="M50 230 L170 110 L290 230" fill="none" strokeWidth="3" className="stroke-(--muted)" />
      {/* Futur : pointillés lumineux + flèche */}
      <path d="M290 230 L386 134" fill="none" strokeWidth="6" opacity="0.45" filter="url(#apropos-halo)" className="stroke-(--accentuation)" />
      <path d="M290 230 L386 134" fill="none" strokeWidth="2.5" strokeDasharray="7 7" className="stroke-(--accentuation)" />
      <polygon points="396,124 380.4,128.2 391.8,139.6" className="fill-(--accentuation)" />
      {/* Étapes passées */}
      <rect x="43" y="223" width="14" height="14" strokeWidth="2" transform="rotate(45 50 230)" className="fill-(--surface) stroke-(--muted)" />
      <rect x="163" y="103" width="14" height="14" strokeWidth="2" transform="rotate(45 170 110)" className="fill-(--surface) stroke-(--muted)" />
      {/* Étape actuelle */}
      <rect x="280" y="220" width="20" height="20" opacity="0.55" filter="url(#apropos-halo)" transform="rotate(45 290 230)" className="fill-(--accentuation)" />
      <rect x="278" y="218" width="24" height="24" fill="none" opacity="0.45" transform="rotate(45 290 230)" className="stroke-(--accentuation)" />
      <rect x="283" y="223" width="14" height="14" transform="rotate(45 290 230)" className="fill-(--accentuation)" />

      <text x="50" y="268" textAnchor="middle" className={nom}>LORIENT</text>
      <text x="50" y="287" textAnchor="middle" className={sousTitre}>
        {t({ FRA: "Point de départ", ENG: "Starting point", SPA: "Punto de partida", DEU: "Ausgangspunkt" })}
      </text>

      <text x="170" y="70" textAnchor="middle" className={nom}>LANNION</text>
      <text x="170" y="88" textAnchor="middle" className={sousTitre}>
        {t({ FRA: "Études · 2023 – 2026", ENG: "Studies · 2023 – 2026", SPA: "Estudios · 2023 – 2026", DEU: "Studium · 2023 – 2026" })}
      </text>

      <text x="290" y="268" textAnchor="middle" className={nom}>LORIENT</text>
      <text x="290" y="285" textAnchor="middle" className="fill-foreground text-[11px] tracking-[1px] font-(family-name:--font-aquire)">
        {t({ FRA: "& BASSIN D'ARCACHON", ENG: "& ARCACHON BAY", SPA: "& BAHÍA DE ARCACHON", DEU: "& BUCHT VON ARCACHON" })}
      </text>
      <text x="290" y="305" textAnchor="middle" className="fill-(--accentuation) text-xs font-bold">
        {t({ FRA: "Aujourd'hui", ENG: "Today", SPA: "Hoy", DEU: "Heute" })}
      </text>

      <text x="404" y="88" textAnchor="end" className="fill-(--accentuation) text-[13px] tracking-[1px] font-(family-name:--font-aquire)">
        {t({ FRA: "AILLEURS ?", ENG: "ELSEWHERE?", SPA: "¿OTRO LUGAR?", DEU: "ANDERSWO?" })}
      </text>
      <text x="404" y="106" textAnchor="end" className={sousTitre}>
        {t({ FRA: "Ouvert à la mobilité", ENG: "Open to relocation", SPA: "Abierto a la movilidad", DEU: "Offen für Mobilität" })}
      </text>
    </svg>
  );
}

// Étape de la frise de formation : verticale sur mobile, horizontale (de gauche
// à droite) sur grand écran.
type EtatEtape = "passe" | "actuel" | "futur";

const styleEtape: Record<EtatEtape, { ligne: string; repere: string; annee: string }> = {
  passe: {
    ligne: "border-(--line)",
    repere: "bg-(--surface) border-2 border-(--muted)",
    annee: "text-foreground",
  },
  actuel: {
    ligne: "border-(--accentuation) shadow-[-10px_0_16px_-12px_var(--glow)] xl:shadow-[0_-10px_16px_-12px_var(--glow)]",
    repere: "bg-(--accentuation) shadow-[0_0_12px_var(--glow)]",
    annee: "text-(--accentuation)",
  },
  futur: {
    ligne: "border-dashed border-(--accentuation)",
    repere: "bg-(--surface) border-2 border-(--accentuation)",
    annee: "text-(--muted)",
  },
};

function Etape({
  etat,
  annee,
  titre,
  dernier = false,
  children,
}: {
  etat: EtatEtape;
  annee: string;
  titre: string;
  dernier?: boolean;
  children: ReactNode;
}) {
  const s = styleEtape[etat];
  return (
    <li
      className={`relative min-w-0 flex flex-col gap-3 border-l-2 pl-8 xl:border-l-0 xl:border-t-2 xl:pl-0 xl:pt-8 ${
        dernier ? "pb-0" : "pb-10 xl:pb-0 xl:pr-8"
      } ${s.ligne}`}
    >
      <span
        aria-hidden="true"
        className={`absolute -left-[7px] top-1.5 xl:left-0 xl:-top-[7px] size-3 rotate-45 ${s.repere}`}
      ></span>
      {dernier && (
        <ArrowRightIcon
          size={20}
          className="hidden xl:block absolute -top-[11px] -right-1 text-(--accentuation)"
        />
      )}
      <p className={`text-3xl uppercase font-(family-name:--font-aquire) ${s.annee}`}>{annee}</p>
      <h4 className="text-lg lg:text-xl font-bold leading-snug">{titre}</h4>
      {children}
    </li>
  );
}

export default function Apropos() {
  const t = useTranslate();

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16 py-10 lg:py-14 grid gap-5 lg:grid-cols-12">
      {/* 01 · Qui suis-je ? ================================================== */}
      <Carte
        numero="01"
        icone={<UserIcon size={24} />}
        enAvant
        className="lg:col-span-7"
        titre={
          <TitreCarte>
            {t({ FRA: "Qui suis-je ?", ENG: "Profile", SPA: "Perfil", DEU: "Profil" })}
          </TitreCarte>
        }
      >
        <p className="text-lg lg:text-[22px] leading-relaxed text-foreground">
          {t({
            FRA: "Je suis passionné depuis longtemps par l'informatique, la programmation et plus récemment par le design. Je continue d'apprendre chaque jour pour toujours progresser sur ces sujets.",
            ENG: "I have been passionate about computer science, programming, and more recently, design for a long time. I keep learning every day to keep improving in these fields.",
            SPA: "Desde hace mucho tiempo me apasiona la informática, la programación y, más recientemente, el diseño. Sigo aprendiendo cada día para seguir progresando en estos temas.",
            DEU: "Ich begeistere mich seit langem für Informatik, Programmierung und in jüngerer Zeit auch für Design. Ich lerne jeden Tag dazu, um mich in diesen Bereichen stetig weiterzuentwickeln.",
          })}
        </p>
        <p className={texte}>
          <span className="block mb-1.5 text-2xl lg:text-[28px] font-black leading-tight text-(--accentuation)">
            {t({
              FRA: "J'adore créer, de tout !",
              ENG: "I love creating — anything!",
              SPA: "¡Me encanta crear, de todo!",
              DEU: "Ich liebe es, Dinge zu erschaffen – alles Mögliche!",
            })}
          </span>
          {t({
            FRA: "J'ai pour objectif de toujours m'améliorer.",
            ENG: "My goal is to keep improving myself.",
            SPA: "Mi objetivo es mejorar constantemente.",
            DEU: "Mein Ziel ist es, mich ständig zu verbessern.",
          })}
        </p>
        <p className={texte}>
          {t({
            FRA: "De plus, j'aime travailler en équipe : cela permet d'échanger, d'obtenir des retours et de s'adapter en conséquence pour produire le meilleur résultat possible.",
            ENG: "Moreover, I enjoy working in a team — it allows for exchange, feedback, and adaptation to achieve the best possible result.",
            SPA: "Además, me gusta trabajar en equipo, ya que permite intercambiar ideas, recibir comentarios y adaptarse para lograr el mejor resultado posible.",
            DEU: "Außerdem arbeite ich gerne im Team – das ermöglicht Austausch, Feedback und Anpassung, um das bestmögliche Ergebnis zu erzielen.",
          })}
        </p>
        <div className="relative mt-auto bg-(--surface-2) p-6 flex flex-col gap-3">
          <Crochets />
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-(--accentuation)">
            <TargetIcon size={18} />
            {t({ FRA: "Objectif", ENG: "Goal", SPA: "Objetivo", DEU: "Ziel" })}
          </p>
          <p className={texte}>
            {t({
              FRA: "À l'issue de mon BUT Informatique, mon ambition est d'intégrer le monde professionnel en tant que développeur dès qu'une opportunité stimulante se présentera. J'ai à cœur de mettre mes compétences au service de projets concrets et innovants au sein d'une équipe dynamique. À plus long terme, j'envisage d'évoluer vers le statut de développeur freelance, afin de relever des défis variés et de mettre mon expertise au profit d'une clientèle diversifiée en toute autonomie.",
              ENG: "Upon completing my BUT in Computer Science, my ambition is to enter the professional world as a developer as soon as a stimulating opportunity arises. I am eager to apply my skills to concrete and innovative projects within a dynamic team. In the longer term, I plan to transition into freelance development to take on diverse challenges and provide my expertise to a broad range of clients independently.",
              SPA: "Al finalizar mi BUT en Informática, mi ambición es incorporarme al mundo profesional como desarrollador en cuanto se presente una oportunidad estimulante. Deseo poner mis habilidades al servicio de proyectos concretos e innovadores dentro de un equipo dinámico. A largo plazo, planeo evolucionar hacia el estatus de desarrollador freelance para afrontar desafíos variados y ofrecer mi experiencia a una clientela diversa de forma autónoma.",
              DEU: "Nach Abschluss meines BUT in Informatik ist es mein Ziel, als Entwickler in die Berufswelt einzusteigen, sobald sich eine spannende Gelegenheit bietet. Ich freue mich darauf, meine Fähigkeiten in konkrete und innovative Projekte innerhalb eines dynamischen Teams einzubringen. Langfristig plane ich den Schritt in die Selbstständigkeit als Freelance-Entwickler, um vielfältige Herausforderungen anzunehmen und mein Fachwissen einem breiten Kundenkreis eigenverantwortlich anzubieten.",
            })}
          </p>
        </div>
      </Carte>

      {/* 02 · Parcours géographique et loisirs ============================== */}
      <Carte
        numero="02"
        icone={<MapPinIcon size={24} />}
        className="lg:col-span-5"
        titre={
          <h3 className="sr-only">
            {t({
              FRA: "Parcours et mobilité",
              ENG: "Background and mobility",
              SPA: "Trayectoria y movilidad",
              DEU: "Werdegang und Mobilität",
            })}
          </h3>
        }
      >
        <Trajet />
        <p className={texte}>
          {t({
            FRA: "Après mes études à Lannion, je suis revenu à Lorient. Je suis ",
            ENG: "After my studies in Lannion, I moved back to Lorient. I am ",
            SPA: "Tras mis estudios en Lannion, volví a Lorient. Estoy ",
            DEU: "Nach meinem Studium in Lannion bin ich nach Lorient zurückgekehrt. Ich bin ",
          })}
          <strong className="font-bold text-foreground">
            {t({
              FRA: "prêt à bouger",
              ENG: "ready to relocate",
              SPA: "dispuesto a mudarme",
              DEU: "bereit umzuziehen",
            })}
          </strong>
          {t({
            FRA: " : en Bretagne, sur le bassin d'Arcachon (Lège-Cap-Ferret) ou ailleurs, selon les opportunités.",
            ENG: ": to Brittany, the Arcachon Bay (Lège-Cap-Ferret) or elsewhere, depending on opportunities.",
            SPA: ": en Bretaña, en la bahía de Arcachon (Lège-Cap-Ferret) o en otro lugar, según las oportunidades.",
            DEU: ": in die Bretagne, an die Bucht von Arcachon (Lège-Cap-Ferret) oder woandershin – je nach Gelegenheit.",
          })}
        </p>
        <div className="mt-auto pt-5 border-t border-(--line) flex flex-col gap-3.5">
          <p className={texte}>
            {t({
              FRA: "J'aime écouter de la musique, jouer à des jeux vidéo, aller au cinéma et voyager.",
              ENG: "I enjoy listening to music, playing video games, going to the movies and traveling.",
              SPA: "Me gusta escuchar música, jugar a videojuegos, ir al cine y viajar.",
              DEU: "Ich höre gerne Musik, spiele Videospiele, gehe ins Kino und reise gerne.",
            })}
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {loisirs.map(([icone, nom]) => (
              <li
                key={nom.FRA}
                className="flex items-center gap-2.5 px-3.5 py-2.5 border border-(--line) text-sm font-bold text-(--foreground-secondary)"
              >
                <span className="shrink-0 text-(--accentuation)">{icone}</span>
                {t(nom)}
              </li>
            ))}
          </ul>
        </div>
      </Carte>

      {/* 03 · Formation : frise de gauche à droite ========================== */}
      <Carte
        numero="03"
        icone={<GraduationCapIcon size={24} />}
        className="lg:col-span-12"
        titre={
          <TitreCarte>
            {t({
              FRA: "Formation",
              ENG: "Education and Training",
              SPA: "Educación y formación",
              DEU: "Ausbildung und Schulung",
            })}
          </TitreCarte>
        }
      >
        <ol className="mt-2 xl:mt-4 ml-1.5 xl:ml-0 flex flex-col xl:grid xl:grid-cols-[1fr_1.3fr_2fr_0.9fr]">
          <Etape etat="passe" annee="2019" titre="PSC1">
            <p className={texte}>
              {t({
                FRA: "J'ai également obtenu le PSC1 (diplôme de premiers secours) en 2019.",
                ENG: "I also obtained the PSC1 (First Aid Certificate) in 2019.",
                SPA: "También obtuve el PSC1 (certificado de primeros auxilios) en 2019.",
                DEU: "Ich habe außerdem 2019 das PSC1-Zertifikat (Erste-Hilfe-Diplom) erworben.",
              })}
            </p>
          </Etape>
          <Etape
            etat="passe"
            annee="2023"
            titre={t({
              FRA: "Baccalauréat général",
              ENG: "French baccalaureate",
              SPA: "Bachillerato francés",
              DEU: "Französisches Abitur",
            })}
          >
            <p className={texte}>
              {t({
                FRA: "Je suis diplômé d'un baccalauréat général avec les spécialisations physique-chimie et NSI (numérique et sciences informatiques), ainsi que des options de droit et de robotique, obtenu en 2023.",
                ENG: "I hold a general French baccalaureate with specializations in Physics-Chemistry and Computer Science (NSI), along with electives in Law and Robotics, obtained in 2023.",
                SPA: "Poseo el bachillerato general francés con especializaciones en Física-Química e Informática (NSI), además de optativas en Derecho y Robótica, obtenido en 2023.",
                DEU: "Ich habe das französische Abitur mit den Schwerpunkten Physik-Chemie und Informatik (NSI) sowie den Wahlfächern Recht und Robotik im Jahr 2023 erworben.",
              })}
            </p>
          </Etape>
          <Etape
            etat="actuel"
            annee="2026"
            titre={t({
              FRA: "BUT Informatique · parcours Data et IA",
              ENG: "BUT in Computer Science · Data and AI track",
              SPA: "BUT en Informática · especialización en Datos e IA",
              DEU: "BUT Informatik · Schwerpunkt Daten und KI",
            })}
          >
            <p className={texte}>
              {t({
                FRA: "Je suis diplômé d'un Bachelor Universitaire de Technologie (BUT) Informatique, parcours Data et IA, obtenu en 2026 à l'",
                ENG: "I hold a Bachelor of Technology (BUT) in Computer Science, Data and AI track, obtained in 2026 from the ",
                SPA: "Soy titulado en un Bachelor Universitario de Tecnología (BUT) en Informática, especialización en Datos e IA, obtenido en 2026 en el ",
                DEU: "Ich habe 2026 meinen Bachelor of Technology (BUT) in Informatik mit dem Schwerpunkt Daten und KI am ",
              })}
              <a
                href="https://iut-lannion.univ-rennes.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-(--accentuation) underline decoration-2 underline-offset-4 hover:text-foreground transition-colors duration-200"
              >
                {t({
                  FRA: "Institut Universitaire de Technologie (IUT) de Lannion",
                  ENG: "University Institute of Technology (IUT) of Lannion",
                  SPA: "Instituto Universitario de Tecnología (IUT) de Lannion",
                  DEU: "Universitätsinstitut für Technologie (IUT) in Lannion",
                })}
              </a>
              {t({ FRA: ".", ENG: ".", SPA: ".", DEU: " abgeschlossen." })}
            </p>
            <p className={texte}>
              {t({
                FRA: "Ces trois années de formation (2023 - 2026) m'ont permis d'acquérir des compétences en programmation, systèmes et réseaux, ainsi qu'en anglais, droit, management et communication.",
                ENG: "These three years of training (2023 - 2026) allowed me to develop skills in programming, systems and networks, as well as in English, law, management and communication.",
                SPA: "Estos tres años de formación (2023 - 2026) me permitieron adquirir competencias en programación, sistemas y redes, así como en inglés, derecho, gestión y comunicación.",
                DEU: "Diese dreijährige Ausbildung (2023 - 2026) hat mir Kompetenzen in Programmierung, Systemen und Netzwerken sowie in Englisch, Recht, Management und Kommunikation vermittelt.",
              })}
            </p>
          </Etape>
          <Etape
            etat="futur"
            dernier
            annee={t({ FRA: "Demain", ENG: "Next", SPA: "Mañana", DEU: "Bald" })}
            titre={t({ FRA: "Développeur", ENG: "Developer", SPA: "Desarrollador", DEU: "Entwickler" })}
          >
            <p className={texte}>
              {t({
                FRA: "Ouvert aux propositions d'emploi.",
                ENG: "Open to job offers.",
                SPA: "Abierto a ofertas de empleo.",
                DEU: "Offen für Stellenangebote.",
              })}
            </p>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 min-h-11 font-bold text-(--accentuation) hover:text-foreground transition-colors duration-200"
            >
              {t({ FRA: "Me contacter", ENG: "Contact me", SPA: "Contactarme", DEU: "Kontakt aufnehmen" })}
              <ArrowRightIcon size={16} />
            </a>
          </Etape>
        </ol>
      </Carte>

      {/* 04 · Compétences informatiques ===================================== */}
      <Carte
        numero="04"
        icone={<CodeIcon size={24} />}
        className="lg:col-span-6"
        titre={
          <TitreCarte>
            {t({
              FRA: "Compétences informatiques",
              ENG: "Technical Skills",
              SPA: "Competencias técnicas",
              DEU: "Technische Kenntnisse",
            })}
          </TitreCarte>
        }
      >
        <p className={texte}>
          {t({
            FRA: "Au cours de mes études et de mes projets personnels, j'ai acquis des compétences en programmation dans plusieurs langages et outils.",
            ENG: "Throughout my studies and personal projects, I have gained programming skills in various languages and tools.",
            SPA: "A lo largo de mis estudios y proyectos personales, he adquirido competencias en programación en varios lenguajes y herramientas.",
            DEU: "Im Laufe meines Studiums und meiner persönlichen Projekte habe ich Programmierkenntnisse in verschiedenen Sprachen und Tools erworben.",
          })}
        </p>
        <div className="mt-1 flex flex-col gap-6">
          {outils.map((groupe) => (
            <div key={groupe.label.FRA} className="flex flex-col gap-2.5">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-(--muted)">{t(groupe.label)}</h4>
              <ul className="flex flex-wrap gap-2">
                {groupe.items.map(([nom, src]) => (
                  <li
                    key={nom}
                    className="flex items-center gap-2.5 py-1.5 pl-2 pr-3.5 bg-(--surface-2) border border-(--line) text-sm font-bold text-(--foreground-secondary)"
                  >
                    <Image src={src} alt="" width={24} height={24} className="tool-logo size-6 object-contain" />
                    {nom}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Carte>

      {/* 05 · Compétences complémentaires =================================== */}
      <Carte
        numero="05"
        icone={<LayersIcon size={24} />}
        className="lg:col-span-6"
        titre={
          <TitreCarte>
            {t({
              FRA: "Compétences complémentaires",
              ENG: "Additional Skills",
              SPA: "Competencias complementarias",
              DEU: "Ergänzende Kenntnisse",
            })}
          </TitreCarte>
        }
      >
        <p className={texte}>
          {t({
            FRA: "Mon BUT Informatique m'a également formé à de nombreuses compétences transversales.",
            ENG: "My Bachelor of Technology in Computer Science also trained me in many cross-disciplinary skills.",
            SPA: "Mi Bachelor en Informática también me formó en muchas competencias transversales.",
            DEU: "Mein Informatikstudium hat mich auch in vielen übergreifenden Kompetenzen ausgebildet.",
          })}
        </p>
        <ul className="mt-1 flex flex-col">
          {complementaires.map(([icone, titre, description], index) => (
            <li
              key={titre.FRA}
              className={`flex gap-4 border-t border-(--line) ${index === complementaires.length - 1 ? "pt-4.5" : "py-4.5"}`}
            >
              <span className="shrink-0 size-10 flex items-center justify-center border border-(--line) text-(--accentuation)">
                {icone}
              </span>
              <div className="min-w-0">
                <h4 className="mb-1 font-bold">{t(titre)}</h4>
                <p className="text-[15px] leading-relaxed text-(--foreground-secondary)">{t(description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Carte>
    </div>
  );
}
