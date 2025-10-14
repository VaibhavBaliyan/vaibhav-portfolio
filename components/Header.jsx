"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Vaibhav<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav and Hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/80 text-primary font-semibold transition-all duration-300">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav and Hire me button*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
