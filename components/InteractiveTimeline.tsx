"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    number: "01",
    era: "Her Identity",
    title: "The Names She Carried",
    greek: "Η Ταυτότητά Της",
    body: "She was Mary Pavlatou — to the fashion world, to her family, and to everyone who remembers her. One name. One extraordinary woman.",
    image: "/images/mary-young-portrait.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Early Portrait",
    href: "/story",
  },
  {
    number: "02",
    era: "Heritage",
    title: "A Daughter of Greece",
    greek: "Κόρη της Ελλάδας",
    body: "Born into a Greece that prized grace, intellect, and strength. Her character was formed long before the runway found her.",
    image: "/images/mary-glamour-portrait.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Glamour Portrait",
    href: "/story",
  },
  {
    number: "03",
    era: "Her Range",
    title: "A Renaissance Woman",
    greek: "Γυναίκα της Αναγέννησης",
    body: "Awards in dance, music, art, writing, oratory, academics, and sport. Several languages. Advanced university degrees. Offers from film and theatre. The portrait was only the beginning.",
    image: "/images/mary-portrait-framed.jpg",
    imageW: 900,
    imageH: 1200,
    alt: "Mary Pavlatou — Framed Portrait",
    href: "/story",
  },
  {
    number: "04",
    era: "Chicago · Training",
    title: "The Discipline of Fashion",
    greek: "Η Τέχνη της Μόδας",
    body: "At the Patricia Vance School of Fashion in Chicago, she studied modeling as science, art, and psychology. Every movement a message. Every step a choice.",
    image: "/images/mary-veil-hat.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Hat Portrait",
    href: "/story",
  },
  {
    number: "05",
    era: "A Historic First",
    title: "The First Greek Certified Mannequin",
    greek: "Η Πρώτη Ελληνίδα",
    body: "She became the first Greek woman to earn an official certified diploma as a professional mannequin. A distinction earned through discipline, not simply beauty.",
    image: "/images/mary-runway-white.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — White Gown on Runway",
    href: "/story",
  },
  {
    number: "06",
    era: "Athens",
    title: "Athens Recognizes Her",
    greek: "Η Αθήνα την Αναγνωρίζει",
    body: "She became Athens's best-known mannequin — appearing at the Hotel Grande Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club.",
    image: "/images/mary-runway-blue.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Blue Ball Gown on Runway",
    href: "/story",
  },
  {
    number: "07",
    era: "Haute Couture",
    title: "The Great Fashion Houses",
    greek: "Ο Κόσμος της Μόδας",
    body: "Christian Dior. Hubert de Givenchy. Jacques Fath. Pierre Balmain. Nina Ricci. She carried the defining names of postwar fashion to Athenian audiences.",
    image: "/images/mary-white-gown.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — White Evening Gown",
    href: "/fashion",
  },
  {
    number: "08",
    era: "Her Signature",
    title: "The Sound Before She Walked",
    greek: "Το Σήμα της",
    body: "Her signature runway music was the theme from The Third Man. When that melody began, the room knew. Mary Pavlatou was about to walk.",
    image: "/images/mary-social-event.jpg",
    imageW: 900,
    imageH: 1200,
    alt: "Mary Pavlatou — Social Event",
    href: "/story",
  },
  {
    number: "09",
    era: "Her Heart",
    title: "The Dream of Family",
    greek: "Το Όνειρό Της",
    body: "Her dream: to become one of the world's finest mannequins and one day create a good family. She achieved both. Her sons are her greatest legacy.",
    image: "/images/endsheet-portrait.jpg",
    imageW: 666,
    imageH: 405,
    alt: "Mary Pavlatou — Archive Endsheet",
    href: "/legacy",
  },
  {
    number: "10",
    era: "Eternal Memory",
    title: "Preserved by Love",
    greek: "Αιωνία η Μνήμη",
    body: "The Pulos Brothers carried her photographs and memories for decades. Mary James restored every image. What remains is not only a record — it is devotion made visible.",
    image: "/images/mary-cover.jpg",
    imageW: 900,
    imageH: 1200,
    alt: "Mary Pavlatou — Memorial Book Cover",
    href: "/archive",
  },
];

const ctaLabel = (num: string) =>
  num === "07" ? "World of Fashion" :
  num === "09" ? "Her Legacy" :
  num === "10" ? "The Archive" :
  "Read Her Story";

export default function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioning = useRef(false);

  function goTo(i: number) {
    if (i === active || transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
      transitioning.current = false;
    }, 280);
  }

  function prev() { goTo((active - 1 + slides.length) % slides.length); }
  function next() { goTo((active + 1) % slides.length); }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const s = slides[active];
  const isLandscape = s.imageH <= s.imageW;

  return (
    <section style={{ backgroundColor: "#09080a", padding: "clamp(64px,9vh,108px) 0" }}>

      {/* ── Section header ── */}
      <div style={{ textAlign: "center", padding: "0 clamp(24px,5vw,64px)", marginBottom: "clamp(40px,5vh,64px)" }}>
        <p
          className="font-display"
          style={{ color: "rgba(245,208,80,0.72)", fontSize: "10px", letterSpacing: "0.48em", textTransform: "uppercase", marginBottom: "14px" }}
        >
          Her Story in Time
        </p>
        <h2
          className="font-display"
          style={{ color: "#f5d050", fontSize: "clamp(22px,3vw,40px)", letterSpacing: "0.14em", fontWeight: 700, marginBottom: "10px" }}
        >
          A Life in Light
        </h2>
        <p
          className="font-serif italic"
          style={{ color: "rgba(245,208,80,0.6)", fontSize: "clamp(14px,1.6vw,18px)", marginBottom: "0" }}
        >
          Η Ζωή της Μαρίας
        </p>
      </div>

      {/* ── Chapter strip navigation ── */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "0 clamp(24px,5vw,64px) 0",
          gap: "0",
          scrollbarWidth: "none",
          borderBottom: "1px solid rgba(245,208,80,0.12)",
          marginBottom: "0",
        } as React.CSSProperties}
      >
        {slides.map((sl, i) => {
          const isActive = active === i;
          return (
            <button
              key={sl.number}
              onClick={() => goTo(i)}
              style={{
                flexShrink: 0,
                background: "none",
                border: "none",
                borderBottom: isActive ? "2px solid #f5d050" : "2px solid transparent",
                padding: "12px clamp(10px,1.8vw,22px) 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                transition: "border-color 0.25s ease",
                marginBottom: "-1px",
              }}
              aria-label={`Chapter ${sl.number}: ${sl.title}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className="font-display"
                style={{
                  color: isActive ? "#f5d050" : "rgba(245,208,80,0.38)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  transition: "color 0.25s ease",
                  lineHeight: 1,
                }}
              >
                {sl.number}
              </span>
              <span
                className="font-display"
                style={{
                  color: isActive ? "rgba(245,208,80,0.82)" : "rgba(245,208,80,0.28)",
                  fontSize: "7px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "color 0.25s ease",
                }}
              >
                {sl.era}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Slide ── */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.28s ease, transform 0.28s ease",
          padding: "clamp(36px,5vh,64px) clamp(24px,5vw,80px)",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: s.image ? "1fr 1fr" : "1fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* Image */}
        {s.image && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: 0,
            }}
            className="max-lg:order-first"
          >
            <div
              style={{
                border: "1px solid rgba(245,208,80,0.22)",
                padding: "10px",
                maxWidth: isLandscape ? "520px" : "340px",
                width: "100%",
              }}
            >
              <Image
                src={s.image}
                alt={s.alt}
                width={s.imageW}
                height={s.imageH}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isLandscape ? "320px" : "520px",
                  objectFit: "contain",
                  objectPosition: "top",
                  display: "block",
                }}
                priority={active < 2}
                loading={active < 2 ? "eager" : "lazy"}
              />
            </div>
          </div>
        )}

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {/* Chapter number watermark */}
          <span
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.08)",
              fontSize: "clamp(64px,10vw,120px)",
              fontWeight: 700,
              lineHeight: 1,
              userSelect: "none",
              marginBottom: "8px",
              display: "block",
            }}
            aria-hidden="true"
          >
            {s.number}
          </span>

          <p
            className="font-display"
            style={{ color: "rgba(245,208,80,0.72)", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "14px", fontWeight: 600 }}
          >
            {s.era}
          </p>

          <h3
            className="font-display"
            style={{ color: "#f5d050", fontSize: "clamp(20px,2.8vw,36px)", letterSpacing: "0.1em", fontWeight: 700, lineHeight: 1.2, marginBottom: "10px" }}
          >
            {s.title}
          </h3>

          <p
            className="font-serif italic"
            style={{ color: "rgba(245,208,80,0.6)", fontSize: "clamp(14px,1.4vw,18px)", marginBottom: "22px" }}
          >
            {s.greek}
          </p>

          <div style={{ width: "32px", height: "2px", background: "#f5d050", marginBottom: "22px", opacity: 0.7 }} />

          <p
            className="font-serif"
            style={{ color: "rgba(240,232,210,0.92)", fontSize: "clamp(14px,1.4vw,18px)", lineHeight: 1.95, marginBottom: "32px", maxWidth: "480px" }}
          >
            {s.body}
          </p>

          <Link
            href={s.href}
            className="font-display"
            style={{
              color: "#f5d050",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              border: "1px solid rgba(245,208,80,0.45)",
              padding: "13px 28px",
              fontWeight: 700,
              width: "fit-content",
              transition: "background 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(245,208,80,0.1)";
              el.style.borderColor = "#f5d050";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(245,208,80,0.45)";
            }}
          >
            {ctaLabel(s.number)}
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none" aria-hidden="true">
              <path d="M0 3H15.5M12 1L15.5 3L12 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Prev / Next + progress ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(20px,4vw,48px)",
          padding: "0 clamp(24px,5vw,64px)",
          marginTop: "clamp(8px,2vh,24px)",
        }}
      >
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous chapter"
          style={{
            background: "none",
            border: "1px solid rgba(245,208,80,0.35)",
            color: "#f5d050",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "background 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(245,208,80,0.1)"; b.style.borderColor = "#f5d050"; }}
          onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.borderColor = "rgba(245,208,80,0.35)"; }}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
            <path d="M15 7H1M5.5 2L1 7L5.5 12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to chapter ${i + 1}`}
              style={{
                width: active === i ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: active === i ? "#f5d050" : "rgba(245,208,80,0.28)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next chapter"
          style={{
            background: "none",
            border: "1px solid rgba(245,208,80,0.35)",
            color: "#f5d050",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "background 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(245,208,80,0.1)"; b.style.borderColor = "#f5d050"; }}
          onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.borderColor = "rgba(245,208,80,0.35)"; }}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
            <path d="M1 7H15M10.5 2L15 7L10.5 12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>

    </section>
  );
}
