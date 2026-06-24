import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import PreservedMemory from "@/components/PreservedMemory";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Outer Greek-key page frame — right edge strip */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[18px] z-40 pointer-events-none hidden xl:block"
        style={{
          background: `
            repeating-linear-gradient(
              180deg,
              rgba(201,168,76,0.4) 0px,
              rgba(201,168,76,0.4) 2px,
              transparent 2px,
              transparent 6px
            )
          `,
          borderLeft: "1px solid rgba(201,168,76,0.25)",
        }}
      />

      {/* Outer Greek-key page frame — left edge strip */}
      <div
        className="fixed top-0 left-0 bottom-0 w-[18px] z-40 pointer-events-none hidden xl:block"
        style={{
          background: `
            repeating-linear-gradient(
              180deg,
              rgba(201,168,76,0.4) 0px,
              rgba(201,168,76,0.4) 2px,
              transparent 2px,
              transparent 6px
            )
          `,
          borderRight: "1px solid rgba(201,168,76,0.25)",
        }}
      />

      <Header />
      <Hero />
      <MidSection />
      <PreservedMemory />
      <Footer />
    </div>
  );
}
