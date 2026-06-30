"use client";
import Image from "next/image";
import Link from "next/link";

export default function LegacyPage() {
  return (
    <div style={{ backgroundColor: "#F0EBD9" }}>

      {/* ═══════════════════════════════════════════════
          HERO — Full-width with portrait collage
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1814 0%, #2A2318 40%, #3A2E1E 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(64px,9vh,112px) clamp(32px,6vw,88px)",
          borderBottom: "2px solid #C5A84A",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
            backgroundImage: "repeating-linear-gradient(90deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(197,168,74,0.5) 0px, rgba(197,168,74,0.5) 1px, transparent 1px, transparent 40px)",
          }}
        />

        <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "center" }}>

          {/* Left: Dedication text */}
          <div style={{ gridColumn: "1 / 2" }}>
            <p
              className="font-display"
              style={{ color: "#C5A84A", fontSize: "8px", letterSpacing: "0.55em", textTransform: "uppercase", marginBottom: "20px", fontWeight: 600 }}
            >
              Η Μνήμη της Μαρίας
            </p>
            <h1
              className="font-display"
              style={{ color: "#F5F1E6", fontSize: "clamp(36px,5vw,72px)", letterSpacing: "0.14em", fontWeight: 400, lineHeight: 1.1, marginBottom: "20px" }}
            >
              Legacy
            </h1>
            <div style={{ width: "48px", height: "1px", background: "#C5A84A", marginBottom: "24px", opacity: 0.7 }} />
            <p
              className="font-serif italic"
              style={{ color: "rgba(245,241,230,0.75)", fontSize: "clamp(15px,1.5vw,19px)", lineHeight: 1.85, marginBottom: "28px" }}
            >
              &ldquo;This book is dedicated to our mother,<br />the one we call God&rsquo;s Special Angel.&rdquo;
            </p>
            <p
              className="font-display"
              style={{ color: "#C5A84A", fontSize: "8px", letterSpacing: "0.4em", textTransform: "uppercase" }}
            >
              — The Pulos Brothers
            </p>
          </div>

          {/* Center: Main portrait */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ overflow: "hidden", boxShadow: "0 16px 64px rgba(0,0,0,0.5)" }}>
              <Image
                src="/images/portrait-mary-color-gold-lapels.png"
                alt="Mary Pavlatou — Colorized portrait from the family archive"
                width={1388}
                height={1838}
                priority
                style={{ width: "100%", height: "auto", maxHeight: "clamp(340px,52vh,560px)", objectFit: "contain", objectPosition: "top center", display: "block" }}
              />
            </div>
          </div>

          {/* Right: Greek words */}
          <div style={{ gridColumn: "3 / 4" }}>
            {[
              { greek: "χάρη", english: "Grace" },
              { greek: "ψυχή", english: "Soul" },
              { greek: "κίνηση", english: "Movement" },
              { greek: "αγάπη", english: "Love" },
              { greek: "μνήμη", english: "Memory" },
            ].map(({ greek, english }, i) => (
              <div key={greek} style={{ paddingBottom: "16px", marginBottom: "16px", borderBottom: i < 4 ? "1px solid rgba(197,168,74,0.2)" : "none", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p className="font-serif italic" style={{ color: "#C5A84A", fontSize: "clamp(16px,2vw,24px)" }}>{greek}</p>
                <p className="font-display" style={{ color: "rgba(245,241,230,0.5)", fontSize: "8px", letterSpacing: "0.36em", textTransform: "uppercase" }}>{english}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — Portrait Gallery from the Book
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F5F1E6",
          borderBottom: "1px solid #D0C4A0",
          padding: "clamp(64px,8vh,96px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "16px" }}>
              Preserved Portraits
            </p>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(22px,3vw,40px)", letterSpacing: "0.12em", fontWeight: 400, lineHeight: 1.2, marginBottom: "10px" }}>
              She Lived in Every Photograph
            </h2>
            <p className="font-serif italic" style={{ color: "#8B7030", fontSize: "clamp(14px,1.5vw,18px)", marginBottom: "0" }}>
              Κάθε Φωτογραφία Μια Ζωή
            </p>
            <div style={{ width: "60px", height: "1px", background: "#C5A84A", margin: "20px auto 0", opacity: 0.7 }} />
          </div>

          {/* Portrait grid — 4 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(16px,2vw,24px)" }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              {
                src: "/images/mary-young-portrait.jpg",
                alt: "Mary Pavlatou — Colorized portrait, smiling, black jacket and gold collar",
                caption: "From the family archive",
              },
              {
                src: "/images/mary-veil-hat.jpg",
                alt: "Mary Pavlatou — Portrait with veil hat and pearl necklace",
                caption: "Blue outfit · Pearl necklace",
              },
              {
                src: "/images/mary-runway-blue.jpg",
                alt: "Mary Pavlatou — Blue ball gown on runway, colorized",
                caption: "Live runway · Blue ball gown",
              },
              {
                src: "/images/mary-glamour-portrait.jpg",
                alt: "Mary Pavlatou — Colorized portrait with diamond earrings",
                caption: "Diamond earrings · Family archive",
              },
            ].map(({ src, alt, caption }) => (
              <div key={src} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{
                  border: "1px solid #D0C4A0",
                  background: "#EDE8D8",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(139,112,48,0.12)",
                }}>
                  <Image
                    src={src}
                    alt={alt}
                    width={1388}
                    height={1838}
                    style={{ width: "100%", height: "auto", maxHeight: "clamp(280px,40vh,440px)", objectFit: "contain", objectPosition: "top center", display: "block" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "10px 14px", background: "#F0EBD9", border: "1px solid #D0C4A0", borderTop: "none" }}>
                  <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "11px", lineHeight: 1.5 }}>{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — The Mother They Remembered
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F0EBD9",
          borderBottom: "1px solid #D0C4A0",
          padding: "clamp(64px,8vh,96px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,7vw,96px)", alignItems: "center" }}>

          {/* Left: image clipping */}
          <div style={{ position: "relative" }}>
            <div style={{
              border: "1px solid #C5A84A",
              background: "#F5F1E6",
              padding: "3px",
              boxShadow: "0 8px 32px rgba(139,112,48,0.18)",
              transform: "rotate(-1.5deg)",
            }}>
              <Image
                src="/images/book-clipping-etam-garden.png"
                alt="Mary Pavlatou at the ETAM garden — archival newspaper clipping"
                width={1388}
                height={1838}
                style={{ width: "100%", height: "auto", maxHeight: "460px", objectFit: "contain", objectPosition: "top", display: "block" }}
                loading="lazy"
              />
            </div>
            <div style={{
              position: "absolute",
              bottom: "-16px",
              right: "-12px",
              background: "#F5F1E6",
              border: "1px solid #C5A84A",
              padding: "8px 16px",
              transform: "rotate(1.5deg)",
              boxShadow: "0 4px 12px rgba(139,112,48,0.12)",
            }}>
              <p className="font-serif italic" style={{ color: "#8B7030", fontSize: "11px" }}>Apogevmatini · Athens</p>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "16px" }}>
              In Their Memory
            </p>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(20px,2.5vw,32px)", letterSpacing: "0.1em", fontWeight: 400, lineHeight: 1.2, marginBottom: "20px" }}>
              The Mother They Remembered
            </h2>
            <div style={{ width: "48px", height: "1px", background: "#C5A84A", marginBottom: "24px", opacity: 0.7 }} />
            <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(14px,1.4vw,17px)", lineHeight: 1.95, marginBottom: "20px" }}>
              To her sons, Mary was not only an icon — she was love itself. They preserved
              her photographs, clippings, and memories for decades, carried with a devotion
              that no archive can fully measure.
            </p>
            <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(14px,1.4vw,17px)", lineHeight: 1.95, marginBottom: "32px" }}>
              What exists in these pages is not only a record of a fashion career. It is a
              family&rsquo;s refusal to let grace be forgotten. Αιωνία η μνήμη της.
            </p>
            <div style={{ padding: "20px", background: "rgba(197,168,74,0.08)", border: "1px solid rgba(197,168,74,0.3)" }}>
              <p className="font-serif italic" style={{ color: "#1C1814", fontSize: "clamp(14px,1.5vw,18px)", lineHeight: 1.8, marginBottom: "8px" }}>
                &ldquo;She is the closest thing that will ever be to Heaven on earth.&rdquo;
              </p>
              <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.36em", textTransform: "uppercase" }}>
                — The Pulos Brothers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — The Light She Left (3 qualities)
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#EDE8D8",
          borderBottom: "1px solid #D0C4A0",
          padding: "clamp(64px,8vh,96px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "clamp(48px,7vh,72px)" }}>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(22px,3vw,38px)", letterSpacing: "0.12em", fontWeight: 400, lineHeight: 1.2, marginBottom: "10px" }}>
              The Light She Left
            </h2>
            <p className="font-display italic" style={{ color: "#8B7030", fontSize: "clamp(10px,1.1vw,13px)", letterSpacing: "0.38em" }}>
              Το Φως που Άφησε
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px,4vw,48px)" }} className="max-lg:grid-cols-1">
            {[
              {
                greek: "χάρη · Grace",
                title: "She Carried Grace",
                body: "She carried grace not as performance but as nature. Every room she entered remembered her. Every garment she wore came alive.",
                image: "/images/mary-veil-hat.jpg",
                imageAlt: "Mary Pavlatou — Portrait in veil hat",
              },
              {
                greek: "ψυχή · Soul",
                title: "She Had Soul",
                body: "Behind the photographs was an interior life of extraordinary depth. Dance, music, art, languages — Mary was a woman in full. The camera always knew.",
                image: "/images/book-clipping-hat-mary.png",
                imageAlt: "Mary Pavlatou — Close portrait in hat from Archontaki-Kallergi",
              },
              {
                greek: "κίνηση · Movement",
                title: "She Understood Movement",
                body: "She understood that fashion was not clothing. It was movement, message, and presence. She gave it all three — on every runway, in every επίδειξις.",
                image: "/images/book-clipping-mary-celebrated.png",
                imageAlt: "Mary Pavlatou — Celebrated fashion model clipping",
              },
            ].map(({ greek, title, body, image, imageAlt }) => (
              <div
                key={greek}
                style={{
                  background: "#F5F1E6",
                  border: "1px solid #D0C4A0",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(139,112,48,0.08)",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", background: "#EDE8D8", overflow: "hidden" }}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={1388}
                    height={1838}
                    style={{ width: "100%", height: "200px", objectFit: "contain", objectPosition: "top center", display: "block" }}
                    loading="lazy"
                  />
                </div>
                {/* Text */}
                <div style={{ padding: "24px" }}>
                  <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "10px" }}>
                    {greek}
                  </p>
                  <h3 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.08em", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px" }}>
                    {title}
                  </h3>
                  <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.9 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — Press Clippings from the Archive
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F0EBD9",
          borderBottom: "1px solid #D0C4A0",
          padding: "clamp(64px,8vh,96px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "14px" }}>
              From the Archive
            </p>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(20px,2.5vw,34px)", letterSpacing: "0.12em", fontWeight: 400, marginBottom: "8px" }}>
              Her Story in the Press
            </h2>
            <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "clamp(13px,1.4vw,16px)" }}>
              Original newspaper clippings from the family archive
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(16px,2vw,28px)" }} className="max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              { src: "/images/book-clipping-mohair-coat.png", caption: "Η δις Παυλάτου σας παρουσιάζει αυτό το κομψό παλτό" },
              { src: "/images/book-clipping-evening-gown.png", caption: "Ωραία και με Λίγα Χρήματα · Evening gown in the American style" },
              { src: "/images/book-clipping-summer-show.png", caption: "Επίδειξις Καλοκαιρινών Μοντέλλων · King George Hotel" },
            ].map(({ src, caption }) => (
              <div key={src} style={{ border: "1px solid #D0C4A0", background: "#F5F1E6", overflow: "hidden", boxShadow: "0 4px 16px rgba(139,112,48,0.10)" }}>
                <Image
                  src={src}
                  alt={caption}
                  width={1388}
                  height={1838}
                  style={{ width: "100%", height: "auto", maxHeight: "320px", objectFit: "contain", objectPosition: "top", display: "block" }}
                  loading="lazy"
                />
                <div style={{ padding: "12px 16px", borderTop: "1px solid #D0C4A0" }}>
                  <p className="font-serif italic" style={{ color: "#7A6E5E", fontSize: "11px", lineHeight: 1.55 }}>{caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/archive"
              className="font-display"
              style={{
                color: "#8B7030",
                border: "1px solid #C5A84A",
                padding: "12px 28px",
                fontSize: "8px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                transition: "background 0.22s ease",
              }}
            >
              View the Full Archive
              <svg width="16" height="5" viewBox="0 0 16 5" fill="none" aria-hidden="true">
                <path d="M0 2.5H14M11 1L14 2.5L11 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6 — What She Gave to Fashion
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F5F1E6",
          borderBottom: "1px solid #D0C4A0",
          padding: "clamp(64px,8vh,96px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "16px" }}>
            Her Contribution
          </p>
          <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(20px,3vw,38px)", letterSpacing: "0.12em", fontWeight: 400, lineHeight: 1.2, marginBottom: "32px" }}>
            What She Gave to Fashion
          </h2>
          <p className="font-serif" style={{ color: "#4A3C2A", fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 2, marginBottom: "32px" }}>
            Mary Pavlatou was the first Greek certified professional fashion mannequin.
            She trained at the Patricia Vance School of Fashion in Chicago and returned
            to Athens to become its best-known μανεκέν — a distinction earned not through
            beauty alone, but through the rarest combination of discipline, intelligence,
            and presence. She carried Greece to the world.
          </p>
          <div style={{
            padding: "32px",
            background: "rgba(197,168,74,0.07)",
            border: "1px solid rgba(197,168,74,0.3)",
            marginBottom: "40px",
          }}>
            <p className="font-serif italic" style={{ color: "#1C1814", fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.75, marginBottom: "12px" }}>
              &ldquo;She did not simply wear fashion. She interpreted it.&rdquo;
            </p>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.36em", textTransform: "uppercase" }}>
              — Family Archive
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — Αιωνία η Μνήμη (Closing)
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C1814 0%, #2A2318 60%, #1C1814 100%)",
          padding: "clamp(72px,10vh,120px) clamp(32px,6vw,88px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold pattern */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
            backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,74,0.8) 0px, rgba(197,168,74,0.8) 1px, transparent 1px, transparent 30px)",
          }}
        />

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>

          {/* Gold ornament */}
          <div style={{ marginBottom: "32px" }}>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" aria-hidden="true">
              <line x1="0" y1="10" x2="22" y2="10" stroke="#C5A84A" strokeWidth="1" opacity="0.5" />
              <path d="M30 2C30 2 26 10 22 10C26 10 30 18 30 18C30 18 34 10 38 10C34 10 30 2 30 2Z" fill="#C5A84A" opacity="0.8" />
              <line x1="38" y1="10" x2="60" y2="10" stroke="#C5A84A" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>

          <h2
            className="font-display italic"
            style={{
              color: "#C5A84A",
              fontSize: "clamp(28px,5vw,68px)",
              fontWeight: 400,
              letterSpacing: "0.18em",
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Αιωνία η Μνήμη της
          </h2>

          <p
            className="font-display"
            style={{
              color: "rgba(197,168,74,0.6)",
              fontSize: "9px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              marginBottom: "48px",
            }}
          >
            May her memory be eternal.
          </p>

          <p
            className="font-serif italic"
            style={{
              color: "rgba(245,241,230,0.8)",
              fontSize: "clamp(16px,2vw,22px)",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto 48px",
            }}
          >
            The Pulos Brothers kept her alive in every photograph, every clipping,
            every article saved across the decades. Mary James restored and honored
            that collection into something lasting. Now, through this archive, the world
            may know what they always knew.
          </p>

          <p
            className="font-serif italic"
            style={{
              color: "#C5A84A",
              fontSize: "clamp(18px,2.5vw,30px)",
              lineHeight: 1.65,
              marginBottom: "56px",
            }}
          >
            God&rsquo;s Special Angel. God&rsquo;s Sweetest Miracle.
          </p>

          {/* Credits */}
          <div style={{ borderTop: "1px solid rgba(197,168,74,0.25)", paddingTop: "36px" }}>
            <p
              className="font-display"
              style={{
                color: "rgba(197,168,74,0.55)",
                fontSize: "8px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                lineHeight: 2.4,
              }}
            >
              Photo &amp; article compilation: The Pulos Brothers
              <br />
              Photo restoration, article restoration &amp; book design: Mary James
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 8 — Continue the Journey
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F0EBD9",
          borderTop: "1px solid #D0C4A0",
          padding: "clamp(56px,7vh,80px) clamp(32px,6vw,88px)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p className="font-display" style={{ color: "#8B7030", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", textAlign: "center", marginBottom: "40px" }}>
            Continue the Journey
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="max-lg:grid-cols-1">
            {[
              {
                href: "/story",
                label: "Her Life",
                text: "The story of grace, discipline, and love.",
                image: "/images/mary-veil-hat.jpg",
              },
              {
                href: "/fashion",
                label: "Fashion World",
                text: "The great fashion houses of Athens and beyond.",
                image: "/images/mary-runway-blue.jpg",
              },
              {
                href: "/archive",
                label: "The Archive",
                text: "Original press clippings and photographs.",
                image: "/images/book-clipping-etam-miss-mary.png",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: "block",
                  background: "#F5F1E6",
                  border: "1px solid #D0C4A0",
                  textDecoration: "none",
                  transition: "transform 0.2s, border-color 0.2s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C5A84A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#D0C4A0";
                }}
              >
                <div style={{ position: "relative", background: "#EDE8D8", overflow: "hidden" }}>
                  <Image
                    src={card.image}
                    alt={card.label}
                    width={1388}
                    height={1838}
                    style={{ width: "100%", height: "220px", objectFit: "contain", objectPosition: "top center", display: "block" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <p className="font-display" style={{ color: "#1C1814", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>
                    {card.label}
                  </p>
                  <p className="font-serif" style={{ color: "#7A6E5E", fontSize: "14px", lineHeight: 1.65 }}>
                    {card.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
