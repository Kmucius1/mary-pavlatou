"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeBannerHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !heroRef.current) return;
    const items = heroRef.current.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.85s ease, transform 0.85s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "clamp(560px, 85vh, 820px)",
      }}
      className="max-lg:!grid-cols-1"
    >
      {/* ── LEFT: Text panel ── */}
      <div
        ref={heroRef}
        style={{
          background: "linear-gradient(160deg, #1C1814 0%, #2A2318 40%, #3A2E1E 100%)",
          position: "relative",
          padding: "clamp(48px,7vh,80px) clamp(36px,5vw,80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 1,
        }}
        className="max-lg:order-2"
      >
        {/* Subtle pattern overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
            backgroundImage: "repeating-linear-gradient(90deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px)",
          }}
        />

        {/* Greek key strip — top of left panel */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "8px",
            background:
              "repeating-linear-gradient(90deg, rgba(197,168,74,0.65) 0px, rgba(197,168,74,0.65) 2px, transparent 2px, transparent 7px)",
            borderBottom: "1px solid #C5A84A",
          }}
        />

        {/* Angel marble — subtle watermark left edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "35%",
            backgroundImage: "url('/images/gen-angel-marble.png')",
            backgroundSize: "cover", backgroundPosition: "center top",
            opacity: 0.10,
            maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Eyebrow */}
        <p
          data-reveal
          className="font-display"
          style={{
            color: "#C5A84A", fontSize: "13px", letterSpacing: "0.52em",
            textTransform: "uppercase", fontWeight: 900, marginBottom: "18px",
            position: "relative",
          }}
        >
          A Life of Grace. A Legacy of Light.
        </p>

        {/* Ornamental rule */}
        <div
          data-reveal
          style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", position: "relative" }}
        >
          <div style={{ width: "52px", height: "1px", background: "#C5A84A", opacity: 0.75 }} />
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
            <path d="M6 0.5C6 0.5 3.5 3.5 1 3.5C3.5 3.5 6 6.5 6 6.5C6 6.5 8.5 3.5 11 3.5C8.5 3.5 6 0.5 6 0.5Z" fill="#C5A84A" opacity="0.85" />
          </svg>
          <div style={{ width: "52px", height: "1px", background: "#C5A84A", opacity: 0.75 }} />
        </div>

        {/* Main headline */}
        <h1
          data-reveal
          className="font-display"
          style={{
            color: "#F5F1E6",
            fontSize: "clamp(41px,5.52vw,87px)",
            letterSpacing: "0.13em",
            fontWeight: 900,
            lineHeight: 1.02,
            marginBottom: "16px",
            position: "relative",
          }}
        >
          MARY<br />PAVLATOU
        </h1>

        {/* Sub-headline */}
        <p
          data-reveal
          className="font-display"
          style={{
            color: "#C5A84A",
            fontSize: "clamp(14px,1.03vw,16px)",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            fontWeight: 900,
            marginBottom: "26px",
            position: "relative",
          }}
        >
          Icons Never Fade. They Inspire.
        </p>

        {/* Body */}
        <p
          data-reveal
          className="font-serif"
          style={{
            color: "rgba(245,241,230,0.75)",
            fontSize: "clamp(16px,1.32vw,18px)",
            lineHeight: 1.95,
            maxWidth: "420px",
            marginBottom: "32px",
            position: "relative",
          }}
        >
          A Greek fashion pioneer and the nation&rsquo;s first certified professional mannequin,
          whose international career carried her from Athens to New York and across Europe&rsquo;s
          world of couture. Her story spans continents, couture houses, and generations — preserved in love.
        </p>

        {/* CTA buttons */}
        <div
          data-reveal
          style={{ display: "flex", flexWrap: "wrap", gap: "12px", position: "relative" }}
        >
          <Link
            href="/story"
            className="font-display"
            style={{
              backgroundColor: "#B9974D", color: "#F8F4EA",
              padding: "13px 26px", borderRadius: "100px",
              fontSize: "9px", letterSpacing: "0.30em", textTransform: "uppercase",
              textDecoration: "none", fontWeight: 900,
              display: "inline-flex", alignItems: "center", gap: "10px",
              boxShadow: "0 2px 14px rgba(185,151,77,0.32)",
              transition: "background 0.22s ease, box-shadow 0.22s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#8A6A2F";
              el.style.boxShadow = "0 4px 20px rgba(139,106,47,0.38)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#B9974D";
              el.style.boxShadow = "0 2px 14px rgba(185,151,77,0.32)";
            }}
          >
            Discover Her Story
            <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
              <path d="M0 2.5H12M9.5 1L12 2.5L9.5 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>

          <Link
            href="/archive"
            className="font-display"
            style={{
              backgroundColor: "transparent", color: "#D8C48E",
              padding: "12px 24px", borderRadius: "100px",
              border: "1.5px solid #B9974D",
              fontSize: "9px", letterSpacing: "0.30em", textTransform: "uppercase",
              textDecoration: "none", fontWeight: 900,
              display: "inline-flex", alignItems: "center", gap: "10px",
              transition: "background 0.22s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(185,151,77,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            Explore the Archive
            <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
              <path d="M0 2.5H12M9.5 1L12 2.5L9.5 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>

        {/* Inline quote */}
        <div
          data-reveal
          style={{
            marginTop: "clamp(28px,4vh,44px)",
            paddingTop: "clamp(20px,3vh,28px)",
            borderTop: "1px solid rgba(197,168,74,0.35)",
            position: "relative",
          }}
        >
          <blockquote
            className="font-serif italic"
            style={{
              color: "rgba(245,241,230,0.75)",
              fontSize: "clamp(15px,1.15vw,17px)",
              lineHeight: 1.8,
              margin: 0,
              marginBottom: "10px",
            }}
          >
            &ldquo;My dream is to become one of the world&rsquo;s finest mannequins
            and, one day, to create a good family.&rdquo;
          </blockquote>
          <p
            className="font-display"
            style={{
              color: "#C5A84A",
              fontSize: "12px",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            — Mary Pavlatou
          </p>
        </div>
      </div>

      {/* ── RIGHT: Full-bleed photo panel ── */}
      <div
        style={{ position: "relative", overflow: "hidden", minHeight: "clamp(480px,70vh,820px)" }}
        className="max-lg:order-1"
      >
        <Image
          src="/images/portrait-mary-color-gold-lapels.png"
          alt="Mary Pavlatou — Colorized studio portrait, gold-lapelled jacket and diamond jewellery"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            filter: "sepia(0.05) contrast(1.03)",
          }}
        />

        {/* Gradient to blend left edge into text panel */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(28,24,20,0.55) 0%, transparent 18%)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle vignette bottom */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "160px",
            background: "linear-gradient(to top, rgba(34,28,20,0.28) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
