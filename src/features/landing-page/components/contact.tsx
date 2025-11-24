import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Zarezerwuj Swój Pobyt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami, aby zarezerwować niezapomniane chwile w naszym domku
          </p>
        </div>

        <Card className="shadow-elegant border-border/50 animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <a href="tel:+48123456789" className="text-muted-foreground hover:text-accent transition-smooth">
                  +48 123 456 789
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:kontakt@domek.pl" className="text-muted-foreground hover:text-accent transition-smooth">
                  kontakt@domek.pl
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lokalizacja</h3>
                <p className="text-muted-foreground">
                  Blisko natury
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="px-8">
                Zarezerwuj Teraz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

