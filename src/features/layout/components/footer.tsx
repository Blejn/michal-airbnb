import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Pochyła 80</h3>
            <p className="text-primary-foreground/80">
              Luksusowy domek wypoczynkowy w sercu natury. Stworzony dla Twojego
              relaksu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="tel:+48123456789"
                  className="hover:text-accent transition-smooth"
                >
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@domek.pl"
                  className="hover:text-accent transition-smooth"
                >
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

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/70 text-center md:text-left">
            &copy; {currentYear} Pochyła 80. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center justify-center md:justify-end bg-white p-2 rounded-lg">
            <Image
              src="/images/logo.png"
              alt="Krajowy Plan Odbudowy"
              width={400}
              height={100}
              className="h-auto w-auto max-h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
