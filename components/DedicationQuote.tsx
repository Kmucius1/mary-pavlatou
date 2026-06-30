import Image from "next/image";

export default function DedicationQuote() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#EDE8D8",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C5A84A 30%, #C5A84A 70%, transparent)", zIndex: 20 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C5A84A 30%, #C5A84A 70%, transparent)", zIndex: 20 }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* LEFT — Endsheet portrait image, full visibility */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(24px,4vw,48px)",
            backgroundColor: "#EDE8D8",
          }}
        >
          <Image
            src="/images/endsheet-portrait.jpg"
            alt="Mary Pavlatou — Archive Endsheet Portrait"
            width={666}
            height={405}
            sizes="(max-width: 1024px) 90vw, 45vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxWidth: "520px",
            }}
          />
        </div>

        {/* RIGHT — Quote text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(36px, 5vw, 64px) clamp(24px, 5vw, 64px)",
            backgroundColor: "#EDE8D8",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#8B7030" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
          </div>

          <p
            className="font-display animate-fade-in"
            style={{
              color: "#8B7030",
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            A Dedication
          </p>

          <blockquote
            className="font-serif italic animate-fade-in delay-2"
            style={{
              color: "#8B7030",
              fontSize: "clamp(16px, 2.2vw, 26px)",
              lineHeight: 1.6,
              margin: "0 0 16px",
              fontWeight: 400,
            }}
          >
            &ldquo;This book is dedicated to our mother,
            the one we call God&rsquo;s Special Angel.&rdquo;
          </blockquote>

          <p
            className="font-serif animate-fade-in delay-3"
            style={{
              color: "#4A3C2A",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            She is the closest thing that will ever be to Heaven on earth.
            <br />
            Eternal be her memory. May she be remembered forever.
          </p>

          <p
            className="font-display animate-fade-in delay-4"
            style={{
              color: "#8B7030",
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            — The Pulos Brothers
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill="#8B7030" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
