import Link from "next/link";
import type { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  /** "primary" : fond couleur d'accent. "outline" : contour seulement. */
  variant?: "primary" | "outline";
  icon?: ReactNode;
  /** Nom du fichier à télécharger (lien de téléchargement) */
  download?: string;
  external?: boolean;
  className?: string;
}

// Bouton d'action aux coins coupés, dans le style du site.
export default function ActionButton({
  href,
  children,
  variant = "outline",
  icon,
  download,
  external = false,
  className = "",
}: ActionButtonProps) {
  const primary = variant === "primary";
  const outer = `group clipPath-Button-Double inline-flex p-0.5 bg-(--accentuation) shrink-0 ${className}`;
  const inner = `clipPath-Button-Double inline-flex w-full items-center justify-center gap-2 h-11 px-5 sm:px-6 text-sm sm:text-base font-bold whitespace-nowrap transition-colors duration-200 ${
    primary
      ? "bg-(--accentuation) text-(--accentuation-inverse) group-hover:bg-foreground group-hover:text-background"
      : "bg-background text-foreground group-hover:bg-(--accentuation) group-hover:text-(--accentuation-inverse)"
  }`;

  const content = (
    <span className={inner}>
      {icon}
      {children}
    </span>
  );

  const isNative =
    download !== undefined ||
    external ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  if (isNative) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={outer}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={outer}>
      {content}
    </Link>
  );
}
