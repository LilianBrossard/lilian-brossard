import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LinkStyle from "@/components/LinkStyle";

export default function Navbar() {
  const link = [
    { href: "/", label: "Accueil" },
    { href: "/projet", label: "Mes projets" },
    { href: "/#about", label: "À propos" },
    { href: "/#contact", label: "Contact" },
  ];
  return (
    <nav className="py-4 px-8 flex justify-around items-center bg-background">
      <Link
        href="/"
        className="flex flex-row gap-4 justify-center items-center"
      >
        <Image src="/LB.png" alt="LB" width={50} height={50} />
        <h3 className="text-lg uppercase font-(family-name:--font-aquire) whitespace-nowrap">
          <span className="text-(--accentuation) font-bold">L</span>ilian{" "}
          <span className="text-(--accentuation) font-bold">B</span>rossard
        </h3>
      </Link>
      <ul className="flex gap-6">
        {link.map((item) => (
          <li key={item.href}>
            <LinkStyle lien={item.href} info={item.label} />
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
