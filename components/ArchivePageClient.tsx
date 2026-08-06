"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BilingualHeading from "@/components/BilingualHeading";
import HistoricalNotes from "@/components/HistoricalNotes";

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
        fontSize: 14,
        letterSpacing: "0.44em",
        textTransform: "uppercase",
        color: "#6A4F1E",
        fontWeight: 900,
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

/**
 * One page of the full-screen reader. At zoom 1 it fits the whole page in
 * frame (fast, uses next/image). Above 1x it renders the page at its full
 * source resolution inside a scrollable frame, so the visitor can pan
 * around to read fine print instead of squinting at a shrunk page.
 */
function ZoomablePage({
  src,
  alt,
  zoom,
  onToggleZoom,
}: {
  src: string;
  alt: string;
  zoom: number;
  onToggleZoom: () => void;
}) {
  if (zoom === 1) {
    return (
      <button
        onClick={onToggleZoom}
        aria-label={`${alt} — click to zoom in`}
        style={{ position: "absolute", inset: 0, background: "none", border: "none", padding: 0, cursor: "zoom-in", width: "100%", height: "100%" }}
      >
        <Image src={src} alt={alt} fill sizes="90vw" style={{ objectFit: "contain", objectPosition: "center" }} priority />
      </button>
    );
  }
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "auto" }}>
      <button
        onClick={onToggleZoom}
        aria-label={`${alt} — click to reset zoom`}
        style={{ display: "block", width: `${zoom * 100}%`, margin: "0 auto", background: "none", border: "none", padding: 0, cursor: "zoom-out" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
      </button>
    </div>
  );
}

// A single scanned page is 1388×1838px — a two-page spread is exactly
// double that width. Sizing the spread to this aspect-ratio (instead of an
// arbitrary box) lets each page fill its half edge-to-edge with no
// letterboxing "mat" around it, and keeps the two pages meeting flush at
// the spine like a real bound book.
const PAGE_W = 1388;
const PAGE_H = 1838;
const SPREAD_ASPECT = `${PAGE_W * 2} / ${PAGE_H}`;
const SPREAD_RATIO = (PAGE_W * 2) / PAGE_H;
// How much of the viewport height the open book is allowed to fill —
// keeps it fully visible without scrolling on shorter screens.
const SPREAD_MAX_VH = 62;

/**
 * One full two-page spread, sized so both pages fill their half of the
 * frame exactly (no gaps, no cropping) and meet at a shaded gutter in the
 * middle. `interactive` pages open the full-screen reader on click and
 * carry the resting-on-a-table drop shadow; the flip overlay renders a
 * static, non-interactive copy of the outgoing spread.
 */
function BookSpread({
  page,
  onOpenFullscreen,
  interactive = true,
}: {
  page: number;
  onOpenFullscreen?: () => void;
  interactive?: boolean;
}) {
  const rightPage = page + 1;
  const hasRight = rightPage <= 62;

  const pageCell = (n: number, side: "left" | "right") => (
    <div style={{ position: "relative", overflow: "hidden", background: C.bookPage }}>
      {interactive ? (
        <button
          onClick={onOpenFullscreen}
          aria-label={`Open page ${n} full screen`}
          style={{ position: "absolute", inset: 0, background: "none", border: "none", padding: 0, cursor: "zoom-in", width: "100%", height: "100%" }}
        >
          <Image
            src={`/images/pdf-pages/page-${String(n).padStart(2, "0")}.png`}
            alt={`Book page ${n}`}
            fill
            sizes="(max-width: 1800px) 45vw, 900px"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </button>
      ) : (
        <Image
          src={`/images/pdf-pages/page-${String(n).padStart(2, "0")}.png`}
          alt=""
          fill
          sizes="900px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}
      {/* Gutter shadow — darkens toward the spine so the two pages read as one bound sheet */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, bottom: 0,
          [side === "left" ? "right" : "left"]: 0,
          width: "9%",
          background: side === "left"
            ? "linear-gradient(to right, transparent, rgba(20,14,6,0.22))"
            : "linear-gradient(to left, transparent, rgba(20,14,6,0.22))",
          pointerEvents: "none",
        }}
      />
    </div>
  );

  return (
    <div
      className="max-md:!grid-cols-1"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        height: "100%",
        background: C.bookPage,
        boxShadow: interactive
          ? "0 32px 70px rgba(20,14,6,0.45), 0 10px 24px rgba(20,14,6,0.28)"
          : "none",
      }}
    >
      {pageCell(page, "left")}
      {hasRight ? (
        pageCell(rightPage, "right")
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: C.bookPage }}>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: 17, color: C.muted, fontStyle: "italic" }}>
            End of Book
          </p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ArchivePageClient() {
  const [pdfPage, setPdfPage] = useState(1);
  const [showFullBook, setShowFullBook] = useState(false);
  const [fullscreenReader, setFullscreenReader] = useState(false);
  const [zoom, setZoom] = useState(1);
  const ZOOM_MIN = 1;
  const ZOOM_MAX = 3;
  const ZOOM_STEP = 0.5;

  // Reading a new spread always starts back at fit-to-screen.
  React.useEffect(() => { setZoom(1); }, [pdfPage]);

  // ── Page-turn flip animation (inline book viewer) ──────────────────────
  // A real page turn hinges at the spine (not the center of the spread),
  // darkens as its surface rotates edge-on to the viewer, and casts a
  // moving shadow onto the page being revealed underneath. All three are
  // driven by CSS @keyframes (see the <style> block below) rather than a
  // plain transition, so a `key` remount is enough to restart it cleanly —
  // no rAF timing hacks needed.
  const FLIP_MS = 850;
  const [flipFromPage, setFlipFromPage] = useState<number | null>(null);
  const [flipDir, setFlipDir] = useState<"next" | "prev">("next");
  const [flipKey, setFlipKey] = useState(0);

  function turnPage(dir: "next" | "prev") {
    if (flipFromPage !== null) return; // already mid-flip — ignore extra clicks
    const newPage = dir === "next" ? Math.min(61, pdfPage + 2) : Math.max(1, pdfPage - 2);
    if (newPage === pdfPage) return;
    setFlipFromPage(pdfPage);
    setFlipDir(dir);
    setPdfPage(newPage);
    setFlipKey((k) => k + 1);
    window.setTimeout(() => {
      setFlipFromPage(null);
    }, FLIP_MS);
  }

  React.useEffect(() => {
    if (!fullscreenReader) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreenReader(false);
      if (e.key === "ArrowLeft") setPdfPage((p) => Math.max(1, p - 2));
      if (e.key === "ArrowRight") setPdfPage((p) => Math.min(61, p + 2));
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP));
      if (e.key === "-" || e.key === "_") setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP));
      if (e.key === "0") setZoom(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreenReader]);

  const navCards = [
    {
      href: "/story",
      label: "HER LIFE",
      text: "The story of grace, discipline, and love.",
    },
    {
      href: "/fashion",
      label: "FASHION WORLD",
      text: "The world she inspired on and beyond the runway.",
    },
    {
      href: "/legacy",
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
          background: "linear-gradient(160deg, #1C1814 0%, #2A2318 40%, #3A2E1E 100%)",
          borderBottom: "2px solid #C5A84A",
          position: "relative",
        }}
      >
        {/* Subtle pattern overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
          backgroundImage: "repeating-linear-gradient(90deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px)",
        }} />
        <div
          className="max-lg:!grid-cols-1"
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
            backgroundImage: "url(/images/gen-archive-books.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.10,
            pointerEvents: "none",
          }}
        />

        {/* LEFT COLUMN */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: 15,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#C5A84A",
              fontWeight: 900,
              marginBottom: 20,
              fontVariant: "small-caps",
            }}
          >
            The Archive
          </p>

          {/* Greek heading */}
          <div style={{ marginBottom: 16 }}>
            <BilingualHeading
              as="h1"
              el="Η Μνήμη"
              en="The Memory"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(48px,5.75vw,78px)",
                color: "#F5F1E6",
                lineHeight: 1.1,
                letterSpacing: "0.06em",
              }}
            />
          </div>

          {/* Italic tagline */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 25,
              fontStyle: "italic",
              color: "#C5A84A",
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
              fontSize: 18,
              lineHeight: 1.9,
              color: "rgba(245,241,230,0.75)",
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            A living archive dedicated to the life and legacy of Mary Pavlatou —
            international fashion model, Greek icon, and beloved mother. Every photograph,
            clipping, and page has been gathered with devotion, preserved by her three sons, and
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
                fontSize: 12,
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
                color: "#D8C48E",
                fontFamily: "var(--font-cinzel)",
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid #C5A84A",
              }}
            >
              View the Book
            </a>
          </div>

          {/* Credit plaques */}
          <div style={{ display: "flex", gap: 16 }}>
            {["Preserved by Her Three Sons", "Restored & Preserved with Love"].map((plaque) => (
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
                    fontSize: 14,
                    fontWeight: 900,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#6A4F1E",
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
              boxShadow: "0 0 0 6px #2A2318, 0 0 0 8px #C5A84A, 0 12px 50px rgba(0,0,0,0.4)",
              background: C.card,
              zIndex: 3,
            }}
          >
            <div style={{ position: "relative", aspectRatio: "9/16" }}>
              <Image
                src="/images/mary-archive-colorized-navy-veiled-hat.png"
                alt="Mary Pavlatou — colorized portrait, navy dress with netted veil hat"
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
                src="/images/mary-archive-mallidou-collection-named.png"
                alt="Newspaper clipping — Miss Pavlatou modeling a Mallidou collection piece"
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
                src="/images/mary-archive-two-models-named.png"
                alt="Newspaper clipping naming Mary Pavlatou among two models at the Tsitsopoulos salon"
                fill
                sizes="(max-width: 768px) 35vw, 200px"
                style={{ objectFit: "contain" }}
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
            <BilingualHeading
              as="p"
              el="Ζει Εις Αιώνας"
              en="She Lives Through the Ages"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.25em",
                color: "#6A4F1E",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: 9,
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. COLLECTION INDEX
      ══════════════════════════════════════════ */}
      <section
        id="collection-index"
        style={{
          position: "relative",
          overflow: "hidden",
          background: C.cardAlt,
          borderTop: `1px solid ${C.borderMuted}`,
          borderBottom: `1px solid ${C.borderMuted}`,
          padding: "72px 32px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/gen-greek-legacy.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
          {sectionLabel("1", "Collection Index")}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 21,
              fontStyle: "italic",
              color: C.muted,
              marginBottom: 48,
            }}
          >
            Browse the archive by category
          </p>

          <div
            className="max-lg:!grid-cols-3 max-sm:!grid-cols-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                id: "portraits",
                label: "Portraits",
                subtitle: "Photographs & formal studies",
                image: "/images/mary-archive-diamond-earrings-cropped.png",
                imgAlt: "Mary Pavlatou — Colorized glamour portrait with diamond earrings, family archive",
                isOval: false,
              },
              {
                id: "clippings",
                label: "Newspaper Clippings",
                subtitle: "Press & media coverage",
                image: "/images/book-clipping-etam-pajamas.png",
                imgAlt: "Mary Pavlatou newspaper clipping — ETAM pajama exhibition",
                isOval: false,
              },
              {
                id: "fashion-shows",
                label: "Fashion Shows",
                subtitle: "Runway & presentations",
                image: "/images/mary-archive-colorized-chandelier-gown.png",
                imgAlt: "Mary Pavlatou — colorized runway portrait under chandeliers",
                isOval: false,
              },
              {
                id: "career-records",
                label: "Career Records",
                subtitle: "Documentation & history",
                image: "/images/mary-archive-feathered-hat-named.png",
                imgAlt: "Newspaper clipping — Mary Pavlatou, feathered hat, career documentation",
                isOval: false,
              },
              {
                id: "family-memory",
                label: "Family Memory",
                subtitle: "Personal & intimate",
                image: "/images/mary-archive-bridal-veil.png",
                imgAlt: "Mary Pavlatou — bridal veil portrait, family archive",
                isOval: false,
              },
            ].map((cat) => (
              <a
                key={cat.id}
                href="#archive-viewer"
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
                      style={
                        cat.isOval
                          ? { objectFit: "cover", objectPosition: "center 25%" }
                          : { objectFit: "contain", objectPosition: "top" }
                      }
                    />
                  ) : (
                    <RestorationIcon />
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 10,
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
                    fontSize: 14,
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
          maxWidth: 1800,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        {sectionLabel("2", "Archive Viewer")}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 21,
            fontStyle: "italic",
            color: C.muted,
            marginBottom: 40,
          }}
        >
          The Preserved Book
        </p>

        {/* View toggle */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, justifyContent: "flex-end", flexWrap: "wrap" }}>
          <button
            onClick={() => setFullscreenReader(true)}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: `1px solid ${C.accent}`,
              background: C.accent,
              color: C.fillText,
              fontFamily: "var(--font-cinzel)",
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Read Full Screen
          </button>
          <button
            onClick={() => setShowFullBook(false)}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: `1px solid ${C.accent}`,
              background: !showFullBook ? C.accent : "transparent",
              color: !showFullBook ? C.fillText : "#6A4F1E",
              fontFamily: "var(--font-cinzel)",
              fontSize: 14,
              fontWeight: 900,
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
              color: showFullBook ? C.fillText : "#6A4F1E",
              fontFamily: "var(--font-cinzel)",
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Full Book
          </button>
        </div>

        {/* Wooden table surface — the book rests on top of this */}
        <div
          style={{
            position: "relative",
            padding: "56px clamp(20px, 5vw, 72px)",
            borderRadius: 8,
            background: `
              repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px),
              repeating-linear-gradient(93deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 96px),
              repeating-linear-gradient(87deg, rgba(0,0,0,0.045) 0px, rgba(0,0,0,0.045) 1px, transparent 1px, transparent 140px),
              linear-gradient(180deg, #8F5D35 0%, #7A4B27 45%, #5F3A1E 100%)
            `,
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.35), inset 0 0 140px rgba(0,0,0,0.4), 0 24px 60px rgba(20,12,4,0.35)",
          }}
        >
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
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.muted,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              All 62 Pages — Click any page to open it
            </p>
            <div
              className="max-lg:!grid-cols-6 max-sm:!grid-cols-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: 8,
              }}
            >
              {Array.from({ length: 62 }, (_, i) => i + 1).map((n) => {
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
                        fontSize: 8,
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
          /* ── Two-page spread, sized like a real open book ── */
          <div>
            <div
              style={{
                position: "relative",
                width: `min(1550px, 100%, calc(${SPREAD_MAX_VH}vh * ${SPREAD_RATIO}))`,
                margin: "0 auto",
                aspectRatio: SPREAD_ASPECT,
                perspective: "2600px",
                WebkitPerspective: "2600px",
              }}
            >
              <style>{`
                @keyframes bookFlipNext {
                  0%   { transform-origin: 0% 92%; transform: rotateY(0deg) rotateX(0deg); }
                  10%  { transform-origin: 0% 82%; transform: rotateY(-8deg) rotateX(-5deg); }
                  28%  { transform-origin: 0% 66%; transform: rotateY(-46deg) rotateX(-9deg); }
                  55%  { transform-origin: 0% 50%; transform: rotateY(-98deg) rotateX(-3deg); }
                  85%  { transform-origin: 0% 50%; transform: rotateY(-160deg) rotateX(0deg); }
                  100% { transform-origin: 0% 50%; transform: rotateY(-180deg) rotateX(0deg); }
                }
                @keyframes bookFlipPrev {
                  0%   { transform-origin: 100% 92%; transform: rotateY(0deg) rotateX(0deg); }
                  10%  { transform-origin: 100% 82%; transform: rotateY(8deg) rotateX(-5deg); }
                  28%  { transform-origin: 100% 66%; transform: rotateY(46deg) rotateX(-9deg); }
                  55%  { transform-origin: 100% 50%; transform: rotateY(98deg) rotateX(-3deg); }
                  85%  { transform-origin: 100% 50%; transform: rotateY(160deg) rotateX(0deg); }
                  100% { transform-origin: 100% 50%; transform: rotateY(180deg) rotateX(0deg); }
                }
                @keyframes bookFlipShade {
                  0%   { opacity: 0; }
                  46%  { opacity: 0.62; }
                  54%  { opacity: 0.62; }
                  100% { opacity: 0; }
                }
                @keyframes bookFlipCornerLiftNext {
                  0%   { opacity: 0; clip-path: polygon(100% 100%, 100% 100%, 100% 100%); }
                  8%   { opacity: 0.9; clip-path: polygon(62% 100%, 100% 62%, 100% 100%); }
                  22%  { opacity: 0.75; clip-path: polygon(30% 100%, 100% 28%, 100% 100%); }
                  38%  { opacity: 0.35; clip-path: polygon(4% 100%, 100% 2%, 100% 100%); }
                  100% { opacity: 0; clip-path: polygon(0% 100%, 100% 0%, 100% 100%); }
                }
                @keyframes bookFlipCornerLiftPrev {
                  0%   { opacity: 0; clip-path: polygon(0% 100%, 0% 100%, 0% 100%); }
                  8%   { opacity: 0.9; clip-path: polygon(38% 100%, 0% 62%, 0% 100%); }
                  22%  { opacity: 0.75; clip-path: polygon(70% 100%, 0% 28%, 0% 100%); }
                  38%  { opacity: 0.35; clip-path: polygon(96% 100%, 0% 2%, 0% 100%); }
                  100% { opacity: 0; clip-path: polygon(100% 100%, 0% 0%, 0% 100%); }
                }
                @keyframes bookFlipCastShadowNext {
                  0%   { opacity: 0; transform: scaleX(0.05); }
                  12%  { opacity: 0.55; transform: scaleX(0.4); }
                  50%  { opacity: 0.32; transform: scaleX(1); }
                  100% { opacity: 0; transform: scaleX(1); }
                }
                @keyframes bookFlipCastShadowPrev {
                  0%   { opacity: 0; transform: scaleX(0.05); }
                  12%  { opacity: 0.55; transform: scaleX(0.4); }
                  50%  { opacity: 0.32; transform: scaleX(1); }
                  100% { opacity: 0; transform: scaleX(1); }
                }
              `}</style>

              {/* Base layer — always the current spread */}
              <BookSpread page={pdfPage} onOpenFullscreen={() => setFullscreenReader(true)} />

              {/* Cast shadow — the lifting page darkening the newly-revealed page beneath it */}
              {flipFromPage !== null && (
                <div
                  key={`shadow-${flipKey}`}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    [flipDir === "next" ? "left" : "right"]: "50%",
                    width: "50%",
                    zIndex: 3,
                    pointerEvents: "none",
                    transformOrigin: flipDir === "next" ? "0% 90%" : "100% 90%",
                    background: flipDir === "next"
                      ? "linear-gradient(to right, rgba(20,14,6,0.55), transparent 75%)"
                      : "linear-gradient(to left, rgba(20,14,6,0.55), transparent 75%)",
                    animation: `${flipDir === "next" ? "bookFlipCastShadowNext" : "bookFlipCastShadowPrev"} ${FLIP_MS}ms cubic-bezier(0.45,0.05,0.55,0.95) forwards`,
                  }}
                />
              )}

              {/* Flip overlay — ONLY the single page being turned, hinged at the spine (center binding).
                  The other side of the spread never moves. */}
              {flipFromPage !== null && (
                <div
                  key={`flip-${flipKey}`}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    [flipDir === "next" ? "right" : "left"]: 0,
                    width: "50%",
                    zIndex: 4,
                    pointerEvents: "none",
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    transformOrigin: flipDir === "next" ? "0% 92%" : "100% 92%",
                    animation: `${flipDir === "next" ? "bookFlipNext" : "bookFlipPrev"} ${FLIP_MS}ms cubic-bezier(0.45,0.05,0.55,0.95) forwards`,
                  }}
                >
                  {/* Front face — the page's printed content, visible for the first half of the turn */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 0 40px rgba(0,0,0,0.35)",
                      background: C.bookPage,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={`/images/pdf-pages/page-${String(flipDir === "next" ? flipFromPage + 1 : flipFromPage).padStart(2, "0")}.png`}
                      alt=""
                      fill
                      sizes="900px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    {/* Gutter shadow on the spine-facing edge, matching the static pages */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute", top: 0, bottom: 0,
                        [flipDir === "next" ? "left" : "right"]: 0,
                        width: "9%",
                        background: flipDir === "next"
                          ? "linear-gradient(to right, rgba(20,14,6,0.22), transparent)"
                          : "linear-gradient(to left, rgba(20,14,6,0.22), transparent)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Back face — the blank reverse of the leaf, facing the viewer once it's landed on the opposite page */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: C.bookPage,
                      boxShadow: "0 0 40px rgba(0,0,0,0.35)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute", inset: 0,
                        background: `radial-gradient(ellipse at ${flipDir === "next" ? "0%" : "100%"} 50%, rgba(20,14,6,0.14), transparent 65%)`,
                      }}
                    />
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute", top: 0, bottom: 0,
                        [flipDir === "next" ? "right" : "left"]: 0,
                        width: "9%",
                        background: flipDir === "next"
                          ? "linear-gradient(to left, rgba(20,14,6,0.22), transparent)"
                          : "linear-gradient(to right, rgba(20,14,6,0.22), transparent)",
                      }}
                    />
                  </div>

                  {/* Shading child — rotates with the page, darkening it as it turns edge-on to the viewer */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.5))",
                      animation: `bookFlipShade ${FLIP_MS}ms cubic-bezier(0.45,0.05,0.55,0.95) forwards`,
                    }}
                  />
                  {/* Corner-lift highlight — a warm gleam that peels up from the bottom corner first, as if a hand lifted it */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: flipDir === "next"
                        ? "linear-gradient(230deg, rgba(255,250,232,0.85) 0%, rgba(255,250,232,0.4) 35%, transparent 65%)"
                        : "linear-gradient(310deg, rgba(255,250,232,0.85) 0%, rgba(255,250,232,0.4) 35%, transparent 65%)",
                      animation: `${flipDir === "next" ? "bookFlipCornerLiftNext" : "bookFlipCornerLiftPrev"} ${FLIP_MS}ms cubic-bezier(0.45,0.05,0.55,0.95) forwards`,
                    }}
                  />
                </div>
              )}

              {/* Left nav arrow */}
              <button
                onClick={() => turnPage("prev")}
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
                  fontSize: 18,
                  opacity: pdfPage <= 1 ? 0.4 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                ‹
              </button>

              {/* Right nav arrow */}
              <button
                onClick={() => turnPage("next")}
                aria-label="Next spread"
                disabled={pdfPage >= 61}
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
                  cursor: pdfPage >= 61 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 18,
                  opacity: pdfPage >= 61 ? 0.4 : 1,
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
                justifyContent: "flex-end",
                padding: "20px 4px 0",
              }}
            >
              {/* Toolbar actions */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button
                  onClick={() => setPdfPage(1)}
                  disabled={pdfPage === 1}
                  aria-label="First page"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${C.accent}`,
                    background: C.card,
                    boxShadow: "0 3px 10px rgba(20,12,4,0.3)",
                    color: C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 13,
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
                    background: C.card,
                    boxShadow: "0 3px 10px rgba(20,12,4,0.3)",
                    color: "#6A4F1E",
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 14,
                    fontWeight: 900,
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
                  onClick={() => setPdfPage(61)}
                  disabled={pdfPage >= 61}
                  aria-label="Last spread"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${C.accent}`,
                    background: C.card,
                    boxShadow: "0 3px 10px rgba(20,12,4,0.3)",
                    color: C.accent,
                    fontFamily: "var(--font-cinzel)",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    cursor: pdfPage >= 61 ? "not-allowed" : "pointer",
                    opacity: pdfPage >= 61 ? 0.4 : 1,
                  }}
                >
                  »»
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3A. FULL SCREEN READER — near-fullscreen book view
      ══════════════════════════════════════════ */}
      {fullscreenReader && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen book reader"
          onClick={() => setFullscreenReader(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(10,8,6,0.96)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(12px,2vw,32px)",
          }}
        >
          <button
            onClick={() => setFullscreenReader(false)}
            aria-label="Close full screen reader"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "none",
              border: `1px solid ${C.border}`,
              color: C.border,
              width: 40,
              height: 40,
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 21,
              zIndex: 10,
            }}
          >
            ×
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-md:!flex-col max-md:!w-full max-md:!h-[85vh]"
            style={{
              display: "flex",
              width: `min(97vw, calc(93vh * ${SPREAD_RATIO}))`,
              aspectRatio: SPREAD_ASPECT,
              boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
              position: "relative",
            }}
          >
            {/* Previous */}
            <button
              onClick={() => setPdfPage((p) => Math.max(1, p - 2))}
              aria-label="Previous spread"
              disabled={pdfPage <= 1}
              style={{
                position: "absolute",
                left: -8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: `1px solid ${C.border}`,
                background: "rgba(245,241,230,0.92)",
                color: C.accent,
                cursor: pdfPage <= 1 ? "not-allowed" : "pointer",
                opacity: pdfPage <= 1 ? 0.35 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 25,
                zIndex: 5,
              }}
            >
              ‹
            </button>

            {/* Left page */}
            <div style={{ flex: 1, background: C.bookPage, position: "relative", overflow: "hidden" }}>
              <ZoomablePage
                src={`/images/pdf-pages/page-${String(pdfPage).padStart(2, "0")}.png`}
                alt={`Book page ${pdfPage}`}
                zoom={zoom}
                onToggleZoom={() => setZoom((z) => (z === 1 ? 2 : 1))}
              />
              {/* Gutter shadow toward the spine */}
              <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "6%", background: "linear-gradient(to right, transparent, rgba(20,14,6,0.28))", pointerEvents: "none" }} />
            </div>

            {/* Spine */}
            <div
              aria-hidden="true"
              className="max-md:!hidden"
              style={{ width: 4, background: `linear-gradient(90deg, rgba(139,112,48,0.35), transparent, rgba(139,112,48,0.15))` }}
            />

            {/* Right page */}
            <div style={{ flex: 1, background: C.bookPage, position: "relative", overflow: "hidden" }}>
              {pdfPage + 1 <= 62 ? (
                <ZoomablePage
                  src={`/images/pdf-pages/page-${String(pdfPage + 1).padStart(2, "0")}.png`}
                  alt={`Book page ${pdfPage + 1}`}
                  zoom={zoom}
                  onToggleZoom={() => setZoom((z) => (z === 1 ? 2 : 1))}
                />
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 21, color: C.muted, fontStyle: "italic" }}>
                    End of Book
                  </p>
                </div>
              )}
              {/* Gutter shadow toward the spine */}
              <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "6%", background: "linear-gradient(to left, transparent, rgba(20,14,6,0.28))", pointerEvents: "none" }} />
            </div>

            {/* Next */}
            <button
              onClick={() => setPdfPage((p) => Math.min(61, p + 2))}
              aria-label="Next spread"
              disabled={pdfPage >= 61}
              style={{
                position: "absolute",
                right: -8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: `1px solid ${C.border}`,
                background: "rgba(245,241,230,0.92)",
                color: C.accent,
                cursor: pdfPage >= 61 ? "not-allowed" : "pointer",
                opacity: pdfPage >= 61 ? 0.35 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 25,
                zIndex: 5,
              }}
            >
              ›
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex", alignItems: "center", gap: 18, marginTop: 22,
              padding: "10px 22px", borderRadius: 999,
              background: "rgba(245,241,230,0.08)", border: `1px solid ${C.border}`,
            }}
          >
            <button
              onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP))}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Zoom out"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1px solid ${C.border}`, background: "rgba(245,241,230,0.92)", color: C.accent,
                cursor: zoom <= ZOOM_MIN ? "not-allowed" : "pointer", opacity: zoom <= ZOOM_MIN ? 0.35 : 1,
                fontSize: 19, display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              −
            </button>
            <button
              onClick={() => setZoom(1)}
              aria-label="Reset zoom to fit screen"
              style={{
                fontFamily: "var(--font-cinzel)", fontSize: 14, letterSpacing: "0.2em", fontWeight: 700,
                color: "rgba(245,241,230,0.9)", background: "none", border: "none", cursor: "pointer",
                minWidth: 52,
              }}
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP))}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Zoom in"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1px solid ${C.border}`, background: "rgba(245,241,230,0.92)", color: C.accent,
                cursor: zoom >= ZOOM_MAX ? "not-allowed" : "pointer", opacity: zoom >= ZOOM_MAX ? 0.35 : 1,
                fontSize: 19, display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              +
            </button>
          </div>

          <p
            aria-live="polite"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: 12,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(245,241,230,0.6)",
              marginTop: 14,
              textAlign: "center",
            }}
          >
            Pages {pdfPage}–{Math.min(pdfPage + 1, 62)} of 62 · Click a page to zoom · ← → to turn pages · Esc to close
          </p>
        </div>
      )}

      {/* ══════════════════════════════════════════
          3B. HISTORICAL NOTES — renders nothing until note
          content is supplied (see data/historicalNotes.ts)
      ══════════════════════════════════════════ */}
      <HistoricalNotes />

      {/* ══════════════════════════════════════════
          4. PRESERVATION SECTION
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
          {sectionLabel("4", "Preserved by Her Three Sons. Restored into Light.")}
          <div style={{ flex: 1, height: 1, background: C.borderMuted }} />
        </div>

        <div
          className="max-lg:!grid-cols-1"
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
                fontSize: 15,
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
                fontSize: 15,
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
                fontSize: 17,
                lineHeight: 1.9,
                color: C.body,
                marginBottom: 24,
              }}
            >
              With deep love and respect, her three sons preserved every photograph, article, and
              page so that her story would never be forgotten.
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
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
                  image: "/images/gen-athens-street.png",
                  alt: "Original archive material — Athens street, period atmosphere",
                },
                {
                  step: "Conservation",
                  image: "/images/gen-restoration-workspace.png",
                  alt: "Conservation and restoration workspace",
                },
                {
                  step: "Digital Restoration",
                  image: "/images/gen-laurel-wreath.png",
                  alt: "Digital restoration — decorative laurel motif",
                },
                {
                  step: "Restored Page",
                  image: "/images/book-clipping-mary-celebrated.png",
                  alt: "Final restored archive page — celebrated fashion model press clipping",
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
                        fontSize: 13,
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
                        fontSize: 12,
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
                  fontSize: 18,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  color: C.body,
                }}
              >
                &ldquo;Her elegance was her voice. This archive is her legacy.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT: The Restoration */}
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
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#6A4F1E",
                marginBottom: 8,
              }}
            >
              The Restoration
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
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
                fontSize: 17,
                lineHeight: 1.9,
                color: C.body,
              }}
            >
              Every page was carefully restored, researched, translated, and designed with
              devotion — bringing the archive into the light for future generations.
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
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#6A4F1E",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Continue the Journey
          </p>

          <div
            className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
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
                <div style={{ padding: "32px 24px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: 12,
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
                      fontSize: 17,
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
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#6A4F1E",
            }}
          >
            A Family Archive. A Cherished Legacy. A Memory That Lives On.
          </p>
          <LaurelRight />
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 15,
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
