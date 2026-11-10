"use client";
import { useState, type ReactNode } from "react";
import { useTranslate } from "@/contexts/LangContext";
import ActionButton from "@/components/ActionButton";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import type { Dict } from "@/utils/i18n";

const EMAIL = "lilian.brossard@gmail.com";

interface ContactRow {
  label: Dict;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  copy?: string;
}

const rows: ContactRow[] = [
  {
    label: { FRA: "Email", ENG: "Email", SPA: "Correo", DEU: "E-Mail" },
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <MailIcon size={22} />,
    copy: EMAIL,
  },
  {
    label: { FRA: "Téléphone", ENG: "Phone", SPA: "Teléfono", DEU: "Telefon" },
    value: "06 47 57 78 28",
    href: "tel:+33647577828",
    icon: <PhoneIcon size={22} />,
  },
  {
    label: { FRA: "LinkedIn", ENG: "LinkedIn", SPA: "LinkedIn", DEU: "LinkedIn" },
    value: "lilian-brossard",
    href: "https://www.linkedin.com/in/lilian-brossard-1b6147294/",
    icon: <LinkedinIcon size={20} />,
    external: true,
  },
  {
    label: { FRA: "GitHub", ENG: "GitHub", SPA: "GitHub", DEU: "GitHub" },
    value: "LilianBrossard",
    href: "https://github.com/LilianBrossard",
    icon: <GithubIcon size={20} />,
    external: true,
  },
];

export default function ContactSection() {
  const t = useTranslate();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-16 py-12 lg:py-20">
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
        {/* Coins décoratifs */}
        <div aria-hidden="true" className="hidden lg:block absolute -top-8 -left-8 w-40 h-24 border-t-4 border-l-4 border-(--primary)"></div>
        <div aria-hidden="true" className="hidden lg:block absolute -bottom-8 -right-8 w-40 h-24 border-b-4 border-r-4 border-(--primary)"></div>

        <div className="flex flex-col gap-6">
          <p className="inline-flex items-center gap-3 self-start px-3 py-1.5 border border-(--accentuation) text-(--accentuation) text-sm font-bold uppercase tracking-wider">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full bg-(--primary) opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2.5 h-2.5 bg-(--primary)"></span>
            </span>
            {t({
              FRA: "Ouvert aux propositions d'emploi",
              ENG: "Open to job offers",
              SPA: "Abierto a ofertas de empleo",
              DEU: "Offen für Stellenangebote",
            })}
          </p>
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            {t({
              FRA: "Je serais ravi d'échanger avec vous !",
              ENG: "I would be delighted to connect with you!",
              SPA: "¡Me encantaría conectar contigo!",
              DEU: "Ich freue mich auf den Austausch mit Ihnen!",
            })}
          </h3>
          <p className="text-lg leading-relaxed text-(--foreground-secondary) max-w-xl">
            {t({
              FRA: "N'hésitez pas à me contacter par email ou par téléphone pour toute opportunité d'emploi, collaboration ou simplement pour discuter de projets passionnants.",
              ENG: "Feel free to reach out to me via email or phone for any job opportunities, collaborations, or simply to discuss exciting projects.",
              SPA: "No dudes en contactarme por correo electrónico o teléfono para cualquier oportunidad de empleo, colaboración o simplemente para hablar de proyectos apasionantes.",
              DEU: "Zögern Sie nicht, mich per E-Mail oder Telefon zu kontaktieren, sei es für Stellenangebote, Kooperationen oder einfach, um über spannende Projekte zu sprechen.",
            })}
          </p>
          <div className="flex flex-wrap gap-4">
            <ActionButton href={`mailto:${EMAIL}`} variant="primary" icon={<MailIcon size={18} />}>
              {t({
                FRA: "M'écrire un email",
                ENG: "Send me an email",
                SPA: "Escribirme un correo",
                DEU: "E-Mail schreiben",
              })}
            </ActionButton>
            <ActionButton
              href="/CV_LilianBrossard.pdf"
              download="CV_LilianBrossard.pdf"
              icon={<DownloadIcon size={18} />}
            >
              {t({
                FRA: "Télécharger mon CV",
                ENG: "Download my resume",
                SPA: "Descargar mi CV",
                DEU: "Lebenslauf herunterladen",
              })}
            </ActionButton>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {rows.map((row) => (
            <li key={row.href} className="flex items-stretch gap-2">
              <a
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="group flex-1 min-w-0 flex items-center gap-4 p-3 pr-4 border-2 border-(--background-secondary) hover:border-(--accentuation) focus-visible:border-(--accentuation) bg-background transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-12 h-12 shrink-0 bg-(--accentuation) text-(--accentuation-inverse)">
                  {row.icon}
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-sm text-(--muted)">{t(row.label)}</span>
                  <span className="font-bold text-base sm:text-lg truncate">{row.value}</span>
                </span>
                <ArrowRightIcon
                  size={20}
                  className="ml-auto shrink-0 text-(--muted) group-hover:text-(--accentuation) group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              {row.copy && (
                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-14 shrink-0 flex items-center justify-center border-2 border-(--background-secondary) hover:border-(--accentuation) hover:text-(--accentuation) transition-colors duration-200 cursor-pointer"
                  aria-label={
                    copied
                      ? t({ FRA: "Adresse copiée", ENG: "Address copied", SPA: "Dirección copiada", DEU: "Adresse kopiert" })
                      : t({ FRA: "Copier l'adresse email", ENG: "Copy email address", SPA: "Copiar la dirección", DEU: "E-Mail-Adresse kopieren" })
                  }
                  title={
                    copied
                      ? t({ FRA: "Copié !", ENG: "Copied!", SPA: "¡Copiado!", DEU: "Kopiert!" })
                      : t({ FRA: "Copier", ENG: "Copy", SPA: "Copiar", DEU: "Kopieren" })
                  }
                >
                  {copied ? <CheckIcon size={20} className="text-(--accentuation)" /> : <CopyIcon size={20} />}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p aria-live="polite" className="sr-only">
        {copied ? t({ FRA: "Adresse copiée", ENG: "Address copied", SPA: "Dirección copiada", DEU: "Adresse kopiert" }) : ""}
      </p>
      <p className="mt-16 lg:mt-20 text-center text-xl lg:text-2xl font-bold text-(--accentuation)">
        {t({
          FRA: "À bientôt j'espère !",
          ENG: "Hope to see you soon!",
          SPA: "¡Espero verte pronto!",
          DEU: "Bis hoffentlich bald!",
        })}
      </p>
    </div>
  );
}
