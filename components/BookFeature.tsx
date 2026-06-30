import Image from "next/image";

export default function BookFeature() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* Gold rules */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #f5d050 25%, #f5d050 75%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #f5d050 25%, #f5d050 75%, transparent)" }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "center",
        }}
        className="max-md:grid-cols-1"
      >
        {/* LEFT: Book cover image */}
        <div className="animate-fade-up" style={{ position: "relative" }}>
          {/* Outer glow frame */}
          <div
            style={{
              position: "relative",
              border: "1.5px solid #f5d050",
              padding: "8px",
              backgroundColor: "#0a0a0a",
              boxShadow: "0 0 60px rgba(245,208,80,0.15), 0 0 120px rgba(245,208,80,0.06)",
            }}
          >
            {/* Inner frame line */}
            <div
              style={{
                position: "absolute",
                inset: "14px",
                border: "0.5px solid rgba(245,208,80,0.68)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            {/* Corner pieces */}
            {[
              { top: 5, left: 5, borderWidth: "2px 0 0 2px" },
              { top: 5, right: 5, borderWidth: "2px 2px 0 0" },
              { bottom: 5, left: 5, borderWidth: "0 0 2px 2px" },
              { bottom: 5, right: 5, borderWidth: "0 2px 2px 0" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "18px",
                  height: "18px",
                  borderColor: "#f5d050",
                  borderStyle: "solid",
                  zIndex: 3,
                  ...s,
                }}
              />
            ))}

            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src="/images/cover-hires.jpg"
                alt="Mary Pavlatou — The Memorial Archive Book"
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center", background: "#f5f0e8" }}
              />
            </div>
          </div>

          {/* Label below */}
          <p
            className="font-display text-center mt-4"
            style={{ color: "rgba(245,208,80,0.82)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            The Memorial Archive — Print Edition
          </p>
        </div>

        {/* RIGHT: Book details */}
        <div className="animate-fade-up delay-2">
          <p
            className="font-display"
            style={{ color: "rgba(245,208,80,0.55)", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "16px" }}
          >
            The Archive
          </p>

          <h2
            className="font-display"
            style={{ color: "#f5d050", fontSize: "clamp(14px, 3.5vw, 40px)", letterSpacing: "0.05em", lineHeight: 1.2, marginBottom: "28px" }}
          >
            Mary Pavlatou
            <br />
            <span style={{ fontSize: "0.6em", opacity: 0.75 }}>1950&rsquo;s International Fashion Model</span>
          </h2>

          <div style={{ width: "48px", height: "1px", background: "#f5d050", marginBottom: "28px" }} />

          <p
            className="font-serif"
            style={{ color: "#d0c8b4", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, marginBottom: "28px" }}
          >
            Through newspaper clippings, photographs, and historical notes, her
            life as an international celebrity fashion model — most notably for
            the House of Christian Dior™ — is presented on these pages.
          </p>

          <p
            className="font-serif"
            style={{ color: "#d0c8b4", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, marginBottom: "36px" }}
          >
            Lovingly kept for decades by her three sons, each image has been
            carefully restored, translated, and researched for accuracy.
          </p>

          {/* Credits block */}
          <div
            style={{
              borderLeft: "2px solid rgba(245,208,80,0.78)",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              ["Compilation", "The Pulos Brothers"],
              ["Photo &amp; Article Restoration", "Mary James"],
              ["Book Design", "Mary James"],
            ].map(([label, value]) => (
              <div key={label}>
                <span
                  className="font-display"
                  style={{ color: "rgba(245,208,80,0.82)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}
                  dangerouslySetInnerHTML={{ __html: label }}
                />
                <br />
                <span
                  className="font-serif italic"
                  style={{ color: "#f5d050", fontSize: "clamp(14px, 1.6vw, 17px)" }}
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="font-display mt-8"
            style={{ color: "rgba(245,208,80,0.68)", fontSize: "9px", letterSpacing: "0.2em" }}
          >
            &copy; 2026 Pulos Brothers. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
