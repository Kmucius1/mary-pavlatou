import IdentityCard from "./IdentityCard";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#09080a",
      }}
    >
      {/* Greek columns at golden hour */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hf-columns.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,
        }}
      />

      {/* Gradient: deep dark left, fades right to let columns breathe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, #09080a 0%, #09080a 28%, rgba(9,8,10,0.85) 50%, rgba(9,8,10,0.45) 75%, rgba(9,8,10,0.6) 100%)",
        }}
      />

      {/* Thin gold line — top only */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent)" }} />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(100px, 14vh, 160px) clamp(32px, 7vw, 100px) clamp(80px, 10vh, 120px)",
          maxWidth: "800px",
        }}
      >
        <p
          className="font-display animate-fade-in"
          style={{
            color: "rgba(201,168,76,0.55)",
            fontSize: "9px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          An Official Memorial Archive
        </p>

        <h1
          className="font-display animate-fade-up"
          style={{
            fontSize: "clamp(28px, 3.8vw, 52px)",
            letterSpacing: "0.22em",
            lineHeight: 1.15,
            color: "#c9a84c",
            margin: "0 0 28px",
            fontWeight: 400,
          }}
        >
          MARY PAVLATOU
        </h1>

        <div style={{ width: "40px", height: "1px", background: "#c9a84c", marginBottom: "28px", opacity: 0.7 }} />

        <p
          className="font-serif italic animate-fade-up delay-2"
          style={{
            color: "rgba(228,216,196,0.75)",
            fontSize: "clamp(15px, 1.8vw, 20px)",
            lineHeight: 1.7,
            maxWidth: "380px",
            marginBottom: "48px",
          }}
        >
          International Fashion Model · Greek Icon
          <br />
          1950s · Athens to Paris
        </p>

        <a href="#story" className="cta-btn animate-fade-up delay-3">
          Explore the Archive
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M0 4 H12 M9 1 L12 4 L9 7" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </a>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #09080a)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
