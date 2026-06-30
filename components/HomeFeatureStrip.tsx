export default function HomeFeatureStrip() {
  const items = [
    {
      key: "roots",
      title: "Greek Roots",
      text: "Proud heritage and unwavering values.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          {/* Laurel wreath */}
          <path d="M18 6C18 6 10 10 8 18C10 18 13 16 14 14C13 18 14 22 18 28C22 22 23 18 22 14C23 16 26 18 28 18C26 10 18 6 18 6Z" stroke="#B9974D" strokeWidth="1.2" fill="none" />
          <path d="M14 20C12 22 10 23 8 22" stroke="#B9974D" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M22 20C24 22 26 23 28 22" stroke="#B9974D" strokeWidth="1" fill="none" strokeLinecap="round" />
          <line x1="13" y1="28" x2="23" y2="28" stroke="#B9974D" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: "pioneer",
      title: "Fashion Pioneer",
      text: "The first Greek certified professional mannequin.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          {/* Dress form / mannequin */}
          <ellipse cx="18" cy="7" rx="4" ry="4.5" stroke="#B9974D" strokeWidth="1.2" />
          <path d="M12 13C12 11 15 10 18 10C21 10 24 11 24 13L26 28H10L12 13Z" stroke="#B9974D" strokeWidth="1.2" fill="none" />
          <line x1="10" y1="28" x2="26" y2="28" stroke="#B9974D" strokeWidth="1.2" />
          <line x1="18" y1="28" x2="18" y2="32" stroke="#B9974D" strokeWidth="1.2" />
          <line x1="14" y1="32" x2="22" y2="32" stroke="#B9974D" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      key: "international",
      title: "International Icon",
      text: "Athens, Paris, Milan, New York, Chicago and beyond.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          {/* Globe */}
          <circle cx="18" cy="18" r="12" stroke="#B9974D" strokeWidth="1.2" />
          <ellipse cx="18" cy="18" rx="5" ry="12" stroke="#B9974D" strokeWidth="1" />
          <path d="M6 13Q18 11 30 13" stroke="#B9974D" strokeWidth="1" fill="none" />
          <path d="M6 23Q18 25 30 23" stroke="#B9974D" strokeWidth="1" fill="none" />
        </svg>
      ),
    },
    {
      key: "couture",
      title: "Couture Houses",
      text: "Dior, Givenchy, Balmain, Nina Ricci & more.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          {/* Greek column / temple front */}
          <rect x="4" y="30" width="28" height="3" rx="1" stroke="#B9974D" strokeWidth="1.2" />
          <rect x="7" y="26" width="22" height="4" stroke="#B9974D" strokeWidth="1" />
          <rect x="8" y="10" width="3" height="16" stroke="#B9974D" strokeWidth="1" />
          <rect x="16.5" y="10" width="3" height="16" stroke="#B9974D" strokeWidth="1" />
          <rect x="25" y="10" width="3" height="16" stroke="#B9974D" strokeWidth="1" />
          <rect x="4" y="7" width="28" height="4" rx="0.5" stroke="#B9974D" strokeWidth="1.2" />
          <rect x="8" y="4" width="20" height="3" stroke="#B9974D" strokeWidth="1" />
        </svg>
      ),
    },
    {
      key: "legacy",
      title: "Eternal Legacy",
      text: "A legacy preserved by her family. A memory that lives on.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          {/* Heart */}
          <path d="M18 28C18 28 6 20 6 13C6 9.7 8.7 7 12 7C14.2 7 16.2 8.2 18 10C19.8 8.2 21.8 7 24 7C27.3 7 30 9.7 30 13C30 20 18 28 18 28Z" stroke="#B9974D" strokeWidth="1.3" fill="none" />
          {/* Small laurel under heart */}
          <path d="M13 31C13 31 15 30 18 30C21 30 23 31 23 31" stroke="#B9974D" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F3EDE0 0%, #EDE5D0 100%)",
        borderTop: "1px solid #D8C48E",
        borderBottom: "1px solid #D8C48E",
        padding: "clamp(36px,5vh,56px) clamp(28px,5vw,64px)",
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        {/* Section title */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: "16px",
            justifyContent: "center", marginBottom: "40px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M10 1C10 1 5 6 1 6C5 6 10 11 10 11C10 11 15 6 19 6C15 6 10 1 10 1Z" fill="#B9974D" opacity="0.75" />
          </svg>
          <h2
            className="font-display"
            style={{
              color: "#8A6A2F",
              fontSize: "clamp(9px,1vw,11px)",
              letterSpacing: "0.40em",
              textTransform: "uppercase",
              fontWeight: 700,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            From Greece to the World&rsquo;s Greatest Fashion Houses
          </h2>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M10 1C10 1 5 6 1 6C5 6 10 11 10 11C10 11 15 6 19 6C15 6 10 1 10 1Z" fill="#B9974D" opacity="0.75" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
        </div>

        {/* Five-item strip */}
        <div
          style={{
            border: "1px solid #D8C48E",
            background: "rgba(255,255,255,0.30)",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
          className="max-lg:!grid-cols-3 max-sm:!grid-cols-1"
        >
          {items.map((item, i) => (
            <div
              key={item.key}
              style={{
                padding: "clamp(24px,3vh,36px) clamp(16px,2vw,24px)",
                borderLeft: i > 0 ? "1px solid #D8C48E" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
              }}
              className={i > 0 ? "max-sm:!border-l-0 max-sm:border-t" : ""}
            >
              <div
                style={{
                  width: "56px", height: "56px",
                  borderRadius: "50%",
                  border: "1px solid #D8C48E",
                  background: "rgba(248,244,234,0.8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <p
                className="font-display"
                style={{
                  color: "#B9974D",
                  fontSize: "8.5px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </p>

              <p
                className="font-serif"
                style={{
                  color: "#3D3328",
                  fontSize: "clamp(12px,1.1vw,13.5px)",
                  lineHeight: 1.65,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
