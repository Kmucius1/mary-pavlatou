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
    src: "/images/mary-event-framed.jpg",
    alt: "Mary Pavlatou — Framed Event Portrait",
    title: "A Framed Memory",
    caption: "A preserved and framed photograph from the archive — a formal portrait from the height of Mary's career.",
    date: "Athens, 1950s",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "portrait",
    category: "Events",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/cover-hires.jpg",
    alt: "Mary Pavlatou — Memorial Book Cover",
    title: "The Memorial Book",
    caption: "The cover of the official memorial book — compiled by The Pulos Brothers and designed by Mary James. A family's devotion made permanent.",
    credit: "Photo & Article Compilation: The Pulos Brothers · Book Design & Restoration: Mary James",
    mode: "portrait",
    category: "Book Archive",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/pages-full.jpg",
    alt: "Mary Pavlatou Memorial Book — Interior Pages",
    title: "Archive — Interior Pages",
    caption: "The interior pages of the preserved memorial book — photographs, articles, and memories compiled with care.",
    credit: "Preserved by The Pulos Brothers · Restored by Mary James",
    mode: "landscape",
    category: "Book Archive",
    width: 1200,
    height: 800,
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
  {
    src: "/images/mary-dustjacket.jpg",
    alt: "Mary Pavlatou — Memorial Book Dust Jacket",
    title: "The Dust Jacket",
    caption: "The dust jacket of the memorial book — designed by Mary James to honor a life of rare beauty and grace.",
    credit: "Design by Mary James",
    mode: "portrait",
    category: "Book Archive",
    width: 900,
    height: 1200,
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
        border: "1px solid rgba(245,208,80,0.62)",
        cursor: "pointer",
        position: "relative",
        backgroundColor: "#09080a",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,208,80,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,208,80,0.62)";
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
          fontSize: "24px",
          letterSpacing: "0.2em",
          color: "rgba(245,208,80,0.5)",
          backgroundColor: "rgba(9,8,10,0.75)",
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
          sizes="(max-width: 640px) 90vw, 45vw"
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
            color: "#f5d050",
            fontSize: "26px",
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
            color: "rgba(245,208,80,0.72)",
            fontSize: "28px",
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

  // Split into two editorial columns
  const col1 = filteredPhotos
    .map((photo, i) => ({ photo, filteredIndex: i }))
    .filter((_, i) => i % 2 === 0);

  const col2 = filteredPhotos
    .map((photo, i) => ({ photo, filteredIndex: i }))
    .filter((_, i) => i % 2 === 1);

  const handleOpen = (filteredIndex: number) => {
    open(filteredPhotos, filteredIndex);
  };

  // Catalog number = position in master photos array (1-based, consistent across filters)
  const getCatalogNumber = (photo: LightboxItem & { category: string }) =>
    photos.indexOf(photo) + 1;

  return (
    <section
      style={{
        backgroundColor: "#09080a",
        padding: "clamp(40px, 6vh, 72px) clamp(20px, 5vw, 64px) clamp(64px, 10vh, 100px)",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .gallery-wall-grid { flex-direction: column !important; }
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
                fontSize: "28px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "7px 16px",
                cursor: "pointer",
                border: "1px solid rgba(245,208,80,0.82)",
                backgroundColor: isActive ? "#f5d050" : "transparent",
                color: isActive ? "#09080a" : "rgba(245,208,80,0.7)",
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
            color: "rgba(245,208,80,0.68)",
            fontSize: "24px",
            textAlign: "center",
            padding: "64px 0",
          }}
        >
          No photographs in this collection.
        </p>
      )}

      {/* Two-column editorial wall */}
      {filteredPhotos.length > 0 && (
        <div
          className="gallery-wall-grid"
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "flex-start",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Column 1 — even indices */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
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

          {/* Column 2 — odd indices */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
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
        </div>
      )}

      {/* Divider + credit */}
      <div style={{ maxWidth: "480px", margin: "clamp(56px, 8vw, 80px) auto 0" }}>
        <GreekDivider variant="star" />
        <p
          className="font-serif italic"
          style={{
            color: "rgba(245,208,80,0.62)",
            fontSize: "27px",
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
