"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-sm xl:text-base font-semibold tracking-wide">
      {links.map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.path}
            href={link.path}
            aria-current={isActive ? "page" : undefined}
            className={`transition-all capitalize hover:text-accent ${
              isActive ? "text-accent border-b-2 border-accent pb-1" : "text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
