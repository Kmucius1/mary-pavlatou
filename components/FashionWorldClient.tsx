"use client";
import Image from "next/image";
import Link from "next/link";

// ─── Ornamental divider ─────────────────────────────────────────────────────
function OrnamentDivider({ centered }: { centered?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "14px 0 20px", justifyContent: centered ? "center" : undefined }}>
      {centered && <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />}
      {!centered && <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />}
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
        <path d="M9 1C9 1 5 5 1 5C5 5 9 9 9 9C9 9 13 5 17 5C13 5 9 1 9 1Z" fill="#C5A84A" opacity="0.8" />
      </svg>
      {centered && <div style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />}
      {!centered && <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />}
    </div>
  );
}

// ─── Fashion houses data ────────────────────────────────────────────────────
const houses = [
  {
    name: "ETAM",
    nameStyle: { fontFamily: "var(--font-cinzel)", fontSize: "clamp(16px,1.8vw,22px)", letterSpacing: "0.22em", fontWeight: 700 },
    city: "Grande Bretagne · Athens",
    caption: "Επιδείξεις μόδας at the Grande Bretagne — the most celebrated fashion salons of Athens.",
    image: "/images/book-clipping-etam-miss-mary.png",
    imageW: 1388, imageH: 1838,
  },
  {
    name: "Halifa",
    nameStyle: { fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "clamp(15px,1.7vw,22px)", fontWeight: 600 },
    city: "Γουναρικά · Athens",
    caption: "Γουναρικά — the finest fur house in Athens. Ermine and mink at the Grande Bretagne.",
    image: "/images/book-clipping-fur-coat.png",
    imageW: 1388, imageH: 1838,
  },
  {
    name: "Tsitsopoulos",
    nameStyle: { fontFamily: "var(--font-cinzel)", fontSize: "clamp(11px,1.2vw,14px)", letterSpacing: "0.18em", fontWeight: 700 },
    city: "King George Hotel · Athens",
    caption: "Καλοκαιρινά μοντέλλα — summer and spring collections at the King George Hotel.",
    image: "/images/book-clipping-summer-show.png",
    imageW: 1388, imageH: 1838,
  },
  {
    name: "Archontaki-Kallergi",
    nameStyle: { fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "clamp(12px,1.3vw,16px)", fontWeight: 600 },
    city: "Μόδα Καπέλα · Athens",
    caption: "Μανεκέν Μαίρη Παυλάτου — presenting Rose Valois hat models at the Archontaki-Kallergi salon.",
    image: "/images/book-clipping-hat-mary.png",
    imageW: 1388, imageH: 1838,
  },
  {
    name: "Eleni Mallidou",
    nameStyle: { fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "clamp(14px,1.5vw,18px)", fontWeight: 600 },
    city: "Ανοιξιάτικη Επίδειξις",
    caption: "Η Ανοιξιάτικη Επίδειξις — the spring fashion show of the Mallidou house.",
    image: "/images/book-clipping-mallidou-spring.png",
    imageW: 1388, imageH: 1838,
  },
  {
    name: "Stantzos · Filioskos",
    nameStyle: { fontFamily: "var(--font-cinzel)", fontSize: "clamp(9px,1vw,12px)", letterSpacing: "0.18em", fontWeight: 700 },
    city: "Athens · International",
    caption: "\"A celebrated fashion model\" — featured by Stantzos and Filioskos houses in national press.",
    image: "/images/book-clipping-mary-celebrated.png",
    imageW: 1388, imageH: 1838,
  },
];

// ─── Golden Era stats ───────────────────────────────────────────────────────
const stats = [
  {
    label: "Haute Couture",
    text: "Artistry in every stitch and silhouette",
    icon: (
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" aria-hidden="true">
        <path d="M16 2L20 10H28L21.5 15L24 24L16 19L8 24L10.5 15L4 10H12Z" stroke="#8B7030" strokeWidth="1.2" fill="none" />
        <line x1="16" y1="24" x2="16" y2="34" stroke="#8B7030" strokeWidth="1.2" />
        <path d="M10 28 Q16 26 22 28" stroke="#8B7030" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: "International Presence",
    text: "Athens, Paris, Milan, New York, Chicago and beyond",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="#8B7030" strokeWidth="1.2" />
        <ellipse cx="16" cy="16" rx="6" ry="13" stroke="#8B7030" strokeWidth="1" />
        <line x1="3" y1="16" x2="29" y2="16" stroke="#8B7030" strokeWidth="1" />
        <line x1="5" y1="10" x2="27" y2="10" stroke="#8B7030" strokeWidth="0.8" />
        <line x1="5" y1="22" x2="27" y2="22" stroke="#8B7030" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    label: "Cultural Ambassador",
    text: "Carrying the grace of Greece to the world of fashion",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="26" width="28" height="3" rx="1" stroke="#8B7030" strokeWidth="1.1" fill="none" />
        <rect x="5" y="21" width="22" height="5" stroke="#8B7030" strokeWidth="1.1" fill="none" />
        <rect x="8" y="7" width="3" height="14" stroke="#8B7030" strokeWidth="1" fill="none" />
        <rect x="14.5" y="7" width="3" height="14" stroke="#8B7030" strokeWidth="1" fill="none" />
        <rect x="21" y="7" width="3" height="14" stroke="#8B7030" strokeWidth="1" fill="none" />
        <rect x="2" y="4" width="28" height="3" rx="1" stroke="#8B7030" strokeWidth="1.1" fill="none" />
      </svg>
    ),
  },
  {
    label: "Iconic Mannequin",
    text: "Recognized as one of the best in Athens and among the very best of her era",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3L19 11H28L21 16.5L23.5 25L16 20.5L8.5 25L11 16.5L4 11H13Z" stroke="#8B7030" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
];

// ─── Bottom feature cards ────────────────────────────────────────────────────
const featureCards = [
  {
    title: "Επιδείξεις Μόδας",
    body: "Mary presented collections at Athens' most prestigious venues — the Grande Bretagne and the King George Hotel — for the great fashion houses of postwar Greece.",
    cta: { label: "View Archive Clippings", href: "/archive" },
    images: [
      { src: "/images/book-clipping-mallidou-spring.png", alt: "Spring fashion show clipping — Eleni Mallidou house", w: 1388, h: 1838, rot: -4 },
      { src: "/images/book-clipping-etam-pajamas.png", alt: "ETAM pajama exhibition clipping — Grande Bretagne", w: 1388, h: 1838, rot: 3 },
    ],
  },
  {
    title: "The Third Man",
    body: "Her signature runway music was the theme from The Third Man — cinematic, timeless, and unforgettable. As she walked, the room fell silent.",
    cta: { label: "Enter the Archive", href: "/archive" },
    images: [
      { src: "/images/mary-black-velvet-runway.png", alt: "Mary Pavlatou in black velvet gown — archival press photograph", w: 600, h: 1100, rot: 0 },
    ],
  },
  {
    title: "Η Τέχνη του Μανεκέν",
    body: "At the Patricia Vance School of Fashion in Chicago, Mary trained as the first Greek to earn international certification. For her, the mannequin was not an instrument — she was an artist.",
    cta: { label: "About Her Training", href: "/story#chicago" },
    images: [
      { src: "/images/mary-veil-hat.jpg", alt: "Mary Pavlatou — Portrait with veil hat, from the family archive", w: 1388, h: 1838, rot: -3 },
      { src: "/images/book-clipping-evening-gown.png", alt: "Mary Pavlatou modeling an evening gown in the American style", w: 1388, h: 1838, rot: 4 },
    ],
  },
];

// ─── Main component ─────────────────────────────────────────────────────────
export default function FashionWorldClient() {
  return (
    <main style={{ backgroundColor: "#F0EBD9" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #F5F1E6 0%, #F0EBD9 50%, #EDE8D8 100%)",
        padding: "clamp(60px,8vh,100px) clamp(32px,6vw,88px)",
        borderBottom: "1px solid #D0C4A0",
        position: "relative", overflow: "hidden",
      }}>
        {/* Left watermark — atelier */}
        <div aria-hidden="true" style={{
          position: "absolute", left: "-40px", top: 0, bottom: 0, width: "300px",
          opacity: 0.07, backgroundImage: "url('/images/mary-runway-white.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          pointerEvents: "none",
        }} />
        {/* Right watermark — vanity/tower */}
        <div aria-hidden="true" style={{
          position: "absolute", right: "-20px", top: 0, bottom: 0, width: "260px",
          opacity: 0.07, backgroundImage: "url('/images/mary-social-event.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1200px", margin: "0 auto", position: "relative",
          display: "grid", gridTemplateColumns: "2fr 2.5fr 1.5fr",
          gap: "clamp(24px,4vw,56px)", alignItems: "center",
        }} className="max-lg:grid-cols-1">

          {/* Left: text */}
          <div className="animate-fade-in">
            <p className="font-display" style={{ color: "#8B7030", fontSize: "9px", letterSpacing: "0.44em", textTransform: "uppercase", fontWeight: 700, marginBottom: "14px" }}>
              The World of Fashion
            </p>
            <h1 className="font-display" style={{ color: "#8B7030", fontSize: "clamp(28px,4.5vw,56px)", letterSpacing: "0.12em", fontWeight: 700, lineHeight: 1.05, marginBottom: "10px" }}>
              Ο Κοσμος της Μοδας
            </h1>
            <OrnamentDivider />
            <p className="font-serif" style={{ color: "#1C1814", fontSize: "clamp(14px,1.45vw,17px)", lineHeight: 1.9, marginBottom: "12px" }}>
              Mary Pavlatou moved with grace through the golden era of haute couture — a world of artistry, discipline, beauty, and timeless elegance.
            </p>
            <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.85, marginBottom: "32px" }}>
              She modeled for the greatest fashion houses of her time and belonged to the international world of fashion.
            </p>
            <Link href="/story#chicago" className="font-display" style={{
              color: "#8B7030", border: "1px solid #8B7030",
              padding: "12px 24px", fontSize: "8px", letterSpacing: "0.3em",
              textTransform: "uppercase", fontWeight: 700, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "12px",
              transition: "background 0.22s ease, color 0.22s ease",
            }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#8B7030"; el.style.color = "#F5F1E6"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#8B7030"; }}
            >
              Explore Her Journey
              <svg width="18" height="6" viewBox="0 0 18 6" fill="none" aria-hidden="true">
                <path d="M0 3H15.5M12 1L15.5 3L12 5" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          </div>

          {/* Center: portrait */}
          <div className="animate-fade-in delay-2 max-lg:order-first" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ overflow: "hidden", maxWidth: "320px", boxShadow: "0 6px 40px rgba(139,112,48,0.18)" }}>
              <Image
                src="/images/mary-runway-blue.jpg"
                alt="Mary Pavlatou — Live runway presentation in blue ball gown, colorized"
                width={1388} height={1838}
                priority
                style={{ width: "100%", height: "auto", maxHeight: "clamp(300px,46vh,500px)", objectFit: "contain", objectPosition: "top center", display: "block" }}
              />
            </div>
            <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "11px", letterSpacing: "0.04em" }}>
              Mary Pavlatou · Fashion Presentation · Athens
            </p>
          </div>

          {/* Right: pull quote */}
          <div className="animate-fade-in delay-3 max-lg:hidden">
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" style={{ marginBottom: "12px", opacity: 0.7 }}>
              <path d="M0 22V12.5C0 6.5 3.5 2.5 10.5 0L12 2.5C9.4 3.5 7.7 5.5 7 8.5H12V22H0ZM16 22V12.5C16 6.5 19.5 2.5 26.5 0L28 2.5C25.4 3.5 23.7 5.5 23 8.5H28V22H16Z" fill="#8B7030" />
            </svg>
            <blockquote className="font-serif italic" style={{ color: "#1C1814", fontSize: "clamp(13px,1.35vw,16px)", lineHeight: 1.9, marginBottom: "14px" }}>
              My dream is to become one of the world's finest mannequins and, one day, to create a good family.
            </blockquote>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
              — Mary Pavlatou · Apogevmatini Interview
            </p>
          </div>
        </div>
      </section>

      {/* ── Greek key strip ── */}
      <div aria-hidden="true" style={{ height: "10px", background: "repeating-linear-gradient(90deg, rgba(139,112,48,0.35) 0px, rgba(139,112,48,0.35) 2px, transparent 2px, transparent 7px)", borderBottom: "1px solid #D0C4A0" }} />

      {/* ── Golden Era card ── */}
      <section style={{ padding: "clamp(48px,6vh,72px) clamp(28px,6vw,80px)" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          background: "linear-gradient(145deg, #F5F1E6 0%, #EDE8D8 100%)",
          border: "1px solid #D0C4A0",
          padding: "clamp(32px,4vw,52px)",
          display: "grid", gridTemplateColumns: "1fr 2fr",
          gap: "clamp(28px,4vw,56px)",
        }} className="max-lg:grid-cols-1">
          {/* Left */}
          <div>
            <h2 className="font-display" style={{ color: "#8B7030", fontSize: "clamp(18px,2.2vw,28px)", letterSpacing: "0.08em", fontWeight: 700, lineHeight: 1.25, marginBottom: "16px" }}>
              The Golden Era of Haute Couture
            </h2>
            <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.9 }}>
              The 1950s were a time of couture, craftsmanship, and cultural beauty. Mary Pavlatou stood among the world's finest mannequins, representing Greece with poise, intelligence, and unforgettable presence.
            </p>
          </div>
          {/* Right: 4 stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "clamp(16px,2vw,28px)" }} className="max-sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>{stat.icon}</div>
                <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}>
                  {stat.label}
                </p>
                <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "12px", lineHeight: 1.7 }}>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Great Fashion Houses ── */}
      <section style={{ padding: "clamp(48px,6vh,72px) clamp(28px,6vw,80px)", borderTop: "1px solid #E0D8C8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(36px,5vh,56px)" }}>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(20px,2.8vw,36px)", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "6px" }}>
              The Great Fashion Houses
            </h2>
            <OrnamentDivider centered />
            <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "clamp(13px,1.35vw,15px)" }}>
              Mary Pavlatou modeled for the most prestigious couture houses of the era.
            </p>
          </div>

          {/* 6-column house grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "clamp(10px,1.5vw,18px)" }} className="max-lg:grid-cols-3 max-sm:grid-cols-2">
            {houses.map((house) => (
              <div key={house.name} style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                background: "transparent",
              }}>
                {/* House name */}
                <div style={{ textAlign: "center", marginBottom: "10px", minHeight: "48px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <p style={{ ...house.nameStyle, color: "#1C1814", marginBottom: "2px" }}>{house.name}</p>
                  <p className="font-display" style={{ color: "#8B7030", fontSize: "7px", letterSpacing: "0.34em", textTransform: "uppercase", fontWeight: 600 }}>
                    {house.city}
                  </p>
                </div>
                {/* Image frame */}
                <div style={{
                  width: "100%", border: "1px solid #C5A84A",
                  background: "#EDE8D8",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Image
                    src={house.image}
                    alt={`Mary Pavlatou — ${house.name}`}
                    width={house.imageW}
                    height={house.imageH}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    loading="lazy"
                  />
                </div>
                {/* Caption */}
                <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "11px", lineHeight: 1.55, textAlign: "center", marginTop: "10px", padding: "0 4px" }}>
                  {house.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three feature cards ── */}
      <section style={{ padding: "clamp(48px,6vh,72px) clamp(28px,6vw,80px)", borderTop: "1px solid #E0D8C8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(16px,2vw,24px)" }} className="max-lg:grid-cols-1">
          {featureCards.map((card) => (
            <div key={card.title} style={{
              background: "linear-gradient(145deg, #F5F1E6 0%, #EDE8D8 100%)",
              border: "1px solid #D0C4A0",
              padding: "clamp(24px,3vw,36px)",
              display: "flex", flexDirection: "column",
            }}>
              <h3 className="font-display" style={{ color: "#8B7030", fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.08em", fontWeight: 700, lineHeight: 1.2, marginBottom: "8px" }}>
                {card.title}
              </h3>
              <OrnamentDivider />
              <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.85, marginBottom: "24px" }}>
                {card.body}
              </p>

              {/* Image collage */}
              <div style={{ position: "relative", height: "180px", marginBottom: "24px", flexShrink: 0 }}>
                {card.images.map((img, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    left: i === 0 ? "0" : "auto",
                    right: i === 1 ? "0" : "auto",
                    top: i === 0 ? "0" : "20px",
                    width: card.images.length === 1 ? "100%" : "58%",
                    border: "6px solid #F0EBD9",
                    outline: "1px solid #C5A84A",
                    background: "#EDE8D8",
                    transform: `rotate(${img.rot ?? 0}deg)`,
                    boxShadow: "0 2px 12px rgba(139,112,48,0.15)",
                    overflow: "hidden",
                    zIndex: i,
                  }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.w}
                      height={img.h}
                      style={{
                        width: "100%",
                        height: card.images.length === 1 ? "160px" : "140px",
                        objectFit: "cover",
                        objectPosition: "center top",
                        display: "block",
                        filter: "grayscale(1)",
                      }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "auto" }}>
                <Link href={card.cta.href} className="font-display" style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  color: "#8B7030", border: "1px solid #8B7030",
                  padding: "10px 20px", fontSize: "7px",
                  letterSpacing: "0.3em", textTransform: "uppercase",
                  fontWeight: 700, textDecoration: "none",
                  transition: "background 0.22s ease, color 0.22s ease",
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#8B7030"; el.style.color = "#F5F1E6"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#8B7030"; }}
                >
                  {card.cta.label}
                  <svg width="16" height="5" viewBox="0 0 16 5" fill="none" aria-hidden="true">
                    <path d="M0 2.5H14M11 1L14 2.5L11 4" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote footer band ── */}
      <section style={{
        background: "linear-gradient(135deg, #E6DFC8 0%, #EDE8D8 50%, #E6DFC8 100%)",
        borderTop: "1px solid #C5A84A",
        borderBottom: "1px solid #C5A84A",
        padding: "clamp(32px,5vh,52px) clamp(32px,8vw,120px)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Left laurel */}
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.65 }}>
            <path d="M24 38 C16 30 8 20 6 10 C10 14 16 18 20 16 C16 22 18 30 24 38Z" fill="#8B7030" />
            <path d="M24 38 C22 26 14 18 8 16 C12 16 18 20 20 16 C20 22 22 30 24 38Z" fill="#8B7030" opacity="0.6" />
            <path d="M24 38 C24 28 20 18 14 12 C18 14 22 20 22 16 C22 22 22 30 24 38Z" fill="#8B7030" opacity="0.4" />
          </svg>

          <blockquote className="font-serif italic" style={{
            color: "#1C1814", fontSize: "clamp(15px,1.8vw,22px)",
            lineHeight: 1.75, flex: 1,
          }}>
            &ldquo;Η δις Παυλάτου σας παρουσιάζει αυτό το κομψό παλτό — Miss Pavlatou presents this elegant coat.&rdquo;
          </blockquote>

          {/* Right laurel (mirrored) */}
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.65, transform: "scaleX(-1)" }}>
            <path d="M24 38 C16 30 8 20 6 10 C10 14 16 18 20 16 C16 22 18 30 24 38Z" fill="#8B7030" />
            <path d="M24 38 C22 26 14 18 8 16 C12 16 18 20 20 16 C20 22 22 30 24 38Z" fill="#8B7030" opacity="0.6" />
            <path d="M24 38 C24 28 20 18 14 12 C18 14 22 20 22 16 C22 22 22 30 24 38Z" fill="#8B7030" opacity="0.4" />
          </svg>
        </div>
      </section>

    </main>
  );
}
