import IdentityCard from "./IdentityCard";

function GoldDividerRow() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div style={{ width: "48px", height: "1px", background: "#c9a84c" }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0 L8.4 5.6 L14 7 L8.4 8.4 L7 14 L5.6 8.4 L0 7 L5.6 5.6 Z" fill="#c9a84c" />
      </svg>
      <div style={{ width: "48px", height: "1px", background: "#c9a84c" }} />
    </div>
  );
}

function LaurelWreath() {
  return (
    <svg width="140" height="28" viewBox="0 0 140 28" fill="none" className="mb-6 opacity-80">
      {/* Left branch */}
      {[0, 9, 18, 27, 36].map((x) => (
        <path key={`l${x}`} d={`M${x},14 Q${x+5},6 ${x+11},14`} stroke="#c9a84c" strokeWidth="1" fill="none" />
      ))}
      {/* Stem center */}
      <line x1="47" y1="14" x2="93" y2="14" stroke="#c9a84c" strokeWidth="0.6" />
      <circle cx="70" cy="14" r="2" fill="#c9a84c" />
      {/* Right branch */}
      {[93, 102, 111, 120, 129].map((x) => (
        <path key={`r${x}`} d={`M${x},14 Q${x+5},6 ${x+11},14`} stroke="#c9a84c" strokeWidth="1" fill="none" />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#08080a",
      }}
    >
      {/* ── Real book cover as hero background: positioned to show front cover (right half) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/cover-hires.jpg')",
          backgroundSize: "200% auto",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 0.82,
        }}
      />

      {/* ── Gradient overlay: deep on left for text, subtle on right ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, #08080a 0%, #08080a 32%, rgba(8,8,10,0.82) 52%, rgba(8,8,10,0.3) 72%, rgba(8,8,10,0.6) 100%)",
        }}
      />

      {/* ── Top & bottom gold lines ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />

      {/* ── Page edge Greek key strips ── */}
      <div className="hidden xl:block" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "16px", background: "repeating-linear-gradient(180deg, rgba(201,168,76,0.4) 0px, rgba(201,168,76,0.4) 2px, transparent 2px, transparent 6px)", borderRight: "1px solid rgba(201,168,76,0.2)" }} />
      <div className="hidden xl:block" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "16px", background: "repeating-linear-gradient(180deg, rgba(201,168,76,0.4) 0px, rgba(201,168,76,0.4) 2px, transparent 2px, transparent 6px)", borderLeft: "1px solid rgba(201,168,76,0.2)" }} />

      {/* ── Hero content grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(20px, 4vw, 60px)",
          alignItems: "center",
          padding: "clamp(80px, 12vh, 140px) clamp(28px, 6vw, 80px) clamp(60px, 8vh, 100px)",
          maxWidth: "1360px",
          margin: "0 auto",
        }}
        className="max-lg:grid-cols-1"
      >
        {/* LEFT: Name + text */}
        <div className="animate-fade-up">
          <LaurelWreath />

          <h1
            className="gold-shimmer font-display"
            style={{
              fontSize: "clamp(64px, 10vw, 148px)",
              letterSpacing: "0.04em",
              lineHeight: 0.86,
              margin: 0,
            }}
          >
            MARY
            <br />
            PAVLATOU
          </h1>

          <GoldDividerRow />

          <p
            className="font-display animate-fade-up delay-2"
            style={{
              color: "#c9a84c",
              fontSize: "clamp(9px, 1vw, 11px)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            An Official Memorial Archive
          </p>

          <p
            className="font-serif italic animate-fade-up delay-3"
            style={{
              color: "#e4dac8",
              fontSize: "clamp(16px, 2vw, 21px)",
              lineHeight: 1.65,
              maxWidth: "420px",
              marginBottom: "48px",
            }}
          >
            International Fashion Model. Greek Icon.
            <br />
            A Life Preserved Through Photographs,
            <br />
            Press, and Memory.
          </p>

          <a href="#her-story" className="cta-btn animate-fade-up delay-4">
            Explore the Archive
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0 5 H14 M10 1 L14 5 L10 9" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </a>

          {/* Subtitle: 1950s */}
          <p
            className="font-display animate-fade-up delay-5"
            style={{
              color: "rgba(201,168,76,0.45)",
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginTop: "32px",
            }}
          >
            1950&rsquo;s International Fashion Model
          </p>
        </div>

        {/* RIGHT: Identity card */}
        <div
          className="animate-fade-up delay-3 max-lg:hidden"
          style={{ alignSelf: "center" }}
        >
          <IdentityCard />
        </div>
      </div>

      {/* Identity card for mobile — below text */}
      <div
        className="lg:hidden"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          padding: "0 24px 80px",
        }}
      >
        <IdentityCard />
      </div>

      {/* Bottom fade to next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
