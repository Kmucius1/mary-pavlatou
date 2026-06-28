function GoldStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 0 L9 6.5 L16 8 L9 9.5 L8 16 L7 9.5 L0 8 L7 6.5 Z"
        fill="#f5d050"
        opacity="0.8"
      />
    </svg>
  );
}

function GoldDiamond() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#f5d050" opacity="0.6" />
    </svg>
  );
}

function LaurelSprig() {
  return (
    <svg width="80" height="18" viewBox="0 0 80 18" fill="none">
      {/* Left sprig */}
      <path d="M0,9 Q6,3 12,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M4,9 Q8,5 14,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M8,9 Q11,6 17,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M12,9 Q14,7 19,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Stem */}
      <line x1="20" y1="9" x2="60" y2="9" stroke="#f5d050" strokeWidth="0.6" opacity="0.4" />
      {/* Right sprig (mirrored) */}
      <path d="M80,9 Q74,3 68,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M76,9 Q72,5 66,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M72,9 Q69,6 63,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M68,9 Q66,7 61,9" stroke="#f5d050" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

export default function IdentityCard() {
  const entries = [
    {
      label: "Professional stage name:",
      value: "Mary Pavlatou",
    },
    {
      label: "Married name:",
      value: "Maria Pulos",
    },
  ];

  return (
    <div
      className="parchment-card px-7 py-8 flex flex-col items-center gap-4 max-w-[280px] w-full"
      style={{ minWidth: "240px" }}
    >
      {/* Star ornament at top */}
      <div className="flex flex-col items-center gap-2">
        <GoldStar />
        <div style={{ width: "1px", height: "12px", background: "rgba(184,124,20,0.4)" }} />
      </div>

      {/* Identity entries */}
      {entries.map((entry, i) => (
        <div key={i} className="w-full flex flex-col items-center gap-2">
          <div className="text-center">
            <p
              className="font-display text-[9px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "#6b5520" }}
            >
              {entry.label}
            </p>
            <p
              className="font-serif italic text-[18px] leading-snug"
              style={{ color: "#1a1208", fontWeight: 500 }}
            >
              {entry.value}
            </p>
          </div>

          {/* Divider between entries */}
          {i < entries.length - 1 && (
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1" style={{ height: "1px", background: "rgba(184,124,20,0.3)" }} />
              <GoldDiamond />
              <div className="flex-1" style={{ height: "1px", background: "rgba(184,124,20,0.3)" }} />
            </div>
          )}
        </div>
      ))}

      {/* Bottom laurel */}
      <div className="flex flex-col items-center gap-2 mt-1">
        <div style={{ width: "1px", height: "12px", background: "rgba(184,124,20,0.4)" }} />
        <LaurelSprig />
      </div>
    </div>
  );
}
