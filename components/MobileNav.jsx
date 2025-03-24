"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Abrir menú de navegación"
        className="flex items-center justify-center text-accent hover:opacity-80 transition"
      >
        <CiMenuFries className="text-3xl" />
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col bg-black text-white">
        <SheetTitle className="sr-only">Menú móvil</SheetTitle>
        <SheetDescription className="sr-only">
          Navega por las secciones del sitio.
        </SheetDescription>

        <nav className="flex flex-col gap-6 justify-center items-center h-full">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xl font-medium capitalize transition-all ${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "text-white hover:text-accent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
