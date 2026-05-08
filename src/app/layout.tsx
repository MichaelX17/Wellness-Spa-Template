import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuración de la fuente para el cuerpo (Sustituye a Geist Sans)
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

// Configuración de la fuente para títulos (Sustituye a Geist Mono)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Body Sensation Medspa",
  description: "Beauty, Weight Loss & Pain Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}