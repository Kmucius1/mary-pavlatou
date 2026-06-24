export default function DedicationQuote() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#08080a",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
        textAlign: "center",
      }}
    >
      {/* Art Deco fan pattern from book cover — heavily dimmed as texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/mary-cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          filter: "blur(3px) saturate(0.5)",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,8,10,0.94)",
        }}
      />

      {/* Gold top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* Ornament top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ flex: 1, maxWidth: "160px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#c9a84c" opacity="0.8" />
          </svg>
          <div style={{ flex: 1, maxWidth: "160px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
        </div>

        {/* Dedication label */}
        <p
          className="font-display animate-fade-in"
          style={{
            color: "rgba(201,168,76,0.55)",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          A Dedication
        </p>

        {/* Pull quote */}
        <blockquote
          className="font-serif italic animate-fade-in delay-2"
          style={{
            color: "#c9a84c",
            fontSize: "clamp(22px, 4vw, 38px)",
            lineHeight: 1.55,
            margin: "0 0 28px",
            fontWeight: 400,
          }}
        >
          &ldquo;This book is dedicated to our mother,
          <br className="hidden md:block" />
          the one we call God&rsquo;s Special Angel.&rdquo;
        </blockquote>

        <p
          className="font-serif animate-fade-in delay-3"
          style={{
            color: "#e4dac8",
            fontSize: "clamp(15px, 2vw, 19px)",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          She is the closest thing that will ever be to Heaven on earth.
          <br />
          Eternal be her memory. May she be remembered forever.
        </p>

        {/* Attribution */}
        <p
          className="font-display animate-fade-in delay-4"
          style={{
            color: "rgba(201,168,76,0.5)",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          — The Pulos Brothers
        </p>

        {/* Ornament bottom */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div style={{ flex: 1, maxWidth: "160px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#c9a84c" opacity="0.8" />
          </svg>
          <div style={{ flex: 1, maxWidth: "160px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
        </div>
      </div>
    </section>
  );
}
