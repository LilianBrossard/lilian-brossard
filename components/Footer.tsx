import Image from "next/image";
import Link from "next/link";
import Translate from "@/utils/Translate";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

const navLinks = [
  { href: "/#apropos", label: { FRA: "À propos", ENG: "About", SPA: "Acerca de", DEU: "Über Mich" } },
  { href: "/experiences", label: { FRA: "Expériences", ENG: "Experience", SPA: "Experiencia", DEU: "Erfahrung" } },
  { href: "/projet", label: { FRA: "Projets", ENG: "Projects", SPA: "Proyectos", DEU: "Projekte" } },
  { href: "/#contact", label: { FRA: "Contact", ENG: "Contact", SPA: "Contacto", DEU: "Kontakt" } },
];

const iconLink =
  "flex items-center justify-center w-11 h-11 border-2 border-(--background-secondary) hover:border-(--accentuation) hover:text-(--accentuation) transition-colors duration-200";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full bg-background border-t-2 border-(--background-secondary)">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16 py-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3 self-start lg:self-center">
          <Image src="/LB.png" alt="" width={40} height={40} />
          <span className="flex flex-col">
            <span className="uppercase font-(family-name:--font-aquire)">
              <span className="text-(--accentuation)">L</span>ilian{" "}
              <span className="text-(--accentuation)">B</span>rossard
            </span>
            <span className="text-sm text-(--muted)">
              <Translate
                dict={{
                  FRA: "Développeur · BUT Informatique",
                  ENG: "Developer · Bachelor in Computer Science",
                  SPA: "Desarrollador · Bachelor en Informática",
                  DEU: "Entwickler · Bachelor in Informatik",
                }}
              />
            </span>
          </span>
        </Link>

        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-(--foreground-secondary) hover:text-(--accentuation) underline-offset-4 hover:underline transition-colors"
                >
                  <Translate dict={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          <a href="https://github.com/LilianBrossard" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lilian-brossard-1b6147294/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href="/CV_LilianBrossard.pdf" download="CV_LilianBrossard.pdf" className={iconLink} aria-label="CV (PDF)">
            <DownloadIcon size={20} />
          </a>
        </div>
      </div>
      <p className="border-t border-(--background-secondary) py-4 px-4 text-center text-sm text-(--muted)">
        © {year} Lilian Brossard
      </p>
    </footer>
  );
}
