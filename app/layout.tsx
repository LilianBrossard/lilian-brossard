import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import { LangProvider } from "@/contexts/LangContext";
import { SITE_URL } from "@/utils/site";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

// font-[family-name:var(--font-aquire)]
const aquire = localFont({
  src: "./fonts/aquire.woff",
  variable: "--font-aquire",
});

const title = "Lilian Brossard | Développeur";
const description =
  "Portfolio de Lilian Brossard, développeur diplômé d'un Bachelor Universitaire de Technologie Informatique à l'IUT de Lannion. Projets, compétences et contact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Lilian Brossard",
  },
  description,
  authors: [{ name: "Lilian Brossard", url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Lilian Brossard",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// Appliqué avant l'affichage pour éviter un flash du mauvais thème
// quand le visiteur a choisi le thème clair lors d'une visite précédente.
const initScript = `try{var d=document.documentElement,t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.setAttribute("data-theme",t);var m={FRA:"fr",ENG:"en",SPA:"es",DEU:"de"},l=localStorage.getItem("lang");if(m[l])d.lang=m[l]}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script id="init-preferences" strategy="beforeInteractive">
          {initScript}
        </Script>
      </head>
      <body
        className={`${aquire.variable} ${lato.variable} antialiased w-full overflow-x-clip`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
