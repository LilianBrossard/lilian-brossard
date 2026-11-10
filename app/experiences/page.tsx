import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import Circuit from "@/components/Circuit";
import ParcoursTimeline from "@/components/ParcoursTimeline";
import ActionButton from "@/components/ActionButton";
import { DownloadIcon, MailIcon } from "@/components/icons";
import Translate from "@/utils/Translate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences",
  description:
    "Le parcours de Lilian Brossard : stages chez Naval Group et Audélor, BUT Informatique à l'IUT de Lannion.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 opacity-25 pointer-events-none">
        <Circuit />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1 w-full pt-8 lg:pt-12">
        <MainTitle
          as="h1"
          titre={{
            FRA: "Expériences",
            ENG: "Experience",
            SPA: "Experiencia",
            DEU: "Erfahrung",
          }}
        />
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-10 lg:py-16">
          <p className="text-lg lg:text-xl leading-relaxed text-(--foreground-secondary) mb-12 lg:mb-16 max-w-3xl">
            <Translate
              dict={{
                FRA: "Mes stages et ma formation, du baccalauréat à l'obtention de mon BUT Informatique.",
                ENG: "My internships and education, from high school to my Bachelor of Technology in Computer Science.",
                SPA: "Mis prácticas y mi formación, desde el bachillerato hasta mi Bachelor en Informática.",
                DEU: "Meine Praktika und meine Ausbildung, vom Abitur bis zum Bachelor in Informatik.",
              }}
            />
          </p>
          <ParcoursTimeline />
          <div className="mt-6 flex flex-wrap gap-4">
            <ActionButton
              href="/CV_LilianBrossard.pdf"
              download="CV_LilianBrossard.pdf"
              variant="primary"
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
            <ActionButton href="/#contact" icon={<MailIcon size={18} />}>
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
      </main>
      <Footer />
    </div>
  );
}
