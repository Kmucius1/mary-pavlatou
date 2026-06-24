function StatueSilhouette({ side }: { side: "left" | "right" }) {
  const flip = side === "right";
  return (
    <div
      className="hidden xl:block absolute top-0 bottom-0"
      style={{
        [side]: 0,
        width: "140px",
        overflow: "hidden",
        opacity: 0.18,
      }}
    >
      <svg
        width="140"
        height="100%"
        viewBox="0 0 140 400"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        style={{ transform: flip ? "scaleX(-1)" : undefined, height: "100%", minHeight: "300px" }}
      >
        {/* Pedestal */}
        <rect x="30" y="360" width="80" height="12" fill="#c9a84c" />
        <rect x="20" y="372" width="100" height="8" fill="#c9a84c" />
        <rect x="10" y="380" width="120" height="16" fill="#c9a84c" />

        {/* Torso/body */}
        <path
          d="M50,140 Q45,200 40,280 Q38,320 42,360 L98,360 Q102,320 100,280 Q95,200 90,140 Z"
          fill="#c9a84c"
        />

        {/* Draped fabric folds */}
        <path d="M50,140 Q55,200 58,280" stroke="#8b6914" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M60,140 Q62,200 64,280" stroke="#8b6914" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M70,135 Q70,200 70,280" stroke="#8b6914" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M80,140 Q78,200 76,280" stroke="#8b6914" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Left arm raised with fabric */}
        <path
          d="M50,140 Q35,120 20,100 Q15,95 18,90 Q30,105 42,120"
          fill="#c9a84c"
          stroke="#c9a84c"
          strokeWidth="1"
        />

        {/* Right arm/wing suggestion */}
        <path
          d="M90,150 Q105,130 118,110 Q122,106 120,100 Q108,118 96,138"
          fill="#c9a84c"
          stroke="#c9a84c"
          strokeWidth="1"
        />

        {/* Neck */}
        <rect x="62" y="115" width="16" height="28" fill="#c9a84c" />

        {/* Head */}
        <ellipse cx="70" cy="105" rx="18" ry="20" fill="#c9a84c" />

        {/* Headdress/laurel */}
        <path
          d="M52,98 Q55,85 60,90 Q63,80 70,85 Q77,80 80,90 Q85,85 88,98"
          stroke="#c9a84c"
          strokeWidth="2"
          fill="#c9a84c"
          opacity="0.8"
        />

        {/* Column at side */}
        <rect x="115" y="0" width="20" height="380" fill="#c9a84c" opacity="0.35" />
        {[117, 121, 125, 129].map((x) => (
          <rect key={x} x={x} y="0" width="1.5" height="380" fill="#000" opacity="0.25" />
        ))}
        <rect x="112" y="0" width="26" height="8" fill="#c9a84c" opacity="0.55" />
        <rect x="112" y="372" width="26" height="8" fill="#c9a84c" opacity="0.55" />
      </svg>
    </div>
  );
}

const archiveNotes = [
  {
    text: "Through photographs, newspaper clippings, and historical notes, her life and legacy have been carefully preserved.",
  },
  {
    text: "Lovingly kept for decades by her three sons.",
  },
  {
    text: "Photo and article compilation by The Pulos Brothers.",
    italic: true,
  },
  {
    text: "Photo restoration, article restoration and book design by Mary James.",
    italic: true,
  },
];

function GoldDividerVertical() {
  return (
    <div
      className="hidden md:block flex-shrink-0"
      style={{
        width: "1px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(139,105,20,0.4) 20%, rgba(139,105,20,0.4) 80%, transparent 100%)",
        margin: "0 4px",
      }}
    />
  );
}

export default function PreservedMemory() {
  return (
    <section
      id="legacy"
      className="parchment-bg relative overflow-hidden py-14 md:py-20"
      style={{
        borderTop: "1px solid rgba(139,105,20,0.35)",
        borderBottom: "1px solid rgba(139,105,20,0.35)",
      }}
    >
      {/* Statue silhouettes */}
      <StatueSilhouette side="left" />
      <StatueSilhouette side="right" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">

        {/* Section title */}
        <div className="flex items-center gap-4 mb-10">
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(139,105,20,0.6))" }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
            <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#8b6914" opacity="0.8" />
          </svg>
          <h2
            className="font-display tracking-[0.35em] text-[11px] md:text-[13px] uppercase flex-shrink-0"
            style={{ color: "#6b5520" }}
          >
            Preserved in Memory
          </h2>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
            <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#8b6914" opacity="0.8" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(139,105,20,0.6))" }} />
        </div>

        {/* Laurel wreath under title */}
        <div className="flex justify-center mb-8">
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
            {[0, 7, 14, 21, 28].map((offset) => (
              <path
                key={`l${offset}`}
                d={`M${offset},10 Q${offset + 4},3 ${offset + 9},10`}
                stroke="#8b6914"
                strokeWidth="0.9"
                fill="none"
                opacity="0.65"
              />
            ))}
            <line x1="37" y1="10" x2="83" y2="10" stroke="#8b6914" strokeWidth="0.5" opacity="0.4" />
            {[83, 90, 97, 104, 111].map((offset) => (
              <path
                key={`r${offset}`}
                d={`M${offset},10 Q${offset + 4},3 ${offset + 9},10`}
                stroke="#8b6914"
                strokeWidth="0.9"
                fill="none"
                opacity="0.65"
              />
            ))}
          </svg>
        </div>

        {/* 4-column archive notes */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {archiveNotes.map((note, i) => (
            <div key={i} className="flex items-stretch">
              <div
                className="flex-1 flex flex-col items-center justify-center text-center px-5 py-4 md:py-0"
              >
                {/* Top diamond ornament */}
                <div className="mb-3">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#8b6914" opacity="0.55" />
                  </svg>
                </div>

                <p
                  className={`text-[14px] md:text-[13.5px] leading-relaxed ${note.italic ? "italic" : ""} font-serif`}
                  style={{ color: "#2c200e", maxWidth: "200px" }}
                >
                  {note.text}
                </p>
              </div>

              {/* Vertical divider between columns */}
              {i < archiveNotes.length - 1 && <GoldDividerVertical />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
