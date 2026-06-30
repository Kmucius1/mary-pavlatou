function LaurelLeft() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M22 8C22 8 14 13 12 22C14 22 17 20 18 18C17 22 18 27 22 34C26 27 27 22 26 18C27 20 30 22 32 22C30 13 22 8 22 8Z" stroke="#B9974D" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M17 26C14 28 12 29 10 27" stroke="#B9974D" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M27 26C30 28 32 29 34 27" stroke="#B9974D" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <line x1="16" y1="34" x2="28" y2="34" stroke="#B9974D" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function ColumnSmall() {
  return (
    <svg width="28" height="38" viewBox="0 0 28 38" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="28" height="3.5" rx="1" fill="#B9974D" opacity="0.7" />
      <rect x="3" y="3.5" width="22" height="2.5" fill="#B9974D" opacity="0.5" />
      <rect x="6" y="6" width="16" height="24" fill="#D8C48E" opacity="0.18" />
      {[8, 12, 16, 20].map((x) => (
        <rect key={x} x={x} y="6" width="1" height="24" fill="#B9974D" opacity="0.20" />
      ))}
      <rect x="3" y="30" width="22" height="2.5" fill="#B9974D" opacity="0.5" />
      <rect x="0" y="32.5" width="28" height="3.5" rx="1" fill="#B9974D" opacity="0.7" />
      <rect x="4" y="36" width="20" height="2" rx="1" fill="#B9974D" opacity="0.35" />
    </svg>
  );
}

export default function HomeClosingQuote() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EFE5CC 0%, #F2F0E8 50%, #EFE5CC 100%)",
        borderTop: "1px solid #D8C48E",
        padding: "clamp(44px,6vh,72px) clamp(32px,6vw,80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(32px,4vw,64px)",
          alignItems: "center",
        }}
        className="max-md:!grid-cols-1 max-md:text-center"
      >
        {/* Left: quote */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="max-md:hidden">
            <LaurelLeft />
          </div>

          <blockquote
            className="font-serif italic"
            style={{
              color: "#4A3C2A",
              fontSize: "clamp(16px,1.8vw,22px)",
              lineHeight: 1.75,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;She carried the poise of Greece and the discipline of international fashion.&rdquo;
          </blockquote>

          <div className="max-md:hidden">
            <LaurelLeft />
          </div>
        </div>

        {/* Right: credits */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "10px",
            flexShrink: 0,
          }}
          className="max-md:!items-center"
        >
          <ColumnSmall />

          <div style={{ textAlign: "right" }} className="max-md:!text-center">
            <p
              className="font-display"
              style={{
                color: "#8A6A2F",
                fontSize: "7.5px",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "5px",
              }}
            >
              Preserved by The Pulos Brothers
            </p>
            <p
              className="font-display"
              style={{
                color: "#8A6A2F",
                fontSize: "7.5px",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Restored by Mary James
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div
        aria-hidden="true"
        style={{
          maxWidth: "1100px",
          margin: "clamp(32px,4vh,52px) auto 0",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #C5A84A 20%, #C5A84A 80%, transparent)",
        }}
      />
    </section>
  );
}
