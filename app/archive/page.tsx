import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import GreekDivider from "@/components/GreekDivider";

export const metadata: Metadata = {
  title: "The Archive — Mary Pavlatou Memorial Archive",
  description:
    "The official archive and research room of Mary Pavlatou — photographs, book materials, preservation records, and the story of a collection carried by love for decades.",
};

/* ─── Data ─── */

const personalityCards = [
  {
    numeral: "I",
    label: "The Model",
    body: "Mary understood modeling as discipline, posture, movement, intelligence, and presence. She did not simply wear fashion. She gave each garment life.",
  },
  {
    numeral: "II",
    label: "The Greek Icon",
    body: "From Athens to the world's fashion stages, Mary carried Greek elegance with confidence, grace, and command.",
  },
  {
    numeral: "III",
    label: "The Artist",
    body: "Her life reached far beyond the runway. She was gifted in dance, music, art, writing, oratory, academics, and sport.",
  },
  {
    numeral: "IV",
    label: "The Presence",
    body: "Mary was remembered for more than beauty. Her carriage, composure, and unmistakable aura made her impossible to overlook.",
  },
  {
    numeral: "V",
    label: "The Mother",
    body: "To her sons, Mary was not only an icon. She was love, memory, guidance, and the closest reflection of heaven on earth.",
  },
];

const archiveCategories = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5.5" stroke="#f5d050" strokeWidth="1" opacity="0.7" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#f5d050" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
      </svg>
    ),
    title: "Portraits",
    note: "7+ photographs preserved",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 4 L8 24 M20 4 L20 24" stroke="#f5d050" strokeWidth="1" opacity="0.7" />
        <path d="M6 4 Q14 8 22 4" stroke="#f5d050" strokeWidth="1" opacity="0.5" />
        <path d="M6 24 Q14 20 22 24" stroke="#f5d050" strokeWidth="1" opacity="0.5" />
        <path d="M8 12 Q14 15 20 12" stroke="#f5d050" strokeWidth="1" opacity="0.45" />
      </svg>
    ),
    title: "Runway",
    note: "4+ documented events",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="20" height="18" rx="1" stroke="#f5d050" strokeWidth="1" opacity="0.7" />
        <path d="M8 10 H20 M8 14 H20 M8 18 H15" stroke="#f5d050" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Press & Clippings",
    note: "Records preserved",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 4 L5 24 L14 20 L23 24 L23 4 L14 8 Z" stroke="#f5d050" strokeWidth="1" opacity="0.7" strokeLinejoin="round" />
        <path d="M14 8 L14 20" stroke="#f5d050" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: "Book Materials",
    note: "Compiled by The Pulos Brothers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6 L14 22" stroke="#f5d050" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
        <path d="M8 10 C8 6 20 6 20 10 C20 16 8 16 8 10" stroke="#f5d050" strokeWidth="1" opacity="0.65" strokeLinecap="round" />
        <path d="M10 18 L18 18" stroke="#f5d050" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <path d="M11 21 L17 21" stroke="#f5d050" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Fashion Records",
    note: "14+ houses documented",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 22 L5 13 C3 11 3 8 5 6 C7 4 10 4 12 6 L14 8 L16 6 C18 4 21 4 23 6 C25 8 25 11 23 13 Z" stroke="#f5d050" strokeWidth="1" opacity="0.65" strokeLinejoin="round" />
      </svg>
    ),
    title: "Family Memory",
    note: "Carried for decades",
  },
];

const chapters = [
  {
    roman: "I",
    title: "Greek Roots",
    body: "Mary's early identity was shaped by heritage, education, values, and the culture of a Greece that prized grace, intellect, and strength in equal measure. She would carry all of it with her.",
  },
  {
    roman: "II",
    title: "The Making of a Mannequin",
    body: "She became the first Greek certified professional fashion model, earning formal training at the Patricia Vance School of Fashion in Chicago — where modeling was treated as art, science, discipline, and psychology, not performance.",
  },
  {
    roman: "III",
    title: "Athens Rising",
    body: "On Athens's most respected stages — the Hotel Grande Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club — Mary became the trusted face of couture, presenting collections with command and elegance.",
  },
  {
    roman: "IV",
    title: "Across the World",
    body: "Her career moved through Athens, Paris, Milan, New York, and Chicago, placing her within the world of postwar European and American fashion at the height of haute couture — connected to Christian Dior, Hubert de Givenchy, Pierre Balmain, Jacques Fath, and Nina Ricci.",
  },
  {
    roman: "V",
    title: "The Woman Behind the Image",
    body: "Behind the photographs was a woman of intellect, talent, and rare range. She received awards in dance, music, art, writing, oratory, academics, and sport. She was offered roles in film, television, and theatre.",
  },
  {
    roman: "VI",
    title: "Motherhood and Memory",
    body: "The archive exists because her sons carried her memory with devotion. Each preserved piece reflects love, gratitude, and the enduring desire to keep her story alive for the generations that follow.",
  },
];

/* ─── Decorators ─── */

function GoldRule() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, rgba(184,124,20,0.5) 25%, rgba(184,124,20,0.5) 75%, transparent)",
      }}
    />
  );
}

function GoldRuleBottom() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(90deg, transparent, rgba(184,124,20,0.5) 25%, rgba(184,124,20,0.5) 75%, transparent)",
      }}
    />
  );
}

/* ─── Page ─── */

export default function ArchivePage() {
  return (
    <div style={{ backgroundColor: "#09080a" }}>

      {/* ══════════════════════════════════════════
          SECTION 1 · PAGE HEADER
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "#09080a",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* Left — text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding:
              "clamp(64px,8vh,108px) clamp(24px,5vw,72px) clamp(48px,6vh,80px)",
          }}
        >
          {/* Eyebrow */}
          <p
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.82)",
              fontSize: "24px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            The Archive
          </p>

          {/* Title */}
          <h1
            className="font-display"
            style={{
              color: "#f5d050",
              fontSize: "clamp(36px,2.8vw,38px)",
              letterSpacing: "0.07em",
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: "16px",
            }}
          >
            The Archive of a Life<br />Fully Lived
          </h1>

          {/* Greek subtitle */}
          <p
            className="font-serif italic"
            style={{
              color: "rgba(245,208,80,0.72)",
              fontSize: "clamp(21px,1.4vw,16px)",
              letterSpacing: "0.12em",
              marginBottom: "20px",
            }}
          >
            Το Αρχείο
          </p>

          {/* Gold rule */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(245,208,80,0.5)",
              marginBottom: "28px",
            }}
          />

          {/* Intro */}
          <p
            className="font-serif"
            style={{
              color: "rgba(228,216,196,0.62)",
              fontSize: "clamp(23px,1.7vw,18px)",
              lineHeight: 1.95,
              maxWidth: "440px",
              marginBottom: "48px",
            }}
          >
            A preserved collection of photographs, newspaper clippings,
            personal history, fashion records, and family memory honoring Mary
            Pavlatou — Greek icon, international fashion model, mother, artist,
            and woman of rare grace.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            {[
              { label: "Her Life in Chapters", href: "/story" },
              { label: "Explore the Collection", href: "#collection" },
              { label: "The Memorial Book", href: "#book" },
            ].map((btn) => (
              <a
                key={btn.href}
                href={btn.href}
                className="font-display"
                style={{
                  color: "#f5d050",
                  fontSize: "24px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 22px",
                  border: "1px solid rgba(245,208,80,0.58)",
                  transition: "border-color 0.25s",
                }}
              >
                {btn.label}
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path
                    d="M0 3.5H10M7.5 1L10 3.5L7.5 6"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(24px,3vh,56px) clamp(20px,3vw,56px)",
          }}
        >
          <SafeImage
            src="/images/mary-glamour-portrait.jpg"
            alt="Mary Pavlatou — Preserved from the family archive"
            mode="portrait"
            width={900}
            height={1660}
            priority
            caption="Mary Pavlatou · Preserved from the family archive"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 · WHO MARY WAS
      ══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#09080a",
          padding: "clamp(56px,8vh,96px) clamp(24px,5vw,72px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ marginBottom: "clamp(36px,5vw,56px)", textAlign: "center" }}>
            <p
              className="font-display"
              style={{
                color: "rgba(245,208,80,0.78)",
                fontSize: "24px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              The Woman
            </p>
            <h2
              className="font-display"
              style={{
                color: "#f5d050",
                fontSize: "clamp(34px,2.5vw,32px)",
                letterSpacing: "0.1em",
                fontWeight: 400,
                marginBottom: "18px",
              }}
            >
              Who Mary Was
            </h2>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(245,208,80,0.78)",
                margin: "0 auto",
              }}
            />
          </div>

          {/* 5 cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(14px,2vw,22px)",
              justifyContent: "center",
            }}
          >
            {personalityCards.map((card) => (
              <div
                key={card.label}
                style={{
                  flex: "1 1 calc(33.33% - 22px)",
                  minWidth: "220px",
                  maxWidth: "360px",
                  backgroundColor: "#faf5eb",
                  border: "1px solid rgba(184,124,20,0.3)",
                  padding: "clamp(32px,4vw,44px) clamp(26px,3vw,36px)",
                }}
              >
                {/* Roman numeral */}
                <p
                  className="font-display"
                  style={{
                    color: "rgba(184,124,20,0.25)",
                    fontSize: "clamp(32px,4vw,46px)",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {card.numeral}
                </p>
                {/* Label */}
                <p
                  className="font-display"
                  style={{
                    color: "#b87c14",
                    fontSize: "24px",
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {card.label}
                </p>
                {/* Rule */}
                <div
                  style={{
                    width: "22px",
                    height: "1px",
                    background: "rgba(184,124,20,0.4)",
                    marginBottom: "14px",
                  }}
                />
                {/* Body */}
                <p
                  className="font-serif"
                  style={{
                    color: "#2c1e0e",
                    fontSize: "clamp(36px,1.5vw,16px)",
                    lineHeight: 1.9,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 · THE ARCHIVE COLLECTION
      ══════════════════════════════════════════ */}
      <section
        id="collection"
        className="parchment-bg"
        style={{
          position: "relative",
          padding: "clamp(56px,8vh,96px) clamp(24px,5vw,72px)",
        }}
      >
        <GoldRule />
        <GoldRuleBottom />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(12px,2vw,22px)",
            }}
          >
            <p
              className="font-display"
              style={{
                color: "rgba(184,124,20,0.5)",
                fontSize: "24px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              The Materials
            </p>
            <h2
              className="font-display"
              style={{
                color: "#4a320a",
                fontSize: "clamp(36px,2.8vw,34px)",
                letterSpacing: "0.08em",
                fontWeight: 400,
                marginBottom: "22px",
              }}
            >
              A Collection Preserved
            </h2>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(184,124,20,0.4)",
                margin: "0 auto 28px",
              }}
            />
            <p
              className="font-serif"
              style={{
                color: "#3d2a06",
                fontSize: "clamp(23px,1.7vw,18px)",
                lineHeight: 1.95,
                maxWidth: "680px",
                margin: "0 auto clamp(44px,6vw,64px)",
              }}
            >
              What exists in this archive was carried by love. The Pulos Brothers
              preserved their mother's photographs, press clippings, and memories
              for decades before this collection came into being. Mary James then
              restored, translated, and designed each piece into a permanent
              memorial record.
            </p>
          </div>

          {/* 6 category cards — 3 columns */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "clamp(14px,2vw,20px)" }}
          >
            {archiveCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  backgroundColor: "#09080a",
                  border: "1px solid rgba(245,208,80,0.15)",
                  padding: "clamp(28px,4vw,40px) clamp(24px,3vw,32px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div>{cat.icon}</div>
                <h3
                  className="font-display"
                  style={{
                    color: "#f5d050",
                    fontSize: "24px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-serif italic"
                  style={{
                    color: "rgba(245,208,80,0.82)",
                    fontSize: "clamp(21px,1.4vw,14px)",
                    lineHeight: 1.7,
                  }}
                >
                  {cat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 · THE PRESERVED BOOK
      ══════════════════════════════════════════ */}
      <section
        id="book"
        style={{
          backgroundColor: "#09080a",
          padding: "clamp(56px,8vh,96px) clamp(24px,5vw,72px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
            <p
              className="font-display"
              style={{
                color: "rgba(245,208,80,0.78)",
                fontSize: "24px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              The Foundation
            </p>
            <h2
              className="font-display"
              style={{
                color: "#f5d050",
                fontSize: "clamp(36px,2.8vw,34px)",
                letterSpacing: "0.08em",
                fontWeight: 400,
                marginBottom: "18px",
              }}
            >
              The Memorial Book
            </h2>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(245,208,80,0.78)",
              }}
            />
          </div>

          {/* 2-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(44px,6vw,100px)",
              alignItems: "start",
            }}
            className="max-lg:grid-cols-1"
          >
            {/* Left — cover image */}
            <div>
              <SafeImage
                src="/images/cover-hires.jpg"
                alt="The Memorial Book — Compiled by The Pulos Brothers, Designed by Mary James"
                mode="portrait"
                width={900}
                height={1200}
                caption="The Memorial Book · Compiled by The Pulos Brothers · Designed by Mary James"
              />
            </div>

            {/* Right — details */}
            <div>
              {/* Intro paragraph */}
              <p
                className="font-serif"
                style={{
                  color: "rgba(228,216,196,0.72)",
                  fontSize: "clamp(23px,1.7vw,18px)",
                  lineHeight: 1.95,
                  marginBottom: "36px",
                }}
              >
                The memorial book forms the foundation of this archive. Compiled
                by The Pulos Brothers from decades of preserved photographs, press
                clippings, and personal memory. Designed and restored by Mary
                James, the book was created to ensure that Mary Pavlatou's life
                would be permanently honored and remembered.
              </p>

              {/* Credits */}
              <div
                style={{
                  borderLeft: "2px solid rgba(245,208,80,0.58)",
                  paddingLeft: "22px",
                  marginBottom: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p
                  className="font-serif italic"
                  style={{
                    color: "rgba(245,208,80,0.6)",
                    fontSize: "clamp(36px,1.5vw,16px)",
                    lineHeight: 1.75,
                  }}
                >
                  Photo and article compilation: The Pulos Brothers
                </p>
                <p
                  className="font-serif italic"
                  style={{
                    color: "rgba(245,208,80,0.6)",
                    fontSize: "clamp(36px,1.5vw,16px)",
                    lineHeight: 1.75,
                  }}
                >
                  Photo restoration, article restoration, and book design: Mary
                  James
                </p>
              </div>

              {/* Book pages image */}
              <div style={{ marginBottom: "28px" }}>
                <SafeImage
                  src="/images/pages-full.jpg"
                  alt="Pages from the Mary Pavlatou memorial book"
                  mode="landscape"
                  width={1200}
                  height={800}
                />
              </div>

              {/* Caption paragraph */}
              <p
                className="font-serif"
                style={{
                  color: "rgba(205,196,178,0.88)",
                  fontSize: "clamp(36px,1.5vw,16px)",
                  lineHeight: 1.9,
                }}
              >
                The book preserves photographs from Mary's career — portraits,
                runway moments, press recognition, and personal memories. Every
                image was carefully restored to honor the quality of her life and
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 · THE SIX CHAPTERS
      ══════════════════════════════════════════ */}
      <section
        id="chapters"
        className="parchment-bg"
        style={{
          position: "relative",
          padding: "clamp(56px,8vh,96px) clamp(24px,5vw,72px)",
        }}
      >
        <GoldRule />
        <GoldRuleBottom />
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(36px,5vw,56px)",
            }}
          >
            <p
              className="font-display"
              style={{
                color: "rgba(184,124,20,0.5)",
                fontSize: "24px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Her Journey
            </p>
            <h2
              className="font-display"
              style={{
                color: "#4a320a",
                fontSize: "clamp(36px,2.8vw,34px)",
                letterSpacing: "0.08em",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              Mary's Life in Chapters
            </h2>
            <p
              className="font-serif italic"
              style={{
                color: "rgba(74,50,10,0.6)",
                fontSize: "clamp(36px,1.6vw,17px)",
              }}
            >
              A guided path through the moments, places, and roles that shaped
              her legacy.
            </p>
          </div>

          {/* Chapter list */}
          <div>
            {chapters.map((ch, i) => (
              <div
                key={ch.roman}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: "clamp(22px,4vw,48px)",
                  alignItems: "start",
                  padding: "clamp(28px,4vw,40px) 0",
                  borderBottom:
                    i < chapters.length - 1
                      ? "1px solid rgba(184,124,20,0.1)"
                      : "none",
                }}
              >
                {/* Roman numeral */}
                <div style={{ textAlign: "right", paddingTop: "2px" }}>
                  <span
                    className="font-display"
                    style={{
                      color: "rgba(184,124,20,0.16)",
                      fontSize: "clamp(38px,5vw,56px)",
                      lineHeight: 1,
                    }}
                  >
                    {ch.roman}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-display"
                    style={{
                      color: "#3d2a06",
                      fontSize: "clamp(10px,1.1vw,12px)",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {ch.title}
                  </h3>
                  <p
                    className="font-serif"
                    style={{
                      color: "#2c1e0e",
                      fontSize: "clamp(23px,1.7vw,18px)",
                      lineHeight: 1.9,
                      marginBottom: "16px",
                    }}
                  >
                    {ch.body}
                  </p>
                  <Link
                    href="/story"
                    className="font-display"
                    style={{
                      color: "rgba(184,124,20,0.55)",
                      fontSize: "28px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    Read More
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M0 3H8M5.5 1L8 3L5.5 5"
                        stroke="currentColor"
                        strokeWidth="0.75"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 · PRESERVATION CREDITS
      ══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#09080a",
          padding: "clamp(64px,9vh,108px) clamp(24px,5vw,72px)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* GreekDivider */}
          <div style={{ marginBottom: "44px" }}>
            <GreekDivider variant="star" />
          </div>

          {/* Heading */}
          <p
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.78)",
              fontSize: "24px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Archive Credits
          </p>
          <h2
            className="font-display"
            style={{
              color: "#f5d050",
              fontSize: "clamp(36px,2.8vw,34px)",
              letterSpacing: "0.08em",
              fontWeight: 400,
              marginBottom: "12px",
            }}
          >
            Preserved with Love
          </h2>
          <p
            className="font-serif italic"
            style={{
              color: "rgba(245,208,80,0.68)",
              fontSize: "clamp(21px,1.4vw,16px)",
              letterSpacing: "0.1em",
              marginBottom: "24px",
            }}
          >
            Φυλαγμένο με Αγάπη
          </p>

          {/* Gold divider line */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(245,208,80,0.78)",
              margin: "0 auto 52px",
            }}
          />

          {/* Two credits */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(24px,4vw,60px)",
              textAlign: "left",
              marginBottom: "60px",
            }}
            className="max-sm:grid-cols-1"
          >
            {/* Left — Pulos Brothers */}
            <div
              style={{
                border: "1px solid rgba(245,208,80,0.14)",
                padding: "clamp(28px,4vw,40px) clamp(22px,3vw,32px)",
              }}
            >
              <p
                className="font-display"
                style={{
                  color: "#f5d050",
                  fontSize: "24px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                The Pulos Brothers
              </p>
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "rgba(245,208,80,0.72)",
                  marginBottom: "18px",
                }}
              />
              <p
                className="font-serif"
                style={{
                  color: "rgba(228,216,196,0.65)",
                  fontSize: "clamp(36px,1.6vw,17px)",
                  lineHeight: 1.9,
                }}
              >
                Photo and article compilation. Mary's three sons carried her
                memory for decades, ensuring every photograph and document
                survived.
              </p>
            </div>

            {/* Right — Mary James */}
            <div
              style={{
                border: "1px solid rgba(245,208,80,0.14)",
                padding: "clamp(28px,4vw,40px) clamp(22px,3vw,32px)",
              }}
            >
              <p
                className="font-display"
                style={{
                  color: "#f5d050",
                  fontSize: "24px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Mary James
              </p>
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "rgba(245,208,80,0.72)",
                  marginBottom: "18px",
                }}
              />
              <p
                className="font-serif"
                style={{
                  color: "rgba(228,216,196,0.65)",
                  fontSize: "clamp(36px,1.6vw,17px)",
                  lineHeight: 1.9,
                }}
              >
                Photo restoration, article restoration, and book design. Every
                image in this archive passed through her hands to be preserved
                for generations.
              </p>
            </div>
          </div>

          {/* Closing line */}
          <div style={{ marginBottom: "40px" }}>
            <GreekDivider variant="minimal" />
          </div>

          <p
            className="font-serif italic"
            style={{
              color: "rgba(245,208,80,0.55)",
              fontSize: "clamp(34px,1.9vw,20px)",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
            }}
          >
            This archive exists because love refuses to forget.
          </p>
        </div>
      </section>

    </div>
  );
}
