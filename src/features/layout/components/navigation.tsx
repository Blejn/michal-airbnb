"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h2
          className={`text-2xl font-serif font-bold transition-colors duration-300 relative z-50 ${
            isScrolled || isMobileMenuOpen ? "text-primary" : "text-cream"
          }`}
        >
          Pochyła 80
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("amenities")}
            className={`transition-colors duration-300 hover:text-accent ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Udogodnienia
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`transition-colors duration-300 hover:text-accent ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Galeria
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant={isScrolled ? "default" : "secondary"}
            className="transition-colors duration-300"
          >
            Kontakt
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 transition-colors duration-300 p-2 ${
            isScrolled || isMobileMenuOpen ? "text-primary" : "text-cream"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <button
          onClick={() => scrollToSection("amenities")}
          className="text-2xl font-serif font-medium text-primary hover:text-accent transition-colors duration-300"
        >
          Udogodnienia
        </button>
        <button
          onClick={() => scrollToSection("gallery")}
          className="text-2xl font-serif font-medium text-primary hover:text-accent transition-colors duration-300"
        >
          Galeria
        </button>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="default"
          size="lg"
          className="mt-4 text-lg px-8"
        >
          Kontakt
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
