"use client";
import { useLangContext, useTranslate } from "@/contexts/LangContext";
import { formatPeriod, parcours } from "@/content/experiences";
import ActionButton from "@/components/ActionButton";
import { ArrowRightIcon } from "@/components/icons";

// Section « Expériences » de l'accueil : les expériences professionnelles en bref.
export default function ExperiencesSection() {
  const t = useTranslate();
  const { LangVariable } = useLangContext();
  const experiences = parcours.filter((item) => item.kind === "experience");

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-16 py-10 lg:py-14 flex flex-col gap-10 items-center">
      <ol className="w-full grid gap-6 lg:grid-cols-2">
        {experiences.map((item) => (
          <li key={item.id} className="clip-corners bg-(--accentuation) p-0.5">
            <article className="clip-corners bg-background h-full p-6 lg:p-8 flex flex-col gap-3">
              <p className="text-sm font-bold uppercase tracking-widest text-(--accentuation)">
                {formatPeriod(item, LangVariable)}
              </p>
              <h3 className="text-xl lg:text-2xl font-bold leading-snug">{t(item.title)}</h3>
              <p className="font-semibold text-(--foreground-secondary)">
                {item.organisation} · {item.place}
              </p>
              <p className="leading-relaxed text-(--foreground-secondary)">{t(item.summary)}</p>
            </article>
          </li>
        ))}
      </ol>
      <ActionButton href="/experiences" variant="primary" icon={<ArrowRightIcon size={18} />}>
        {t({
          FRA: "Voir tout mon parcours",
          ENG: "See my full background",
          SPA: "Ver toda mi trayectoria",
          DEU: "Meinen ganzen Werdegang ansehen",
        })}
      </ActionButton>
    </div>
  );
}
