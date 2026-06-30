"use client";
import { useEffect, useRef, useState } from "react";

interface QuoteRevealProps {
  quote: string;
  author?: string;
  greek?: string;
  size?: "sm" | "md" | "lg";
  centered?: boolean;
}

export default function QuoteReveal({ quote, author, greek, size = "md", centered = true }: QuoteRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fontSize = { sm: "clamp(14px,1.6vw,18px)", md: "clamp(16px,2vw,24px)", lg: "clamp(20px,2.8vw,34px)" }[size];

  return (
    <figure
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        margin: 0,
        textAlign: centered ? "center" : "left",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
        padding: "clamp(24px,4vw,48px) clamp(20px,4vw,48px)",
      }}
    >
      {greek && (
        <p style={{ fontFamily: "var(--font-display)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#8B7030", marginBottom: "16px" }}>
          {greek}
        </p>
      )}
      <blockquote
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize,
          lineHeight: 1.65,
          color: "#4A3C2A",
          margin: "0 0 16px",
          fontWeight: 400,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {author && (
        <figcaption
          style={{ fontFamily: "var(--font-display)", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#8B7030" }}
        >
          {author}
        </figcaption>
      )}
    </figure>
  );
}
