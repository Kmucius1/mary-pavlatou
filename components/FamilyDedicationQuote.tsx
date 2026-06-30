export default function FamilyDedicationQuote() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EFE5CC 0%, #F2F0E8 50%, #EFE5CC 100%)",
        padding: "clamp(56px,8vh,96px) clamp(32px,6vw,80px)",
        borderTop: "1px solid #D8C48E",
        borderBottom: "1px solid #D8C48E",
      }}
    >
      <div
        style={{
          maxWidth: "760px", margin: "0 auto", textAlign: "center",
          border: "1px solid #B9974D", padding: "clamp(36px,5vh,64px) clamp(32px,5vw,72px)",
          position: "relative",
        }}
      >
        {/* Corner marks */}
        {["tl","tr","bl","br"].map((c) => (
          <div key={c} aria-hidden="true" style={{
            position: "absolute",
            top: c.startsWith("t") ? "8px" : undefined,
            bottom: c.startsWith("b") ? "8px" : undefined,
            left: c.endsWith("l") ? "8px" : undefined,
            right: c.endsWith("r") ? "8px" : undefined,
            width: "14px", height: "14px",
            borderTop: c.startsWith("t") ? "1px solid #B9974D" : "none",
            borderBottom: c.startsWith("b") ? "1px solid #B9974D" : "none",
            borderLeft: c.endsWith("l") ? "1px solid #B9974D" : "none",
            borderRight: c.endsWith("r") ? "1px solid #B9974D" : "none",
          }} />
        ))}

        {/* Star dividers */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", marginBottom: "28px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #D8C48E)" }} />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 0L8.5 5H14L9.5 8L11 13L7 10L3 13L4.5 8L0 5H5.5Z" fill="#B9974D" opacity="0.7" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #D8C48E)" }} />
        </div>

        <blockquote
          className="font-serif italic"
          style={{
            color: "#6E665A", fontSize: "clamp(18px,2.2vw,26px)",
            lineHeight: 1.75, marginBottom: "24px", fontStyle: "italic",
          }}
        >
          &ldquo;This book is dedicated to our mother, the one we call God&rsquo;s Special Angel.&rdquo;
        </blockquote>

        {/* Bottom divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", marginBottom: "18px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #D8C48E)" }} />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 0L8.5 5H14L9.5 8L11 13L7 10L3 13L4.5 8L0 5H5.5Z" fill="#B9974D" opacity="0.7" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #D8C48E)" }} />
        </div>

        <p
          className="font-display"
          style={{ color: "#B9974D", fontSize: "8px", letterSpacing: "0.44em", textTransform: "uppercase", fontWeight: 700 }}
        >
          From the Family Dedication
        </p>
      </div>
    </section>
  );
}
