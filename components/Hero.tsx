import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
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
          padding: "clamp(100px, 14vh, 160px) clamp(32px, 6vw, 80px) clamp(80px, 10vh, 120px)",
          backgroundColor: "#09080a",
        }}
      >
        <p
          className="font-display animate-fade-in"
          style={{
            color: "rgba(201,168,76,0.5)",
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
            fontSize: "clamp(26px, 3.5vw, 48px)",
            letterSpacing: "0.22em",
            lineHeight: 1.15,
            color: "#c9a84c",
            margin: "0 0 28px",
            fontWeight: 400,
          }}
        >
          MARY PAVLATOU
        </h1>

        <div style={{ width: "40px", height: "1px", background: "#c9a84c", marginBottom: "28px", opacity: 0.6 }} />

        <p
          className="font-serif italic animate-fade-up delay-2"
          style={{
            color: "rgba(228,216,196,0.7)",
            fontSize: "clamp(14px, 1.6vw, 18px)",
            lineHeight: 1.8,
            maxWidth: "340px",
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

      {/* RIGHT — Her portrait */}
      <div
        style={{
          position: "relative",
          minHeight: "clamp(500px, 70vw, 100vh)",
        }}
        className="max-lg:min-h-[60vw]"
      >
        <Image
          src="/images/endsheet-hires.jpg"
          alt="Mary Pavlatou — Portrait"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center 12%" }}
        />
        {/* Fade left edge into the dark text panel */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #09080a, transparent)",
          }}
        />
        {/* Subtle bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "100px",
          background: "linear-gradient(to bottom, transparent, #09080a)",
        }} />
      </div>
    </section>
  );
}
