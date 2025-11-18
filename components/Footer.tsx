import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t">
      <div className="flex gap-4 flex-col lg:flex-row justify-around items-center">
        <p className="text-md">Lilian Brossard</p>
        <Link
          href="mailto:lilian.brossard@gmail.com"
          className="flex items-center gap-3 w-max hover:underline text-md text-foreground transition-all duration-300 font-semibold"
        >
          <svg
            fill="var(--foreground)"
            height="20"
            width="20px"
            version="1.1"
            id="Filled_Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="mail-filled">
                <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z"></path>
              </g>
            </g>
          </svg>
          lilian.brossard@gmail.com
        </Link>
        <Link
          href="tel:+33647577828"
          className="flex items-center gap-3 w-max hover:underline text-md text-foreground transition-all duration-300 font-semibold"
        >
          <svg
            fill="var(--foreground)"
            version="1.1"
            height="20"
            width="20px"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 95.098 95.098"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M92.961,0H2.137C0.957,0,0,0.957,0,2.137v90.824c0,1.18,0.957,2.137,2.137,2.137h90.824c1.18,0,2.137-0.957,2.137-2.137 V2.137C95.098,0.957,94.141,0,92.961,0z M79.561,69.389l-7.929,7.928c-0.069,0.069-0.144,0.133-0.226,0.188l-0.187,0.128 c-1.995,1.595-4.623,2.403-7.815,2.403c-8.939,0-21.317-6.601-31.534-16.816C17.515,48.863,11.207,31.551,17.51,23.806l0.015-0.017 c0.07-0.125,0.157-0.241,0.261-0.344l7.915-7.915c0.624-0.624,1.634-0.624,2.257,0l13.54,13.54 c0.299,0.299,0.468,0.705,0.468,1.128c0,0.423-0.169,0.829-0.468,1.128l-7.072,7.072c0.616,1.729,3.103,7.845,9.238,13.98 c5.914,5.913,11.053,7.793,12.986,8.328l7.113-7.113c0.623-0.623,1.633-0.623,2.256,0l13.541,13.54 c0.299,0.299,0.467,0.705,0.467,1.128S79.859,69.09,79.561,69.389z"></path>
              </g>
            </g>
          </svg>
          06 47 57 78 28
        </Link>
        <Link
          href="https://github.com/LilianBrossard"
          className="flex items-center gap-3 w-max hover:underline text-md text-foreground transition-all duration-300 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="var(--foreground)"
            viewBox="-1.5 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.917 1.666V17.5h-5.15c-.424 0-.557-.238-.557-.455 0-.266.01-1.141.01-2.226a1.935 1.935 0 0 0-.552-1.502c1.808-.202 3.706-.887 3.706-4.005a3.134 3.134 0 0 0-.834-2.177 2.914 2.914 0 0 0-.081-2.147s-.68-.218-2.23.832a7.684 7.684 0 0 0-4.063 0c-1.55-1.05-2.23-.832-2.23-.832a2.918 2.918 0 0 0-.08 2.147 3.142 3.142 0 0 0-.835 2.177c0 3.11 1.894 3.806 3.696 4.011a1.737 1.737 0 0 0-.516 1.084 1.726 1.726 0 0 1-2.361-.674 1.706 1.706 0 0 0-1.243-.836s-.793-.01-.056.494a2.145 2.145 0 0 1 .9 1.187s.478 1.578 2.735 1.088c.004.676.01 1.186.01 1.38 0 .214-.147.454-.553.454H.083V1.666z"></path>
            </g>
          </svg>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/lilian-brossard-1b6147294/"
          className="flex items-center gap-3 w-max hover:underline text-md text-foreground transition-all duration-300 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="var(--foreground)"
            height="20"
            width="20"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-143 145 512 512"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7 c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6 c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1 c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
            </g>
          </svg>
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
