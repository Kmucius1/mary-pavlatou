"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Chapter data ───────────────────────────────────────────────────────────

type Chapter = {
  id: string;
  roman: string;
  title: string;
  greek: string;
  body: string;
  cta: { label: string; href: string };
  imageLeft: boolean;
  images: { src: string; alt: string; w: number; h: number; rot?: number; dx?: number; dy?: number }[];
  extras?: "quality-cards";
};

const chapters: Chapter[] = [
  {
    id: "names",
    roman: "I",
    title: "The Names She Carried",
    greek: "Τα Ονόματα της",
    body: "Mary Pavlatou was the name the world came to know — and the name her family carries with pride. Her sons dedicate their book of memories to her: the one they call God's Special Angel.",
    cta: { label: "View Archive Sources", href: "/archive" },
    imageLeft: false,
    images: [
      { src: "/images/book-clipping-etam-miss-mary.png", alt: "Miss Mary Pavlatou — ETAM press clipping, Apogevmatini newspaper", w: 1388, h: 1838, rot: -3 },
      { src: "/images/mary-young-portrait.jpg", alt: "Mary Pavlatou — Colorized portrait from the family archive dedication page", w: 1388, h: 1838, rot: 4, dx: 60, dy: 30 },
    ],
  },
  {
    id: "greece",
    roman: "II",
    title: "A Daughter of Greece",
    greek: "Ρίζες Ελληνικές",
    body: "Mary's life carried the dignity, faith, and pride of her Greek roots. Her story is woven with family, culture, and the enduring Greek idea of χάρη — grace that lives in both presence and soul.",
    cta: { label: "Explore Her Heritage", href: "/archive" },
    imageLeft: true,
    images: [
      { src: "/images/mary-veil-hat.jpg", alt: "Mary Pavlatou — Portrait with veil hat and pearl necklace, from the family archive", w: 1388, h: 1838 },
    ],
    extras: "quality-cards",
  },
  {
    id: "war",
    roman: "III",
    title: "A Child of War and Resilience",
    greek: "Πόλεμος και Δύναμη",
    body: "The family archive remembers Mary as a child hero of World War II. Her strength, courage, and spirit during those difficult years shaped the extraordinary woman she would become.",
    cta: { label: "View the Archive", href: "/archive" },
    imageLeft: false,
    images: [
      { src: "/images/book-clipping-etam-garden.png", alt: "Mary Pavlatou at ETAM garden — archival newspaper clipping", w: 1388, h: 1838, rot: -2 },
      { src: "/images/mary-pearl-necklace-portrait.png", alt: "Mary Pavlatou — Colorized portrait with pearl necklace and flower hat, family archive", w: 960, h: 1200, rot: 3, dx: 55, dy: 40 },
    ],
  },
  {
    id: "woman",
    roman: "IV",
    title: "A Young Woman Ahead of Her Time",
    greek: "Μια Γυναίκα Μπροστά από την Εποχή της",
    body: "As a young woman, Mary combined artistic sensibility with discipline and intellectual depth. She studied dance, music, and languages. She pursued beauty not as vanity but as a form of personal excellence.",
    cta: { label: "Her Archive", href: "/archive" },
    imageLeft: true,
    images: [
      { src: "/images/mary-white-gown.jpg", alt: "Mary Pavlatou — Full-length colorized portrait in white tiered gown, family archive", w: 800, h: 1388 },
    ],
  },
  {
    id: "chicago",
    roman: "V",
    title: "Chicago and the Discipline of Fashion",
    greek: "Η Τέχνη του Μανεκέν",
    body: "At the Patricia Vance School of Fashion in Chicago, Mary studied the art of the μανεκέν — posture, movement, and presence as a living language. She learned that the body in motion carries meaning.",
    cta: { label: "Fashion World", href: "/fashion" },
    imageLeft: false,
    images: [
      { src: "/images/book-clipping-mary-celebrated.png", alt: "Mary Pavlatou — A celebrated fashion model, press clipping", w: 1388, h: 1838, rot: -1 },
    ],
  },
  {
    id: "mannequin",
    roman: "VI",
    title: "The First Greek Certified Mannequin",
    greek: "Το Πρώτο Ελληνικό Μανεκέν",
    body: "Mary returned to Greece as the first Greek certified professional mannequin — a distinction earned through rigorous training and unshakable commitment to her craft. \"How I Became the First Greek Certified Mannequin\" — Apogevmatini newspaper interview.",
    cta: { label: "Fashion World", href: "/fashion" },
    imageLeft: true,
    images: [
      { src: "/images/mary-runway-blue.jpg", alt: "Mary Pavlatou — Blue ball gown on runway, colorized archival photograph", w: 1388, h: 1838 },
    ],
  },
  {
    id: "athens",
    roman: "VII",
    title: "Athens Recognizes Her",
    greek: "Η Αθήνα Τη Αναγνωρίζει",
    body: "Mary became one of Athens's best-known μανεκέν — appearing at ETAM and Halifa salons at the Grande Bretagne, at the Tsitsopoulos house at the King George Hotel, and at couture houses across the city.",
    cta: { label: "View Archive", href: "/archive" },
    imageLeft: false,
    images: [
      { src: "/images/book-clipping-mohair-coat.png", alt: "Mary Pavlatou presenting an elegant mohair coat — press clipping", w: 1388, h: 1838, rot: 2 },
      { src: "/images/book-clipping-hat-mary.png", alt: "Μανεκέν Μαίρη Παυλάτου — Rose Valois hat model at Archontaki-Kallergi salon", w: 1388, h: 1838, rot: -3, dx: 50, dy: 45 },
    ],
  },
  {
    id: "continents",
    roman: "VIII",
    title: "Across Continents",
    greek: "Πέρα από Σύνορα",
    body: "Her career connected her with international fashion — training in Chicago, walking the salons of Athens, modeling for the great houses of the era. She carried Greece with her everywhere she went.",
    cta: { label: "Fashion World", href: "/fashion" },
    imageLeft: true,
    images: [
      { src: "/images/mary-rhinestone-glamour.png", alt: "Mary Pavlatou — Colorized glamour portrait with rhinestone earrings, family archive", w: 960, h: 1200 },
    ],
  },
  {
    id: "sound",
    roman: "IX",
    title: "The Sound Before She Walked",
    greek: "Ο Ήχος Πριν την Εμφάνιση",
    body: "Her signature runway music was the theme from The Third Man — cinematic, timeless, and unforgettable. The room changed before she entered it. Those who saw her on stage never forgot the moment.",
    cta: { label: "Archive", href: "/archive" },
    imageLeft: false,
    images: [
      { src: "/images/book-clipping-evening-gown.png", alt: "Mary Pavlatou modeling a magnificent evening gown in the American style", w: 1388, h: 1838 },
    ],
  },
  {
    id: "family",
    roman: "X",
    title: "The Dream of Family",
    greek: "Το Όνειρο της Οικογένειας",
    body: "\"My dream is to become one of the world's finest mannequins and, one day, to create a good family.\" She achieved both. Her sons are her greatest legacy — the guardians of her memory.",
    cta: { label: "Legacy", href: "/legacy" },
    imageLeft: true,
    images: [
      { src: "/images/mary-glamour-portrait.jpg", alt: "Mary Pavlatou — Colorized portrait with diamond earrings, from the family archive", w: 1388, h: 1838 },
    ],
  },
  {
    id: "eternal",
    roman: "XI",
    title: "Eternal Memory",
    greek: "Αιωνία η Μνήμη",
    body: "The Pulos Brothers kept her photographs, clippings, and memories safe for decades. Through their compilation and Mary James's restoration and book design, Mary's story was brought back into the light. Αιωνία η μνήμη της.",
    cta: { label: "Enter the Archive", href: "/archive" },
    imageLeft: false,
    images: [
      { src: "/images/portrait-mary-color-gold-lapels.png", alt: "Mary Pavlatou — Colorized portrait with gold lapels, family archive", w: 1388, h: 1838, rot: -2 },
      { src: "/images/book-clipping-fur-coat.png", alt: "Mary Pavlatou presenting a fur coat — archival press clipping", w: 1388, h: 1838, rot: 3, dx: 55, dy: 50 },
    ],
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function OrnamentDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "14px 0 20px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
        <path d="M9 1C9 1 5 5 1 5C5 5 9 9 9 9C9 9 13 5 17 5C13 5 9 1 9 1Z" fill="#C5A84A" opacity="0.8" />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
    </div>
  );
}

function PhotoFrame({ img, maxH, style }: {
  img: Chapter["images"][number];
  maxH: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{
      border: "6px solid #F0EBD9",
      outline: "1px solid #C5A84A",
      boxShadow: "0 4px 20px rgba(139,112,48,0.16)",
      background: "#EDE8D8",
      transform: `rotate(${img.rot ?? 0}deg)`,
      display: "inline-block",
      ...style,
    }}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.w}
        height={img.h}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: maxH,
          objectFit: "contain",
          objectPosition: "top center",
          display: "block",
        }}
        loading="lazy"
      />
    </div>
  );
}

function ChapterCollage({ images }: { images: Chapter["images"] }) {
  if (images.length === 1) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <PhotoFrame img={images[0]} maxH="300px" style={{ maxWidth: "200px" }} />
      </div>
    );
  }
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "36px", paddingRight: "28px" }}>
      <PhotoFrame img={images[0]} maxH="220px" style={{ width: "130px", position: "relative", zIndex: 1 }} />
      <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 2 }}>
        <PhotoFrame img={images[1]} maxH="195px" style={{ width: "120px" }} />
      </div>
    </div>
  );
}

const qualityCards = [
  { label: "Heritage", text: "Greek by blood and by heart", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L12.5 7H18L13.5 10.5L15 16L10 13L5 16L6.5 10.5L2 7H7.5Z" stroke="#8B7030" strokeWidth="1.2" fill="none" /></svg> },
  { label: "Faith", text: "Guided by values and tradition", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><line x1="10" y1="2" x2="10" y2="18" stroke="#8B7030" strokeWidth="1.3" /><line x1="4" y1="7" x2="16" y2="7" stroke="#8B7030" strokeWidth="1.3" /></svg> },
  { label: "Family", text: "The heart of her world", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><ellipse cx="10" cy="6" rx="3.5" ry="4.5" stroke="#8B7030" strokeWidth="1.2" /><path d="M3.5 18c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="#8B7030" strokeWidth="1.2" strokeLinecap="round" /></svg> },
  { label: "Grace", text: "A way of life, not just beauty", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3C10 3 6 7 6 11C6 13.2 7.8 15 10 15C12.2 15 14 13.2 14 11C14 7 10 3 10 3Z" stroke="#8B7030" strokeWidth="1.2" fill="none" /><line x1="10" y1="15" x2="10" y2="18" stroke="#8B7030" strokeWidth="1.2" /><line x1="7" y1="17" x2="13" y2="17" stroke="#8B7030" strokeWidth="1.2" /></svg> },
];

// ─── Main ───────────────────────────────────────────────────────────────────

export default function StoryLifeClient() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioning = useRef(false);

  function goTo(i: number) {
    if (i === activeIdx || transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setActiveIdx(i);
      setVisible(true);
      transitioning.current = false;
    }, 240);
  }

  function prev() { goTo((activeIdx - 1 + chapters.length) % chapters.length); }
  function next() { goTo((activeIdx + 1) % chapters.length); }

  const chapter = chapters[activeIdx];

  return (
    <main style={{ backgroundColor: "#F0EBD9", overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "clamp(500px,85vh,860px)",
        borderBottom: "1px solid #D0C4A0",
        overflow: "hidden",
      }} className="max-lg:!grid-cols-1">

        {/* Left: warm cream text panel */}
        <div style={{
          background: "linear-gradient(160deg, #F5F1E6 0%, #EDE8D8 100%)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(56px,8vw,100px) clamp(36px,5vw,72px)",
          position: "relative",
          borderRight: "1px solid #D8C48E",
        }}>
          {/* Subtle corner ornament top-left */}
          <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: "absolute", top: "28px", left: "28px", opacity: 0.4 }}>
            <path d="M2 2 L2 18 M2 2 L18 2" stroke="#B9974D" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: "absolute", bottom: "28px", right: "28px", opacity: 0.4 }}>
            <path d="M38 38 L38 22 M38 38 L22 38" stroke="#B9974D" strokeWidth="1.2" strokeLinecap="round" />
          </svg>

          {/* Eyebrow */}
          <p className="font-display" style={{ color: "#B9974D", fontSize: "8px", letterSpacing: "0.52em", textTransform: "uppercase", fontWeight: 700, marginBottom: "24px" }}>
            Her Life · Η Ζωή της
          </p>

          {/* Title */}
          <h1 className="font-display" style={{
            color: "#6A4F1E",
            fontSize: "clamp(38px,5.5vw,72px)",
            letterSpacing: "0.10em",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "24px",
          }}>
            Η Ζωή<br />της Μαρίας
          </h1>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
            <div style={{ width: "44px", height: "1px", background: "#B9974D" }} />
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="6" height="6" stroke="#B9974D" strokeWidth="0.8" transform="rotate(45 3.5 3.5)" />
            </svg>
            <div style={{ width: "20px", height: "1px", background: "rgba(185,151,77,0.4)" }} />
          </div>

          {/* Body */}
          <p className="font-serif" style={{
            color: "#2A2018",
            fontSize: "clamp(16px,1.6vw,19px)",
            lineHeight: 1.85,
            fontWeight: 500,
            marginBottom: "28px",
          }}>
            A life of grace, discipline, intelligence, and love — from a Greek heritage to the world&rsquo;s greatest fashion houses.
          </p>

          {/* Quote */}
          <div style={{ borderLeft: "2px solid rgba(185,151,77,0.5)", paddingLeft: "20px", marginBottom: "36px" }}>
            <p className="font-serif italic" style={{ color: "#5A4A30", fontSize: "clamp(13px,1.2vw,15px)", lineHeight: 1.9, marginBottom: "8px" }}>
              &ldquo;My dream is to become one of the world&rsquo;s finest mannequins and, one day, to create a good family.&rdquo;
            </p>
            <p className="font-display" style={{ color: "#B9974D", fontSize: "8px", letterSpacing: "0.28em", textTransform: "uppercase" }}>— Mary Pavlatou</p>
          </div>

          {/* Subtle scroll nudge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p className="font-display" style={{ color: "rgba(107,90,60,0.55)", fontSize: "7.5px", letterSpacing: "0.40em", textTransform: "uppercase" }}>
              Scroll to her story
            </p>
            <svg width="20" height="7" viewBox="0 0 20 7" fill="none" aria-hidden="true">
              <path d="M0 3.5H18M14.5 1L18 3.5L14.5 6" stroke="rgba(185,151,77,0.5)" strokeWidth="0.9" />
            </svg>
          </div>
        </div>

        {/* Right: atmospheric ballroom image */}
        <div style={{ position: "relative", minHeight: "clamp(380px,60vh,860px)" }}>
          <Image
            src="/images/story-hero-ballroom.png"
            alt="Atmospheric 1950s Athenian ballroom — marble columns, candlelight, silk and couture"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          {/* Subtle left-edge fade to blend with the panel border */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(237,232,216,0.18) 0%, transparent 12%)",
            pointerEvents: "none",
          }} />
        </div>
      </section>

      {/* ── Greek key strip ── */}
      <div aria-hidden="true" style={{ height: "10px", background: "repeating-linear-gradient(90deg, rgba(139,112,48,0.35) 0px, rgba(139,112,48,0.35) 2px, transparent 2px, transparent 7px)", borderBottom: "1px solid #D0C4A0" }} />

      {/* ── Roman numeral chapter strip ── */}
      <div style={{ background: "#EDE8D8", borderBottom: "1px solid #D0C4A0", padding: "0 clamp(20px,5vw,48px)", overflowX: "auto", display: "flex", gap: 0, width: "100%" }}>
        {chapters.map((ch, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={ch.id}
              onClick={() => goTo(i)}
              className="font-display"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "14px 16px",
                color: isActive ? "#8B7030" : "#A09080",
                fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase",
                fontWeight: isActive ? 700 : 500,
                whiteSpace: "nowrap",
                borderBottom: isActive ? "2px solid #8B7030" : "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {ch.roman}
            </button>
          );
        })}
      </div>

      {/* ── Single chapter view ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(48px,6vh,80px) clamp(28px,5vw,64px)" }}>

        {/* Fade-in chapter card */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.24s ease, transform 0.24s ease",
        }}>
          <div style={{
            background: "linear-gradient(145deg, #F8F4EA 0%, #EFE5CC 100%)",
            border: "1px solid #D8C48E",
            borderRadius: "6px",
            boxShadow: "0 4px 32px rgba(139,106,47,0.10), 0 1px 4px rgba(139,106,47,0.08)",
            padding: "clamp(32px,4vw,56px)",
            overflow: "hidden",
            display: "flex",
            gap: "clamp(32px,4vw,60px)",
            alignItems: "flex-start",
          }}>
            {/* Text — always left, always wide */}
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.44em", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
                Chapter {chapter.roman}
              </p>
              <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(22px,2.8vw,36px)", letterSpacing: "0.06em", fontWeight: 700, lineHeight: 1.15, marginBottom: "6px" }}>
                {chapter.title}
              </h2>
              <p className="font-serif italic" style={{ color: "#8B7030", fontSize: "clamp(16px,1.6vw,20px)", marginBottom: 0 }}>
                {chapter.greek}
              </p>
              <OrnamentDivider />
              <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(14px,1.35vw,17px)", lineHeight: 1.95, marginBottom: "24px" }}>
                {chapter.body}
              </p>

              {chapter.extras === "quality-cards" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "28px" }} className="max-sm:grid-cols-2">
                  {qualityCards.map((card) => (
                    <div key={card.label} style={{ textAlign: "center", padding: "14px 8px" }}>
                      <div style={{ marginBottom: "8px", display: "flex", justifyContent: "center" }}>{card.icon}</div>
                      <p className="font-display" style={{ color: "#1C1814", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>{card.label}</p>
                      <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "12px", lineHeight: 1.6 }}>{card.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <Link
                href={chapter.cta.href}
                className="font-display"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "12px",
                  color: "#8B7030", border: "1px solid #8B7030",
                  padding: "11px 22px",
                  fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase",
                  fontWeight: 700, textDecoration: "none",
                  transition: "background 0.22s ease, color 0.22s ease",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#8B7030"; el.style.color = "#F5F1E6"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#8B7030"; }}
              >
                {chapter.cta.label}
                <svg width="18" height="6" viewBox="0 0 18 6" fill="none" aria-hidden="true">
                  <path d="M0 3H15.5M12 1L15.5 3L12 5" stroke="currentColor" strokeWidth="1" />
                </svg>
              </Link>
            </div>

            {/* Image — always right, fixed width, contained */}
            <div style={{ flexShrink: 0, width: "clamp(160px,18vw,220px)", overflow: "hidden" }}>
              <ChapterCollage images={chapter.images} />
            </div>
          </div>
        </div>

        {/* ── Prev / Next nav ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "clamp(28px,3vh,40px)" }}>

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous chapter"
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "none", border: "none", cursor: "pointer",
              color: "#8B7030", padding: "8px 0",
              opacity: activeIdx === 0 ? 0.35 : 1,
              transition: "opacity 0.2s ease",
            }}
            disabled={activeIdx === 0}
          >
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid #B9974D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                <path d="M13 4H1M5 1L1 4L5 7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="font-display" style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }} aria-hidden="true">
              {activeIdx > 0 ? chapters[activeIdx - 1].title : ""}
            </span>
          </button>

          {/* Counter */}
          <p className="font-display" style={{ color: "#A09080", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            {chapter.roman} <span style={{ color: "#D8C48E", margin: "0 6px" }}>·</span> {activeIdx + 1} of {chapters.length}
          </p>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next chapter"
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "none", border: "none", cursor: "pointer",
              color: "#8B7030", padding: "8px 0",
              opacity: activeIdx === chapters.length - 1 ? 0.35 : 1,
              transition: "opacity 0.2s ease",
            }}
            disabled={activeIdx === chapters.length - 1}
          >
            <span className="font-display" style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, textAlign: "right" }} aria-hidden="true">
              {activeIdx < chapters.length - 1 ? chapters[activeIdx + 1].title : ""}
            </span>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid #B9974D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                <path d="M1 4H13M9 1L13 4L9 7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </button>
        </div>

        {/* Archive card */}
        <div style={{ marginTop: "clamp(32px,4vh,48px)", border: "1px solid #C5A84A", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }} className="max-sm:flex-col max-sm:items-start">
          <div>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "7px", letterSpacing: "0.36em", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>View Related Archive</p>
            <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "13px", lineHeight: 1.65 }}>
              Explore the original clippings, articles, and notes that tell Mary&rsquo;s story.
            </p>
          </div>
          <Link href="/archive" className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.26em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            Archive
            <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
              <path d="M0 2.5H12M9 1L12 2.5L9 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
