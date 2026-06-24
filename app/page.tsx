import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DedicationQuote from "@/components/DedicationQuote";
import StorySection from "@/components/StorySection";
import TempleSection from "@/components/TempleSection";
import LegacySection from "@/components/LegacySection";
import ArchiveGallery from "@/components/ArchiveGallery";
import BookFeature from "@/components/BookFeature";
import PreservedMemory from "@/components/PreservedMemory";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#09080a" }}>
      <Header />
      <Hero />
      <DedicationQuote />
      <StorySection />
      <TempleSection />
      <LegacySection />
      <ArchiveGallery />
      <BookFeature />
      <PreservedMemory />
      <Footer />
    </div>
  );
}
