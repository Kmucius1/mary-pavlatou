import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundColor: "#09080a",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      className="max-lg:grid-cols-1"
    >
      {/* LEFT — Text */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(64px, 8vh, 100px) clamp(28px, 5vw, 64px) clamp(48px, 6vh, 80px)",
          backgroundColor: "#09080a",
        }}
      >
        <p
          className="font-display animate-fade-in"
          style={{
            color: "rgba(245,208,80,0.5)",
            fontSize: "9px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          An Official Memorial Archive
        </p>

        <h1
          className="font-display animate-fade-up"
          style={{
            fontSize: "clamp(14px, 2.8vw, 38px)",
            letterSpacing: "0.22em",
            lineHeight: 1.15,
            color: "#f5d050",
            margin: "0 0 20px",
            fontWeight: 400,
          }}
        >
          MARY PAVLATOU
        </h1>

        <div style={{ width: "36px", height: "1px", background: "#f5d050", marginBottom: "20px", opacity: 0.6 }} />

        <p
          className="font-serif italic animate-fade-up delay-2"
          style={{
            color: "rgba(228,216,196,0.7)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            lineHeight: 1.75,
            maxWidth: "300px",
            marginBottom: "32px",
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

      {/* RIGHT — Her portrait */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(32px,4vh,56px) clamp(20px,3vw,48px)",
          backgroundColor: "#09080a",
        }}
      >
        <Image
          src="/images/mary-glamour-portrait.jpg"
          alt="Mary Pavlatou — Portrait"
          width={900}
          height={1660}
          priority
          style={{
            width: "auto",
            height: "clamp(280px, 46vh, 520px)",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
