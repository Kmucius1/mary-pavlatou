import type { Metadata } from "next";
import ArchiveGallery from "@/components/ArchiveGallery";

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
          padding: "clamp(72px, 12vh, 132px) clamp(32px, 7vw, 100px) clamp(40px, 6vh, 72px)",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          className="font-display"
          style={{
            color: "#8B7030",
            fontSize: "9px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Mary Pavlatou
        </p>

        {/* Main title */}
        <h1
          className="font-display"
          style={{
            color: "#1C1814",
            fontSize: "clamp(14px, 5vw, 58px)",
            letterSpacing: "0.18em",
            fontWeight: 400,
            marginBottom: "14px",
          }}
        >
          The Gallery
        </h1>

        {/* Greek subtitle */}
        <p
          className="font-serif italic"
          style={{
            color: "#8B7030",
            fontSize: "clamp(13px, 1.6vw, 17px)",
            letterSpacing: "0.08em",
            marginBottom: "22px",
          }}
        >
          Φωτογραφικό Αρχείο
        </p>

        {/* Rule */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "#C5A84A",
            margin: "0 auto 22px",
          }}
        />

        {/* Credit subtext */}
        <p
          className="font-serif italic"
          style={{
            color: "#7A6E5E",
            fontSize: "clamp(12px, 1.3vw, 14px)",
            lineHeight: 1.7,
          }}
        >
          Photographs restored and preserved by The Pulos Brothers &amp; Mary James
        </p>
      </div>

      <ArchiveGallery />
    </div>
  );
}
