import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/features/layout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pochyła 80 | Luksusowy domek wypoczynkowy",
  description:
    "Luksusowy domek z jacuzzi, sauną i w pełni wyposażoną kuchnią. Idealne miejsce na wypoczynek w naturze.",
  openGraph: {
    title: "Pochyła 80 | Luksusowy domek wypoczynkowy",
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
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
