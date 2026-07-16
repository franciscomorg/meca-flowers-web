import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import NosotrosSection from "@/components/sections/NosotrosSection";
import CatalogoPreviewSection from "@/components/sections/CatalogoPreviewSection";
import BouquetSection from "@/components/sections/BouquetSection";
import ContactoSection from "@/components/sections/ContactoSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NosotrosSection />
        <CatalogoPreviewSection />
        <BouquetSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
