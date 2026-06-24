"use client";

const pillars = [
  {
    roman: "I",
    title: "Renaissance Woman",
    body: "A recipient of numerous awards in dance, music, art, writing, oratory, academia, and sports. She spoke several languages and earned advanced university degrees.",
    accent: "Dancer · Musician · Scholar · Athlete · Orator",
  },
  {
    roman: "II",
    title: "Child Hero of World War II",
    body: "Maria was a child hero of World War II. The Metaxas Family also significantly affected the outcome of World War II, which played a great part in saving the world.",
    accent: "A Legacy Written in History",
  },
  {
    roman: "III",
    title: "Noble Lineage",
    body: "The Metaxas Family was ennobled by the Venetian Empire in 1691 with the perpetual title of Count and Countess — a lineage of grace and distinction spanning centuries.",
    accent: "Venetian Empire · 1691 · Count & Countess",
  },
  {
    roman: "IV",
    title: "Icon of Her Era",
    body: "She caught the attention of Aristotle Onassis — a man seen in the company of Marilyn Monroe, Elizabeth Taylor, and others — who later married Jackie Kennedy.",
    accent: "Onassis · Monroe · Taylor · Kennedy",
  },
  {
    roman: "V",
    title: "Stage, Screen & Television",
    body: "Aside from the world of fashion, she was offered the opportunity of appearing in movies, on television, and on stage — a woman whose presence transcended any single art form.",
    accent: "Film · Television · Theatre",
  },
  {
    roman: "VI",
    title: "The Third Man",
    body: "Her signature runway modeling music was the theme from the motion picture The Third Man — a worldwide musical hit that became inseparable from her presence on the catwalk.",
    accent: "Her Runway Signature",
  },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#09090b",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* Subtle Art Deco bg texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/mary-dustjacket.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          filter: "saturate(0) blur(1px)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(9,9,11,0.96)" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ flex: 1, maxWidth: "180px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#c9a84c" />
            </svg>
            <h2
              className="font-display"
              style={{ color: "#c9a84c", fontSize: "12px", letterSpacing: "0.35em", textTransform: "uppercase" }}
            >
              A Life of Distinction
            </h2>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#c9a84c" />
            </svg>
            <div style={{ flex: 1, maxWidth: "180px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
          </div>
          <p
            className="font-serif italic"
            style={{ color: "rgba(201,168,76,0.6)", fontSize: "clamp(15px, 2vw, 19px)" }}
          >
            Beyond the runway — a life of extraordinary breadth
          </p>
        </div>

        {/* 6-pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              className="animate-fade-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                padding: "clamp(28px, 4vw, 44px)",
                borderRight: i % 2 !== 1 ? "1px solid rgba(201,168,76,0.12)" : undefined,
                borderBottom: "1px solid rgba(201,168,76,0.12)",
                position: "relative",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {/* Roman numeral */}
              <p
                className="font-display"
                style={{ color: "rgba(201,168,76,0.25)", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1, marginBottom: "16px", letterSpacing: "0.05em" }}
              >
                {p.roman}
              </p>

              {/* Divider */}
              <div style={{ width: "32px", height: "1px", background: "#c9a84c", marginBottom: "16px" }} />

              {/* Title */}
              <h3
                className="font-display"
                style={{ color: "#c9a84c", fontSize: "clamp(11px, 1.3vw, 14px)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}
              >
                {p.title}
              </h3>

              {/* Body */}
              <p
                className="font-serif"
                style={{ color: "#c0b89e", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.75, marginBottom: "18px" }}
              >
                {p.body}
              </p>

              {/* Accent tag */}
              <p
                className="font-display"
                style={{ color: "rgba(201,168,76,0.45)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}
              >
                {p.accent}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
