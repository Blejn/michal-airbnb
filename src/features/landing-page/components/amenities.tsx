import { Bath, Flame, ChefHat, BedDouble } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";

const amenities = [
  {
    icon: Bath,
    title: "Jacuzzi",
    description:
      "Relaksujące jacuzzi na świeżym powietrzu, idealne na wieczorne chwile odprężenia pod gwiazdami.",
  },
  {
    icon: Flame,
    title: "Sauna",
    description:
      "Prywatna sauna fińska dla maksymalnej regeneracji ciała i umysłu w naturalnym otoczeniu.",
  },
  {
    icon: ChefHat,
    title: "Wyposażona Kuchnia",
    description:
      "W pełni wyposażona nowoczesna kuchnia ze wszystkimi udogodnieniami do przygotowania posiłków.",
  },
  {
    icon: BedDouble,
    title: "Komfort & Przestrzeń",
    description:
      "Domek oferuje dwie eleganckie sypialnie oraz rozkładaną sofę w salonie – wygodnie pomieści 4–5 osób, gwarantując relaks, komfort i prywatność zarówno rodzinom, jak i grupom przyjaciół.",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Co Oferujemy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Każdy detal został zaprojektowany z myślą o Twoim komforcie i
            relaksie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lift transition-smooth border-border/50 hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
