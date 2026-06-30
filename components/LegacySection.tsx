"use client";

const pillars = [
  {
    roman: "I",
    title: "House of Christian Dior",
    body: "She modeled for the most celebrated fashion house of the era — presenting Dior evening gowns, including pieces crafted from black velvet with embroidered roses and sweeping taffeta skirts, to audiences in Athens and abroad.",
    accent: "Paris · 1950s",
  },
  {
    roman: "II",
    title: "The Great Parisian Houses",
    body: "Her career encompassed Pierre Balmain, Hubert de Givenchy, Jacques Fath, and Nina Ricci — the defining names of postwar haute couture — presented through Athens's finest ateliers.",
    accent: "Balmain · Givenchy · Fath · Ricci",
  },
  {
    roman: "III",
    title: "Athens's Finest Stages",
    body: "She graced the runways of the Hotel Grande Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club — every prestige address the city had to offer.",
    accent: "Grande Bretagne · King George · Mousouris",
  },
  {
    roman: "IV",
    title: "Athenian Couture",
    body: "She was the face trusted by the city's leading houses — Mallidou, Stantzos, Halifa, Tsitsopoulos Brothers, Archontaki-Kallergi, Filioskos, Antoniadou, and Etam — to present their most important collections.",
    accent: "Mallidou · Stantzos · Halifa · Etam",
  },
  {
    roman: "V",
    title: "Icon of Her Era",
    body: "She moved in the highest circles — catching the attention of Aristotle Onassis, seen in the company of Marilyn Monroe, Elizabeth Taylor, and others who later married Jackie Kennedy.",
    accent: "Onassis · Monroe · Taylor",
  },
  {
    roman: "VI",
    title: "Child Hero of World War II",
    body: "Mary was a child hero of World War II. Her family, ennobled by the Venetian Empire in 1691, significantly influenced the war's outcome — a legacy that reached far beyond the world of fashion.",
    accent: "Venetian Empire · 1691",
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
            style={{ color: "rgba(245,208,80,0.82)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "18px" }}
          >
            A Life of Distinction
          </p>
          <div style={{ width: "40px", height: "1px", background: "rgba(245,208,80,0.5)" }} />
        </div>

        {/* 2-col grid — more breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-x-24 lg:gap-y-20">
          {pillars.map((p, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <p
                className="font-display"
                style={{ color: "rgba(245,208,80,0.52)", fontSize: "clamp(14px, 5vw, 60px)", lineHeight: 1, marginBottom: "20px", letterSpacing: "0.05em" }}
              >
                {p.roman}
              </p>
              <div style={{ width: "28px", height: "1px", background: "rgba(245,208,80,0.6)", marginBottom: "18px" }} />
              <h3
                className="font-display"
                style={{ color: "#f5d050", fontSize: "clamp(10px, 1.1vw, 12px)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "16px" }}
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
