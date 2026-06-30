"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeHero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (lineRef.current) lineRef.current.style.opacity = "1";
      return;
    }
    const t = setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.style.transition = "opacity 1.4s ease";
        lineRef.current.style.opacity = "1";
      }
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #F9F6EE 0%, #F3EEE2 45%, #EDE5CC 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Greek key strip at the very top */}
      <div
        aria-hidden="true"
        style={{
          height: "10px",
          background: "repeating-linear-gradient(90deg, rgba(185,151,77,0.55) 0px, rgba(185,151,77,0.55) 2px, transparent 2px, transparent 7px)",
          borderBottom: "1px solid #D8C48E",
        }}
      />

      {/* Full-width marble angel watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "45%", pointerEvents: "none", opacity: 0.08,
          backgroundImage: "url('/images/gen-angel-marble.png')",
          backgroundSize: "cover", backgroundPosition: "center top",
          maskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
        }}
      />

      {/* Subtle right-side pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "30%", pointerEvents: "none", opacity: 0.04,
          backgroundImage: "url('/images/gen-couture-atelier.png')",
          backgroundSize: "cover", backgroundPosition: "center",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      />

      <div
        style={{
          maxWidth: "1320px", margin: "0 auto", position: "relative",
          padding: "clamp(52px,7vh,88px) clamp(32px,6vw,88px) clamp(40px,5vh,64px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "start",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* ── LEFT: All text ── */}
        <div className="animate-fade-in" style={{ paddingTop: "8px" }}>

          {/* Eyebrow */}
          <p
            className="font-display"
            style={{
              color: "#B9974D",
              fontSize: "8px",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 600,
            }}
          >
            An Official Memorial Archive
          </p>

          {/* Ornamental line above title */}
          <div
            ref={lineRef}
            style={{
              opacity: 0,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M7 1C7 1 4 4 1 4C4 4 7 7 7 7C7 7 10 4 13 4C10 4 7 1 7 1Z" fill="#C5A84A" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
          </div>

          {/* Title */}
          <h1
            className="font-display"
            style={{
              color: "#2A2318",
              fontSize: "clamp(42px,7vw,96px)",
              letterSpacing: "0.18em",
              fontWeight: 700,
              lineHeight: 1.0,
              marginBottom: "14px",
            }}
          >
            MARY<br />PAVLATOU
          </h1>

          {/* Greek subtitle */}
          <p
            className="font-serif italic"
            style={{
              color: "#8A6A2F",
              fontSize: "clamp(18px,2.4vw,30px)",
              marginBottom: "24px",
              letterSpacing: "0.04em",
            }}
          >
            Η Μνήμη της Μαρίας
          </p>

          {/* Ornament divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
            <div style={{ width: "48px", height: "1px", background: "#C5A84A", opacity: 0.6 }} />
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
              <path d="M9 1C9 1 5 5 1 5C5 5 9 9 9 9C9 9 13 5 17 5C13 5 9 1 9 1Z" fill="#C5A84A" opacity="0.8" />
            </svg>
            <div style={{ width: "48px", height: "1px", background: "#C5A84A", opacity: 0.6 }} />
          </div>

          {/* Description */}
          <p
            className="font-serif"
            style={{
              color: "#4A3C2A",
              fontSize: "clamp(15px,1.5vw,18px)",
              lineHeight: 1.9,
              maxWidth: "520px",
              marginBottom: "10px",
            }}
          >
            A Greek icon of postwar fashion, Mary Pavlatou carried grace from Athens
            to the world's great fashion houses. Remembered as the first Greek certified
            professional fashion mannequin, she moved through couture with discipline,
            beauty, intelligence, and soul.
          </p>

          <p
            className="font-serif italic"
            style={{
              color: "#8A6A2F",
              fontSize: "clamp(13px,1.35vw,16px)",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            Preserved by her sons. Restored with love.<br />Shared so her memory may live on.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}>
            <Link
              href="/story"
              className="font-display"
              style={{
                backgroundColor: "#8A6A2F",
                color: "#F8F4EA",
                padding: "14px 28px",
                fontSize: "8px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                transition: "background 0.22s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#6B5124"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#8A6A2F"; }}
            >
              Begin Her Life
              <svg width="16" height="5" viewBox="0 0 16 5" fill="none" aria-hidden="true">
                <path d="M0 2.5H14M11 1L14 2.5L11 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>

            {[
              { label: "Enter the Fashion World", href: "/fashion" },
              { label: "View the Archive", href: "/archive" },
            ].map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                className="font-display"
                style={{
                  backgroundColor: "transparent",
                  color: "#8A6A2F",
                  padding: "13px 24px",
                  border: "1px solid #C5A84A",
                  fontSize: "8px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "background 0.22s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(197,168,74,0.10)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                {btn.label}
                <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
                  <path d="M0 2.5H12M9 1L12 2.5L9 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Name cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", borderTop: "1px solid rgba(197,168,74,0.3)", paddingTop: "24px" }}>
            {[
              { name: "Mary Pavlatou", role: "Professional stage name" },
              { name: "Maria Pulos", role: "Married name" },
            ].map(({ name, role }) => (
              <div
                key={name}
                style={{
                  padding: "12px 18px",
                  border: "1px solid rgba(197,168,74,0.45)",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <p className="font-display" style={{ color: "#1C1814", fontSize: "10px", letterSpacing: "0.14em", fontWeight: 700, marginBottom: "3px" }}>
                  {name}
                </p>
                <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "11px" }}>
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Framed portrait ── */}
        <div
          className="animate-fade-in delay-2 max-lg:order-first"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}
        >
          {/* Outer gold frame */}
          <div
            style={{
              position: "relative",
              padding: "3px",
              background: "linear-gradient(135deg, #E8D690 0%, #B9974D 25%, #F5E8C0 50%, #B9974D 75%, #E8D690 100%)",
              boxShadow: "0 12px 56px rgba(139,106,47,0.28), inset 0 0 0 1px rgba(255,255,255,0.4)",
            }}
          >
            {/* Inner border */}
            <div style={{ padding: "10px", background: "#F5F1E6", position: "relative" }}>
              {/* Art deco corner marks */}
              {["tl","tr","bl","br"].map((c) => (
                <div key={c} aria-hidden="true" style={{
                  position: "absolute",
                  top: c.startsWith("t") ? "4px" : undefined,
                  bottom: c.startsWith("b") ? "4px" : undefined,
                  left: c.endsWith("l") ? "4px" : undefined,
                  right: c.endsWith("r") ? "4px" : undefined,
                  width: "14px", height: "14px",
                  borderTop: c.startsWith("t") ? "1.5px solid #C5A84A" : "none",
                  borderBottom: c.startsWith("b") ? "1.5px solid #C5A84A" : "none",
                  borderLeft: c.endsWith("l") ? "1.5px solid #C5A84A" : "none",
                  borderRight: c.endsWith("r") ? "1.5px solid #C5A84A" : "none",
                }} />
              ))}

              {/* Portrait */}
              <div style={{ background: "#EDE8D8", overflow: "hidden", width: "clamp(260px,28vw,380px)" }}>
                <Image
                  src="/images/book-portrait-black-outfit.png"
                  alt="Mary Pavlatou — Colorized portrait from the family archive"
                  width={1388}
                  height={1838}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "clamp(360px,58vh,620px)",
                    objectFit: "contain",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* "First Greek Certified" badge */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #D8C882 0%, #8B7030 40%, #C5A84A 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(139,112,48,0.4)",
                padding: "8px",
              }}
            >
              <p className="font-display" style={{ color: "#F8F4EA", fontSize: "5.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, lineHeight: 1.5 }}>
                FIRST<br />GREEK<br />CERTIFIED<br />MANNEQUIN
              </p>
            </div>
          </div>

          {/* Caption plaque */}
          <div
            style={{
              background: "#F0EBD9",
              border: "1px solid #D8C48E",
              borderTop: "none",
              padding: "10px 28px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p className="font-serif italic" style={{ color: "#8A6A2F", fontSize: "12px", letterSpacing: "0.04em", marginBottom: "2px" }}>
              Mary Pavlatou
            </p>
            <p className="font-display" style={{ color: "#A79D8B", fontSize: "7px", letterSpacing: "0.32em", textTransform: "uppercase" }}>
              Preserved from the family archive
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom stat band ── */}
      <div
        style={{
          borderTop: "1px solid #D8C48E",
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 clamp(32px,6vw,88px)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="max-sm:grid-cols-2"
        >
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <rect x="1" y="24" width="26" height="3" rx="1" stroke="#8B7030" strokeWidth="1.1" />
                  <rect x="4" y="19" width="20" height="5" stroke="#8B7030" strokeWidth="1.1" />
                  <rect x="7" y="6" width="2.5" height="13" stroke="#8B7030" strokeWidth="1" />
                  <rect x="12.75" y="6" width="2.5" height="13" stroke="#8B7030" strokeWidth="1" />
                  <rect x="18.5" y="6" width="2.5" height="13" stroke="#8B7030" strokeWidth="1" />
                  <rect x="1" y="3" width="26" height="3" rx="1" stroke="#8B7030" strokeWidth="1.1" />
                </svg>
              ),
              label: "Greek Icon",
              sub: "Proudly Greek. Forever an inspiration.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M14 3L17.5 10H24L18.5 14.5L20.5 22L14 18L7.5 22L9.5 14.5L4 10H10.5Z" stroke="#8B7030" strokeWidth="1.2" fill="none" />
                </svg>
              ),
              label: "First Certified Greek Mannequin",
              sub: "A pioneer who opened the runway for others.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <ellipse cx="14" cy="14" rx="4" ry="11" stroke="#8B7030" strokeWidth="1.1" />
                  <path d="M3 9.5 Q14 7 25 9.5" stroke="#8B7030" strokeWidth="1" fill="none" />
                  <path d="M3 18.5 Q14 21 25 18.5" stroke="#8B7030" strokeWidth="1" fill="none" />
                  <circle cx="14" cy="14" r="12" stroke="#8B7030" strokeWidth="1.1" />
                </svg>
              ),
              label: "Athens · 1950s",
              sub: "Fashion salons of Athens' golden era.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M14 4 L17 12H25L19 17L21 25L14 20.5L7 25L9 17L3 12H11Z" stroke="#8B7030" strokeWidth="1.2" fill="none" />
                </svg>
              ),
              label: "Athens · Chicago · Paris",
              sub: "A life that crossed borders and defined elegance.",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "20px 16px",
                borderRight: "1px solid rgba(197,168,74,0.25)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {stat.icon}
              <div>
                <p className="font-display" style={{ color: "#8B7030", fontSize: "7.5px", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
                  {stat.label}
                </p>
                <p className="font-serif" style={{ color: "#6E665A", fontSize: "11px", lineHeight: 1.6 }}>
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
