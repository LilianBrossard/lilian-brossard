"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslate } from "@/contexts/LangContext";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/icons";
import type { Dict } from "@/utils/i18n";

interface ProjectBodyProps {
  title: Dict;
  details: Dict[][];
  images: string[];
}

// Contenu d'une page projet : sections texte + image, galerie, et agrandissement des images
export default function ProjectBody({ title, details, images }: ProjectBodyProps) {
  const t = useTranslate();
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const extraImages = images.slice(details.length);
  const projectTitle = t(title);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step: number) => setOpen((current) => (current === null ? null : (current + step + images.length) % images.length)),
    [images.length]
  );

  // Clavier (Échap, flèches) et blocage du défilement quand l'image est agrandie
  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, move]);

  const zoomLabel = (index: number) =>
    `${t({ FRA: "Agrandir l'image", ENG: "Enlarge image", SPA: "Ampliar la imagen", DEU: "Bild vergrößern" })} ${index + 1} - ${projectTitle}`;

  const thumbnail = (image: string, index: number, sizes: string) => (
    <button
      type="button"
      onClick={() => setOpen(index)}
      aria-label={zoomLabel(index)}
      className="group relative block w-full cursor-zoom-in"
    >
      <span aria-hidden="true" className="absolute w-1/2 h-1/2 -top-[4%] -left-[3%] border-t-2 border-l-2 border-(--primary)"></span>
      <span aria-hidden="true" className="absolute w-1/2 h-1/2 top-[54%] left-[53%] border-b-2 border-r-2 border-(--primary)"></span>
      <Image
        src={`/projets/${image}`}
        alt=""
        width={1200}
        height={800}
        sizes={sizes}
        className="relative w-full h-auto object-contain border-2 border-(--primary) group-hover:opacity-90 transition-opacity"
      />
    </button>
  );

  return (
    <>
      <div className="flex flex-col gap-16 lg:gap-24">
        {details.map((detail, index) => {
          const [heading, ...paragraphs] = detail;
          const image = images[index];
          return (
            <section
              key={index}
              className={`grid gap-8 lg:gap-16 items-center ${image ? "lg:grid-cols-2" : "max-w-3xl"}`}
            >
              <div className={image && index % 2 === 1 ? "lg:order-2" : ""}>
                {heading && <h2 className="text-xl lg:text-2xl font-bold mb-4">{t(heading)}</h2>}
                <div className="flex flex-col gap-3">
                  {paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-base lg:text-lg leading-relaxed text-(--foreground-secondary)">
                      {t(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
              {image && thumbnail(image, index, "(min-width: 1024px) 45vw, 90vw")}
            </section>
          );
        })}
      </div>

      {extraImages.length > 0 && (
        <section className="mt-20 lg:mt-28">
          <h2 className="flex items-center gap-4 text-xl lg:text-2xl font-bold mb-8">
            <span aria-hidden="true" className="w-8 h-1 bg-(--primary) shadow-[0_0_10px_var(--glow)]"></span>
            {t({ FRA: "Galerie", ENG: "Gallery", SPA: "Galería", DEU: "Galerie" })}
          </h2>
          <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {extraImages.map((image, i) => (
              <li key={image}>{thumbnail(image, details.length + i, "(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw")}</li>
            ))}
          </ul>
        </section>
      )}

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} - ${open + 1} / ${images.length}`}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 lg:p-12"
          onClick={close}
        >
          <div className="relative w-full h-full" onClick={(event) => event.stopPropagation()}>
            <Image
              src={`/projets/${images[open]}`}
              alt={`${projectTitle} - ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={t({ FRA: "Fermer", ENG: "Close", SPA: "Cerrar", DEU: "Schließen" })}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-black/60 text-white border-2 border-white/40 hover:border-(--primary) cursor-pointer"
          >
            <CloseIcon size={24} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  move(-1);
                }}
                aria-label={t({ FRA: "Image précédente", ENG: "Previous image", SPA: "Imagen anterior", DEU: "Vorheriges Bild" })}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 text-white border-2 border-white/40 hover:border-(--primary) cursor-pointer"
              >
                <ArrowLeftIcon size={24} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  move(1);
                }}
                aria-label={t({ FRA: "Image suivante", ENG: "Next image", SPA: "Imagen siguiente", DEU: "Nächstes Bild" })}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/60 text-white border-2 border-white/40 hover:border-(--primary) cursor-pointer"
              >
                <ArrowRightIcon size={24} />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-sm font-bold tracking-widest">
                {open + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
