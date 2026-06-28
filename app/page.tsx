import DedicationQuote from "@/components/DedicationQuote";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import SafeImage from "@/components/SafeImage";
import GreekDivider from "@/components/GreekDivider";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#09080a" }}>

      {/* ── Hero Section ── */}
      <section
        style={{
          backgroundColor: "#09080a",
          padding:
            "clamp(64px,9vh,120px) clamp(28px,6vw,100px)",
          borderBottom: "1px solid rgba(245,208,80,0.70)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
          className="max-lg:grid-cols-1"
        >
          {/* Left: text column */}
          <div className="animate-fade-in">
            <p
              className="font-display"
              style={{
                color: "rgba(245,208,80,0.82)",
                fontSize: "24px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              An Official Memorial Archive
            </p>

            <h1
              className="font-display gold-shimmer"
              style={{
                fontSize: "clamp(36px,5.5vw,72px)",
                letterSpacing: "0.22em",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "14px",
              }}
            >
              MARY PAVLATOU
            </h1>

            <p
              className="font-serif italic"
              style={{
                color: "rgba(245,208,80,0.84)",
                fontSize: "clamp(36px,1.6vw,19px)",
                marginBottom: "24px",
                letterSpacing: "0.04em",
              }}
            >
              Η Μνήμη της Μαρίας
            </p>

            <div
              style={{
                width: "36px",
                height: "1px",
                background: "rgba(245,208,80,0.72)",
                marginBottom: "24px",
              }}
            />

            <p
              className="font-serif"
              style={{
                color: "rgba(205,196,178,0.7)",
                fontSize: "clamp(36px,1.5vw,17px)",
                lineHeight: 1.9,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              A Greek icon of postwar fashion, the first Greek certified
              professional mannequin, and a woman remembered for her grace,
              intelligence, artistry, and love.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {[
                { label: "Begin Her Story", href: "/story" },
                { label: "World of Fashion", href: "/fashion" },
                { label: "The Archive", href: "/archive" },
              ].map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  className="font-display"
                  style={{
                    color: "#f5d050",
                    fontSize: "28px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "10px 20px",
                    border: "1px solid rgba(245,208,80,0.68)",
                    display: "inline-block",
                  }}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: portrait */}
          <div
            className="animate-fade-in delay-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SafeImage
              src="/images/mary-glamour-portrait.jpg"
              alt="Mary Pavlatou — Glamour Portrait"
              mode="portrait"
              width={900}
              height={1660}
              caption="Mary Pavlatou · Athens"
              priority
              maxHeight="clamp(320px,60vh,640px)"
            />
          </div>
        </div>
      </section>

      {/* ── Dedication Quote ── */}
      <DedicationQuote />

      {/* ── 10-Chapter Timeline ── */}
      <InteractiveTimeline />

      {/* ── Closing Section ── */}
      <section
        style={{
          backgroundColor: "#09080a",
          padding:
            "clamp(56px,8vh,96px) clamp(28px,6vw,80px)",
          textAlign: "center",
          borderTop: "1px solid rgba(245,208,80,0.06)",
        }}
      >
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <GreekDivider variant="star" />

          <div
            style={{
              marginTop: "clamp(28px,4vh,44px)",
              marginBottom: "clamp(28px,4vh,44px)",
            }}
          >
            <p
              className="font-display"
              style={{
                color: "rgba(245,208,80,0.78)",
                fontSize: "24px",
                letterSpacing: "0.44em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Continue
            </p>

            <h2
              className="font-display"
              style={{
                color: "#f5d050",
                fontSize: "clamp(36px,2.4vw,28px)",
                letterSpacing: "0.14em",
                fontWeight: 400,
                marginBottom: "18px",
              }}
            >
              Begin the Journey
            </h2>

            <p
              className="font-serif"
              style={{
                color: "rgba(205,196,178,0.88)",
                fontSize: "clamp(21px,1.4vw,16px)",
                lineHeight: 1.9,
                marginBottom: "32px",
              }}
            >
              Mary&rsquo;s story is not only one of beauty. It is a story of
              discipline, movement, Greek identity, motherhood, and memory.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <Link
                href="/story"
                className="font-display"
                style={{
                  color: "#f5d050",
                  fontSize: "28px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "11px 28px",
                  border: "1px solid rgba(245,208,80,0.65)",
                  display: "inline-block",
                }}
              >
                Her Story
              </Link>
              <Link
                href="/gallery"
                className="font-display"
                style={{
                  color: "#f5d050",
                  fontSize: "28px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "11px 28px",
                  border: "1px solid rgba(245,208,80,0.65)",
                  display: "inline-block",
                }}
              >
                The Gallery
              </Link>
            </div>
          </div>

          <GreekDivider variant="minimal" />
        </div>
      </section>

    </div>
  );
}
