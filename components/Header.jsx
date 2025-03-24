import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Inicio">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter transition hover:text-accent">
            Kevin<span className="text-accent"> Andrés</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Link href="/contact" aria-label="Contáctame">
            <Button className="uppercase tracking-wide px-6 py-2 text-sm font-semibold hover:bg-accent hover:text-black transition-colors">
              Let's talk
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
