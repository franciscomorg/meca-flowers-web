import Navbar from "@/components/layout/Navbar";
import CatalogoSection from "@/components/sections/CatalogoSection";
import BouquetsSection from "@/components/sections/BouquetsSection";
import Footer from "@/components/layout/Footer";
import { getGalerias, getPortadas } from "@/lib/galeria";

export const metadata = {
  title: "Catálogo | Meca Flowers & Green SAS",
  description: "Explora nuestro catálogo completo de flores colombianas: rosas, claveles, hortensias, follajes y bouquets pre-armados.",
};

export default function CatalogoPage() {
  // Se lee la carpeta public/images/catalog en el servidor para encontrar las fotos _2, _3...
  const galerias = getGalerias();
  const portadas = getPortadas();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-crema py-16 px-[8%] text-center">
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
            Nuestros productos
          </p>
          <h1 className="font-[var(--font-playfair)] text-verde-oscuro text-[clamp(36px,5vw,56px)] font-bold mb-4">
            Catálogo de Flores
          </h1>
          <p className="text-verde-noche/60 text-lg max-w-2xl mx-auto">
            Flores frescas cultivadas en Facatativá, Cundinamarca. Calidad de exportación para el mundo.
          </p>
        </div>
        <CatalogoSection galerias={galerias} portadas={portadas} />
        <BouquetsSection />
      </main>
      <Footer />
    </>
  );
}
