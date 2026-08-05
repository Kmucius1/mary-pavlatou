"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { historicalNotes } from "@/data/historicalNotes";

/**
 * Renders the archive's numbered historical notes with search/filter.
 * Intentionally renders nothing when no notes have been supplied yet —
 * the site should never show empty or placeholder note cards publicly.
 */
export default function HistoricalNotes() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return historicalNotes;
    return historicalNotes.filter((note) =>
      [note.title, note.period, note.originalText, note.englishTranslation, note.historicalContext]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  if (historicalNotes.length === 0) return null;

  return (
    <section
      id="historical-notes"
      style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 32px" }}
    >
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
          Historical Notes
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 21,
          fontStyle: "italic",
          color: "#7A6E5E",
          marginBottom: 32,
        }}
      >
        Original notes, translated and annotated for the archive
      </p>

      <label htmlFor="historical-notes-search" style={{ display: "block", marginBottom: 40 }}>
        <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
          Search historical notes
        </span>
        <input
          id="historical-notes-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes by title, period, or content…"
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "10px 16px",
            border: "1px solid #C5A84A",
            background: "#F5F1E6",
            fontFamily: "var(--font-serif)",
            fontSize: 16,
            color: "#1C1814",
          }}
        />
      </label>

      {filtered.length === 0 ? (
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#7A6E5E" }}>
          No notes match your search.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="max-lg:!grid-cols-1">
          {filtered.map((note) => (
            <article
              key={note.number}
              style={{
                background: "#F5F1E6",
                border: "1px solid #D0C4A0",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 12,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8B7030",
                  marginBottom: 6,
                }}
              >
                Note {String(note.number).padStart(2, "0")} · {note.period}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 18,
                  color: "#1C1814",
                  marginBottom: 12,
                }}
              >
                {note.title}
              </h3>

              {note.relatedMedia && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", marginBottom: 16, border: "1px solid #D0C4A0" }}>
                  <Image src={note.relatedMedia.src} alt={note.relatedMedia.alt} fill sizes="(max-width: 1024px) 90vw, 45vw" style={{ objectFit: "contain" }} />
                </div>
              )}

              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "#4A3C2A", marginBottom: 10 }}>
                {note.originalLanguage}: {note.originalText}
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "#4A3C2A", marginBottom: 14, lineHeight: 1.8 }}>
                {note.englishTranslation}
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: "#7A6E5E", lineHeight: 1.7, marginBottom: 8 }}>
                {note.historicalContext}
              </p>
              {note.translationNotes && (
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "#7A6E5E", marginBottom: 8 }}>
                  Translation notes: {note.translationNotes}
                </p>
              )}
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(139,112,48,0.68)" }}>
                Source: {note.source}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
