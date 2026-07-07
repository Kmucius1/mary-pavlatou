import type { Metadata } from "next";
import ArchiveGallery from "@/components/ArchiveGallery";
import BilingualHeading from "@/components/BilingualHeading";

export const metadata: Metadata = {
  title: "The Gallery — Mary Pavlatou Memorial Archive",
  description: "The official photographic archive of Mary Pavlatou — portraits, runway, and archive materials from the 1950s, restored and preserved by The Pulos Brothers and Mary James.",
};

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: "#F0EBD9" }}>

      {/* Page header */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #1C1814 0%, #2A2318 40%, #3A2E1E 100%)",
          borderBottom: "2px solid #C5A84A",
          padding: "clamp(72px, 12vh, 132px) clamp(32px, 7vw, 100px) clamp(40px, 6vh, 72px)",
          textAlign: "center",
        }}
      >
        {/* Subtle pattern overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
          backgroundImage: "repeating-linear-gradient(90deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px)",
        }} />
        {/* Eyebrow */}
        <p
          className="font-display"
          style={{
            color: "#C5A84A",
            fontSize: "12px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "18px",
            fontWeight: 700,
            position: "relative",
          }}
        >
          Mary Pavlatou
        </p>

        {/* Main title */}
        <h1
          className="font-display"
          style={{
            color: "#F5F1E6",
            fontSize: "clamp(14px, 5vw, 58px)",
            letterSpacing: "0.18em",
            fontWeight: 400,
            marginBottom: "14px",
            position: "relative",
          }}
        >
          The Gallery
        </h1>

        {/* Greek subtitle */}
        <div style={{ marginBottom: "22px", position: "relative" }}>
          <BilingualHeading
            as="p"
            el="Φωτογραφικό Αρχείο"
            en="Photographic Archive"
            className="font-serif italic"
            style={{
              color: "#C5A84A",
              fontSize: "clamp(13px, 1.6vw, 17px)",
              letterSpacing: "0.08em",
            }}
          />
        </div>

        {/* Rule */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "#C5A84A",
            margin: "0 auto 22px",
            position: "relative",
          }}
        />

        {/* Credit subtext */}
        <p
          className="font-serif italic"
          style={{
            color: "rgba(245,241,230,0.6)",
            fontSize: "clamp(12px, 1.3vw, 14px)",
            lineHeight: 1.7,
            position: "relative",
          }}
        >
          Photographs restored and preserved by The Pulos Brothers &amp; Mary James
        </p>
      </div>

      <ArchiveGallery />
    </div>
  );
}
