function GoldSectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div style={{ height: "1px", flex: 1, background: "#c9a84c" }} />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" />
      </svg>
      <h2
        className="font-display tracking-[0.3em] text-[11px] uppercase"
        style={{ color: "#c9a84c" }}
      >
        {label}
      </h2>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" />
      </svg>
      <div style={{ height: "1px", flex: 1, background: "#c9a84c" }} />
    </div>
  );
}

function TempleIcon() {
  return (
    <svg
      width="52"
      height="44"
      viewBox="0 0 52 44"
      fill="none"
      className="my-4"
    >
      {/* Pediment (roof) */}
      <polygon points="2,16 26,2 50,16" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      {/* Entablature */}
      <rect x="2" y="16" width="48" height="4" fill="#c9a84c" opacity="0.7" />
      {/* Columns */}
      {[8, 17, 26, 35, 44].map((x) => (
        <rect key={x} x={x} y="20" width="3" height="18" fill="#c9a84c" opacity="0.65" />
      ))}
      {/* Stylobate base */}
      <rect x="0" y="38" width="52" height="3" fill="#c9a84c" opacity="0.8" />
      <rect x="0" y="41" width="52" height="2" fill="#c9a84c" opacity="0.5" />
    </svg>
  );
}

function LaurelSprig() {
  return (
    <svg width="100" height="16" viewBox="0 0 100 16" fill="none" className="mt-4 opacity-60">
      {[0, 5, 10, 15, 20].map((offset) => (
        <path
          key={`l${offset}`}
          d={`M${offset},8 Q${offset + 3},3 ${offset + 7},8`}
          stroke="#c9a84c"
          strokeWidth="0.8"
          fill="none"
        />
      ))}
      <line x1="27" y1="8" x2="73" y2="8" stroke="#c9a84c" strokeWidth="0.5" />
      {[73, 78, 83, 88, 93].map((offset) => (
        <path
          key={`r${offset}`}
          d={`M${offset},8 Q${offset + 3},3 ${offset + 7},8`}
          stroke="#c9a84c"
          strokeWidth="0.8"
          fill="none"
        />
      ))}
    </svg>
  );
}

// Gallery placeholder frame
function ArchiveFrame({ label }: { label: string }) {
  return (
    <div
      className="gold-frame flex-shrink-0"
      style={{
        width: "clamp(130px, 20vw, 200px)",
        aspectRatio: "3/4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative corner pieces */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "14px",
            height: "14px",
            ...pos,
            zIndex: 2,
            borderTop: i < 2 ? "2px solid #c9a84c" : undefined,
            borderBottom: i >= 2 ? "2px solid #c9a84c" : undefined,
            borderLeft: i % 2 === 0 ? "2px solid #c9a84c" : undefined,
            borderRight: i % 2 !== 0 ? "2px solid #c9a84c" : undefined,
          }}
        />
      ))}

      {/* Photo placeholder — replace content with <Image> when photos are ready */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        style={{
          background: "linear-gradient(180deg, #1c1a18 0%, #0e0c0b 100%)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.25">
          <circle cx="14" cy="11" r="6" stroke="#c9a84c" strokeWidth="1.2" />
          <path d="M4,26 C4,19.4 24,19.4 24,26" stroke="#c9a84c" strokeWidth="1.2" fill="none" />
        </svg>
        <p
          className="font-display text-[7px] tracking-[0.15em] text-center px-2"
          style={{ color: "rgba(201,168,76,0.25)" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

const fashionHouses = [
  "Christian Dior",
  "Hubert de Givenchy",
  "Jacques Fath",
  "Pierre Balmain",
  "Nina Ricci",
];

export default function MidSection() {
  return (
    <section
      id="archive"
      className="relative"
      style={{
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      {/* Horizontal gold divider at top */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-3">

        {/* ── COLUMN 1: Her Story ── */}
        <div
          id="her-story"
          className="flex flex-col items-center px-8 md:px-10 py-12 text-center"
          style={{
            borderRight: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <GoldSectionDivider label="Her Story" />

          <TempleIcon />

          <p
            className="font-serif text-[15px] leading-relaxed max-w-[280px]"
            style={{ color: "#d8d0bc" }}
          >
            Mary Pavlatou was an international celebrity fashion model whose
            career reached Athens, Paris, Milan, New York, Chicago and beyond.
          </p>

          <LaurelSprig />
        </div>

        {/* ── COLUMN 2: Fashion Houses ── */}
        <div
          id="fashion-houses"
          className="flex flex-col items-center px-8 py-12 text-center"
          style={{
            borderRight: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <GoldSectionDivider label="Fashion Houses" />

          <ul className="flex flex-col items-center gap-0 mt-2">
            {fashionHouses.map((house, i) => (
              <li key={house} className="flex flex-col items-center gap-0">
                <p
                  className="font-serif text-[17px] tracking-wide"
                  style={{ color: "#e4dcc8" }}
                >
                  {house}
                </p>
                {i < fashionHouses.length - 1 && (
                  <div className="my-2">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#c9a84c" opacity="0.6" />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Bottom gold diamond */}
          <div className="mt-6">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#c9a84c" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* ── COLUMN 3: Archive Gallery ── */}
        <div
          id="gallery"
          className="flex flex-col items-center px-6 py-12"
        >
          <GoldSectionDivider label="Archive Gallery" />

          {/* Gallery strip — 3 framed portrait placeholders */}
          <div className="flex flex-row gap-3 mt-2 justify-center w-full overflow-x-auto pb-2">
            <ArchiveFrame label="Portrait I&#10;mary-gallery-1.jpg" />
            <ArchiveFrame label="Portrait II&#10;mary-gallery-2.jpg" />
            <ArchiveFrame label="Portrait III&#10;mary-gallery-3.jpg" />
          </div>

          <p
            className="font-serif italic text-[12px] text-center mt-4"
            style={{ color: "rgba(201,168,76,0.45)" }}
          >
            Photo &amp; article compilation by The Pulos Brothers
          </p>
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />
    </section>
  );
}
