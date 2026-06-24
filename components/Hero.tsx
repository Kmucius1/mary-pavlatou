"use client";
import IdentityCard from "./IdentityCard";

function GreekKeyEdge({ side }: { side: "left" | "right" }) {
  return (
    <div
      className="absolute top-0 bottom-0 hidden xl:block"
      style={{
        [side]: 0,
        width: "18px",
        background: `
          repeating-linear-gradient(
            180deg,
            rgba(201,168,76,0.5) 0px,
            rgba(201,168,76,0.5) 2px,
            transparent 2px,
            transparent 6px
          )
        `,
        borderRight: side === "left" ? "1px solid rgba(201,168,76,0.3)" : undefined,
        borderLeft: side === "right" ? "1px solid rgba(201,168,76,0.3)" : undefined,
      }}
    />
  );
}

function ColumnSilhouette() {
  return (
    <svg
      width="60"
      height="340"
      viewBox="0 0 60 340"
      fill="none"
      className="absolute bottom-0 left-8 hidden lg:block opacity-[0.07]"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Capital top */}
      <rect x="0" y="10" width="60" height="8" fill="#c9a84c" />
      <rect x="5" y="18" width="50" height="5" fill="#c9a84c" />
      {/* Shaft */}
      <rect x="12" y="23" width="36" height="280" fill="#c9a84c" />
      {/* Flutes */}
      {[15, 21, 27, 33, 39, 45].map((x) => (
        <rect key={x} x={x} y="23" width="2" height="280" fill="#000" opacity="0.35" />
      ))}
      {/* Base */}
      <rect x="5" y="303" width="50" height="5" fill="#c9a84c" />
      <rect x="0" y="308" width="60" height="8" fill="#c9a84c" />
      <rect x="0" y="316" width="60" height="6" fill="#c9a84c" opacity="0.6" />
      <rect x="0" y="322" width="60" height="10" fill="#c9a84c" opacity="0.4" />
    </svg>
  );
}

function GoldOrnamentLine() {
  return (
    <div className="flex items-center gap-2 my-3">
      <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0 L8.2 5.8 L14 7 L8.2 8.2 L7 14 L5.8 8.2 L0 7 L5.8 5.8 Z" fill="#c9a84c" />
      </svg>
      <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden marble-bg"
      style={{ minHeight: "92vh" }}
    >
      {/* Side decorative edge strips */}
      <GreekKeyEdge side="left" />
      <GreekKeyEdge side="right" />

      {/* Three-column layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] min-h-[92vh]">

        {/* ── LEFT: Title Block ── */}
        <div className="flex flex-col justify-center items-start px-10 md:px-14 lg:px-10 xl:px-14 py-16 relative z-10 order-1 lg:order-1">
          <ColumnSilhouette />

          {/* Name */}
          <h1
            className="font-display leading-[0.88] tracking-wide text-left"
            style={{ color: "#c9a84c" }}
          >
            <span
              className="block"
              style={{ fontSize: "clamp(64px, 9vw, 120px)", letterSpacing: "0.04em" }}
            >
              MARY
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                letterSpacing: "0.03em",
                marginTop: "-4px",
              }}
            >
              PAVLATOU
            </span>
          </h1>

          {/* Ornament line */}
          <GoldOrnamentLine />

          {/* Archive subtitle */}
          <p
            className="font-display tracking-[0.3em] text-[11px] uppercase mb-4"
            style={{ color: "#c9a84c", opacity: 0.85 }}
          >
            An Official Memorial Archive
          </p>

          {/* Supporting line */}
          <p
            className="font-serif italic text-[17px] leading-relaxed max-w-[320px] mb-8"
            style={{ color: "#e8e0cc" }}
          >
            International Fashion Model. Greek Icon.
            <br />
            A Life Preserved Through Photographs,
            <br />
            Press, and Memory.
          </p>

          {/* CTA Button */}
          <a
            href="#her-story"
            className="font-display text-[10px] tracking-[0.3em] uppercase px-7 py-3 transition-all duration-300 group"
            style={{
              color: "#c9a84c",
              border: "1px solid #c9a84c",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#c9a84c";
              el.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#c9a84c";
            }}
          >
            Explore the Archive
            <span style={{ fontSize: "14px" }}>→</span>
          </a>
        </div>

        {/* ── CENTER: Hero Portrait ── */}
        <div
          className="relative flex items-end justify-center order-2 lg:order-2"
          style={{ minHeight: "420px" }}
        >
          {/* Photo area — replace src with the real hero portrait */}
          <div
            className="relative w-full h-full"
            style={{ minHeight: "420px" }}
          >
            {/* Placeholder — swap for: <Image src="/images/mary-hero.jpg" ... /> */}
            <div
              className="img-placeholder w-full h-full absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{
                background: "linear-gradient(180deg, #1a1516 0%, #0d0b0c 60%, #0a0a0a 100%)",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <circle cx="24" cy="20" r="10" stroke="#c9a84c" strokeWidth="1.5" />
                <path
                  d="M8,44 C8,33 40,33 40,44"
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <p
                className="font-display text-[9px] tracking-[0.2em] uppercase text-center px-4"
                style={{ color: "rgba(201,168,76,0.35)" }}
              >
                Hero Portrait
                <br />
                Place mary-hero.jpg in /public/images/
              </p>
            </div>

            {/* Gradient fade at bottom to blend with section below */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "120px",
                background:
                  "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)",
              }}
            />
          </div>
        </div>

        {/* ── RIGHT: Identity Card ── */}
        <div className="flex flex-col items-center justify-center px-6 py-14 order-3 lg:order-3">
          <IdentityCard />
        </div>
      </div>

      {/* Bottom gold divider */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #c9a84c 20%, #c9a84c 80%, transparent 100%)",
        }}
      />
    </section>
  );
}
