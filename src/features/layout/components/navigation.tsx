"use client";

import { useState, useEffect } from "react";
import { Button } from "@/shared/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h2
          className={`text-2xl font-serif font-bold transition-smooth ${
            isScrolled ? "text-primary" : "text-cream"
          }`}
        >
          Forest Retreat
        </h2>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("amenities")}
            className={`transition-smooth hover:text-accent ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Udogodnienia
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`transition-smooth hover:text-accent ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Galeria
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant={isScrolled ? "default" : "secondary"}
            className="transition-smooth"
          >
            Kontakt
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

