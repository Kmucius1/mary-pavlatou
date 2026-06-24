import Image from "next/image";

const frames = [
  {
    src: "/images/mary-cover.jpg",
    alt: "Mary Pavlatou — Book Cover, 1950s International Fashion Model",
    label: "The Archive — Front Cover",
    objectPosition: "right center",
  },
  {
    src: "/images/mary-dustjacket.jpg",
    alt: "Mary Pavlatou — Dust Jacket Spread",
    label: "The Archive — Full Spread",
    objectPosition: "right center",
  },
  {
    src: "/images/mary-cover2.jpg",
    alt: "Mary Pavlatou — Portrait, c. 1950s",
    label: "The Archive — Portrait",
    objectPosition: "right center",
  },
];

function GoldFrame({
  src,
  alt,
  label,
  objectPosition,
}: {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 animate-fade-up">
      {/* Frame */}
      <div
        className="gold-frame"
        style={{
          width: "clamp(200px, 28vw, 320px)",
          aspectRatio: "3/4",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Corner accent pieces */}
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
              width: "20px",
              height: "20px",
              borderColor: "#c9a84c",
              borderStyle: "solid",
              zIndex: 10,
              ...s,
            }}
          />
        ))}

        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 28vw"
          style={{
            objectFit: "cover",
            objectPosition,
          }}
        />
      </div>

      {/* Label */}
      <p
        className="font-display"
        style={{
          color: "rgba(201,168,76,0.55)",
          fontSize: "9px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {label}
      </p>
    </div>
  );
}

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
      {/* Gold rules */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

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

        {/* Gallery frames */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-6 lg:gap-10">
          {frames.map((f) => (
            <GoldFrame key={f.src} {...f} />
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
          <span style={{ color: "rgba(201,168,76,0.6)" }}>Mary James</span>.
        </p>
      </div>
    </section>
  );
}
