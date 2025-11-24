const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Forest Retreat</h3>
            <p className="text-primary-foreground/80">
              Luksusowy domek wypoczynkowy w sercu natury. Stworzony dla Twojego relaksu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+48123456789" className="hover:text-accent transition-smooth">
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@domek.pl" className="hover:text-accent transition-smooth">
                  kontakt@domek.pl
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Udogodnienia</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Jacuzzi</li>
              <li>Sauna</li>
              <li>W pełni wyposażona kuchnia</li>
              <li>Parking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {currentYear} Forest Retreat. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

