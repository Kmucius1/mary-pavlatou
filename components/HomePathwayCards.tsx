"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    href: "/story",
    label: "Her Life",
    copy: "The story of a girl who dreamed and a woman who changed the world of fashion.",
    cta: "Read Her Story",
    img: "/images/greek-village-golden-hour.png",
    imgW: 896,
    imgH: 1200,
    imgPos: "center center",
    alt: "Ancient Greek village at golden hour — warm amber light, cobblestone paths",
  },
  {
    href: "/fashion",
    label: "Fashion World",
    copy: "The couture houses, runways, and the international world she conquered.",
    cta: "Enter the World",
    img: "/images/greek-athenian-boulevard.png",
    imgW: 896,
    imgH: 1200,
    imgPos: "center center",
    alt: "Elegant Athenian neoclassical boulevard at dusk — grand marble columns",
  },
  {
    href: "/archive",
    label: "The Archive",
    copy: "Original clippings, translations, notes, and the preserved book of her life.",
    cta: "Explore the Archive",
    img: "/images/greek-library-interior.png",
    imgW: 896,
    imgH: 1200,
    imgPos: "center center",
    alt: "Ancient Greek library interior — marble columns, golden light, parchment scrolls",
  },
  {
    href: "/legacy",
    label: "Legacy",
    copy: "The memory her sons kept alive, and the story returned to the light.",
    cta: "View Her Legacy",
    img: "/images/greek-coastal-olive-grove.png",
    imgW: 896,
    imgH: 1200,
    imgPos: "center center",
    alt: "Greek coastal landscape at golden hour — olive grove overlooking the Aegean Sea",
  },
];

export default function HomePathwayCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      style={{
        background: "#F8F4EA",
        borderTop: "1px solid #E6D9BD",
        padding: "clamp(48px,6vh,80px) clamp(24px,5vw,64px)",
      }}
    >
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(8px,1.2vw,16px)",
        }}
        className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
      >
        {cards.map((card) => {
          const isHovered = hovered === card.href;
          return (
            <Link
              key={card.href}
              href={card.href}
              onMouseEnter={() => setHovered(card.href)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "block",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                minHeight: "clamp(320px,40vh,480px)",
                background: "#2F2A22",
                transition: "box-shadow 0.3s ease",
                boxShadow: isHovered
                  ? "0 12px 40px rgba(47,42,34,0.38)"
                  : "0 4px 20px rgba(47,42,34,0.20)",
              }}
            >
              {/* Background image */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  transition: "transform 0.55s ease",
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                }}
              >
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: card.imgPos,
                    transition: "opacity 0.3s ease",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Dark sepia overlay */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, rgba(30,22,12,0.52) 0%, rgba(30,22,12,0.62) 50%, rgba(30,22,12,0.82) 100%)",
                  transition: "opacity 0.3s ease",
                  opacity: isHovered ? 0.88 : 1,
                }}
              />

              {/* Gold border */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  border: "1px solid rgba(185,151,77,0.30)",
                  pointerEvents: "none",
                  transition: "border-color 0.3s ease",
                  borderColor: isHovered ? "rgba(185,151,77,0.55)" : "rgba(185,151,77,0.30)",
                }}
              />

              {/* Card content */}
              <div
                style={{
                  position: "relative", zIndex: 2,
                  padding: "clamp(24px,3vw,36px) clamp(20px,2.5vw,28px)",
                  height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                }}
              >
                {/* Label */}
                <h3
                  className="font-display"
                  style={{
                    color: "#F8F4EA",
                    fontSize: "clamp(16px,1.6vw,22px)",
                    letterSpacing: "0.10em",
                    fontWeight: 700,
                    marginBottom: "12px",
                    lineHeight: 1.1,
                    textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {card.label}
                </h3>

                {/* Copy */}
                <p
                  className="font-serif"
                  style={{
                    color: "rgba(248,244,234,0.80)",
                    fontSize: "clamp(13px,1.1vw,14px)",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  {card.copy}
                </p>

                {/* CTA */}
                <div
                  className="font-display"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#F8F4EA",
                    fontSize: "7.5px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    border: `1px solid ${isHovered ? "rgba(216,196,142,0.85)" : "rgba(216,196,142,0.55)"}`,
                    padding: "9px 18px",
                    background: isHovered ? "rgba(185,151,77,0.28)" : "rgba(185,151,77,0.10)",
                    transition: "background 0.22s ease, border-color 0.22s ease",
                    width: "fit-content",
                  }}
                >
                  {card.cta}
                  <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true">
                    <path d="M0 2.5H12M9.5 1L12 2.5L9.5 4" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
