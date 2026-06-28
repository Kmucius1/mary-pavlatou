"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Her Story", href: "/story" },
  { label: "World of Fashion", href: "/fashion" },
  { label: "Gallery", href: "/gallery" },
  { label: "Archive", href: "/archive" },
  { label: "Legacy", href: "/legacy" },
];

function ColumnIcon() {
  return (
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
      <rect x="0" y="0" width="36" height="4" fill="#f5d050" />
      <rect x="3" y="4" width="30" height="3" fill="#f5d050" />
      <rect x="7" y="7" width="22" height="30" fill="#f5d050" opacity="0.6" />
      {[9, 13, 17, 21, 25].map((x) => (
        <rect key={x} x={x} y="7" width="1" height="30" fill="#0a0a0a" opacity="0.4" />
      ))}
      <rect x="3" y="37" width="30" height="3" fill="#f5d050" />
      <rect x="0" y="40" width="36" height="4" fill="#f5d050" />
    </svg>
  );
}

function MPMonogram() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="text-2xl font-display font-semibold leading-none tracking-widest" style={{ color: "#f5d050" }}>
        MP
      </div>
      <svg width="38" height="10" viewBox="0 0 38 10" fill="none">
        <path d="M0,5 Q4,1 8,5 Q12,9 16,5 Q17.5,3.5 19,5 Q20.5,6.5 22,5 Q26,1 30,5 Q34,9 38,5" stroke="#f5d050" strokeWidth="1" fill="none" opacity="0.7" />
      </svg>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50" style={{ backgroundColor: "#0a0a0a", borderBottom: "1px solid #f5d050" }}>
      <div style={{ height: "2px", background: "#f5d050", width: "100%" }} />
      <div style={{ height: "10px", background: `repeating-linear-gradient(90deg, rgba(245,208,80,0.15) 0px, rgba(245,208,80,0.15) 4px, transparent 4px, transparent 8px)`, borderBottom: "1px solid rgba(245,208,80,0.68)" }} />

      <nav className="flex items-center justify-between px-6 md:px-10 py-3">
        <Link href="/" className="flex-shrink-0">
          <MPMonogram />
        </Link>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-display text-[9px] xl:text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
                  style={{ color: active ? "#f8e060" : "#f5d050", borderBottom: active ? "1px solid rgba(228,200,117,0.5)" : "none", paddingBottom: active ? "2px" : undefined }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block flex-shrink-0">
          <ColumnIcon />
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "22px", height: "1.5px", background: "#f5d050" }} />
          ))}
        </button>
      </nav>

      <div style={{ height: "10px", background: `repeating-linear-gradient(90deg, rgba(245,208,80,0.15) 0px, rgba(245,208,80,0.15) 4px, transparent 4px, transparent 8px)`, borderTop: "1px solid rgba(245,208,80,0.68)" }} />

      {open && (
        <div className="lg:hidden" style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(245,208,80,0.68)" }}>
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-[11px] tracking-[0.25em] uppercase"
                  style={{ color: pathname === link.href ? "#f8e060" : "#f5d050" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
