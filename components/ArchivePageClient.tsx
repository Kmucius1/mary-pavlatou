"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   COLOUR TOKENS
───────────────────────────────────────────── */
const C = {
  bg: "#F0EBD9",
  card: "#F5F1E6",
  cardAlt: "#EDE8D8",
  border: "#C5A84A",
  borderMuted: "#D0C4A0",
  heading: "#1C1814",
  accent: "#8B7030",
  greek: "#8B7030",
  body: "#4A3C2A",
  muted: "#7A6E5E",
  fillText: "#F5F1E6",
  bookPage: "#FAF7EE",
  spineBg: "#E8E0CC",
};

/* ─────────────────────────────────────────────
   SHARED STYLE HELPERS
───────────────────────────────────────────── */
const sectionLabel = (n: string, text: string) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
    <span
      style={{
        fontSize: 9,
        letterSpacing: "0.44em",
        textTransform: "uppercase",
        color: C.accent,
        fontFamily: "var(--font-cinzel)",
      }}
    >
      {n} — {text}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   SVG ORNAMENTS
───────────────────────────────────────────── */
function LaurelLeft() {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <path d="M4 16 C8 8, 16 4, 24 8 C16 10, 10 14, 4 16Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M4 16 C8 24, 16 28, 24 24 C16 22, 10 18, 4 16Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M24 8 C28 4, 36 4, 40 8 C34 8, 28 10, 24 8Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M24 24 C28 28, 36 28, 40 24 C34 24, 28 22, 24 24Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <line x1="40" y1="16" x2="48" y2="16" stroke={C.accent} strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true" style={{ transform: "scaleX(-1)" }}>
      <path d="M4 16 C8 8, 16 4, 24 8 C16 10, 10 14, 4 16Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M4 16 C8 24, 16 28, 24 24 C16 22, 10 18, 4 16Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M24 8 C28 4, 36 4, 40 8 C34 8, 28 10, 24 8Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M24 24 C28 28, 36 28, 40 24 C34 24, 28 22, 24 24Z" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.7" />
      <line x1="40" y1="16" x2="48" y2="16" stroke={C.accent} strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

function RestorationIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path
        d="M10 34 L28 10 L34 16 L16 40 L10 40 Z"
        stroke={C.accent}
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M26 12 L32 18" stroke={C.accent} strokeWidth="1.5" />
      <path d="M10 34 L14 38" stroke={C.accent} strokeWidth="1" opacity="0.6" />
      <circle cx="33" cy="9" r="3" stroke={C.accent} strokeWidth="1" fill="none" />
    </svg>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" stroke={C.muted} strokeWidth="1" />
      <rect x="9" y="2" width="5" height="5" stroke={C.muted} strokeWidth="1" />
      <rect x="2" y="9" width="5" height="5" stroke={C.muted} strokeWidth="1" />
      <rect x="9" y="9" width="5" height="5" stroke={C.muted} strokeWidth="1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ArchivePageClient() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [pdfPage, setPdfPage] = useState(1);
  const [showFullBook, setShowFullBook] = useState(false);

  const filters = ["ALL", "FASHION", "INTERVIEWS", "EVENTS", "ANNOUNCEMENTS"];

  const clippingCards = [
    {
      id: "clip-etam",
      type: "clipping",
      label: "ΑΠΟΠΕΥΜΑΤΙΝΗ · APOGEVMATINI",
      image: "/images/book-clipping-etam-miss-mary.png",
      imageW: 1388, imageH: 1838,
      title: "Miss Mary Pavlatou",
      subtitle: "Μανεκέν ETAM · Grande Bretagne",
      text: "Our reporter found the opportunity to visit the garden of ETAM and chat briefly with its lovely \"flowers\" — Miss Mary Pavlatou and Miss Thetis Grapha.",
      fullText: "Our reporter, Mr. G. Pilikos, found the opportunity to ride in the newspaper's automobile to the garden of ETAM and to chat briefly with its lovely \"flowers,\" Miss Mary Pavlatou and Miss Thetis Grapha. — Apogevmatini, Athens",
      date: "Athens · Apogevmatini",
      category: "ANNOUNCEMENTS",
      cta: "READ FULL ARTICLE",
    },
    {
      id: "clip-celebrated",
      type: "clipping",
      label: "ORIGINAL PRESS · ENGLISH",
      image: "/images/book-clipping-mary-celebrated.png",
      imageW: 1388, imageH: 1838,
      title: "Mary Pavlatou",
      subtitle: "A Celebrated Fashion Model",
      text: "Mary Pavlatou — a celebrated fashion model — presenting the newest creations of the Stantzos and Filioskos fashion houses.",
      fullText: "Mary Pavlatou — a celebrated fashion model — presenting the newest creations of the Stantzos and Filioskos fashion houses in Athens. Recognized as one of the finest mannequins of the era, her presence transformed every runway she walked.",
      date: "Athens · Press Archive",
      category: "FASHION",
      cta: "READ FULL ARTICLE",
    },
    {
      id: "clip-mohair",
      type: "clipping",
      label: "ORIGINAL GREEK",
      image: "/images/book-clipping-mohair-coat.png",
      imageW: 1388, imageH: 1838,
      title: "Η Δις Παυλάτου Σας Παρουσιάζει",
      subtitle: "Miss Pavlatou Presents This Elegant Coat",
      text: "Η δις Παυλάτου σας παρουσιάζει αυτό το κομψό παλτό από mohair — Miss Pavlatou presents this elegant mohair coat from the season's collection.",
      fullText: "Η δις Παυλάτου σας παρουσιάζει αυτό το κομψό παλτό από mohair. Miss Pavlatou presents this elegant mohair coat — a masterpiece of texture and line from one of Athens' leading fashion houses.",
      date: "Athens · Season Collection",
      category: "FASHION",
      cta: "READ FULL TRANSLATION",
    },
    {
      id: "clip-evening-gown",
      type: "clipping",
      label: "ORIGINAL GREEK · TRANSLATED",
      image: "/images/book-clipping-evening-gown.png",
      imageW: 1388, imageH: 1838,
      title: "Ωραία και με Λίγα Χρήματα",
      subtitle: "Beautiful and with Little Money",
      text: "Miss Pavlatou modeling a magnificent evening gown in the American style — elegance accessible to every woman.",
      fullText: "Miss Pavlatou modeling a magnificent evening gown in the American style. The article \"Ωραία και με Λίγα Χρήματα\" — Beautiful and with Little Money — showed Greek women how to dress with elegance on a practical budget. Mary brought the same poise to every garment she wore.",
      date: "Athens · Fashion Press",
      category: "FASHION",
      cta: "READ FULL TRANSLATION",
    },
    {
      id: "clip-hat",
      type: "clipping",
      label: "ΜΟΔΑ ΚΑΠΕΛΛΟΥ",
      image: "/images/book-clipping-hat-mary.png",
      imageW: 1388, imageH: 1838,
      title: "Μανεκέν Μαίρη Παυλάτου",
      subtitle: "Rose Valois · Archontaki-Kallergi",
      text: "Μανεκέν Μαίρη Παυλάτου presenting the Rose Valois hat model at the Archontaki-Kallergi fashion house — Μόδα Σπίτι · Μοντέλο Καπέλλου.",
      fullText: "Μανεκέν Μαίρη Παυλάτου presenting the Rose Valois hat model at the Archontaki-Kallergi fashion house. \"ΜΟΔΑ - ΣΠΙΤΙ / ΜΟΝΤΕΛΟ ΚΑΠΕΛΛΟΥ\" — one of Athens' most refined hat salons. The caption confirms Mary Pavlatou by name.",
      date: "Athens · Archontaki-Kallergi",
      category: "FASHION",
      cta: "READ FULL ARTICLE",
    },
    {
      id: "clip-summer-show",
      type: "clipping",
      label: "ΕΠΙΔΕΙΞΙΣ ΜΟΝΤΕΛΛΩΝ",
      image: "/images/book-clipping-summer-show.png",
      imageW: 1388, imageH: 1838,
      title: "Επίδειξις Καλοκαιρινών Μοντέλλων",
      subtitle: "Tsitsopoulos · King George Hotel",
      text: "Επίδειξις Καλοκαιρινών Μοντέλλων — the summer fashion show of the Tsitsopoulos house, held at the King George Hotel in Athens.",
      fullText: "Επίδειξις Καλοκαιρινών Μοντέλλων — the summer fashion show presented by the Tsitsopoulos fashion house at the prestigious King George Hotel in Athens. These grand seasonal salons defined the social and cultural calendar of postwar Greece.",
      date: "Athens · King George Hotel",
      category: "EVENTS",
      cta: "READ FULL ARTICLE",
    },
    {
      id: "clip-etam-garden",
      type: "clipping",
      label: "APOGEVMATINI ARCHIVE",
      image: "/images/book-clipping-etam-garden.png",
      imageW: 1388, imageH: 1838,
      title: "At the ETAM Garden",
      subtitle: "Mary Pavlatou & Thetis Grapha",
      text: "Our reporter found the opportunity to chat with the lovely \"flowers\" of ETAM — the two mannequins who made Athens stop and stare.",
      fullText: "Ο συντάκτης μας κ. Γ. Πηλιχός βρήκε την ευκαιρία να μπη με το αυτοκίνητο της εφημερίδος στον κήπο της ΕΤΑΜ και να μιλήση λίγο με τα ωραία... λουλούδια του, τις δίδες Μαίρη Παυλάτου και Θέτιδα Γράφα. Our reporter, Mr. G. Pilikos, found the opportunity to ride in the newspaper's automobile to the garden of ETAM and to chat briefly with its lovely \"flowers,\" Miss Mary Pavlatou and Miss Thetis Grapha.",
      date: "Athens · Apogevmatini",
      category: "INTERVIEWS",
      cta: "READ FULL ARTICLE",
    },
    {
      id: "clip-note",
      type: "note",
      label: "ARCHIVE NOTE",
      image: null,
      imageW: undefined as number | undefined,
      imageH: undefined as number | undefined,
      title: "",
      subtitle: "",
      text: "These clippings are drawn directly from the memorial book compiled by The Pulos Brothers and restored by Mary James. Every article, caption, and photograph has been preserved with devotion.",
      fullText: "These clippings are drawn directly from the memorial book compiled by The Pulos Brothers and restored by Mary James. Every article, caption, and photograph has been preserved with devotion — a record of the postwar Greek fashion world and one woman's extraordinary place within it.",
      date: "",
      category: "ALL",
      cta: "LEARN MORE",
    },
  ];

  const visibleCards =
    activeFilter === "ALL"
      ? clippingCards
      : clippingCards.filter((c) => c.category === activeFilter || c.category === "ALL");

  const navCards = [
    {
      href: "/story",
      image: "/images/book-portrait-veil-hat.png",
      label: "HER LIFE",
      text: "The story of grace, discipline, and love.",
    },
    {
      href: "/fashion",
      image: "/images/book-portrait-blue-gown-runway.png",
      label: "FASHION WORLD",
      text: "The world she inspired on and beyond the runway.",
    },
    {
      href: "/legacy",
      image: "/images/book-portrait-dedication.png",
      label: "LEGACY",
      text: "Her influence, her values, her timeless legacy.",
    },
  ];

  return (
    <main style={{ background: C.bg, minHeight: "100vh", color: C.heading }}>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "80px 32px 72px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Watermark column */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "40%",
            height: "100%",
            backgroundImage: "url(/images/gen-angel-marble.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        {/* LEFT COLUMN */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: 10,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: C.accent,
              marginBottom: 20,
              fontVariant: "small-caps",
            }}
          >
            The Archive
          </p>

          {/* Greek heading */}
          <h1
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(42px, 5vw, 68px)",
              color: C.accent,
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "0.06em",
            }}
          >
            Η Μνήμη
          </h1>

          {/* Italic tagline */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              fontStyle: "italic",
              color: C.muted,
              marginBottom: 28,
            }}
          >
            Preserved in Memory
          </p>

          {/* Gold divider */}
          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(90deg, ${C.accent}, transparent)`,
              marginBottom: 28,
            }}
          />

          {/* Body text */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 16,
              lineHeight: 1.9,
              color: C.body,
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            A living archive dedicated to the life and legacy of Mary Pavlatou —
            international fashion model, Greek icon, and beloved mother. Every photograph,
            clipping, and page has been gathered with devotion, preserved by her sons, and
            restored for future generations.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 16, marginBottom: 44 }}>
            <a
              href="#archive-viewer"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                background: C.accent,
                color: C.fillText,
                fontFamily: "var(--font-cinzel)",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: `1px solid ${C.accent}`,
              }}
            >
              Explore the Collection
            </a>
            <a
              href="#archive-viewer"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                background: "transparent",
                color: C.accent,
                fontFamily: "var(--font-cinzel)",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: `1px solid ${C.accent}`,
              }}
            >
              View the Book
            </a>
          </div>

          {/* Credit plaques */}
          <div style={{ display: "flex", gap: 16 }}>
            {["Preserved by Her Sons", "Restored by Mary James"].map((plaque) => (
              <div
                key={plaque}
                style={{
                  padding: "10px 18px",
                  border: `1px solid ${C.borderMuted}`,
                  background: C.card,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: C.accent,
                  }}
                >
                  {plaque}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — stacked collage */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: 560,
          }}
        >
          {/* Large portrait — Art Deco gold frame */}
          <div
            style={{
              position: "relative",
              width: "72%",
              margin: "0 auto",
              border: `3px solid ${C.accent}`,
              boxShadow: `0 0 0 6px ${C.bg}, 0 0 0 8px ${C.borderMuted}, 0 12px 40px rgba(139,112,48,0.18)`,
              background: C.card,
              zIndex: 3,
            }}
          >
            <div style={{ position: "relative", aspectRatio: "9/16" }}>
              <Image
                src="/images/book-portrait-diamond-earrings.png"
                alt="Mary Pavlatou — portrait with diamond earrings"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 400px"
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Clipping rotated behind top-right */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: -12,
              width: "45%",
              transform: "rotate(4deg)",
              border: `1px solid ${C.borderMuted}`,
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              background: C.card,
              zIndex: 2,
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4" }}>
              <Image
                src="/images/book-clipping-mary-celebrated.png"
                alt="Mary Pavlatou — celebrated fashion model clipping"
                fill
                sizes="(max-width: 768px) 40vw, 250px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Clipping overlapping bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: -20,
              width: "38%",
              border: `1px solid ${C.border}`,
              boxShadow: "0 8px 24px rgba(139,112,48,0.15)",
              background: C.card,
              zIndex: 4,
              transform: "rotate(-3deg)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4" }}>
              <Image
                src="/images/book-clipping-mohair-coat.png"
                alt="Mary Pavlatou — mohair coat clipping"
                fill
                sizes="(max-width: 768px) 35vw, 200px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Small bottom-right collage image */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "36%",
              border: `1px solid ${C.borderMuted}`,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              background: C.card,
              zIndex: 3,
            }}
          >
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image
                src="/images/book-clipping-etam-garden.png"
                alt="Mary Pavlatou at the ETAM garden"
                fill
                sizes="(max-width: 768px) 33vw, 200px"
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Bottom plaque */}
          <div
            style={{
              position: "absolute",
              bottom: -24,
              left: "50%",
              transform: "translateX(-50%)",
              background: C.card,
              border: `1px solid ${C.border}`,
              padding: "12px 24px",
              textAlign: "center",
              zIndex: 5,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(139,112,48,0.10)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 9,
                letterSpacing: "0.25em",
                color: C.accent,
                textTransform: "uppercase",
              }}
            >
              Ζει Εις Αιώνας
            </p>
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 8,
                letterSpacing: "0.35em",
                color: C.muted,
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              She Lives in Eternity
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. COLLECTION INDEX
      ══════════════════════════════════════════ */}
      <section
        id="collection-index"
        style={{
          background: C.cardAlt,
          borderTop: `1px solid ${C.borderMuted}`,
          borderBottom: `1px solid ${C.borderMuted}`,
          padding: "72px 32px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {sectionLabel("1", "Collection Index")}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              fontStyle: "italic",
              color: C.muted,
              marginBottom: 48,
            }}
          >
            Browse the archive by category
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                id: "portraits",
                label: "Portraits",
                subtitle: "Photographs & formal studies",
                image: "/images/book-portrait-dedication.png",
                imgAlt: "Mary Pavlatou — Colorized portrait from the family archive",
                isOval: true,
              },
              {
                id: "clippings",
                label: "Newspaper Clippings",
                subtitle: "Press & media coverage",
                image: "/images/book-clipping-etam-miss-mary.png",
                imgAlt: "Mary Pavlatou newspaper clipping — ETAM",
                isOval: false,
              },
              {
                id: "fashion-shows",
                label: "Fashion Shows",
                subtitle: "Runway & presentations",
                image: "/images/book-portrait-blue-gown-runway.png",
                imgAlt: "Mary Pavlatou — blue gown runway portrait",
                isOval: false,
              },
              {
                id: "career-records",
                label: "Career Records",
                subtitle: "Documentation & history",
                image: "/images/book-clipping-summer-show.png",
                imgAlt: "Summer fashion show — career documentation",
                isOval: false,
              },
              {
                id: "family-memory",
                label: "Family Memory",
                subtitle: "Personal & intimate",
                image: "/images/book-portrait-veil-hat.png",
                imgAlt: "Mary Pavlatou — veil hat portrait",
                isOval: false,
              },
              {
                id: "restoration",
                label: "Restoration Work",
                subtitle: "Mary James · Restoration & Book Design",
                image: "/images/book-clipping-hat-mary.png",
                imgAlt: "Mary Pavlatou — hat clipping",
                isOval: false,
              },
            ].map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: C.card,
                  border: `1px solid ${C.borderMuted}`,
                  padding: "20px 16px",
                  textDecoration: "none",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = C.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = C.borderMuted;
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    position: "relative",
                    marginBottom: 14,
                    overflow: "hidden",
                    borderRadius: cat.isOval ? "50%" : 0,
                    border: cat.isOval ? `1px solid ${C.border}` : "none",
                    background: C.cardAlt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.imgAlt}
                      fill
                      sizes="(max-width: 1240px) 15vw, 180px"
                      style={{ objectFit: "contain", objectPosition: "top" }}
                    />
                  ) : (
                    <RestorationIcon />
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: C.heading,
                    marginBottom: 6,
                  }}
                >
                  {cat.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 12,
                    color: C.muted,
                    lineHeight: 1.5,
                    marginBottom: 12,
                    flexGrow: 1,
                  }}
                >
                  {cat.subtitle}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ARCHIVE VIEWER — PDF PAGE SWIPER
      ══════════════════════════════════════════ */}
      <section
        id="archive-viewer"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        {sectionLabel("2", "Archive Viewer")}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 18,
            fontStyle: "italic",
            color: C.muted,
            marginBottom: 40,
          }}
        >
          The Preserved Book
        </p>

        {/* View toggle */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, justifyContent: "flex-end" }}>
          <button
            onClick={() => setShowFullBook(false)}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: `1px solid ${C.accent}`,
              background: !showFullBook ? C.accent : "transparent",
              color: !showFullBook ? C.fillText : C.accent,
              fontFamily: "var(--font-cinzel)",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Book View
          </button>
          <button
            onClick={() => setShowFullBook(true)}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: `1px solid ${C.accent}`,
              background: showFullBook ? C.accent : "transparent",
              color: showFullBook ? C.fillText : C.accent,
              fontFamily: "var(--font-cinzel)",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Full Book
          </button>
        </div>

        {showFullBook ? (
          /* ── Full Book thumbnail grid ── */
          <div
            style={{
              border: `1px solid ${C.border}`,
              background: C.bookPage,
              padding: "32px 24px",
              boxShadow: "0 8px 40px rgba(139,112,48,0.12)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 9,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.muted,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              All 64 Pages — Click any page to open it
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: 8,
              }}
            >
              {Array.from({ length: 64 }, (_, i) => i + 1).map((n) => {
                const src = `/images/pdf-pages/page-${String(n).padStart(2, "0")}.png`;
                const isCurrentSpread = n === pdfPage || n === pdfPage + 1;
                return (
                  <button
                    key={n}
                    onClick={() => {
                      setPdfPage(n % 2 === 0 ? Math.max(1, n - 1) : n);
                      setShowFullBook(false);
                    }}
                    aria-label={`Go to page ${n}`}
                    style={{
                      padding: 0,
                      border: `2px solid ${isCurrentSpread ? C.accent : C.borderMuted}`,
                      background: "none",
                      cursor: "pointer",
                      position: "relative",
                      aspectRatio: "3/4",
                      display: "block",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Page ${n}`}
                      fill
                      sizes="(max-width: 1240px) 10vw, 120px"
                      style={{ objectFit: "contain" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: 2,
                        right: 4,
                        fontFamily: "var(--font-cinzel)",
                        fontSize: 7,
                        color: C.muted,
                        lineHeight: 1,
                        background: "rgba(250,247,238,0.8)",
                        padding: "1px 2px",
                      }}
                    >
                      {n}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* ── Two-page spread swiper ── */
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                position: "relative",
                border: `1px solid ${C.border}`,
                boxShadow: "0 8px 40px rgba(139,112,48,0.12), 0 2px 8px rgba(0,0,0,0.08)",
                minHeight: 560,
              }}
            >
              {/* Left page */}
              <div
                style={{
                  background: C.bookPage,
                  borderRight: `2px solid ${C.border}`,
                  boxShadow: "inset -6px 0 12px rgba(0,0,0,0.06)",
                  minHeight: 560,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`/images/pdf-pages/page-${String(pdfPage).padStart(2, "0")}.png`}
                  alt={`Book page ${pdfPage}`}
                  fill
                  sizes="(max-width: 1240px) 45vw, 560px"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>

              {/* Book spine shadow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: `linear-gradient(90deg, rgba(139,112,48,0.25), transparent, rgba(139,112,48,0.10))`,
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              />

              {/* Right page */}
              <div
                style={{
                  background: C.bookPage,
                  boxShadow: "inset 6px 0 12px rgba(0,0,0,0.04)",
                  minHeight: 560,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {pdfPage + 1 <= 64 ? (
                  <Image
                    src={`/images/pdf-pages/page-${String(pdfPage + 1).padStart(2, "0")}.png`}
                    alt={`Book page ${pdfPage + 1}`}
                    fill
                    sizes="(max-width: 1240px) 45vw, 560px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 15,
                        color: C.muted,
                        fontStyle: "italic",
                      }}
                    >
                      End of Book
                    </p>
                  </div>
                )}
              </div>

              {/* Left nav arrow */}
              <button
                onClick={() => setPdfPage((p) => Math.max(1, p - 2))}
                aria-label="Previous spread"
                disabled={pdfPage <= 1}
                style={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: `1px solid ${C.border}`,
                  background: C.card,
                  color: C.accent,
                  cursor: pdfPage <= 1 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 16,
                  opacity: pdfPage <= 1 ? 0.4 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                ‹
              </button>

              {/* Right nav arrow */}
              <button
                onClick={() => setPdfPage((p) => Math.min(63, p + 2))}
                aria-label="Next spread"
                disabled={pdfPage >= 63}
                style={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: `1px solid ${C.border}`,
                  background: C.card,
                  color: C.accent,
                  cursor: pdfPage >= 63 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 16,
                  opacity: pdfPage >= 63 ? 0.4 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                ›
              </button>
            </div>

            {/* Bottom toolbar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                background: C.card,
                border: `1px solid ${C.borderMuted}`,
                borderTop: `1px solid ${C.borderMuted}`,
              }}
            >
              {/* Page counter */}
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                {"Page " + pdfPage + (pdfPage + 1 <= 64 ? "–" + (pdfPage + 1) : "") + " of 64"}
              </span>

              {/* Toolbar actions */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button
                  onClick={() => setPdfPage(1)}
                  disabled={pdfPage === 1}
                  aria-label="First page"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${C.accent}`,
                    background: "transparent",
                    color: C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    cursor: pdfPage === 1 ? "not-allowed" : "pointer",
                    opacity: pdfPage === 1 ? 0.4 : 1,
                  }}
                >
                  ««
                </button>
                <button
                  onClick={() => setShowFullBook(true)}
                  aria-label="View full book grid"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${C.accent}`,
                    background: "transparent",
                    color: C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <GridIcon /> All Pages
                </button>
                <button
                  onClick={() => setPdfPage(63)}
                  disabled={pdfPage >= 63}
                  aria-label="Last spread"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${C.accent}`,
                    background: "transparent",
                    color: C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    cursor: pdfPage >= 63 ? "not-allowed" : "pointer",
                    opacity: pdfPage >= 63 ? 0.4 : 1,
                  }}
                >
                  »»
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════
          4. CLIPPINGS & TRANSLATIONS
      ══════════════════════════════════════════ */}
      <section
        id="clippings-section"
        style={{
          background: C.cardAlt,
          borderTop: `1px solid ${C.borderMuted}`,
          borderBottom: `1px solid ${C.borderMuted}`,
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Section header with gold line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {sectionLabel("3", "Clippings & Translations")}
            <div style={{ flex: 1, height: 1, background: C.borderMuted }} />
          </div>

          {/* Filter pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 24,
                    border: `1px solid ${C.accent}`,
                    background: isActive ? C.accent : "transparent",
                    color: isActive ? C.fillText : C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            {visibleCards.map((card) => {
              const isExpanded = expandedCard === card.id;
              const isNote = card.type === "note";

              return (
                <div
                  key={card.id}
                  style={{
                    flex: "1 1 calc(33% - 24px)",
                    minWidth: 280,
                    background: C.card,
                    border: `1px solid ${C.borderMuted}`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image (clipping type only) */}
                  {card.image && (
                    <div
                      style={{
                        width: "100%",
                        borderBottom: `1px solid ${C.borderMuted}`,
                        overflow: "hidden",
                        background: C.bg,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title || "Archive clipping"}
                        width={card.imageW ?? 900}
                        height={card.imageH ?? 1200}
                        sizes="(max-width: 1240px) 30vw, 380px"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "320px",
                          objectFit: "contain",
                          objectPosition: "top",
                          display: "block",
                        }}
                      />
                    </div>
                  )}

                  <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    {/* Label */}
                    <p
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: 9,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: C.accent,
                      }}
                    >
                      {card.label}
                    </p>

                    {/* Title */}
                    {card.title && (
                      <p
                        style={{
                          fontFamily: "var(--font-cinzel)",
                          fontSize: 14,
                          color: C.heading,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {card.title}
                      </p>
                    )}

                    {/* Subtitle */}
                    {card.subtitle && (
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 13,
                          fontStyle: "italic",
                          color: C.muted,
                        }}
                      >
                        {card.subtitle}
                      </p>
                    )}

                    {/* Text */}
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: C.body,
                        flex: 1,
                      }}
                    >
                      {isExpanded ? card.fullText : card.text}
                    </p>

                    {/* Date */}
                    {card.date && (
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 12,
                          color: C.muted,
                          fontStyle: "italic",
                        }}
                      >
                        {card.date}
                      </p>
                    )}

                    {/* CTA */}
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                      style={{
                        alignSelf: "flex-start",
                        marginTop: 8,
                        padding: "8px 16px",
                        background: "transparent",
                        border: `1px solid ${C.accent}`,
                        color: C.accent,
                        fontFamily: "var(--font-cinzel)",
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                    >
                      {isExpanded ? "CLOSE" : card.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. PRESERVATION SECTION
      ══════════════════════════════════════════ */}
      <section
        id="preservation"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 56,
            justifyContent: "center",
          }}
        >
          <div style={{ flex: 1, height: 1, background: C.borderMuted }} />
          {sectionLabel("4", "Preserved by Her Sons. Restored into Light.")}
          <div style={{ flex: 1, height: 1, background: C.borderMuted }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* LEFT: The Pulos Brothers */}
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.borderMuted}`,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            {/* Gold laurel icon */}
            <div
              style={{
                margin: "0 auto 24px",
                width: 72,
                height: 72,
                borderRadius: "50%",
                border: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: C.bg,
              }}
            >
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <path d="M22 8 C14 12, 10 18, 12 26 C14 20, 18 16, 22 14 C26 16, 30 20, 32 26 C34 18, 30 12, 22 8Z" stroke={C.accent} strokeWidth="1" fill="none" />
                <path d="M10 28 C8 24, 8 20, 10 16" stroke={C.accent} strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M34 28 C36 24, 36 20, 34 16" stroke={C.accent} strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M6 30 C10 34, 16 36, 22 36 C28 36, 34 34, 38 30" stroke={C.accent} strokeWidth="1" fill="none" strokeLinecap="round" />
                <circle cx="22" cy="36" r="2" fill={C.accent} opacity="0.6" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 13,
                letterSpacing: "0.15em",
                color: C.heading,
                marginBottom: 8,
              }}
            >
              The Pulos Brothers
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 13,
                fontStyle: "italic",
                color: C.accent,
                marginBottom: 20,
              }}
            >
              Guardians of Memory
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
                lineHeight: 1.9,
                color: C.body,
                marginBottom: 24,
              }}
            >
              With deep love and respect, her sons preserved every photograph, article, and
              page so that her story would never be forgotten.
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 13,
                fontStyle: "italic",
                color: C.muted,
                borderTop: `1px solid ${C.borderMuted}`,
                paddingTop: 16,
              }}
            >
              Three brothers. One promise. Never forget.
            </p>
          </div>

          {/* CENTER: Restoration Process */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {[
                {
                  step: "Original Material",
                  image: "/images/book-clipping-etam-miss-mary.png",
                  alt: "Original archive material — ETAM Miss Mary clipping",
                },
                {
                  step: "Conservation",
                  image: "/images/book-clipping-hat-mary.png",
                  alt: "Conservation and restoration process",
                },
                {
                  step: "Digital Restoration",
                  image: "/images/book-clipping-mary-celebrated.png",
                  alt: "Digital restoration — Mary celebrated clipping",
                },
                {
                  step: "Restored Page",
                  image: "/images/book-portrait-diamond-earrings.png",
                  alt: "Final restored archive page — diamond earrings portrait",
                },
              ].map((step, i, arr) => (
                <div key={step.step}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 80px 1fr",
                      gap: 16,
                      alignItems: "center",
                      padding: "12px 0",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: `1px solid ${C.accent}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-cinzel)",
                        fontSize: 11,
                        color: C.accent,
                        background: C.bg,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      style={{
                        width: 80,
                        height: 56,
                        position: "relative",
                        border: `1px solid ${C.borderMuted}`,
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="80px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: 10,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: C.heading,
                      }}
                    >
                      {step.step}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        marginLeft: 15,
                        width: 1,
                        height: 16,
                        background: C.border,
                        opacity: 0.5,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom quote */}
            <div
              style={{
                marginTop: 32,
                borderTop: `1px solid ${C.borderMuted}`,
                paddingTop: 24,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  color: C.body,
                  marginBottom: 12,
                }}
              >
                &ldquo;Her elegance was her voice. This archive is her legacy.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  color: C.accent,
                  textTransform: "uppercase",
                }}
              >
                — Mary James
              </p>
            </div>
          </div>

          {/* RIGHT: Mary James */}
          <div
            style={{
              background: C.card,
              border: `1px solid ${C.borderMuted}`,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            {/* Gold ornament */}
            <div
              style={{
                margin: "0 auto 24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg width="60" height="48" viewBox="0 0 60 48" fill="none" aria-hidden="true">
                <path d="M30 4 L34 16 L46 16 L37 24 L40 36 L30 28 L20 36 L23 24 L14 16 L26 16 Z" stroke={C.accent} strokeWidth="1" fill="none" />
                <circle cx="30" cy="4" r="2" fill={C.accent} opacity="0.5" />
                <path d="M10 44 C18 40, 42 40, 50 44" stroke={C.accent} strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.accent,
                marginBottom: 8,
              }}
            >
              Restored by Mary James
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 13,
                fontStyle: "italic",
                color: C.muted,
                marginBottom: 20,
              }}
            >
              Restoration, Articles & Book Design
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
                lineHeight: 1.9,
                color: C.body,
                marginBottom: 28,
              }}
            >
              Every page was carefully restored, researched, translated, and designed with
              devotion — bringing the archive into the light for future generations.
            </p>

            {/* Stylized signature */}
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 26,
                fontStyle: "italic",
                color: C.accent,
                letterSpacing: "0.04em",
                borderTop: `1px solid ${C.borderMuted}`,
                paddingTop: 16,
              }}
            >
              Mary James
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CONTINUE THE JOURNEY
      ══════════════════════════════════════════ */}
      <section
        id="continue"
        style={{
          background: C.cardAlt,
          borderTop: `1px solid ${C.borderMuted}`,
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: 10,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: C.accent,
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Continue the Journey
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: "block",
                  background: C.card,
                  border: `1px solid ${C.borderMuted}`,
                  textDecoration: "none",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = C.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = C.borderMuted;
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    position: "relative",
                    borderBottom: `1px solid ${C.borderMuted}`,
                    background: C.bg,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    sizes="(max-width: 1240px) 30vw, 380px"
                    style={{ objectFit: "contain", objectPosition: "top" }}
                  />
                </div>

                <div style={{ padding: "20px 20px 24px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: 10,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: C.heading,
                      marginBottom: 8,
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: C.muted,
                      marginBottom: 16,
                    }}
                  >
                    {card.text}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM BAND
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: C.card,
          borderTop: `1px solid ${C.border}`,
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            marginBottom: 20,
          }}
        >
          <LaurelLeft />
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: 11,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: C.accent,
            }}
          >
            A Family Archive. A Cherished Legacy. A Memory That Lives On.
          </p>
          <LaurelRight />
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 13,
            color: C.muted,
            letterSpacing: "0.1em",
          }}
        >
          © 2025 Mary Pavlatou Archive. All Rights Reserved.
        </p>
      </section>
    </main>
  );
}
