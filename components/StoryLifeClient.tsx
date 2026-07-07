"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BilingualHeading from "@/components/BilingualHeading";
import GreekTerm from "@/components/GreekTerm";

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
      { src: "/images/mary-archive-sundress-hat.png", alt: "Mary Pavlatou — Full-body newspaper photograph in white sundress and wide-brimmed hat, family archive", w: 1388, h: 1838, rot: -3 },
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
      { src: "/images/mary-archive-colorized-veiled-hat.png", alt: "Mary Pavlatou — Colorized close-up portrait with veiled hat and pearl choker, from the family archive", w: 1388, h: 1838 },
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
      { src: "/images/mary-archive-beaded-gown.png", alt: "Mary Pavlatou — Full-body photograph in draped, beaded evening gown with train, family archive", w: 1388, h: 1838, rot: -2 },
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
      { src: "/images/mary-archive-floral-gown-tiara.png", alt: "Mary Pavlatou — Full-body photograph in ornate floral-embroidered gown with tiara headpiece, family archive", w: 800, h: 1388 },
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
      { src: "/images/mary-archive-colorized-bow-portrait.png", alt: "Mary Pavlatou — Colorized close-up portrait with bow headband, family archive", w: 1388, h: 1838, rot: -1 },
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
      { src: "/images/mary-archive-fishnet-gown-named.png", alt: "Newspaper feature — \"How I Became the First Greek Certified Mannequin,\" Mary Pavlatou demonstrating an outfit in a fishnet-pattern gown", w: 1388, h: 1838 },
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
      { src: "/images/mary-archive-hat-mirror.png", alt: "Newspaper clipping — hat feature with Mary Pavlatou at the mirror, Archontaki-Kallergi salon", w: 1388, h: 1838, rot: 2 },
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
      { src: "/images/mary-archive-colorized-dramatic-portrait.png", alt: "Mary Pavlatou — Colorized dramatic close-up portrait with diamond earring, family archive", w: 960, h: 1200 },
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
      { src: "/images/mary-archive-ballgown-gloves.png", alt: "Mary Pavlatou — Full-body photograph in voluminous evening ball gown with long gloves", w: 1388, h: 1838 },
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
      { src: "/images/mary-archive-colorized-twirl-ballgown.png", alt: "Mary Pavlatou — Colorized photograph twirling in a white floral-bodice ballgown, from the family archive", w: 1388, h: 1838 },
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
      { src: "/images/mary-archive-strapless-cocktail-named.png", alt: "Newspaper feature referencing \"the style of Mary Pavlatou\" — strapless patterned cocktail dress, family archive", w: 1388, h: 1838, rot: -2 },
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

      {/* ── Hero: full banner section (rebuilt from the "World of Fashion" design) ── */}
      <section style={{
        position: "relative",
        background: "linear-gradient(160deg, #1C1814 0%, #2A2318 40%, #3A2E1E 100%)",
        borderBottom: "2px solid #C5A84A",
        overflow: "hidden",
        padding: "clamp(40px,6vh,84px) clamp(24px,5vw,72px)",
      }}>
        {/* Subtle pattern overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
          backgroundImage: "repeating-linear-gradient(90deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px)",
        }} />
        {/* Decorative double frame */}
        <div aria-hidden="true" style={{ position: "absolute", inset: "14px", border: "1px solid rgba(185,151,77,0.45)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: "19px", border: "1px solid rgba(185,151,77,0.22)", pointerEvents: "none" }} />

        {/* Ghosted side portraits */}
        <div aria-hidden="true" style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "16%",
          backgroundImage: "url('/images/mary-runway-white.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.1, maskImage: "linear-gradient(to right, black, transparent)", WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "16%",
          backgroundImage: "url('/images/mary-glamour-portrait.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.1, maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          pointerEvents: "none",
        }} />

        {/* Top-center column motif with rules */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", maxWidth: "1120px", margin: "0 auto clamp(14px,3vh,34px)", position: "relative" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
          <svg width="34" height="42" viewBox="0 0 32 40" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <rect x="0" y="0" width="32" height="4" rx="1" fill="#B9974D" />
            <rect x="3" y="4" width="26" height="3" fill="#B9974D" opacity="0.8" />
            <rect x="7" y="7" width="18" height="26" fill="#D8C48E" opacity="0.5" />
            {[9, 13, 17, 21].map((x) => <rect key={x} x={x} y="7" width="1" height="26" fill="#B9974D" opacity="0.3" />)}
            <rect x="3" y="33" width="26" height="3" fill="#B9974D" opacity="0.8" />
            <rect x="0" y="36" width="32" height="4" rx="1" fill="#B9974D" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
        </div>

        {/* 3-column banner content */}
        <div
          className="max-lg:!grid-cols-1 max-lg:text-center"
          style={{
            maxWidth: "1200px", margin: "0 auto", position: "relative",
            display: "grid", gridTemplateColumns: "1.25fr 1.3fr 1fr",
            gap: "clamp(28px,4vw,60px)", alignItems: "center",
          }}
        >
          {/* Left: title block */}
          <div className="max-lg:order-2">
            <p className="font-display" style={{ color: "#C5A84A", fontSize: "13px", letterSpacing: "0.42em", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>
              The World of Fashion
            </p>
            <BilingualHeading
              as="h1"
              el="Ο Κόσμος της Μόδας"
              en={<>The World<br />of Fashion</>}
              className="font-display"
              style={{ color: "#F5F1E6", fontSize: "clamp(40px,5.4vw,80px)", letterSpacing: "0.02em", fontWeight: 700, lineHeight: 1.02 }}
              subStyle={{ fontSize: "clamp(19px,1.9vw,26px)", marginTop: "16px", color: "#C5A84A", fontWeight: 700, fontStyle: "italic", letterSpacing: "0.02em" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "22px 0", justifyContent: "flex-start" }} className="max-lg:!justify-center">
              <div style={{ width: "52px", height: "1px", background: "#B9974D" }} />
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="6" height="6" stroke="#B9974D" strokeWidth="0.8" transform="rotate(45 3.5 3.5)" />
              </svg>
              <div style={{ width: "24px", height: "1px", background: "rgba(185,151,77,0.4)" }} />
            </div>
            <p className="font-serif" style={{ color: "rgba(245,241,230,0.75)", fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.85, fontWeight: 500, maxWidth: "340px" }} >
              A celebration of timeless style, heritage, and the art of couture.
            </p>
          </div>

          {/* Center: portrait */}
          <div className="max-lg:order-1" style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/mary-white-gown.jpg"
              alt="Mary Pavlatou — full-length colorized portrait in a white tiered couture gown"
              width={800}
              height={1388}
              priority
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "clamp(360px,64vh,640px)", objectFit: "contain", display: "block", filter: "drop-shadow(0 10px 30px rgba(139,112,48,0.22))" }}
            />
          </div>

          {/* Right: pull quote */}
          <div className="max-lg:order-3">
            <svg width="30" height="24" viewBox="0 0 28 22" fill="none" aria-hidden="true" style={{ marginBottom: "14px", opacity: 0.7 }} className="max-lg:mx-auto">
              <path d="M0 22V12.5C0 6.5 3.5 2.5 10.5 0L12 2.5C9.4 3.5 7.7 5.5 7 8.5H12V22H0ZM16 22V12.5C16 6.5 19.5 2.5 26.5 0L28 2.5C25.4 3.5 23.7 5.5 23 8.5H28V22H16Z" fill="#C5A84A" />
            </svg>
            <blockquote className="font-serif italic" style={{ color: "rgba(245,241,230,0.85)", fontSize: "clamp(16px,1.6vw,20px)", lineHeight: 1.75, marginBottom: "18px" }}>
              My dream is to become one of the world&rsquo;s finest mannequins and, one day, to create a good family.
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }} className="max-lg:justify-center">
              <div style={{ width: "40px", height: "1px", background: "#B9974D" }} />
              <div style={{ width: "16px", height: "1px", background: "rgba(185,151,77,0.4)" }} />
            </div>
            <p className="font-display" style={{ color: "#C5A84A", fontSize: "13px", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 700, lineHeight: 1.7 }}>
              Mary Pavlatou<br />
              <span style={{ color: "rgba(197,168,74,0.75)", fontSize: "11px", letterSpacing: "0.2em" }}>Apogevmatini Interview</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Greek key strip ── */}
      <div aria-hidden="true" style={{ height: "10px", background: "repeating-linear-gradient(90deg, rgba(139,112,48,0.35) 0px, rgba(139,112,48,0.35) 2px, transparent 2px, transparent 7px)", borderBottom: "1px solid #D0C4A0" }} />

      {/* ── Single chapter view (with vertical chapter rail) ── */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(48px,6vh,80px) clamp(28px,5vw,64px)", display: "flex", gap: "clamp(28px,4vw,56px)", alignItems: "flex-start" }}>

        {/* ── Vertical chapter timeline rail (left) ── */}
        <nav
          aria-label="Chapter navigation — jump to a chapter"
          className="hidden lg:block"
          style={{ position: "sticky", top: "108px", flexShrink: 0, width: "150px", alignSelf: "flex-start" }}
        >
          <p className="font-display" style={{ color: "#6A4F1E", fontSize: "11px", letterSpacing: "0.34em", textTransform: "uppercase", fontWeight: 700, marginBottom: "3px" }}>
            The Chapters
          </p>
          <p className="font-serif italic" style={{ color: "#6A4F1E", fontSize: "14px", marginBottom: "18px", fontWeight: 700 }}>
            Τα Κεφάλαια
          </p>

          <div style={{ position: "relative" }}>
            {/* vertical connecting line */}
            <div aria-hidden="true" style={{ position: "absolute", left: "6px", top: "12px", bottom: "12px", width: "1px", background: "linear-gradient(to bottom, transparent, #C5A84A 10%, #C5A84A 90%, transparent)" }} />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {chapters.map((ch, i) => {
                const isActive = activeIdx === i;
                return (
                  <li key={ch.id}>
                    <button
                      onClick={() => goTo(i)}
                      className="font-display"
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`Chapter ${ch.roman} — ${ch.title}`}
                      style={{
                        display: "flex", alignItems: "center", gap: "14px",
                        background: "none", border: "none", cursor: "pointer",
                        padding: "7px 0", width: "100%", textAlign: "left",
                      }}
                    >
                      {/* timeline dot */}
                      <span style={{ width: "13px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{
                          width: isActive ? "11px" : "7px",
                          height: isActive ? "11px" : "7px",
                          borderRadius: "50%",
                          background: isActive ? "#8B7030" : "#F0EBD9",
                          border: `1.5px solid ${isActive ? "#8B7030" : "#C5A84A"}`,
                          boxShadow: isActive ? "0 0 0 3px rgba(139,112,48,0.15)" : "none",
                          transition: "all 0.2s ease",
                        }} />
                      </span>
                      {/* roman numeral */}
                      <span style={{
                        fontSize: isActive ? "16px" : "13px",
                        letterSpacing: "0.12em",
                        color: isActive ? "#6A4F1E" : "#A0906E",
                        fontWeight: isActive ? 700 : 500,
                        transition: "all 0.2s ease",
                      }}>
                        {ch.roman}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* ── Chapter content column ── */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>

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
              <p className="font-display" style={{ color: "#6A4F1E", fontSize: "11px", letterSpacing: "0.44em", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
                Chapter {chapter.roman}
              </p>
              <BilingualHeading
                as="h2"
                el={chapter.greek}
                en={chapter.title}
                className="font-display"
                style={{ color: "#6A4F1E", fontSize: "clamp(22px,2.8vw,36px)", letterSpacing: "0.06em", fontWeight: 700, lineHeight: 1.15 }}
                subStyle={{ color: "#6A4F1E", fontSize: "clamp(18px,1.5vw,22px)", marginTop: "6px", fontStyle: "italic", fontWeight: 700 }}
              />
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
                  color: "#6A4F1E", border: "1px solid #8B7030",
                  padding: "11px 22px",
                  fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase",
                  fontWeight: 700, textDecoration: "none",
                  transition: "background 0.22s ease, color 0.22s ease",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#8B7030"; el.style.color = "#F5F1E6"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#6A4F1E"; }}
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
            <span className="font-display" style={{ color: "#6A4F1E", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }} aria-hidden="true">
              {activeIdx > 0 ? chapters[activeIdx - 1].title : ""}
            </span>
          </button>

          {/* Counter */}
          <p className="font-display" style={{ color: "#6A4F1E", fontSize: "12px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
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
            <span className="font-display" style={{ color: "#6A4F1E", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, textAlign: "right" }} aria-hidden="true">
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
            <p className="font-display" style={{ color: "#6A4F1E", fontSize: "10px", letterSpacing: "0.36em", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>View Related Archive</p>
            <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "13px", lineHeight: 1.65 }}>
              Explore the original clippings, articles, and notes that tell Mary&rsquo;s story.
            </p>
          </div>
          <Link href="/archive" className="font-display" style={{ color: "#6A4F1E", fontSize: "11px", letterSpacing: "0.26em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            Archive
            <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
              <path d="M0 2.5H12M9 1L12 2.5L9 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}
