"use client";
import { useState } from "react";
import Image from "next/image";
import MuseumLightbox, { LightboxItem, useLightbox } from "@/components/MuseumLightbox";
import GreekDivider from "@/components/GreekDivider";

const CATEGORIES = ["All", "Portraits", "Runway", "Hats & Veils", "Events", "Book Archive"];

const photos: (LightboxItem & { category: string })[] = [
  {
    src: "/images/mary-glamour-portrait.jpg",
    alt: "Mary Pavlatou — Glamour Portrait",
    title: "Glamour Portrait",
    caption: "A studio portrait that became one of the defining images of Mary's career. Her warmth, composure, and unmistakable presence made her stand apart from every other model of her era.",
    date: "Athens, 1950s",
    location: "Athens",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Portraits",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-young-portrait.jpg",
    alt: "Mary Pavlatou — Early Portrait",
    title: "Early Portrait — The Young Model",
    caption: "An early portrait from the beginning of Mary's career. Her poise is already complete — the posture, the ease, the command of the frame.",
    date: "Early Career",
    location: "Athens",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Portraits",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-white-gown.jpg",
    alt: "Mary Pavlatou — White Evening Gown",
    title: "White Evening Gown",
    caption: "Mary presents an evening gown at one of Athens's celebrated fashion showings. The architectural grace of the white silk, and the quiet authority of her stance, reflect the rare discipline she brought to every presentation.",
    date: "Athens, 1950s",
    fashionHouse: "Athens Fashion Exhibition",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "full-body",
    category: "Runway",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-runway-blue.jpg",
    alt: "Mary Pavlatou — Blue Ball Gown on Runway",
    title: "The Blue Ball Gown",
    caption: "On the runway in a sweeping blue ball gown. Mary's presence transformed garments into something alive. Every step, every turn, carried intention and control.",
    date: "Athens, 1950s",
    fashionHouse: "Athens Fashion Presentation",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "full-body",
    category: "Runway",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-runway-white.jpg",
    alt: "Mary Pavlatou — White Embroidered Dress on Runway",
    title: "White Embroidered Runway Dress",
    caption: "A white embroidered runway dress, presented with the precision and elegance Mary was known for.",
    date: "Athens, 1950s",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "full-body",
    category: "Runway",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-veil-hat.jpg",
    alt: "Mary Pavlatou — House of Archontaki-Kallergi Hat Collection",
    title: "Hat Collection — Archontaki-Kallergi",
    caption: "From the House of Archontaki-Kallergi's celebrated hat collection. The delicate veil, the downward gaze, and the quiet intimacy of the image make this one of the archive's most beloved portraits.",
    fashionHouse: "House of Archontaki-Kallergi",
    date: "Athens, 1950s",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Hats & Veils",
    width: 900,
    height: 1660,
  },
  {
    src: "/images/mary-social-event.jpg",
    alt: "Mary Pavlatou — Athens Social Circuit",
    title: "Athens Social Circuit",
    caption: "Mary within the Athens social world — the circuit of events, gatherings, and cultural life she moved through with the same grace she brought to the runway.",
    date: "Athens, 1950s",
    location: "Athens",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Events",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/pdf-pages/page-01.png",
    alt: "Mary Pavlatou Memorial Book — Interior Page",
    title: "Archive — Interior Pages",
    caption: "The interior pages of the preserved memorial book — photographs, articles, and memories compiled with care.",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Book Archive",
    width: 1388,
    height: 1838,
  },
  {
    src: "/images/endsheet-portrait.jpg",
    alt: "Mary Pavlatou — Book Endsheet Portrait",
    title: "Archive Endsheet Portrait",
    caption: "A portrait from the book's endsheet — one of the most intimate images in the archive collection.",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "landscape",
    category: "Book Archive",
    width: 666,
    height: 405,
  },
];

function PhotoCard({
  photo,
  catalogNumber,
  filteredIndex,
  onOpen,
}: {
  photo: LightboxItem & { category: string };
  catalogNumber: number;
  filteredIndex: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div
      onClick={() => onOpen(filteredIndex)}
      style={{
        border: "1px solid #D0C4A0",
        cursor: "pointer",
        position: "relative",
        backgroundColor: "#F5F1E6",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#C5A84A";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#D0C4A0";
      }}
    >
      {/* Catalog number — top left */}
      <span
        className="font-display"
        style={{
          position: "absolute",
          top: "10px",
          left: "12px",
          zIndex: 2,
          fontSize: "9px",
          letterSpacing: "0.2em",
          color: "#8B7030",
          backgroundColor: "rgba(240,235,217,0.88)",
          padding: "2px 5px",
          lineHeight: 1,
        }}
      >
        {String(catalogNumber).padStart(2, "0")}
      </span>

      {/* Image — full natural proportions, no crop */}
      <div style={{ overflow: "hidden" }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={catalogNumber <= 4}
          sizes="(max-width: 640px) 90vw, 30vw"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Label block below image */}
      <div style={{ padding: "12px 14px 14px" }}>
        <p
          className="font-display"
          style={{
            color: "#1C1814",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "5px",
            lineHeight: 1.4,
          }}
        >
          {photo.title}
        </p>
        <p
          className="font-display"
          style={{
            color: "#7A6E5E",
            fontSize: "8px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {photo.category}
        </p>
      </div>
    </div>
  );
}

export default function ArchiveGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { open } = useLightbox();

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  // Split into three editorial columns
  const col1 = filteredPhotos
    .map((photo, i) => ({ photo, filteredIndex: i }))
    .filter((_, i) => i % 3 === 0);

  const col2 = filteredPhotos
    .map((photo, i) => ({ photo, filteredIndex: i }))
    .filter((_, i) => i % 3 === 1);

  const col3 = filteredPhotos
    .map((photo, i) => ({ photo, filteredIndex: i }))
    .filter((_, i) => i % 3 === 2);

  const handleOpen = (filteredIndex: number) => {
    open(filteredPhotos, filteredIndex);
  };

  // Catalog number = position in master photos array (1-based, consistent across filters)
  const getCatalogNumber = (photo: LightboxItem & { category: string }) =>
    photos.indexOf(photo) + 1;

  return (
    <section
      style={{
        backgroundColor: "#F0EBD9",
        padding: "clamp(40px, 6vh, 72px) clamp(20px, 5vw, 64px) clamp(64px, 10vh, 100px)",
      }}
    >
      <style>{`
        @media (max-width: 480px) {
          .gallery-wall-grid { flex-direction: column !important; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .gallery-wall-grid .col3 { display: none !important; }
        }
      `}</style>

      {/* Category filter bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "clamp(40px, 6vh, 64px)",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-display"
              style={{
                fontSize: "8px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "7px 16px",
                cursor: "pointer",
                border: "1px solid #C5A84A",
                backgroundColor: isActive ? "#8B7030" : "transparent",
                color: isActive ? "#F5F1E6" : "#8B7030",
                transition: "all 0.18s ease",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredPhotos.length === 0 && (
        <p
          className="font-serif italic"
          style={{
            color: "#7A6E5E",
            fontSize: "9px",
            textAlign: "center",
            padding: "64px 0",
          }}
        >
          No photographs in this collection.
        </p>
      )}

      {/* Three-column editorial wall */}
      {filteredPhotos.length > 0 && (
        <div
          className="gallery-wall-grid"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Column 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            {col1.map(({ photo, filteredIndex }) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                catalogNumber={getCatalogNumber(photo)}
                filteredIndex={filteredIndex}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            {col2.map(({ photo, filteredIndex }) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                catalogNumber={getCatalogNumber(photo)}
                filteredIndex={filteredIndex}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="col3" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            {col3.map(({ photo, filteredIndex }) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                catalogNumber={getCatalogNumber(photo)}
                filteredIndex={filteredIndex}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      )}

      {/* Divider + credit */}
      <div style={{ maxWidth: "480px", margin: "clamp(56px, 8vw, 80px) auto 0" }}>
        <GreekDivider variant="star" />
        <p
          className="font-serif italic"
          style={{
            color: "#7A6E5E",
            fontSize: "12px",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Photo restoration, article restoration, and book design by Mary James.
        </p>
      </div>

      {/* Self-contained lightbox — opens via useLightbox hook */}
      <MuseumLightbox />
    </section>
  );
}
