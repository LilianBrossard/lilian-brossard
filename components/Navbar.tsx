import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="py-4 px-8 flex justify-between items-center">
      <ul className="flex gap-6">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projet">Mes projets</Link>
        </li>
        <li>
          <Link href="/#about">À propos</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
