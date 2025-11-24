import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/features/layout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forest Retreat | Luksusowy domek wypoczynkowy",
  description: "Luksusowy domek z jacuzzi, sauną i w pełni wyposażoną kuchnią. Idealne miejsce na wypoczynek w naturze.",
  openGraph: {
    title: "Forest Retreat | Luksusowy domek wypoczynkowy",
    description: "Odkryj harmonię nowoczesnego komfortu i naturalnego piękna.",
    images: ["/images/hero-exterior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
