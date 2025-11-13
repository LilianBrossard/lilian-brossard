"use client";
import Translate from "@/utils/Translate";
import { useState } from "react";

export default function Apropos() {
  const listOriginY = [13, 38, 63, 88]; // Positions verticales de départ possibles
  const [originY, setOriginY] = useState(listOriginY[0]); // Position verticale de départ
  const [tempOriginY, setTempOriginY] = useState(listOriginY[0]); // Position verticale de départ
  const beamCount = 120; // Nombre de faisceaux

  function ChangeOrigine(newTempOriginY: number | null) {
    if (newTempOriginY === null) {
      setTempOriginY(originY);
      //   console.log("leave : ", originY);
    } else {
      setTempOriginY(listOriginY[newTempOriginY]);
      //   console.log("pass : ", listOriginY[newTempOriginY]);
    }
  }
  function ChangePermanentOrigin(newOriginY: number) {
    setOriginY(listOriginY[newOriginY]);
    setTempOriginY(listOriginY[newOriginY]);
    // console.log("clicked : ", listOriginY[newOriginY]);
  }
  return (
    <div className="w-full h-[80vh] flex flex-row">
      <div className="w-1/3 h-full flex flex-col justify-around pl-16">
        {(
          [
            [
              // https://www.svgrepo.com/svg/69867/graduation-diploma
              <svg
                fill="var(--accentuation)"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 401.168 401.168"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M401.004,250.538c-0.834-5.295-4.759-9.572-9.961-10.859c-0.872-0.215-71.379-17.925-123.181-49.804l-56.563-56.576 c-31.844-51.777-49.596-122.305-49.811-123.174c-1.286-5.203-5.565-9.128-10.859-9.962c-5.293-0.834-10.572,1.585-13.396,6.14 l-17.078,27.542c-9.682-8.729-24.245-12.872-36.144-9.729l-0.973,0.259C40.87,37.292,14.092,64.07,1.175,106.237l-0.258,0.974 c-2.961,13.143,1.392,27.9,11.09,37.599c0.729,0.729,1.494,1.433,2.272,2.092l0.294,0.241 c32.075,25.631,63.309,52.74,93.259,80.913c-26.838,14.876-50.168,22.272-67.996,21.479c-2.969-0.133-5.679,1.683-6.688,4.479 s-0.084,5.923,2.286,7.719l20.133,15.26l-22.844,21.916c-1.961,1.882-2.611,4.751-1.653,7.293 c0.348,0.924,0.882,1.737,1.552,2.407c1.177,1.178,2.772,1.906,4.501,1.982c20.176,0.897,42.373-3.433,66.34-12.889 c-9.457,23.967-13.786,46.163-12.889,66.339c0.077,1.729,0.806,3.325,1.983,4.502c0.67,0.67,1.485,1.204,2.408,1.552 c2.542,0.958,5.412,0.31,7.293-1.651l21.917-22.846l15.258,20.136c1.796,2.367,4.922,3.295,7.718,2.283 c2.795-1.009,4.61-3.72,4.478-6.688c-0.792-17.828,6.604-41.159,21.481-67.999c28.188,29.964,55.298,61.198,80.914,93.263 l0.243,0.3c0.657,0.774,1.359,1.536,2.086,2.266c9.698,9.698,24.457,14.053,37.601,11.094l0.978-0.259 c42.17-12.923,68.947-39.7,81.861-81.865c0,0,7.035-21.217-9.47-37.115l27.542-17.076 C399.419,261.109,401.838,255.832,401.004,250.538z M144.092,45.804c2.646,8.297,5.908,17.908,9.772,28.236 c-5.276-6.201-10.505-12.439-15.675-18.717L144.092,45.804z M131.16,213.438c-31.956-30.331-65.39-59.483-99.773-86.967 c-0.182-0.159-0.363-0.328-0.539-0.504c-3.135-3.135-5.27-8.371-4.02-12.497c10.398-33.443,30-53.046,63.446-63.445 c3.783-1.262,9.22-0.221,13,4.559c2.096,2.622,4.204,5.238,6.319,7.85l4.047,4.964c24.407,29.881,50.045,58.988,76.598,86.963 L131.16,213.438z M351.141,310.894c-10.395,33.441-29.996,53.046-63.441,63.446c-4.096,0.889-9.366-0.887-12.501-4.021 c-0.175-0.177-0.345-0.354-0.501-0.535c-27.465-34.371-56.617-67.807-86.965-99.775l59.076-59.075 c27.979,26.561,57.088,52.198,86.968,76.603l4.958,4.041c2.61,2.115,5.229,4.225,7.854,6.32c0.181,0.157,0.36,0.325,0.535,0.501 C350.255,301.531,352.291,306.884,351.141,310.894z M345.843,262.979c-6.276-5.17-12.517-10.397-18.72-15.677 c10.33,3.864,19.943,7.126,28.241,9.773L345.843,262.979z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>,
              {
                FRA: "Formation",
                ENG: "Education and Training",
                SPA: "Educación y formación",
                DEU: "Ausbildung und Schulung",
              },
            ],
            [
              // https://www.svgrepo.com/svg/440005/person
              <svg
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"
                    fill="var(--accentuation)"
                  ></path>{" "}
                </g>
              </svg>,
              {
                FRA: "Qui suis-je ?",
                ENG: "Profile",
                SPA: "Perfil",
                DEU: "Profil",
              },
            ],
            [
              // https://www.svgrepo.com/svg/456202/computer-memory
              <svg
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs>
                    <style>{`.cls-1{fill:none;stroke:var(--accentuation);stroke-miterlimit:10;stroke-width:1.91px;}`}</style>
                  </defs>
                  <polyline
                    className="cls-1"
                    points="0.5 2.46 2.41 2.46 2.41 22.54"
                  ></polyline>
                  <polygon
                    className="cls-1"
                    points="22.5 4.37 22.5 18.72 15.8 18.72 15.8 17.76 10.06 17.76 9.11 18.72 2.41 18.72 2.41 4.37 22.5 4.37"
                  ></polygon>
                  <rect
                    className="cls-1"
                    x="2.41"
                    y="8.2"
                    width="4.78"
                    height="6.7"
                  ></rect>
                  <rect
                    className="cls-1"
                    x="11.02"
                    y="9.15"
                    width="7.65"
                    height="3.83"
                  ></rect>
                  <line
                    className="cls-1"
                    x1="11.98"
                    y1="7.24"
                    x2="11.98"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="14.85"
                    y1="7.24"
                    x2="14.85"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="17.72"
                    y1="7.24"
                    x2="17.72"
                    y2="9.15"
                  ></line>
                  <line
                    className="cls-1"
                    x1="11.98"
                    y1="12.98"
                    x2="11.98"
                    y2="14.89"
                  ></line>
                  <line
                    className="cls-1"
                    x1="14.85"
                    y1="12.98"
                    x2="14.85"
                    y2="14.89"
                  ></line>
                  <line
                    className="cls-1"
                    x1="17.72"
                    y1="12.98"
                    x2="17.72"
                    y2="14.89"
                  ></line>
                </g>
              </svg>,
              {
                FRA: "Compétences informatiques",
                ENG: "Technical Skills",
                SPA: "Competencias técnicas",
                DEU: "Technische Kenntnisse",
              },
            ],
            [
              // https://www.svgrepo.com/svg/90790/science
              <svg
                fill="var(--accentuation)"
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M195.234,357.719L260.313,245l-65.078-112.719H65.078L0,245l65.078,112.719H195.234z M82.76,162.906h94.794L224.95,245 l-47.396,82.094H82.76L35.362,245L82.76,162.906z"></path>{" "}
                    <path d="M294.766,0l-65.078,112.718l65.078,112.718h130.156L490,112.718L424.922,0H294.766z M407.241,194.812h-94.794 l-47.397-82.093l47.397-82.093h94.794l47.396,82.093L407.241,194.812z"></path>{" "}
                    <path d="M294.766,264.563l-65.078,112.718L294.766,490h130.156L490,377.281l-65.078-112.718H294.766z M407.241,459.375h-94.794 l-47.397-82.094l47.397-82.093h94.794l47.396,82.093L407.241,459.375z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>,
              {
                FRA: "Compétences complémentaires",
                ENG: "Additional Skills",
                SPA: "Competencias complementarias",
                DEU: "Ergänzende Kenntnisse",
              },
            ],
          ] as const
        ).map(([icon, dict], index) => (
          <button
            key={index}
            className="w-full clipPath-Button-Simple p-1 bg-(--foreground-secondary) hover:bg-foreground transition-colors duration-300 group"
            onMouseEnter={() => ChangeOrigine(index)}
            onMouseLeave={() => ChangeOrigine(null)}
            onClick={() => ChangePermanentOrigin(index)}
          >
            <div className="cursor-pointer clipPath-Button flex flex-row items-center gap-4 p-2 pl-16 w-full text-left bg-background group-hover:bg-(--background-secondary) transition-colors duration-300">
              <div className="w-12 h-12">{icon}</div>
              <Translate dict={dict as Partial<Record<string, string>>} />
            </div>
          </button>
        ))}
      </div>
      <div className="w-2/3 h-full relative">
        <div className="relative w-full h-full overflow-hidden">
          {/* zone droite (projection finale) */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-30" />

          {/* faisceau */}
          {Array.from({ length: beamCount }).map((_, i) => {
            const minY = -1.4 * tempOriginY; // Angle plus grand vers le haut
            const maxY = -1.4 * tempOriginY + 240; // Angle plus grand vers le bas
            const targetY = minY + (i / (beamCount - 1)) * (maxY - minY);
            const deltaY = targetY - tempOriginY;
            const angle = Math.atan2(deltaY, 100) * (180 / Math.PI);
            const length = Math.sqrt(100 * 100 + deltaY * deltaY);

            const randomWidth = length * (0.25 + Math.random() * 0.75);
            return (
              <div
                key={i}
                className="absolute left-0 h-px bg-(--red) opacity-40"
                style={{
                  top: `${tempOriginY}%`,
                  width: `${randomWidth}%`,
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg)`,
                  transition: "all 0ms ease-in-out",
                  boxShadow: "0 0 8px rgba(255, 0, 0, 0.5)",
                }}
              />
            );
          })}
        </div>
        <div className="absolute top-0 right-0 w-3/4 h-full bg-black/50 z-10"></div>
      </div>
    </div>
  );
}
