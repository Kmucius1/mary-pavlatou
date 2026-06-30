"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { timelineSlides } from "@/data/maryTimeline";

export default function LifeInLightSlider() {
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
    }, 260);
  }

  function prev() { goTo((active - 1 + timelineSlides.length) % timelineSlides.length); }
  function next() { goTo((active + 1) % timelineSlides.length); }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  const slide = timelineSlides[active];
  const img = slide.images[0];
  const isLandscape = img.mode === "landscape";

  return (
    <section style={{ background: "#F2F0E8", padding: "clamp(72px,9vh,112px) clamp(28px,6vw,80px)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>

        {/* Section header (mobile) */}
        <div className="lg:hidden" style={{ marginBottom: "32px", textAlign: "center" }}>
          <p className="font-display" style={{ color: "#B9974D", fontSize: "9px", letterSpacing: "0.44em", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>Her Story in Time</p>
          <h2 className="font-display" style={{ color: "#2F2A22", fontSize: "clamp(26px,5vw,40px)", letterSpacing: "0.14em", fontWeight: 700 }}>A Life in Light</h2>
          <p className="font-serif italic" style={{ color: "#8A6A2F", fontSize: "clamp(15px,1.8vw,20px)", marginTop: "6px" }}>Η Ζωή της Μαρίας</p>
        </div>

        {/* Desktop two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "clamp(40px,5vw,72px)" }} className="max-lg:grid-cols-1">

          {/* LEFT: Chapter nav */}
          <div className="hidden lg:flex" style={{ flexDirection: "column" }}>
            <p className="font-display" style={{ color: "#B9974D", fontSize: "9px", letterSpacing: "0.44em", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>Her Story in Time</p>
            <h2 className="font-display" style={{ color: "#2F2A22", fontSize: "clamp(22px,2.8vw,34px)", letterSpacing: "0.13em", fontWeight: 700, lineHeight: 1.15, marginBottom: "8px" }}>A Life in Light</h2>
            <p className="font-serif italic" style={{ color: "#8A6A2F", fontSize: "clamp(15px,1.5vw,19px)", marginBottom: "40px" }}>Η Ζωή της Μαρίας</p>

            {/* Chapter items */}
            <div style={{ position: "relative" }}>
              {/* Connecting line */}
              <div style={{ position: "absolute", left: "15px", top: "16px", bottom: "16px", width: "1px", background: "#D8C48E" }} aria-hidden="true" />

              {timelineSlides.map((sl, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={sl.id}
                    onClick={() => goTo(i)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "16px",
                      width: "100%", background: "none", border: "none",
                      cursor: "pointer", padding: "10px 0", textAlign: "left", position: "relative",
                    }}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={"Chapter " + sl.roman + ": " + sl.title}
                  >
                    {/* Circle */}
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                      background: isActive ? "#B9974D" : "transparent",
                      border: "1.5px solid " + (isActive ? "#B9974D" : "#D8C48E"),
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.25s ease", zIndex: 1, position: "relative",
                      color: isActive ? "#F8F4EA" : "#A79D8B",
                      fontSize: "10px", fontFamily: "var(--font-cinzel)", fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}>
                      {sl.roman}
                    </div>
                    {/* Text */}
                    <div style={{ paddingTop: "4px", flex: 1 }}>
                      <p className="font-display" style={{
                        color: isActive ? "#2F2A22" : "#A79D8B",
                        fontSize: "11px", fontWeight: isActive ? 700 : 600,
                        letterSpacing: "0.08em", marginBottom: "2px",
                        transition: "color 0.25s ease",
                      }}>
                        {sl.title}
                      </p>
                      <p className="font-serif" style={{ color: "#B8AE9C", fontSize: "10px", fontStyle: "italic" }}>
                        {sl.dateLabel}
                      </p>
                    </div>
                    {/* Active arrow */}
                    {isActive && (
                      <svg width="18" height="8" viewBox="0 0 18 8" fill="none" style={{ marginTop: "12px", flexShrink: 0 }} aria-hidden="true">
                        <path d="M0 4H15M11 1L15 4L11 7" stroke="#B9974D" strokeWidth="1.2" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev/Next buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "32px", paddingLeft: "4px" }}>
              {[{ fn: prev, label: "Previous chapter", d: "M13 4H1M5 1L1 4L5 7" }, { fn: next, label: "Next chapter", d: "M1 4H13M9 1L13 4L9 7" }].map((btn, bi) => (
                <button
                  key={bi}
                  onClick={btn.fn}
                  aria-label={btn.label}
                  style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    border: "1.5px solid #B9974D", background: "transparent",
                    color: "#B9974D", cursor: "pointer", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    transition: "all 0.22s ease",
                  }}
                  onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#B9974D"; b.style.color = "#F8F4EA"; }}
                  onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "transparent"; b.style.color = "#B9974D"; }}
                >
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                    <path d={btn.d} stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Slide card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.26s ease, transform 0.26s ease",
            }}
          >
            <div
              style={{
                background: "linear-gradient(145deg, #F8F4EA 0%, #EFE5CC 100%)",
                border: "1px solid #D8C48E",
                borderRadius: "8px",
                boxShadow: "0 4px 32px rgba(139,106,47,0.1), 0 1px 4px rgba(139,106,47,0.08)",
                padding: "clamp(28px,4vw,48px)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "clamp(24px,3vw,40px)",
                alignItems: "start",
                minHeight: "340px",
              }}
              className="max-sm:grid-cols-1"
            >
              {/* Card text */}
              <div>
                <p className="font-display" style={{ color: "#B9974D", fontSize: "8px", letterSpacing: "0.44em", textTransform: "uppercase", marginBottom: "6px", fontWeight: 700 }}>
                  Chapter {slide.roman}
                </p>
                <p className="font-serif italic" style={{ color: "#8A6A2F", fontSize: "clamp(14px,1.4vw,17px)", marginBottom: "14px" }}>
                  {slide.greekPhrase}
                </p>
                <h3 className="font-display" style={{ color: "#2F2A22", fontSize: "clamp(20px,2.4vw,30px)", letterSpacing: "0.08em", fontWeight: 700, lineHeight: 1.2, marginBottom: "8px" }}>
                  {slide.title}
                </h3>
                <p className="font-display" style={{ color: "#B9974D", fontSize: "9px", letterSpacing: "0.22em", marginBottom: "20px", fontWeight: 600 }}>
                  {slide.dateLabel}
                </p>
                <div style={{ width: "28px", height: "1px", background: "#B9974D", marginBottom: "18px", opacity: 0.7 }} />
                <p className="font-serif" style={{ color: "#6E665A", fontSize: "clamp(14px,1.35vw,16px)", lineHeight: 1.95, marginBottom: "28px", maxWidth: "420px" }}>
                  {slide.text}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="font-display"
                  style={{
                    backgroundColor: "#B9974D", color: "#F8F4EA",
                    padding: "12px 26px", borderRadius: "100px",
                    fontSize: "8px", letterSpacing: "0.26em", textTransform: "uppercase",
                    textDecoration: "none", fontWeight: 700, display: "inline-flex",
                    alignItems: "center", gap: "12px",
                    transition: "background 0.22s ease, box-shadow 0.22s ease",
                    boxShadow: "0 2px 12px rgba(185,151,77,0.28)",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#8A6A2F"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#B9974D"; }}
                >
                  {slide.ctaLabel}
                  <svg width="16" height="6" viewBox="0 0 16 6" fill="none" aria-hidden="true">
                    <path d="M0 3H13.5M10 1L13.5 3L10 5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>

              {/* Card image */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <div style={{
                  border: "1px solid #D8C48E",
                  background: "#EFE5CC",
                  padding: "6px",
                  width: isLandscape ? "220px" : "160px",
                }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={isLandscape ? 405 : 1660}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: isLandscape ? "160px" : "320px",
                      objectFit: "contain",
                      objectPosition: "top",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
                {img.caption && (
                  <p className="font-serif italic" style={{ color: "#A79D8B", fontSize: "10px", textAlign: "center", maxWidth: "180px", lineHeight: 1.5 }}>
                    {img.caption}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile dots */}
            <div className="lg:hidden" style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px", alignItems: "center" }}>
              <button onClick={prev} aria-label="Previous" style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid #B9974D", background: "transparent", color: "#B9974D", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M11 4H1M5 1L1 4L5 7" stroke="currentColor" strokeWidth="1.1" /></svg>
              </button>
              {timelineSlides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={"Chapter " + (i + 1)} style={{ width: active === i ? "20px" : "6px", height: "6px", borderRadius: "3px", background: active === i ? "#B9974D" : "#D8C48E", border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s ease" }} />
              ))}
              <button onClick={next} aria-label="Next" style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid #B9974D", background: "transparent", color: "#B9974D", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4H11M7 1L11 4L7 7" stroke="currentColor" strokeWidth="1.1" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
