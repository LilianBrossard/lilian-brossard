"use client";
import { useLangContext, useTranslate } from "@/contexts/LangContext";
import { formatPeriod, parcours, type ParcoursItem } from "@/content/experiences";
import type { Dict } from "@/utils/i18n";

// Frise verticale du parcours (page /experiences)
function Timeline({ items }: { items: ParcoursItem[] }) {
  const t = useTranslate();
  const { LangVariable } = useLangContext();

  return (
    <ol>
      {items.map((item) => {
        const period = formatPeriod(item, LangVariable);
        return (
          <li key={item.id} className="grid lg:grid-cols-[13rem_1fr] lg:gap-10">
            <div className="hidden lg:block text-right pt-1">
              <p className="font-bold uppercase tracking-widest text-sm text-(--accentuation)">{period}</p>
              <p className="text-sm text-(--muted) mt-1">{item.place}</p>
            </div>
            <div className="relative pl-8 lg:pl-10 pb-12 border-l-2 border-(--background-secondary)">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1.5 w-4 h-4 rotate-45 bg-background border-2 border-(--primary) shadow-[0_0_10px_var(--glow)]"
              ></span>
              <p className="lg:hidden font-bold uppercase tracking-widest text-sm text-(--accentuation) mb-1">
                {period} · {item.place}
              </p>
              <h3 className="text-xl lg:text-2xl font-bold leading-snug">{t(item.title)}</h3>
              <p className="font-semibold text-(--foreground-secondary) mt-1">{item.organisation}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex gap-3 leading-relaxed text-(--foreground-secondary)">
                    <span aria-hidden="true" className="mt-2.5 w-2 h-2 shrink-0 bg-(--primary)"></span>
                    <span>{t(detail)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function GroupTitle({ label }: { label: Dict }) {
  const t = useTranslate();
  return (
    <h2 className="flex items-center gap-4 text-2xl lg:text-3xl font-bold mb-8">
      <span aria-hidden="true" className="w-8 h-1 bg-(--primary) shadow-[0_0_10px_var(--glow)]"></span>
      {t(label)}
    </h2>
  );
}

export default function ParcoursTimeline() {
  return (
    <div className="flex flex-col gap-14">
      <section>
        <GroupTitle
          label={{
            FRA: "Expériences professionnelles",
            ENG: "Work experience",
            SPA: "Experiencia profesional",
            DEU: "Berufserfahrung",
          }}
        />
        <Timeline items={parcours.filter((item) => item.kind === "experience")} />
      </section>
      <section>
        <GroupTitle
          label={{
            FRA: "Diplômes et formations",
            ENG: "Education",
            SPA: "Formación",
            DEU: "Ausbildung",
          }}
        />
        <Timeline items={parcours.filter((item) => item.kind === "formation")} />
      </section>
    </div>
  );
}
