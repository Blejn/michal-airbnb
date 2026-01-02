"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToAmenities = () => {
    const element = document.getElementById("amenities");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-section">
        <Image
          src="/images/hero-exterior.jpg"
          alt="Hero Exterior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 text-balance">
          Twój Spokojny Zakątek
        </h1>
        <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light">
          Relaks w cichej okolicy
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAmenities}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/80 hover:text-cream transition-smooth animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;

