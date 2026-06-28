function SectionTitle({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#f5d050" />
      </svg>
      <h2
        className="font-display"
        style={{ color: "#f5d050", fontSize: "27px", letterSpacing: "0.35em", textTransform: "uppercase", flexShrink: 0 }}
      >
        {label}
      </h2>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#f5d050" />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, #f5d050, transparent)" }} />
    </div>
  );
}

function TempleIcon() {
  return (
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none" style={{ opacity: 0.7 }}>
      <polygon points="2,14 24,2 46,14" stroke="#f5d050" strokeWidth="1.5" fill="none" />
      <rect x="2" y="14" width="44" height="4" fill="#f5d050" opacity="0.7" />
      {[7, 14, 21, 28, 35].map((x) => (
        <rect key={x} x={x} y="18" width="3" height="16" fill="#f5d050" opacity="0.6" />
      ))}
      <rect x="0" y="34" width="48" height="3" fill="#f5d050" opacity="0.8" />
      <rect x="0" y="37" width="48" height="2" fill="#f5d050" opacity="0.5" />
    </svg>
  );
}

const cities = [
  "Athens", "Paris", "Milan", "New York", "Chicago",
];

export default function StorySection() {
  return (
    <section
      id="her-story"
      style={{ backgroundColor: "#0a0a0a", padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Biographical text */}
          <div className="animate-fade-up">
            <SectionTitle label="Her Story" />

            <div className="flex items-center gap-6 mb-10">
              <TempleIcon />
              <div style={{ flex: 1, height: "1px", background: "rgba(245,208,80,0.62)" }} />
            </div>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(34px, 2vw, 20px)", lineHeight: 1.85, marginBottom: "28px" }}
            >
              Mary Pavlatou was a trailblazing{" "}
              <em style={{ color: "#f8e060" }}>international celebrity fashion model</em>{" "}
              who stood at the pinnacle of postwar European style. She was the
              first Greek woman to earn an official certified diploma as a
              professional mannequin — a credential earned through rigorous
              study at the{" "}
              <span style={{ color: "#f8e060" }}>Patricia Vance School of Fashion</span>{" "}
              in Chicago, where modeling was treated as a discipline of science,
              art, and psychological understanding.
            </p>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(34px, 2vw, 20px)", lineHeight: 1.85, marginBottom: "28px" }}
            >
              Her career carried her from{" "}
              <span style={{ color: "#f8e060" }}>
                Athens to Paris, Milan, New York, and Chicago
              </span>{" "}
              — modeling fashions{" "}
              <em>most notably for the House of Christian Dior™</em> — as well
              as for Hubert de Givenchy, Jacques Fath, Pierre Balmain, Nina
              Ricci and others. She appeared at Fifth Avenue department stores,
              in Hollywood, and on the most prestigious runways in Greece.
            </p>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(34px, 2vw, 20px)", lineHeight: 1.85 }}
            >
              A Renaissance woman in every sense — she received awards in dance,
              music, art, writing, oratory, academia, and sports. She spoke
              several languages, earned advanced university degrees, and was
              offered roles in film, television, and theatre.
            </p>

            {/* Signature music callout */}
            <div
              style={{
                margin: "36px 0",
                borderLeft: "2px solid #f5d050",
                paddingLeft: "24px",
              }}
            >
              <p
                className="font-serif italic"
                style={{ color: "#f5d050", fontSize: "clamp(23px, 1.8vw, 18px)", lineHeight: 1.6 }}
              >
                Her signature runway modeling music was the theme from the
                motion picture{" "}
                <em style={{ color: "#f8e060" }}>The Third Man</em> — a
                world-wide musical hit.
              </p>
            </div>
          </div>

          {/* RIGHT: City tour + First achievement callout */}
          <div className="animate-fade-up delay-2">

            {/* City list */}
            <div
              style={{
                border: "1px solid rgba(245,208,80,0.62)",
                padding: "clamp(24px, 4vw, 40px)",
                marginBottom: "32px",
                position: "relative",
              }}
            >
              {/* Corner pieces */}
              {[
                { top: -1, left: -1, borderWidth: "2px 0 0 2px" },
                { top: -1, right: -1, borderWidth: "2px 2px 0 0" },
                { bottom: -1, left: -1, borderWidth: "0 0 2px 2px" },
                { bottom: -1, right: -1, borderWidth: "0 2px 2px 0" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    borderColor: "#f5d050",
                    borderStyle: "solid",
                    ...s,
                  }}
                />
              ))}

              <p
                className="font-display"
                style={{ color: "rgba(245,208,80,0.55)", fontSize: "24px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "20px" }}
              >
                A Career Across Continents
              </p>

              <div className="flex flex-col gap-3">
                {cities.map((city, i) => (
                  <div key={city} className="flex items-center gap-4">
                    <div style={{ width: "6px", height: "6px", border: "1px solid #f5d050", transform: "rotate(45deg)", flexShrink: 0 }} />
                    <span
                      className="font-serif"
                      style={{ color: "#e4dac8", fontSize: "clamp(21px, 2vw, 22px)", letterSpacing: "0.06em" }}
                    >
                      {city}
                    </span>
                    {i < cities.length - 1 && (
                      <div style={{ flex: 1, height: "1px", background: "rgba(245,208,80,0.15)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* THE FIRST callout */}
            <div
              style={{
                backgroundColor: "#f5d050",
                padding: "clamp(20px, 3vw, 32px)",
                position: "relative",
              }}
            >
              <p
                className="font-display"
                style={{ color: "#0a0a0a", fontSize: "24px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "12px" }}
              >
                A Historic First
              </p>
              <p
                className="font-serif"
                style={{ color: "#1a1208", fontSize: "clamp(23px, 1.8vw, 18px)", lineHeight: 1.6, fontWeight: 500 }}
              >
                She was the{" "}
                <strong>First Greek Certified/Credentialed Professional Fashion Model</strong>,
                thus laying the foundation for others to follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
