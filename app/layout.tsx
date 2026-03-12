import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soul Panther - Sacred Futurism",
  description: "Independent electronic music artist exploring the frontier where music, consciousness, and AI meet.",
  keywords: ["Soul Panther", "Electronic Music", "DJ", "Producer", "Afro House", "Melodic House", "Techno"],
  authors: [{ name: "Soul Panther" }],
  openGraph: {
    title: "Soul Panther - Sacred Futurism",
    description: "Independent electronic music artist exploring the frontier where music, consciousness, and AI meet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
