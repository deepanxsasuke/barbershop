import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RoyalCuts | Luxury Barber",
  description:
    "Exclusivity, Meticulous Detail, and Cinematic Elegance. Premium grooming services tailored for the individual.",
  keywords: "barber, luxury grooming, haircut, beard, RoyalCuts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} h-full antialiased dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a] text-[#e3e2e7]">
        <Navbar />
        <main className="flex-1 pt-[72px] pb-16 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
