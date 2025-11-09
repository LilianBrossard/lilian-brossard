"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const linkRef = useRef<HTMLDivElement>(null);
  const linkHero = [
    ["Voir mes projets", "/projet"],
    ["Qui suis-je ?", "/#about"],
    ["Contactez-moi", "/#contact"],
  ];
  const [currentLinkIndex, setcurrentLinkIndex] = useState(0);
  const [nextLinkIndex, setnextLinkIndex] = useState(1);
  setTimeout(() => {
    if (linkRef.current) {
      const secondChild = linkRef.current.children[1] as HTMLElement;
      const firstChild = linkRef.current.children[0] as HTMLElement;
      if (secondChild && firstChild) {
        firstChild.classList.add("duration-200", "-translate-y-full");
        secondChild.classList.add("duration-200", "-translate-y-full");
      }
    }
  }, 999);
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentLinkIndex((current) => (current + 1) % linkHero.length);
      setnextLinkIndex((current) => (current + 1) % linkHero.length);
      if (linkRef.current) {
        const secondChild = linkRef.current.children[1] as HTMLElement;
        const firstChild = linkRef.current.children[0] as HTMLElement;
        if (secondChild && firstChild) {
          firstChild.classList.remove("duration-200", "-translate-y-full");
          secondChild.classList.remove("duration-200", "-translate-y-full");

          setTimeout(() => {
            firstChild.classList.add("duration-200", "-translate-y-full");
            secondChild.classList.add("duration-200", "-translate-y-full");
          }, 1);
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextLink = linkHero[nextLinkIndex];
  const currentLink = linkHero[currentLinkIndex];

  return (
    <Link href={nextLink[1]} id="linkHero" className="">
      <div
        ref={linkRef}
        className="inline-block text-center text-7xl overflow-hidden h-28 uppercase font-(family-name:--font-aquire) hover:text-(--primary) duration-200"
      >
        <p className="relative whitespace-nowrap -translate-y-full duration-200">
          {currentLink[0]}
        </p>
        <p className="relative whitespace-nowrap -translate-y-full duration-200">
          {nextLink[0]}
        </p>
      </div>
    </Link>
  );
}
