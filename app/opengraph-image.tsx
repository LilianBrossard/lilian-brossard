import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image affichée quand le lien du site est partagé (LinkedIn, Discord, mail...)
export const alt = "Lilian Brossard - Développeur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Même couleur d'accent que le site (voir --primary dans globals.css)
const ACCENT = "#95e8fd";
const BLACK = "#0c0c0c";
const GREY = "#2b2b2b";

export default async function OpengraphImage() {
  const aquire = await readFile(join(process.cwd(), "app/fonts/aquire.woff"));
  // Aquire n'a pas d'accents : le sous-titre utilise Geist, fournie avec Next
  const geist = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: BLACK,
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Coins décoratifs, comme sur le site */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 48,
            width: 220,
            height: 140,
            borderTop: `8px solid ${ACCENT}`,
            borderLeft: `8px solid ${ACCENT}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 48,
            width: 220,
            height: 140,
            borderBottom: `8px solid ${ACCENT}`,
            borderRight: `8px solid ${ACCENT}`,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Aquire",
            fontSize: 104,
            letterSpacing: 4,
          }}
        >
          <span style={{ color: ACCENT }}>L</span>
          <span>ILIAN</span>
          <span style={{ width: 40 }} />
          <span style={{ color: ACCENT }}>B</span>
          <span>ROSSARD</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 6,
            background: ACCENT,
            margin: "36px 0",
            boxShadow: `0 0 20px ${ACCENT}`,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Aquire",
            fontSize: 48,
            letterSpacing: 6,
            color: ACCENT,
          }}
        >
          DÉVELOPPEUR
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: "Geist",
            fontSize: 30,
            color: "#d4d4d4",
            background: GREY,
            padding: "10px 28px",
          }}
        >
          Diplômé d&apos;un BUT Informatique · IUT de Lannion
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Aquire", data: aquire, style: "normal", weight: 400 },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
      ],
    }
  );
}
