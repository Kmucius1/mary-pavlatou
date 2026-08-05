"use client";
import Image from "next/image";
import Link from "next/link";
import BilingualHeading from "@/components/BilingualHeading";

const standardValues = [
  {
    title: "Discipline",
    text: "She treated presence as something earned.",
    image: "/images/mary-archive-skirt-suit-cap.png",
    imageAlt: "Mary Pavlatou — dark skirt suit and pillbox cap, family archive",
  },
  {
    title: "Grace",
    text: "She carried beauty with restraint, strength, and purpose.",
    image: "/images/mary-archive-balmain-pink-named.png",
    imageAlt: "Mary Pavlatou — colorized portrait in an embroidered gown, family archive",
  },
  {
    title: "Intelligence",
    text: "She understood fashion as language, not decoration.",
    image: "/images/mary-archive-hat-model-clip.png",
    imageAlt: "Fashion-Home press clipping — hat model, Archontaki-Kallergi, family archive",
  },
  {
    title: "Devotion",
    text: "Her memory survived because love protected it.",
    image: "/images/mary-archive-garden-car-named.png",
    imageAlt: "Mary Pavlatou and Thetida Grafa at the garden, family archive",
  },
];

const fourLights = [
  { roman: "I", title: "The Woman", sub: "Not an image. A presence." },
  { roman: "II", title: "The Model", sub: "Not a figure in a gown. A trained interpreter of movement." },
  { roman: "III", title: "The Mother", sub: "Not only remembered. Carried." },
  { roman: "IV", title: "The Memory", sub: "Not stored away. Kept alive." },
];

export default function LegacyPageClient() {
  return (
    <div style={{ backgroundColor: "#F0EBD9" }}>

      {/* ═══════════════════════════════════════════════
          1. HERO — What She Left Behind
      ═══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "clamp(560px, 82vh, 780px)",
          display: "flex",
          alignItems: "center",
          borderBottom: "2px solid #C5A84A",
        }}
      >
        {/* Full-bleed background portrait */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/mary-archive-dedication-cropped.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>
        {/* Dark gradient overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(18,15,11,0.96) 0%, rgba(18,15,11,0.88) 38%, rgba(18,15,11,0.55) 68%, rgba(18,15,11,0.35) 100%)",
        }} />

        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(64px,10vh,120px) clamp(32px,6vw,88px)", position: "relative", width: "100%" }}>
          <div style={{ maxWidth: "620px" }}>
            <p className="font-display" style={{ color: "#C5A84A", fontSize: "14px", letterSpacing: "0.55em", textTransform: "uppercase", fontWeight: 900, marginBottom: "22px" }}>
              Legacy
            </p>
            <h1 className="font-display" style={{ color: "#F5F1E6", fontSize: "clamp(39px,5.75vw,76px)", letterSpacing: "0.06em", fontWeight: 600, lineHeight: 1.15, marginBottom: "28px" }}>
              What She Left Behind
            </h1>
            <div style={{ width: "56px", height: "1px", background: "#C5A84A", marginBottom: "28px", opacity: 0.8 }} />
            <p className="font-serif" style={{ color: "rgba(245,241,230,0.82)", fontSize: "clamp(17px,1.72vw,22px)", lineHeight: 1.95, marginBottom: "40px" }}>
              Mary Pavlatou&rsquo;s legacy is not measured only by photographs, clippings, gowns, or stages.
              It lives in the standard she carried, the grace she demanded of herself, and the love her
              family refused to let fade.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="#the-standard"
                className="font-display"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "12px",
                  background: "#C5A84A", color: "#1C1814",
                  padding: "14px 28px", fontSize: "13px", letterSpacing: "0.3em",
                  textTransform: "uppercase", fontWeight: 900, textDecoration: "none",
                }}
              >
                Enter Her Legacy
                <svg width="16" height="5" viewBox="0 0 16 5" fill="none" aria-hidden="true">
                  <path d="M0 2.5H14M11 1L14 2.5L11 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
              <Link
                href="/archive"
                className="font-display"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "12px",
                  background: "transparent", color: "#D8C48E",
                  padding: "14px 28px", fontSize: "13px", letterSpacing: "0.3em",
                  textTransform: "uppercase", fontWeight: 900, textDecoration: "none",
                  border: "1px solid #C5A84A",
                }}
              >
                Visit the Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. THE STANDARD
      ═══════════════════════════════════════════════ */}
      <section id="the-standard" style={{ background: "#F5F1E6", borderBottom: "1px solid #D0C4A0", padding: "clamp(72px,9vh,108px) clamp(32px,6vw,88px)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(48px,7vh,72px)" }}>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 900, marginBottom: "16px" }}>
              What She Carried
            </p>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(30px,3.91vw,51px)", letterSpacing: "0.1em", fontWeight: 600, lineHeight: 1.2 }}>
              The Standard
            </h2>
            <div style={{ width: "60px", height: "1px", background: "#C5A84A", margin: "22px auto 0", opacity: 0.7 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(16px,2vw,24px)" }} className="max-lg:!grid-cols-2 max-sm:!grid-cols-1">
            {standardValues.map((v) => (
              <div
                key={v.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "clamp(340px,44vh,440px)",
                  border: "1px solid #D0C4A0",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <div aria-hidden="true" style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg, rgba(18,15,11,0.92) 0%, rgba(18,15,11,0.55) 45%, rgba(18,15,11,0.15) 75%)",
                }} />
                <div style={{ position: "relative", padding: "28px 22px", width: "100%" }}>
                  <h3 className="font-display" style={{ color: "#C5A84A", fontSize: "clamp(21px,2.3vw,28px)", letterSpacing: "0.1em", fontWeight: 900, marginBottom: "10px" }}>
                    {v.title}
                  </h3>
                  <p className="font-serif italic" style={{ color: "rgba(245,241,230,0.9)", fontSize: "clamp(15px,1.49vw,17px)", lineHeight: 1.7 }}>
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. THE WORLD SHE MOVED THROUGH
      ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(80px,11vh,140px) clamp(32px,6vw,88px)", borderBottom: "1px solid #3A2E1E" }}>
        {/* Layered atmosphere */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "#1C1814" }} />
        <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "38%", opacity: 0.24 }}>
          <Image src="/images/gen-couture-atelier.png" alt="" fill sizes="38vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, #1C1814)" }} />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "38%", opacity: 0.20 }}>
          <Image src="/images/gen-greek-fashion-world.png" alt="" fill sizes="38vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent, #1C1814)" }} />
        </div>
        <div aria-hidden="true" style={{
          position: "absolute", left: "50%", top: 0, bottom: 0, width: "36%", transform: "translateX(-50%)",
          opacity: 0.08, mixBlendMode: "overlay",
        }}>
          <Image src="/images/book-clipping-etam-garden.png" alt="" fill sizes="36vw" style={{ objectFit: "cover" }} />
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "28px" }}>
            <div style={{ width: "44px", height: "1px", background: "linear-gradient(to right, transparent, #C5A84A)" }} />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M7 0.8C7 0.8 4 4 1 4C4 4 7 7.2 7 7.2C7 7.2 10 4 13 4C10 4 7 0.8 7 0.8Z" fill="#C5A84A" opacity="0.85" />
            </svg>
            <div style={{ width: "44px", height: "1px", background: "linear-gradient(to left, transparent, #C5A84A)" }} />
          </div>
          <p className="font-display" style={{ color: "#C5A84A", fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 900, marginBottom: "26px" }}>
            The World She Moved Through
          </p>
          <p className="font-serif italic" style={{ color: "rgba(245,241,230,0.9)", fontSize: "clamp(21px,2.53vw,32px)", lineHeight: 1.75 }}>
            She moved through a world of couture houses, grand hotels, private salons, press rooms,
            family rooms, and quiet moments no camera could fully hold. Her life belonged to fashion,
            but her legacy belongs to something deeper.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. A LEGACY IN FOUR LIGHTS
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#EDE8D8", borderBottom: "1px solid #D0C4A0", padding: "clamp(72px,9vh,108px) clamp(32px,6vw,88px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(48px,7vh,72px)" }}>
            <h2 className="font-display" style={{ color: "#1C1814", fontSize: "clamp(28px,3.68vw,46px)", letterSpacing: "0.1em", fontWeight: 600, lineHeight: 1.2, marginBottom: "10px" }}>
              A Legacy in Four Lights
            </h2>
            <div style={{ width: "60px", height: "1px", background: "#C5A84A", margin: "20px auto 0", opacity: 0.7 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#D0C4A0", border: "1px solid #D0C4A0" }} className="max-lg:!grid-cols-2">
            {fourLights.map((l) => (
              <div
                key={l.roman}
                style={{
                  background: "#F5F1E6",
                  padding: "clamp(32px,4vw,44px) clamp(20px,2.5vw,28px)",
                  textAlign: "center",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1C1814"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#F5F1E6"; }}
                className="legacy-light-card"
              >
                <p className="font-display" style={{ color: "#B9974D", fontSize: "14px", letterSpacing: "0.3em", marginBottom: "18px" }}>
                  {l.roman}
                </p>
                <h3 className="font-display legacy-light-title" style={{ color: "#6A4F1E", fontSize: "clamp(21px,2.3vw,28px)", letterSpacing: "0.08em", fontWeight: 900, marginBottom: "14px", transition: "color 0.25s ease" }}>
                  {l.title}
                </h3>
                <p className="font-serif italic legacy-light-sub" style={{ color: "#7A6E5E", fontSize: "clamp(15px,1.49vw,17px)", lineHeight: 1.7, transition: "color 0.25s ease" }}>
                  {l.sub}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            .legacy-light-card:hover .legacy-light-title { color: #C5A84A !important; }
            .legacy-light-card:hover .legacy-light-sub { color: rgba(245,241,230,0.82) !important; }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. WHAT ENDURES
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#F0EBD9", borderBottom: "1px solid #D0C4A0", padding: "clamp(72px,9vh,108px) clamp(32px,6vw,88px)" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "clamp(48px,7vw,96px)", alignItems: "center" }} className="max-lg:!grid-cols-1">
          <div className="max-lg:order-2">
            <p className="font-display" style={{ color: "#8B7030", fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 900, marginBottom: "18px" }}>
              What Endures
            </p>
            <div style={{ width: "48px", height: "1px", background: "#C5A84A", marginBottom: "26px", opacity: 0.7 }} />
            <p className="font-serif" style={{ color: "#2A2018", fontSize: "clamp(20px,2.07vw,25px)", lineHeight: 1.95, fontStyle: "italic" }}>
              What endures is not only the record of Mary&rsquo;s public life. It is the feeling she
              left in the people who loved her. The way her three sons protected every page. The way her
              image still carries breath. The way grace, once real, never fully disappears.
            </p>
          </div>
          <div className="max-lg:order-1" style={{ position: "relative" }}>
            <div style={{ border: "1px solid #C5A84A", boxShadow: "0 16px 56px rgba(28,24,20,0.25)", background: "#F5F1E6", padding: "10px" }}>
              <div style={{ position: "relative", aspectRatio: "3/4" }}>
                <Image
                  src="/images/mary-archive-colorized-social-group.png"
                  alt="Mary Pavlatou — colorized social gathering, family archive"
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. THE INHERITANCE
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#EDE8D8", borderBottom: "1px solid #D0C4A0", padding: "clamp(72px,9vh,108px) clamp(32px,6vw,88px)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{
            border: "1px solid #C5A84A",
            boxShadow: "0 0 0 6px #F0EBD9, 0 0 0 7px #C5A84A, 0 12px 40px rgba(139,112,48,0.15)",
            background: "#F5F1E6",
            padding: "clamp(48px,7vw,80px) clamp(32px,5vw,56px)",
            textAlign: "center",
          }}>
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true" style={{ margin: "0 auto 24px" }}>
              <path d="M17 1L20 9H29L21.5 14.5L24.5 23L17 17.5L9.5 23L12.5 14.5L5 9H14Z" stroke="#B9974D" strokeWidth="1.1" fill="none" />
            </svg>
            <p className="font-display" style={{ color: "#8B7030", fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 900, marginBottom: "28px" }}>
              The Inheritance
            </p>
            <p className="font-serif italic" style={{ color: "#1C1814", fontSize: "clamp(20px,2.18vw,25px)", lineHeight: 2, marginBottom: "28px" }}>
              This legacy was not inherited as fame. It was inherited as responsibility.
              To remember her with care. To protect what remained. To restore what time
              tried to soften. To let future generations meet Mary not as a name from
              the past, but as a woman whose light still reaches forward.
            </p>
            <div style={{ width: "40px", height: "1px", background: "#C5A84A", margin: "0 auto", opacity: 0.7 }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. CLOSING — Her Memory Is the Legacy
      ═══════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(160deg, #1C1814 0%, #2A2318 60%, #1C1814 100%)",
        padding: "clamp(80px,11vh,132px) clamp(32px,6vw,88px)",
        textAlign: "center",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
          <Image src="/images/gen-greek-archive.png" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(197,168,74,0.8) 0px, rgba(197,168,74,0.8) 1px, transparent 1px, transparent 30px)",
        }} />

        <div style={{ maxWidth: "780px", margin: "0 auto", position: "relative" }}>
          <div style={{ marginBottom: "28px" }}>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" aria-hidden="true" style={{ margin: "0 auto" }}>
              <line x1="0" y1="10" x2="22" y2="10" stroke="#C5A84A" strokeWidth="1" opacity="0.5" />
              <path d="M30 2C30 2 26 10 22 10C26 10 30 18 30 18C30 18 34 10 38 10C34 10 30 2 30 2Z" fill="#C5A84A" opacity="0.8" />
              <line x1="38" y1="10" x2="60" y2="10" stroke="#C5A84A" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>

          <BilingualHeading
            as="h2"
            el="Η Μνήμη Είναι η Κληρονομιά"
            en="Her Memory Is the Legacy"
            className="font-display"
            style={{ color: "#F5F1E6", fontSize: "clamp(32px,5.29vw,60px)", fontWeight: 600, letterSpacing: "0.08em", lineHeight: 1.2 }}
            subStyle={{ color: "#C5A84A", fontSize: "clamp(15px,1.49vw,18px)", marginTop: "14px", fontStyle: "italic" }}
          />

          <p className="font-serif italic" style={{ color: "rgba(245,241,230,0.82)", fontSize: "clamp(18px,2.3vw,24px)", lineHeight: 1.9, maxWidth: "620px", margin: "36px auto 44px" }}>
            Her memory is not behind us. It is carried forward in every restored image, every
            preserved page, every story retold, and every heart that meets her again.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link
              href="/archive"
              className="font-display"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                background: "#C5A84A", color: "#1C1814",
                padding: "14px 28px", fontSize: "13px", letterSpacing: "0.3em",
                textTransform: "uppercase", fontWeight: 900, textDecoration: "none",
              }}
            >
              Explore the Archive
            </Link>
            <Link
              href="/story"
              className="font-display"
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                background: "transparent", color: "#D8C48E",
                padding: "14px 28px", fontSize: "13px", letterSpacing: "0.3em",
                textTransform: "uppercase", fontWeight: 900, textDecoration: "none",
                border: "1px solid #C5A84A",
              }}
            >
              Read Her Story
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
