"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Her Life", href: "/story" },
  { label: "Fashion World", href: "/fashion" },
  { label: "Archive", href: "/archive" },
  { label: "Legacy", href: "/legacy" },
];

function ColumnIcon() {
  return (
    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="32" height="4" rx="1" fill="#B9974D" />
      <rect x="3" y="4" width="26" height="3" fill="#B9974D" opacity="0.8" />
      <rect x="7" y="7" width="18" height="26" fill="#D8C48E" opacity="0.5" />
      {[9, 13, 17, 21].map((x) => <rect key={x} x={x} y="7" width="1" height="26" fill="#B9974D" opacity="0.25" />)}
      <rect x="3" y="33" width="26" height="3" fill="#B9974D" opacity="0.8" />
      <rect x="0" y="36" width="32" height="4" rx="1" fill="#B9974D" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#F8F4EA",
        borderBottom: "1px solid #D8C48E",
        boxShadow: "0 1px 12px rgba(139,106,47,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px)",
          height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* MP Monogram */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }} aria-label="Mary Pavlatou — Home">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
            <span className="font-display" style={{ color: "#B9974D", fontSize: "22px", fontWeight: 700, letterSpacing: "0.18em", lineHeight: 1 }}>
              MP
            </span>
            <svg width="36" height="6" viewBox="0 0 36 6" fill="none" aria-hidden="true">
              <path d="M0,3 Q3,0.5 6,3 Q9,5.5 12,3 Q15,0.5 18,3 Q21,5.5 24,3 Q27,0.5 30,3 Q33,5.5 36,3" stroke="#B9974D" strokeWidth="0.9" fill="none" opacity="0.55" />
            </svg>
            <span className="font-display" style={{ color: "#A79D8B", fontSize: "5.5px", letterSpacing: "0.30em", textTransform: "uppercase", fontWeight: 600, lineHeight: 1.4 }}>
              Mary Pavlatou
            </span>
            <span className="font-display" style={{ color: "#B8AE9C", fontSize: "5px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, lineHeight: 1.3 }}>
              Memorial Archive
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: "clamp(20px,3vw,40px)", alignItems: "center" }} aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-display"
                style={{
                  color: isActive ? "#8A6A2F" : "#A79D8B",
                  fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
                  textDecoration: "none", fontWeight: isActive ? 700 : 600,
                  borderBottom: isActive ? "1.5px solid #B9974D" : "1.5px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#8A6A2F"; }}
                onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#A79D8B"; }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Column icon + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="hidden lg:block"><ColumnIcon /></div>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#8A6A2F" }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              {mobileOpen
                ? <><path d="M1 1L21 15M21 1L1 15" stroke="currentColor" strokeWidth="1.5" /></>
                : <><rect y="0" width="22" height="1.5" rx="1" fill="currentColor" /><rect y="7" width="22" height="1.5" rx="1" fill="currentColor" /><rect y="14" width="22" height="1.5" rx="1" fill="currentColor" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          style={{
            background: "#F8F4EA", borderTop: "1px solid #E6D9BD",
            padding: "16px clamp(20px,4vw,60px) 24px",
            display: "flex", flexDirection: "column", gap: "0",
          }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display"
                style={{
                  color: isActive ? "#8A6A2F" : "#A79D8B",
                  fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase",
                  textDecoration: "none", fontWeight: isActive ? 700 : 600,
                  padding: "14px 0",
                  borderBottom: "1px solid #E6D9BD",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
