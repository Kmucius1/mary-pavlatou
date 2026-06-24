import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DedicationQuote from "@/components/DedicationQuote";
import StorySection from "@/components/StorySection";
import AtelierDivider from "@/components/AtelierDivider";
import LegacySection from "@/components/LegacySection";
import ArchiveGallery from "@/components/ArchiveGallery";
import BookFeature from "@/components/BookFeature";
import PreservedMemory from "@/components/PreservedMemory";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", position: "relative" }}>
      {/* Outer page edge strips */}
      <div
        className="fixed top-0 left-0 bottom-0 w-[16px] z-50 pointer-events-none hidden xl:block"
        style={{
          background: "repeating-linear-gradient(180deg, rgba(201,168,76,0.3) 0px, rgba(201,168,76,0.3) 2px, transparent 2px, transparent 6px)",
          borderRight: "1px solid rgba(201,168,76,0.15)",
        }}
      />
      <div
        className="fixed top-0 right-0 bottom-0 w-[16px] z-50 pointer-events-none hidden xl:block"
        style={{
          background: "repeating-linear-gradient(180deg, rgba(201,168,76,0.3) 0px, rgba(201,168,76,0.3) 2px, transparent 2px, transparent 6px)",
          borderLeft: "1px solid rgba(201,168,76,0.15)",
        }}
      />

      <Header />
      <Hero />
      <DedicationQuote />
      <StorySection />
      <AtelierDivider />
      <LegacySection />
      <ArchiveGallery />
      <BookFeature />
      <PreservedMemory />
      <Footer />
    </div>
  );
}
