import Image from "next/image";

export default function ArchiveGallery() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#09090b",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
        position: "relative",
      }}
    >
      {/* Gold top rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Title */}
        <div className="text-center mb-14 animate-fade-in">
          <p
            className="font-display"
            style={{ color: "rgba(201,168,76,0.5)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}
          >
            Restored &amp; Preserved
          </p>
          <h2
            className="font-display"
            style={{ color: "#c9a84c", fontSize: "clamp(13px, 1.8vw, 17px)", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Archive Gallery
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div style={{ width: "80px", height: "1px", background: "rgba(201,168,76,0.6)" }} />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" opacity="0.7" />
            </svg>
            <div style={{ width: "80px", height: "1px", background: "rgba(201,168,76,0.6)" }} />
          </div>
        </div>

        {/* FEATURED: Endsheet full-width — her actual portrait */}
        <div className="animate-fade-up mb-6" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/7",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.5)",
              boxShadow: "0 0 80px rgba(201,168,76,0.12), inset 0 0 0 1px rgba(201,168,76,0.08)",
            }}
          >
            {/* Corner pieces */}
            {[
              { top: -1, left: -1, borderWidth: "3px 0 0 3px" },
              { top: -1, right: -1, borderWidth: "3px 3px 0 0" },
              { bottom: -1, left: -1, borderWidth: "0 0 3px 3px" },
              { bottom: -1, right: -1, borderWidth: "0 3px 3px 0" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  borderColor: "#c9a84c",
                  borderStyle: "solid",
                  zIndex: 10,
                  ...s,
                }}
              />
            ))}
            <Image
              src="/images/endsheet-hires.jpg"
              alt="Mary Pavlatou — Archive Endsheet, Portrait & Dedication"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <p
            className="font-display text-center mt-4"
            style={{ color: "rgba(201,168,76,0.6)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            The Archive Endsheet — Portrait &amp; Dedication
          </p>
        </div>

        {/* 4-column grid: full cover / front cover / title page / dust jacket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            {
              src: "/images/cover-hires.jpg",
              alt: "Mary Pavlatou — Book Cover Full Spread",
              label: "The Archive — Full Cover Spread",
              objectPosition: "right center",
            },
            {
              src: "/images/mary-cover.jpg",
              alt: "Mary Pavlatou — Front Cover Art",
              label: "The Archive — Front Cover",
              objectPosition: "right center",
            },
            {
              src: "/images/title-page.jpg",
              alt: "Mary Pavlatou — Interior Title Page",
              label: "The Archive — Title Page",
              objectPosition: "center top",
            },
            {
              src: "/images/mary-dustjacket.jpg",
              alt: "Mary Pavlatou — Dust Jacket Full Spread",
              label: "The Archive — Dust Jacket",
              objectPosition: "right center",
            },
          ].map((frame) => (
            <div key={frame.src} className="animate-fade-up flex flex-col items-center gap-3">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  border: "1px solid rgba(201,168,76,0.35)",
                  boxShadow: "0 0 40px rgba(201,168,76,0.08)",
                }}
              >
                {/* Corner pieces */}
                {[
                  { top: -1, left: -1, borderWidth: "2px 0 0 2px" },
                  { top: -1, right: -1, borderWidth: "2px 2px 0 0" },
                  { bottom: -1, left: -1, borderWidth: "0 0 2px 2px" },
                  { bottom: -1, right: -1, borderWidth: "0 2px 2px 0" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "16px",
                      height: "16px",
                      borderColor: "#c9a84c",
                      borderStyle: "solid",
                      zIndex: 10,
                      ...s,
                    }}
                  />
                ))}
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: frame.objectPosition }}
                />
              </div>
              <p
                className="font-display"
                style={{
                  color: "rgba(201,168,76,0.5)",
                  fontSize: "8px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {frame.label}
              </p>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p
          className="font-serif italic text-center mt-12 animate-fade-in delay-4"
          style={{ color: "rgba(201,168,76,0.4)", fontSize: "clamp(13px, 1.5vw, 15px)" }}
        >
          Each image carefully restored, translated, and researched for accuracy.
          <br />
          Photo restoration and book design by{" "}
          <span style={{ color: "rgba(201,168,76,0.65)" }}>Mary James</span>.
        </p>
      </div>
    </section>
  );
}
