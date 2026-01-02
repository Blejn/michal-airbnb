"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "/images/hero-exterior.jpg",
    alt: "Luksusowy domek - widok z zewnątrz",
  },
  { src: "/images/exterior-entrance.jpg", alt: "Nowoczesne wejście z tarasem" },
  { src: "/images/exterior-side.jpg", alt: "Architektura domku" },
  { src: "/images/interior-kitchen.jpg", alt: "W pełni wyposażona kuchnia" },
  {
    src: "/images/interior-hallway.jpg",
    alt: "Jasny korytarz z drewnianym sufitem",
  },
  { src: "/images/interior-living.jpg", alt: "Przytulny salon z jadalnią" },
  { src: "/images/interior-dining.jpg", alt: "Przestrzeń dzienna z widokiem" },
  { src: "/images/IMG_5695.jpg", alt: "Sypialnia z widokiem na las" },
  { src: "/images/IMG_5696.jpg", alt: "Sypialnia z widokiem na las" },
  { src: "/images/IMG_5697.jpg", alt: "Sypialnia z widokiem na las" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj piękno i elegancję naszego luksusowego domku
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-smooth group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-smooth flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition-smooth text-lg font-medium">
                  Powiększ
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-cream hover:text-accent transition-smooth z-50"
            onClick={closeLightbox}
            aria-label="Zamknij"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
