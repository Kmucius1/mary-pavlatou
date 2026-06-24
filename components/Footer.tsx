function MPMonogramLarge() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="font-display font-semibold leading-none tracking-widest"
        style={{ color: "#c9a84c", fontSize: "28px" }}
      >
        MP
      </div>
      <svg width="48" height="12" viewBox="0 0 48 12" fill="none">
        <path
          d="M0,6 Q5,0 10,6 Q15,12 20,6 Q22,3.5 24,6 Q26,8.5 28,6 Q33,0 38,6 Q43,12 48,6"
          stroke="#c9a84c"
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
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(201,168,76,0.25)" }}
    >
      {/* Top gold line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />

      {/* Greek key strip */}
      <div
        style={{
          height: "10px",
          background: `repeating-linear-gradient(
            90deg,
            rgba(201,168,76,0.12) 0px,
            rgba(201,168,76,0.12) 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        <MPMonogramLarge />

        {/* Divider */}
        <div className="flex items-center gap-3 w-full max-w-md">
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.35)" }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="#c9a84c" opacity="0.5" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.35)" }} />
        </div>

        {/* Site title */}
        <p
          className="font-display tracking-[0.3em] text-[10px] uppercase text-center"
          style={{ color: "#c9a84c", opacity: 0.8 }}
        >
          Mary Pavlatou — An Official Memorial Archive
        </p>

        {/* Credits */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-serif italic text-[13px]" style={{ color: "rgba(201,168,76,0.55)" }}>
            Photo and article compilation by The Pulos Brothers
          </p>
          <p className="font-serif italic text-[13px]" style={{ color: "rgba(201,168,76,0.55)" }}>
            Photo restoration, article restoration, and book design by Mary James
          </p>
        </div>

        {/* Copyright */}
        <p
          className="font-serif text-[11px] tracking-widest"
          style={{ color: "rgba(201,168,76,0.3)" }}
        >
          &copy; {new Date().getFullYear()} The Pulos Brothers. All rights reserved.
        </p>
      </div>

      {/* Bottom gold line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c 25%, #c9a84c 75%, transparent)" }} />
    </footer>
  );
}
