const houses = [
  { name: "Christian Dior",        note: "Most notably for the House of Dior™" },
  { name: "Hubert de Givenchy",    note: null },
  { name: "Jacques Fath",          note: null },
  { name: "Pierre Balmain",        note: null },
  { name: "Nina Ricci",            note: null },
];

export default function FashionHouses() {
  return (
    <section
      id="fashion-houses"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* Gold lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Title */}
        <div className="text-center mb-14 animate-fade-in">
          <p
            className="font-display"
            style={{ color: "rgba(201,168,76,0.5)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}
          >
            The Houses She Graced
          </p>
          <h2
            className="font-display"
            style={{ color: "#c9a84c", fontSize: "clamp(13px, 1.8vw, 17px)", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Fashion Houses
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div style={{ width: "80px", height: "1px", background: "#c9a84c", opacity: 0.6 }} />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" opacity="0.7" />
            </svg>
            <div style={{ width: "80px", height: "1px", background: "#c9a84c", opacity: 0.6 }} />
          </div>
        </div>

        {/* House list */}
        <div className="flex flex-col items-center gap-0">
          {houses.map((house, i) => (
            <div key={house.name} className="w-full animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div
                className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 py-5 px-4"
                style={{
                  borderBottom: i < houses.length - 1 ? "1px solid rgba(201,168,76,0.12)" : undefined,
                  textAlign: "center",
                }}
              >
                <h3
                  className="font-serif"
                  style={{
                    color: house.name === "Christian Dior" ? "#e4c875" : "#ddd4bc",
                    fontSize: "clamp(20px, 3vw, 30px)",
                    letterSpacing: "0.06em",
                    fontWeight: 400,
                  }}
                >
                  {house.name}
                </h3>

                {house.note && (
                  <span
                    className="font-display"
                    style={{
                      color: "#c9a84c",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      border: "1px solid rgba(201,168,76,0.4)",
                    }}
                  >
                    {house.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div style={{ width: "60px", height: "1px", background: "rgba(201,168,76,0.5)" }} />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0 L12 7 L20 10 L12 13 L10 20 L8 13 L0 10 L8 7 Z" fill="#c9a84c" opacity="0.5" />
          </svg>
          <div style={{ width: "60px", height: "1px", background: "rgba(201,168,76,0.5)" }} />
        </div>
      </div>
    </section>
  );
}
