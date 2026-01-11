import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Translate from "@/utils/Translate";
import MainTitle from "@/components/MainTitle";
import Circuit from "@/components/Circuit";
import Link from "next/link";

export default function Home() {
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
            FRA: "Compétences",
            ENG: "Skills",
            SPA: "Habilidades",
            DEU: "Fähigkeiten",
          }}
          links={["#"]}
        />
        <div className="w-full flex flex-col justify-start gap-4 lg:gap-12 items-center px-4 md:px-12 lg:px-24 py-8 lg:py-16">
          <article className="w-full flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-8 md:px-12 lg:px-24 border-2 border-(--primary)">
            <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-8 lg:px-16 xl:px-24 items-center">
              <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                <Translate
                  dict={{
                    FRA: "Gérer : Administration des données",
                    ENG: "Manage: Data Administration",
                    SPA: "Gestionar: Administración de datos",
                    DEU: "Managen: Datenverwaltung",
                  }}
                />
              </h4>
              <p className="text-md xl:text-lg text-foreground text-start">
                <Translate
                  dict={{
                    FRA: "Spécialisé dans l'exploitation de l'information, j'ai appris à concevoir et à administrer des bases de données relationnelles et hétérogènes. Je sais modéliser, extraire et préparer des données complexes pour soutenir le pilotage stratégique d'une entreprise. J'ai également acquis une solide compréhension du RGPD et des enjeux d'intégrité, tout en sachant faciliter la visualisation des données pour l'aide à la décision.",
                    ENG: "Specializing in information exploitation, I learned to design and administer relational and heterogeneous databases. I know how to model, extract, and prepare complex data to support a company's strategic management. I have also gained a solid understanding of GDPR and integrity issues, while knowing how to facilitate data visualization for decision support.",
                    SPA: "Especializado en la explotación de la información, he aprendido a diseñar y administrar bases de datos relacionales y heterogéneas. Sé modelar, extraer y preparar datos complejos para apoyar la gestión estratégica de una empresa. También he adquirido un sólido conocimiento del RGPD y de los problemas de integridad, sabiendo facilitar la visualización de datos para el apoyo a la toma de decisiones.",
                    DEU: "Spezialisiert auf die Informationsnutzung, habe ich gelernt, relationale und heterogene Datenbanken zu entwerfen und zu verwalten. Ich kann komplexe Daten modellieren, extrahieren und aufbereiten, um die strategische Steuerung eines Unternehmens zu unterstützen. Ich habe zudem ein fundiertes Verständnis der DSGVO und von Integritätsfragen erworben und weiß, wie ich die Datenvisualisierung zur Entscheidungsunterstützung erleichtere.",
                  }}
                />
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
              <Link
                href={"/projet/shallow-red"}
                className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  Shallow Red
                </div>
              </Link>
              <Link
                href={"/projet/butInfo"}
                className="hidden lg:block clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  Base de données
                </div>
              </Link>
            </div>
          </article>
          <article className="w-full flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-8 md:px-12 lg:px-24 border-2 border-(--primary)">
            <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-8 lg:px-16 xl:px-24 items-center">
              <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                <Translate
                  dict={{
                    FRA: "Conduire : Gestion de projet",
                    ENG: "Lead: Project Management",
                    SPA: "Dirigir: Gestión de proyectos",
                    DEU: "Leiten: Projektmanagement",
                  }}
                />
              </h4>
              <p className="text-md xl:text-lg text-foreground text-start">
                <Translate
                  dict={{
                    FRA: "J'ai appris à piloter des projets informatiques en utilisant des méthodes classiques ou agiles pour transformer des besoins métiers en solutions concrètes. Je sais identifier les critères de faisabilité et assurer le suivi de chaque phase du cycle de développement. Ma formation m'a permis d'intégrer une vision globale des enjeux économiques et technologiques pour garantir la satisfaction des utilisateurs finaux.",
                    ENG: "I learned to lead IT projects using traditional or agile methods to transform business needs into concrete solutions. I know how to identify feasibility criteria and ensure the monitoring of each phase of the development cycle. My training allowed me to integrate a global vision of economic and technological stakes to ensure end-user satisfaction.",
                    SPA: "He aprendido a dirigir proyectos informáticos utilizando métodos tradicionales o ágiles para transformar las necesidades de negocio en soluciones concretas. Sé identificar los criterios de viabilidad y asegurar el seguimiento de cada fase del ciclo de desarrollo. Mi formación me ha permitido integrar una visión global de los retos económicos y tecnológicos para garantizar la satisfacción del usuario final.",
                    DEU: "Ich habe gelernt, IT-Projekte mit klassischen oder agilen Methoden zu leiten, um Geschäftsanforderungen in konkrete Lösungen umzusetzen. Ich kann Machbarkeitskriterien identifizieren und die Überwachung jeder Phase des Entwicklungszyklus sicherstellen. Meine Ausbildung hat es mir ermöglicht, eine globale Vision wirtschaftlicher und technologischer Herausforderungen zu integrieren, um die Zufriedenheit der Endnutzer zu gewährleisten.",
                  }}
                />
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
              <Link
                href={"/projet/pact"}
                className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  PACT
                </div>
              </Link>
              <Link
                href={"/projet/votre-site"}
                className="hidden lg:block clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  Votre Site
                </div>
              </Link>
            </div>
          </article>
          <article className="w-full flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-8 md:px-12 lg:px-24 border-2 border-(--primary)">
            <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-8 lg:px-16 xl:px-24 items-center">
              <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                <Translate
                  dict={{
                    FRA: "Collaborer : Travail en équipe",
                    ENG: "Collaborate: Teamwork",
                    SPA: "Colaborar: Trabajo en equipo",
                    DEU: "Zusammenarbeiten: Teamarbeit",
                  }}
                />
              </h4>
              <p className="text-md xl:text-lg text-foreground text-start">
                <Translate
                  dict={{
                    FRA: "J'ai appris à travailler efficacement au sein d'équipes pluridisciplinaires en développant une communication fluide et professionnelle. Je sais rendre compte de mes activités de manière structurée et m'intégrer dans une organisation complexe. J'ai également acquis les réflexes nécessaires pour partager une veille technologique active et accompagner le changement technique au sein d'un collectif.",
                    ENG: "I learned to work effectively within multidisciplinary teams by developing smooth and professional communication. I know how to report on my activities in a structured way and integrate into a complex organization. I have also acquired the necessary reflexes to share active technological monitoring and support technical change within a collective.",
                    SPA: "He aprendido a trabajar eficazmente en equipos multidisciplinares desarrollando una comunicación fluida y profesional. Sé informar sobre mis actividades de forma estructurada e integrarme en una organización compleja. También he adquirido los reflejos necesarios para compartir una vigilancia tecnológica activa y acompañar el cambio técnico dentro de un colectivo.",
                    DEU: "Ich habe gelernt, effektiv in multidisziplinären Teams zu arbeiten, indem ich eine reibungslose und professionelle Kommunikation entwickelt habe. Ich kann strukturiert über meine Aktivitäten berichten und mich in eine komplexe Organisation integrieren. Ich habe auch die notwendigen Reflexe erworben, um eine aktive technologische Beobachtung zu teilen und den technischen Wandel innerhalb eines Kollektivs zu begleiten.",
                  }}
                />
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
              <Link
                href={"/projet/tabas-kho"}
                className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  Tabas'Kho
                </div>
              </Link>
              <Link
                href={"/projet/pact"}
                className="hidden lg:block clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
              >
                <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                  PACT
                </div>
              </Link>
            </div>
          </article>
          <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-4 md:gap-8">
            <article className="w-full lg:w-[30%] flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-4 border-2 border-(--background-secondary)">
              <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-4 items-center">
                <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                  <Translate
                    dict={{
                      FRA: "Réaliser : Développement d'applications",
                      ENG: "Realize: Application Development",
                      SPA: "Realizar: Desarrollo de aplicaciones",
                      DEU: "Realisieren: Anwendungsentwicklung",
                    }}
                  />
                </h4>
                <p className="text-md xl:text-lg text-foreground text-start">
                  <Translate
                    dict={{
                      FRA: "Au cours de ma formation, j'ai appris à concevoir et à déployer des solutions logicielles sur mesure en plaçant les besoins du client au centre de ma démarche. Je sais désormais gérer l'intégralité du cycle de développement, de la conception d'interfaces ergonomiques à l'écriture d'un code robuste et documenté. Je maîtrise l'application de principes algorithmiques rigoureux pour garantir la création d'applications évolutives et maintenables.",
                      ENG: "During my training, I learned to design and deploy custom software solutions by placing client needs at the center of my process. I now know how to manage the entire development lifecycle, from ergonomic interface design to writing robust and documented code. I have mastered the application of rigorous algorithmic principles to ensure the creation of scalable and maintainable applications.",
                      SPA: "Durante mi formación, he aprendido a diseñar y desplegar soluciones de software a medida situando las necesidades del cliente en el centro de mi enfoque. Ahora sé gestionar todo el ciclo de vida del desarrollo, desde el diseño de interfaces ergonómicas hasta la escritura de código robusto y documentado. Domino la aplicación de principios algorítmicos rigurosos para garantizar la creación de aplicaciones escalables y mantenibles.",
                      DEU: "Während meiner Ausbildung habe ich gelernt, maßgeschneiderte Softwarelösungen zu entwerfen und bereitzustellen, wobei die Kundenbedürfnisse im Mittelpunkt stehen. Ich kann nun den gesamten Entwicklungszyklus verwalten, vom ergonomischen Interface-Design bis hin zum Schreiben von robustem und dokumentiertem Code. Ich beherrsche die Anwendung strenger algorithmischer Prinzipien, um die Erstellung skalierbarer und wartbarer Anwendungen zu gewährleisten.",
                    }}
                  />
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
                <Link
                  href={"/projet/chogastronomique"}
                  className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
                >
                  <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                    Cho'Gastronomique
                  </div>
                </Link>
              </div>
            </article>
            <article className="w-full lg:w-[30%] flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-8 border-2 border-(--background-secondary)">
              <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-8 items-center">
                <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                  <Translate
                    dict={{
                      FRA: "Optimiser : Performance et efficacité",
                      ENG: "Optimize: Performance and Efficiency",
                      SPA: "Optimizar: Rendimiento y eficiencia",
                      DEU: "Optimieren: Leistung und Effizienz",
                    }}
                  />
                </h4>
                <p className="text-md xl:text-lg text-foreground text-start">
                  <Translate
                    dict={{
                      FRA: "J'ai acquis les compétences nécessaires pour rendre les applications non seulement fonctionnelles, mais hautement performantes. Je sais analyser des problèmes complexes pour sélectionner les structures de données et les algorithmes les plus efficaces tout en minimisant la consommation de ressources. J'ai également appris à intégrer une réflexion sur l'impact environnemental et la sécurité afin de proposer des solutions informatiques durables.",
                      ENG: "I have acquired the skills necessary to make applications not only functional but high-performing. I know how to analyze complex problems to select the most efficient data structures and algorithms while minimizing resource consumption. I have also learned to integrate reflections on environmental impact and security to provide sustainable IT solutions.",
                      SPA: "He adquirido las habilidades necesarias para que las aplicaciones no solo sean funcionales, sino también de alto rendimiento. Sé analizar problemas complejos para seleccionar las estructuras de datos y los algoritmos más eficientes, minimizando al mismo tiempo el consumo de recursos. También he aprendido a integrar una reflexión sobre el impacto medioambiental y la seguridad para ofrecer soluciones informáticas sostenibles.",
                      DEU: "Ich habe die notwendigen Fähigkeiten erworben, um Anwendungen nicht nur funktional, sondern auch leistungsstark zu machen. Ich kann komplexe Probleme analysieren, um die effizientesten Datenstrukturen und Algorithmen auszuwählen und gleichzeitig den Ressourcenverbrauch zu minimieren. Ich habe auch gelernt, Überlegungen zu Umweltauswirkungen und Sicherheit einzubeziehen, um nachhaltige IT-Lösungen anzubieten.",
                    }}
                  />
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
                <Link
                  href={"/projet/zephire"}
                  className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
                >
                  <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                    Zephire
                  </div>
                </Link>
              </div>
            </article>
            <article className="w-full lg:w-[30%] flex flex-col gap-8 lg:gap-20 items-center py-12 px-4 my-4 border-2 border-(--background-secondary)">
              <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-4 items-center">
                <h4 className="text-lg md:text-xl xl:text-3xl font-bold text-(--accentuation) drop-shadow-lg">
                  <Translate
                    dict={{
                      FRA: "Administrer : Infrastructures et Réseaux",
                      ENG: "Administer: Infrastructure and Networks",
                      SPA: "Administrar: Infraestructuras y Redes",
                      DEU: "Administrieren: Infrastruktur und Netzwerke",
                    }}
                  />
                </h4>
                <p className="text-md xl:text-lg text-foreground text-start">
                  <Translate
                    dict={{
                      FRA: "Je sais désormais garantir la disponibilité des services en installant et en configurant des infrastructures réseaux et systèmes sécurisées. J'ai appris à déployer des serveurs virtualisés et à maintenir des environnements de développement dans des conditions opérationnelles optimales. Je maîtrise l'application des normes de sécurité actuelles pour assurer la continuité d'activité et la protection des flux de données.",
                      ENG: "I now know how to guarantee service availability by installing and configuring secure network and system infrastructures. I learned to deploy virtualized servers and maintain development environments in optimal operational conditions. I have mastered the application of current security standards to ensure business continuity and data flow protection.",
                      SPA: "Ahora sé garantizar la disponibilidad de los servicios instalando y configurando infraestructuras de red y sistemas seguros. He aprendido a desplegar servidores virtualizados y a mantener entornos de desarrollo en condiciones operativas óptimas. Domino la aplicación de las normas de seguridad actuales para asegurar la continuidad del negocio y la protección de los flujos de datos.",
                      DEU: "Ich weiß nun, wie ich die Dienstverfügbarkeit durch die Installation und Konfiguration sicherer Netzwerk- und Systeminfrastrukturen gewährleisten kann. Ich habe gelernt, virtualisierte Server bereitzustellen und Entwicklungsumgebungen unter optimalen Betriebsbedingungen zu warten. Ich beherrsche die Anwendung aktueller Sicherheitsstandards, um die Geschäftskontinuität und den Schutz von Datenflüssen zu gewährleisten.",
                    }}
                  />
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-around w-full gap-8 lg:gap-20 items-center">
                <Link
                  href={"/projet/perou"}
                  className="clipPath-Button-Double bg-(--foreground-secondary) lg:w-1/3 p-0.5"
                >
                  <div className="flex w-full flex-col items-center clipPath-Button-Double gap-6 lg:gap-12 bg-background p-6">
                    Pérou
                  </div>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
