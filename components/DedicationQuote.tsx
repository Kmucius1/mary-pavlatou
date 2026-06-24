import Image from "next/image";

export default function DedicationQuote() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#08080a",
      }}
    >
      {/* Gold top / bottom rules */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)", zIndex: 20 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)", zIndex: 20 }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "680px",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* LEFT — Endsheet portrait image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
          }}
        >
          <Image
            src="/images/endsheet2.jpg"
            alt="Mary Pavlatou — Archive Endsheet Portrait"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Right-edge fade to dark on large screens */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to right, transparent, #08080a)",
            }}
          />
        </div>

        {/* RIGHT — Quote text */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(48px, 8vw, 96px) clamp(32px, 6vw, 80px)",
            backgroundColor: "#08080a",
          }}
        >
          {/* Ornament */}
          <div className="flex items-center gap-4 mb-8">
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#c9a84c" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
          </div>

          <p
            className="font-display animate-fade-in"
            style={{
              color: "rgba(201,168,76,0.55)",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            A Dedication
          </p>

          <blockquote
            className="font-serif italic animate-fade-in delay-2"
            style={{
              color: "#c9a84c",
              fontSize: "clamp(20px, 3vw, 34px)",
              lineHeight: 1.6,
              margin: "0 0 24px",
              fontWeight: 400,
            }}
          >
            &ldquo;This book is dedicated to our mother,
            the one we call God&rsquo;s Special Angel.&rdquo;
          </blockquote>

          <p
            className="font-serif animate-fade-in delay-3"
            style={{
              color: "#c0b89e",
              fontSize: "clamp(14px, 1.8vw, 18px)",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            She is the closest thing that will ever be to Heaven on earth.
            <br />
            Eternal be her memory. May she be remembered forever.
          </p>

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
          <div className="flex items-center gap-4 mt-8">
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#c9a84c" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
