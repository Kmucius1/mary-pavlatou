function SectionTitle({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" />
      </svg>
      <h2
        className="font-display"
        style={{ color: "#c9a84c", fontSize: "12px", letterSpacing: "0.35em", textTransform: "uppercase", flexShrink: 0 }}
      >
        {label}
      </h2>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, #c9a84c, transparent)" }} />
    </div>
  );
}

function TempleIcon() {
  return (
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none" style={{ opacity: 0.7 }}>
      <polygon points="2,14 24,2 46,14" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <rect x="2" y="14" width="44" height="4" fill="#c9a84c" opacity="0.7" />
      {[7, 14, 21, 28, 35].map((x) => (
        <rect key={x} x={x} y="18" width="3" height="16" fill="#c9a84c" opacity="0.6" />
      ))}
      <rect x="0" y="34" width="48" height="3" fill="#c9a84c" opacity="0.8" />
      <rect x="0" y="37" width="48" height="2" fill="#c9a84c" opacity="0.5" />
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
              <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.25)" }} />
            </div>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.85, marginBottom: "28px" }}
            >
              Maria Metaxas Mariatou was a{" "}
              <em style={{ color: "#e4c875" }}>Renaissance Woman</em> in the
              true meaning of the word — far ahead of her time in many ways, for
              it was a different world for women back in those years.
            </p>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.85, marginBottom: "28px" }}
            >
              She was an international celebrity fashion model whose career
              reached{" "}
              <span style={{ color: "#e4c875" }}>
                Athens, Paris, Milan, New York, Chicago
              </span>{" "}
              and beyond — modeling fashions{" "}
              <em>most notably for the House of Christian Dior™</em> — as well
              as for Hubert de Givenchy, Jacques Fath, Pierre Balmain, Nina
              Ricci and others.
            </p>

            <p
              className="font-serif"
              style={{ color: "#d8d0bc", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.85 }}
            >
              Aside from modeling and fashion, she was offered the opportunity
              of appearing in movies, on television, and on stage.
            </p>

            {/* Signature music callout */}
            <div
              style={{
                margin: "36px 0",
                borderLeft: "2px solid #c9a84c",
                paddingLeft: "24px",
              }}
            >
              <p
                className="font-serif italic"
                style={{ color: "#c9a84c", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}
              >
                Her signature runway modeling music was the theme from the
                motion picture{" "}
                <em style={{ color: "#e4c875" }}>The Third Man</em> — a
                world-wide musical hit.
              </p>
            </div>
          </div>

          {/* RIGHT: City tour + First achievement callout */}
          <div className="animate-fade-up delay-2">

            {/* City list */}
            <div
              style={{
                border: "1px solid rgba(201,168,76,0.25)",
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
                    borderColor: "#c9a84c",
                    borderStyle: "solid",
                    ...s,
                  }}
                />
              ))}

              <p
                className="font-display"
                style={{ color: "rgba(201,168,76,0.55)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "20px" }}
              >
                A Career Across Continents
              </p>

              <div className="flex flex-col gap-3">
                {cities.map((city, i) => (
                  <div key={city} className="flex items-center gap-4">
                    <div style={{ width: "6px", height: "6px", border: "1px solid #c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
                    <span
                      className="font-serif"
                      style={{ color: "#e4dac8", fontSize: "clamp(17px, 2vw, 22px)", letterSpacing: "0.06em" }}
                    >
                      {city}
                    </span>
                    {i < cities.length - 1 && (
                      <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.15)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* THE FIRST callout */}
            <div
              style={{
                backgroundColor: "#c9a84c",
                padding: "clamp(20px, 3vw, 32px)",
                position: "relative",
              }}
            >
              <p
                className="font-display"
                style={{ color: "#0a0a0a", fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "12px" }}
              >
                A Historic First
              </p>
              <p
                className="font-serif"
                style={{ color: "#1a1208", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6, fontWeight: 500 }}
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
