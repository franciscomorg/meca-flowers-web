import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meca Flowers & Green SAS | Flores de Colombia",
  description:
    "Comercializadora de flores colombianas. Cultivamos calidad, exportamos confianza al mundo. Rosas, claveles, hortensias y más desde Facatativá, Cundinamarca.",
  keywords: [
    "flores colombianas",
    "exportación flores",
    "rosas",
    "claveles",
    "hortensias",
    "bouquet",
    "Facatativá",
    "Meca Flowers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
