"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    number: "01",
    era: "Her Identity",
    title: "The Names She Carried",
    greek: "Η Ταυτότητά Της",
    brief: "She was Mary Pavlatou to the fashion world. Maria Metaxas Mariatou to her heritage. Maria Pulos to her family. Three names — one extraordinary woman.",
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
    brief: "Born into a Greece that prized grace, intellect, and strength. Her character was formed long before the runway found her.",
    href: "/story",
  },
  {
    number: "03",
    era: "Her Range",
    title: "A Renaissance Woman",
    greek: "Γυναίκα της Αναγέννησης",
    brief: "Awards in dance, music, art, writing, oratory, academics, and sport. Several languages. Advanced university degrees. Offers from film and theatre. The portrait was only the beginning.",
    image: "/images/mary-glamour-portrait.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Glamour Portrait",
    href: "/story",
  },
  {
    number: "04",
    era: "Chicago · Training",
    title: "The Discipline of Fashion",
    greek: "Η Τέχνη της Μόδας",
    brief: "At the Patricia Vance School of Fashion in Chicago, she studied modeling as science, art, and psychology. Every movement a message. Every step a choice.",
    href: "/story",
  },
  {
    number: "05",
    era: "A Historic First",
    title: "The First Greek Certified Mannequin",
    greek: "Η Πρώτη Ελληνίδα",
    brief: "She became the first Greek woman to earn an official certified diploma as a professional mannequin. A distinction earned through discipline, not simply beauty.",
    image: "/images/mary-runway-white.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — White Embroidered Dress on Runway",
    href: "/story",
  },
  {
    number: "06",
    era: "Athens",
    title: "Athens Recognizes Her",
    greek: "Η Αθήνα την Αναγνωρίζει",
    brief: "She became Athens's best-known mannequin — appearing at the Hotel Grande Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club.",
    href: "/story",
  },
  {
    number: "07",
    era: "Haute Couture",
    title: "The Great Fashion Houses",
    greek: "Ο Κόσμος της Μόδας",
    brief: "Christian Dior. Hubert de Givenchy. Jacques Fath. Pierre Balmain. Nina Ricci. She carried the defining names of postwar fashion to Athenian audiences.",
    image: "/images/mary-runway-blue.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Blue Ball Gown on Runway",
    href: "/fashion",
  },
  {
    number: "08",
    era: "Her Signature",
    title: "The Sound Before She Walked",
    greek: "Το Σήμα της",
    brief: "Her signature runway music was the theme from The Third Man. When that melody began, the room knew. Mary Pavlatou was about to walk.",
    href: "/story",
  },
  {
    number: "09",
    era: "Her Heart",
    title: "The Dream of Family",
    greek: "Το Όνειρό Της",
    brief: "Her dream: to become one of the world's finest mannequins and one day create a good family. She achieved both. Her sons are her greatest legacy.",
    image: "/images/mary-veil-hat.jpg",
    imageW: 900,
    imageH: 1660,
    alt: "Mary Pavlatou — Hat Collection Portrait",
    href: "/legacy",
  },
  {
    number: "10",
    era: "Eternal Memory",
    title: "Preserved by Love",
    greek: "Αιωνία η Μνήμη",
    brief: "The Pulos Brothers carried her photographs and memories for decades. Mary James restored every image. What remains is not only a record — it is devotion made visible.",
    href: "/archive",
  },
];

function Tile({ ev, index, tileRef }: {
  ev: (typeof events)[0];
  index: number;
  tileRef: (el: HTMLDivElement | null) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const ctaLabel =
    ev.number === "07" ? "World of Fashion" :
    ev.number === "09" ? "Her Legacy" :
    ev.number === "10" ? "The Archive" :
    "Read More";

  return (
    <div
      ref={tileRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#131109" : "#0d0c09",
        border: "1.5px solid",
        borderColor: hovered ? "rgba(245,208,80,0.75)" : "rgba(245,208,80,0.28)",
        padding: "clamp(24px,3vw,40px)",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,208,80,0.1)"
          : "0 2px 16px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Chapter number + era */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
        <span
          className="font-display"
          style={{
            color: hovered ? "rgba(245,208,80,0.25)" : "rgba(245,208,80,0.12)",
            fontSize: "clamp(56px,8vw,96px)",
            fontWeight: 700,
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "0.04em",
            transition: "color 0.3s ease",
          }}
          aria-hidden="true"
        >
          {ev.number}
        </span>
        <span
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.78)",
            fontSize: "13px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginTop: "10px",
            textAlign: "right",
            maxWidth: "160px",
            lineHeight: 1.5,
          }}
        >
          {ev.era}
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: hovered
            ? "linear-gradient(90deg, #f5d050, rgba(245,208,80,0.15))"
            : "linear-gradient(90deg, rgba(245,208,80,0.45), rgba(245,208,80,0.06))",
          marginBottom: "26px",
          transition: "background 0.3s ease",
        }}
      />

      {/* Title */}
      <h3
        className="font-display"
        style={{
          color: "#f5d050",
          fontSize: "clamp(20px,2.2vw,28px)",
          letterSpacing: "0.08em",
          fontWeight: 700,
          lineHeight: 1.25,
          marginBottom: "10px",
        }}
      >
        {ev.title}
      </h3>

      {/* Greek */}
      <p
        className="font-serif italic"
        style={{
          color: "rgba(245,208,80,0.68)",
          fontSize: "clamp(17px,1.5vw,20px)",
          marginBottom: "20px",
          letterSpacing: "0.05em",
        }}
      >
        {ev.greek}
      </p>

      {/* Body */}
      <p
        className="font-serif"
        style={{
          color: "rgba(240,232,210,0.92)",
          fontSize: "clamp(17px,1.45vw,20px)",
          lineHeight: 1.9,
          flex: 1,
        }}
      >
        {ev.brief}
      </p>

      {/* Image */}
      {ev.image && (
        <div
          style={{
            marginTop: "24px",
            borderTop: "1px solid rgba(245,208,80,0.18)",
            paddingTop: "20px",
          }}
        >
          <Image
            src={ev.image}
            alt={ev.alt ?? ""}
            width={ev.imageW}
            height={ev.imageH}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "280px",
              objectFit: "contain",
              objectPosition: "top",
              display: "block",
              opacity: hovered ? 0.95 : 0.82,
              transition: "opacity 0.3s ease",
            }}
            loading={index < 4 ? "eager" : "lazy"}
          />
        </div>
      )}

      {/* Read more */}
      <Link
        href={ev.href}
        className="font-display"
        style={{
          marginTop: "26px",
          paddingTop: "18px",
          borderTop: "1px solid rgba(245,208,80,0.15)",
          color: "rgba(245,208,80,0.78)",
          fontSize: "13px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          textDecoration: "none",
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f5d050"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,208,80,0.78)"; }}
      >
        {ctaLabel}
        <svg width="20" height="7" viewBox="0 0 20 7" fill="none" aria-hidden="true">
          <path d="M0 3.5H17M13.5 1L17 3.5L13.5 6" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      </Link>
    </div>
  );
}

export default function InteractiveTimeline() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    tileRefs.current.forEach((el, i) => {
      if (!el) return;
      if (prefersReduced) { el.style.opacity = "1"; el.style.transform = "none"; return; }

      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = `opacity 0.7s ease ${i * 0.06}s, transform 0.7s cubic-bezier(.2,.8,.4,1) ${i * 0.06}s`;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        },
        { threshold: 0.06 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#09080a",
        padding: "clamp(72px,10vh,120px) clamp(24px,5vw,80px)",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "clamp(52px,7vh,88px)" }}>
        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.75)",
            fontSize: "14px",
            letterSpacing: "0.44em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Her Story in Time
        </p>
        <h2
          className="font-display"
          style={{
            color: "#f5d050",
            fontSize: "clamp(28px,3.8vw,56px)",
            letterSpacing: "0.16em",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          A Life in Light
        </h2>
        <p
          className="font-serif italic"
          style={{
            color: "rgba(245,208,80,0.68)",
            fontSize: "clamp(19px,1.9vw,26px)",
            marginBottom: "28px",
          }}
        >
          Η Ζωή της Μαρίας
        </p>
        <div
          style={{
            height: "1px",
            maxWidth: "320px",
            margin: "0 auto",
            background: "linear-gradient(90deg, transparent, #f5d050, transparent)",
          }}
        />
      </div>

      {/* Grid of tiles */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
          gap: "clamp(16px,2.5vw,28px)",
        }}
      >
        {events.map((ev, i) => (
          <Tile
            key={ev.number}
            ev={ev}
            index={i}
            tileRef={(el) => { tileRefs.current[i] = el; }}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "clamp(56px,7vh,96px)" }}>
        <Link
          href="/story"
          className="font-display"
          style={{
            color: "#f5d050",
            fontSize: "15px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "18px",
            border: "2px solid rgba(245,208,80,0.55)",
            padding: "18px 48px",
            fontWeight: 700,
            transition: "background 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "rgba(245,208,80,0.1)";
            el.style.borderColor = "#f5d050";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(245,208,80,0.55)";
          }}
        >
          Read Her Full Story
          <svg width="22" height="8" viewBox="0 0 22 8" fill="none" aria-hidden="true">
            <path d="M0 4H19M15 1.5L19 4L15 6.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
