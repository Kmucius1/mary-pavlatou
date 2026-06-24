const notes = [
  {
    heading: "Lovingly Preserved",
    body: "Through photographs, newspaper clippings, and historical notes, her life and legacy have been carefully preserved for generations.",
  },
  {
    heading: "Kept by Her Sons",
    body: "Lovingly kept for decades by her three sons — each piece of the archive a testament to a mother whose life illuminated the world.",
  },
  {
    heading: "The Pulos Brothers",
    body: "Photo and article compilation by The Pulos Brothers. A labor of love assembled across a lifetime of memory.",
  },
  {
    heading: "Mary James",
    body: "Photo restoration, article restoration, and book design by Mary James — bringing each image back to its full, luminous life.",
  },
];

function StatueSilhouette({ side }: { side: "left" | "right" }) {
  const flip = side === "right";
  return (
    <div
      className="hidden xl:block absolute top-0 bottom-0"
      style={{
        [side]: 0,
        width: "160px",
        overflow: "hidden",
        opacity: 0.16,
        pointerEvents: "none",
      }}
    >
      <svg
        width="160"
        height="100%"
        viewBox="0 0 160 500"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        style={{ transform: flip ? "scaleX(-1)" : undefined, height: "100%", minHeight: "360px" }}
      >
        {/* Base */}
        <rect x="20" y="470" width="120" height="15" fill="#8b6914" />
        <rect x="10" y="485" width="140" height="12" fill="#8b6914" />
        <rect x="0"  y="460" width="160" height="12" fill="#8b6914" />

        {/* Column */}
        <rect x="120" y="0" width="30" height="470" fill="#8b6914" opacity="0.4" />
        {[122, 127, 132, 137, 142].map((x) => (
          <rect key={x} x={x} y="0" width="1.5" height="470" fill="#000" opacity="0.25" />
        ))}
        <rect x="117" y="0"   width="36" height="10" fill="#8b6914" opacity="0.65" />
        <rect x="117" y="460" width="36" height="10" fill="#8b6914" opacity="0.65" />

        {/* Figure torso */}
        <path d="M40,155 Q35,230 30,330 Q28,400 32,460 L95,460 Q99,400 97,330 Q92,230 87,155 Z" fill="#8b6914" />
        {/* Fabric folds */}
        {[45, 55, 65, 75, 82].map((x) => (
          <path key={x} d={`M${x},155 Q${x+2},230 ${x},330`} stroke="#5a4008" strokeWidth="1.2" fill="none" opacity="0.5" />
        ))}

        {/* Arms */}
        <path d="M40,160 Q22,138 8,118 Q4,112 7,106 Q22,124 38,148" fill="#8b6914" />
        <path d="M87,165 Q105,143 118,123 Q122,117 119,111 Q104,130 88,156" fill="#8b6914" />

        {/* Neck */}
        <rect x="58" y="128" width="16" height="30" fill="#8b6914" />

        {/* Head */}
        <ellipse cx="66" cy="116" rx="20" ry="23" fill="#8b6914" />

        {/* Crown/wreath */}
        <path d="M46,108 Q50,92 56,98 Q60,88 66,94 Q72,88 76,98 Q82,92 86,108" stroke="#8b6914" strokeWidth="2.5" fill="#8b6914" opacity="0.9" />
      </svg>
    </div>
  );
}

export default function PreservedMemory() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
      }}
      className="parchment-bg"
    >
      <StatueSilhouette side="left" />
      <StatueSilhouette side="right" />

      {/* Gold rules */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,105,20,0.6) 30%, rgba(139,105,20,0.6) 70%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,105,20,0.6) 30%, rgba(139,105,20,0.6) 70%, transparent)" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section title */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "linear-gradient(to right, transparent, rgba(139,105,20,0.6))" }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#8b6914" opacity="0.8" />
            </svg>
            <h2
              className="font-display"
              style={{ color: "#6b5520", fontSize: "12px", letterSpacing: "0.35em", textTransform: "uppercase" }}
            >
              Preserved in Memory
            </h2>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#8b6914" opacity="0.8" />
            </svg>
            <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "linear-gradient(to left, transparent, rgba(139,105,20,0.6))" }} />
          </div>

          {/* Laurel wreath */}
          <svg width="140" height="20" viewBox="0 0 140 20" fill="none" style={{ opacity: 0.65 }}>
            {[0, 9, 18, 27, 36].map((x) => (
              <path key={`l${x}`} d={`M${x},10 Q${x+5},3 ${x+11},10`} stroke="#8b6914" strokeWidth="0.9" fill="none" />
            ))}
            <line x1="47" y1="10" x2="93" y2="10" stroke="#8b6914" strokeWidth="0.5" />
            <circle cx="70" cy="10" r="1.5" fill="#8b6914" />
            {[93, 102, 111, 120, 129].map((x) => (
              <path key={`r${x}`} d={`M${x},10 Q${x+5},3 ${x+11},10`} stroke="#8b6914" strokeWidth="0.9" fill="none" />
            ))}
          </svg>
        </div>

        {/* 4 archive note cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px" style={{ border: "1px solid rgba(139,105,20,0.2)" }}>
          {notes.map((note, i) => (
            <div
              key={i}
              className="animate-fade-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                padding: "clamp(24px, 3vw, 36px)",
                borderRight: i < notes.length - 1 ? "1px solid rgba(139,105,20,0.15)" : undefined,
                textAlign: "center",
              }}
            >
              {/* Diamond ornament */}
              <div className="flex justify-center mb-5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#8b6914" opacity="0.6" />
                </svg>
              </div>

              <h3
                className="font-display"
                style={{ color: "#6b5520", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px" }}
              >
                {note.heading}
              </h3>

              <p
                className="font-serif"
                style={{ color: "#2c1e0e", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.8 }}
              >
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
