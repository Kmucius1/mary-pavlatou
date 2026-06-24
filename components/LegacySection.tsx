"use client";

const pillars = [
  {
    roman: "I",
    title: "Renaissance Woman",
    body: "Awards in dance, music, art, writing, oratory, academia, and sports. She spoke several languages and earned advanced university degrees.",
    accent: "Dancer · Musician · Scholar · Athlete",
  },
  {
    roman: "II",
    title: "Child Hero of World War II",
    body: "Maria was a child hero of World War II. The Metaxas Family significantly affected the outcome of World War II, which played a great part in saving the world.",
    accent: "A Legacy Written in History",
  },
  {
    roman: "III",
    title: "Noble Lineage",
    body: "The Metaxas Family was ennobled by the Venetian Empire in 1691 with the perpetual title of Count and Countess — a lineage spanning centuries.",
    accent: "Venetian Empire · 1691",
  },
  {
    roman: "IV",
    title: "Icon of Her Era",
    body: "She moved in the highest circles — catching the attention of Aristotle Onassis, seen alongside Marilyn Monroe, Elizabeth Taylor, and others.",
    accent: "Onassis · Monroe · Taylor",
  },
  {
    roman: "V",
    title: "Stage, Screen & Television",
    body: "Beyond fashion, she was offered opportunities in film, television, and theatre — a woman whose presence transcended any single art form.",
    accent: "Film · Television · Theatre",
  },
  {
    roman: "VI",
    title: "The Third Man",
    body: "Her signature runway music was the theme from The Third Man — a worldwide hit that became inseparable from her presence on the catwalk.",
    accent: "Her Runway Signature",
  },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      style={{
        backgroundColor: "#09080a",
        padding: "clamp(80px, 12vh, 140px) clamp(32px, 7vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
          <p
            className="font-display"
            style={{ color: "rgba(201,168,76,0.45)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "18px" }}
          >
            A Life of Distinction
          </p>
          <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.5)" }} />
        </div>

        {/* 2-col grid — more breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-x-24 lg:gap-y-20">
          {pillars.map((p, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <p
                className="font-display"
                style={{ color: "rgba(201,168,76,0.18)", fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1, marginBottom: "20px", letterSpacing: "0.05em" }}
              >
                {p.roman}
              </p>
              <div style={{ width: "28px", height: "1px", background: "rgba(201,168,76,0.6)", marginBottom: "18px" }} />
              <h3
                className="font-display"
                style={{ color: "#c9a84c", fontSize: "clamp(10px, 1.1vw, 12px)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "16px" }}
              >
                {p.title}
              </h3>
              <p
                className="font-serif"
                style={{ color: "rgba(205,196,178,0.8)", fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.85 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
