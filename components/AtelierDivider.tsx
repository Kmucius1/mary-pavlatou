import Image from "next/image";

const cities = ["Athens", "Paris", "Milan", "New York", "Chicago"];

export default function AtelierDivider() {
  return (
    <section style={{ position: "relative", height: "clamp(340px, 50vw, 580px)", overflow: "hidden" }}>
      <Image
        src="/images/mary-runway-white.jpg"
        alt="Mary Pavlatou — Colorized runway presentation in white gown"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
      />
      {/* Dark overlay — heavier at edges, open in center */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(8,8,10,0.7) 0%, rgba(8,8,10,0.3) 40%, rgba(8,8,10,0.3) 60%, rgba(8,8,10,0.85) 100%)",
      }} />

      {/* Center content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 clamp(24px, 6vw, 80px)",
        zIndex: 10,
      }}>
        <p
          className="font-display"
          style={{ color: "rgba(245,208,80,0.6)", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "20px" }}
        >
          The Houses She Graced
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-6">
          {["Christian Dior", "Hubert de Givenchy", "Jacques Fath", "Pierre Balmain", "Nina Ricci"].map((house, i) => (
            <span key={house} className="flex items-center gap-3 md:gap-5">
              <span
                className="font-display"
                style={{ color: "#f5d050", fontSize: "clamp(9px, 1.1vw, 12px)", letterSpacing: "0.22em", textTransform: "uppercase" }}
              >
                {house}
              </span>
              {i < 4 && (
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                  <path d="M2.5 0 L5 2.5 L2.5 5 L0 2.5 Z" fill="rgba(245,208,80,0.78)" />
                </svg>
              )}
            </span>
          ))}
        </div>

        <div style={{ width: "48px", height: "1px", background: "rgba(245,208,80,0.78)", margin: "0 auto 20px" }} />

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {cities.map((city, i) => (
            <span key={city} className="flex items-center gap-2 md:gap-4">
              <span
                className="font-serif italic"
                style={{ color: "rgba(228,216,196,0.7)", fontSize: "clamp(12px, 1.4vw, 16px)" }}
              >
                {city}
              </span>
              {i < cities.length - 1 && (
                <span style={{ color: "rgba(245,208,80,0.68)", fontSize: "11px" }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
