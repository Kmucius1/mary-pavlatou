import Image from "next/image";

const row = [
  {
    src: "/images/hf-atelier.jpg",
    alt: "1950s Parisian haute couture fashion house",
    label: "Paris · The Fashion Houses",
    objectPosition: "center 30%",
    aspect: "16/9",
  },
  {
    src: "/images/hf-vanity.jpg",
    alt: "Vintage 1950s fashion still life — pearls, gardenias, silk",
    label: "The World She Moved In",
    objectPosition: "center",
    aspect: "3/4",
  },
  {
    src: "/images/title-page.jpg",
    alt: "Mary Pavlatou — Archive Interior Title Page",
    label: "The Archive — Title Page",
    objectPosition: "center top",
    aspect: "3/4",
  },
];

export default function ArchiveGallery() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#09090b",
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <p
            className="font-display"
            style={{ color: "rgba(201,168,76,0.5)", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "14px" }}
          >
            Restored &amp; Preserved
          </p>
          <h2
            className="font-display"
            style={{ color: "#c9a84c", fontSize: "clamp(13px, 1.6vw, 16px)", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Archive Gallery
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div style={{ width: "60px", height: "1px", background: "rgba(201,168,76,0.5)" }} />
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
              <path d="M3 0 L6 3 L3 6 L0 3 Z" fill="rgba(201,168,76,0.6)" />
            </svg>
            <div style={{ width: "60px", height: "1px", background: "rgba(201,168,76,0.5)" }} />
          </div>
        </div>

        {/* Featured portrait — endsheet */}
        <div className="animate-fade-up mb-10">
          <div
            style={{
              position: "relative",
              width: "min(480px, 100%)",
              margin: "0 auto",
              aspectRatio: "3/4",
              border: "1px solid rgba(201,168,76,0.45)",
              boxShadow: "0 0 80px rgba(201,168,76,0.1)",
            }}
          >
            {[
              { top: -1, left: -1, borderWidth: "2px 0 0 2px" },
              { top: -1, right: -1, borderWidth: "2px 2px 0 0" },
              { bottom: -1, left: -1, borderWidth: "0 0 2px 2px" },
              { bottom: -1, right: -1, borderWidth: "0 2px 2px 0" },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: "20px", height: "20px", borderColor: "#c9a84c", borderStyle: "solid", zIndex: 10, ...s }} />
            ))}
            <Image
              src="/images/endsheet-hires.jpg"
              alt="Mary Pavlatou — Archive Portrait & Dedication"
              fill
              priority
              sizes="480px"
              style={{ objectFit: "cover", objectPosition: "center 10%" }}
            />
          </div>
          <p
            className="font-display text-center mt-4"
            style={{ color: "rgba(201,168,76,0.55)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Mary Pavlatou — The Archive Portrait
          </p>
        </div>

        {/* 3-column row: atelier / vanity / title page */}
        <div
          className="grid gap-6 mt-4"
          style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
        >
          {row.map((frame) => (
            <div key={frame.src} className="animate-fade-up flex flex-col gap-3">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: frame.aspect,
                  overflow: "hidden",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                {[
                  { top: -1, left: -1, borderWidth: "2px 0 0 2px" },
                  { top: -1, right: -1, borderWidth: "2px 2px 0 0" },
                  { bottom: -1, left: -1, borderWidth: "0 0 2px 2px" },
                  { bottom: -1, right: -1, borderWidth: "0 2px 2px 0" },
                ].map((s, i) => (
                  <div key={i} style={{ position: "absolute", width: "14px", height: "14px", borderColor: "#c9a84c", borderStyle: "solid", zIndex: 10, ...s }} />
                ))}
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: frame.objectPosition }}
                />
              </div>
              <p
                className="font-display"
                style={{ color: "rgba(201,168,76,0.45)", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase" }}
              >
                {frame.label}
              </p>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p
          className="font-serif italic text-center mt-14 animate-fade-in delay-4"
          style={{ color: "rgba(201,168,76,0.35)", fontSize: "clamp(13px, 1.4vw, 15px)" }}
        >
          Each image carefully restored, translated, and researched for accuracy.
          Photo restoration and book design by{" "}
          <span style={{ color: "rgba(201,168,76,0.55)" }}>Mary James</span>.
        </p>
      </div>
    </section>
  );
}
