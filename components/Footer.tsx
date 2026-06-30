function MPMonogramLarge() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="font-display font-semibold leading-none tracking-widest"
        style={{ color: "#8B7030", fontSize: "8px" }}
      >
        MP
      </div>
      <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
        <path
          d="M0,6 Q5,0 10,6 Q15,12 20,6 Q22,3.5 24,6 Q26,8.5 28,6 Q33,0 38,6 Q43,12 48,6"
          stroke="#C5A84A"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ backgroundColor: "#EDE8D8", borderTop: "1px solid #D0C4A0" }}
    >
      {/* Top divider line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C5A84A 25%, #C5A84A 75%, transparent)" }} />

      {/* Greek key strip */}
      <div
        style={{
          height: "10px",
          background: `repeating-linear-gradient(
            90deg,
            rgba(139,112,48,0.35) 0px,
            rgba(139,112,48,0.35) 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        <MPMonogramLarge />

        {/* Divider */}
        <div className="flex items-center gap-3 w-full max-w-md">
          <div style={{ flex: 1, height: "1px", background: "rgba(197,168,74,0.72)" }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#C5A84A" opacity="0.5" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "rgba(197,168,74,0.72)" }} />
        </div>

        {/* Site title */}
        <p
          className="font-display tracking-[0.3em] text-[10px] uppercase text-center"
          style={{ color: "#8B7030", opacity: 0.9 }}
        >
          Mary Pavlatou — An Official Memorial Archive
        </p>

        {/* Credits */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-serif italic text-[13px]" style={{ color: "#7A6E5E" }}>
            Photo and article compilation by The Pulos Brothers
          </p>
          <p className="font-serif italic text-[13px]" style={{ color: "#7A6E5E" }}>
            Photo restoration, article restoration, and book design by Mary James
          </p>
        </div>

        {/* Copyright */}
        <p
          className="font-serif text-[11px] tracking-widest"
          style={{ color: "#7A6E5E" }}
        >
          &copy; {new Date().getFullYear()} The Pulos Brothers. All rights reserved.
        </p>
      </div>

      {/* Bottom divider line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C5A84A 25%, #C5A84A 75%, transparent)" }} />
    </footer>
  );
}
