import type { Metadata, Viewport } from "next";
import { Lato, Fruktur } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { useLangContext, LangProvider } from "@/contexts/LangContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

const fruktur = Fruktur({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fruktur",
});

// font-[family-name:var(--font-aquire)]
const aquire = localFont({
  src: "./fonts/aquire.woff",
  variable: "--font-aquire",
});

export const metadata: Metadata = {
  title: "Lilian Brossard",
  description: "Portfolio de Lilian Brossard - Développeur",
  keywords: [
    "Lilian Brossard",
    "Portfolio",
    "Développeur Web",
    "Projets Web",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Backend",
    "Fullstack",
    "Web Development",
    "Web Designer",
    "UI/UX",
    "Programmation",
    "Code",
    "Technologie",
    "Informatique",
    "Développement Logiciel",
    "Applications Web",
    "Sites Web",
  ],
  authors: [{ name: "Lilian Brossard" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${aquire.variable} ${lato.variable} ${fruktur.variable} overflow-y-auto antialiased font-[--font-lato] w-screen text-[--foreground] bg-[--background]`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
