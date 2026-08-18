import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiance", label: "Experiance" },
  { href: "#Testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-5" : "bg-transparent  py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="twxt-xl font-bold tracking-tight hover:text-primary"
        >
          US<span className="text-primary">.</span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 items-center gap-1">
            {navLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setisMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X size={24} style={{ cursor: "pointer" }} />
          ) : (
            <Menu size={24} style={{ cursor: "pointer" }} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6  flex flex-col gap-4">
            {navLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setisMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:foreground py-2 "
                >
                  {link.label}
                </a>
              );
            })}
            <Button onClick={() => setisMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
