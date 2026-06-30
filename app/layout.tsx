import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mary Pavlatou — An Official Memorial Archive",
  description:
    "An official memorial archive dedicated to Mary Pavlatou, international celebrity fashion model. Her career reached Athens, Paris, Milan, New York, Chicago, and beyond. A life preserved through photographs, press, and memory.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mary Pavlatou — Memorial Archive",
    title: "Mary Pavlatou — An Official Memorial Archive",
    description:
      "International celebrity fashion model. Greek icon. A life preserved through photographs, press, and memory. Archive compiled by The Pulos Brothers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}
