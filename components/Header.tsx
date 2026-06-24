"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Her Story", href: "#her-story" },
  { label: "Archive", href: "#archive" },
  { label: "Fashion Houses", href: "#fashion-houses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Legacy", href: "#legacy" },
  { label: "Contact", href: "#contact" },
];

function ColumnIcon() {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      {/* Capital */}
      <rect x="0" y="0" width="36" height="4" fill="#c9a84c" />
      <rect x="3" y="4" width="30" height="3" fill="#c9a84c" />
      {/* Shaft */}
      <rect x="7" y="7" width="22" height="30" fill="#c9a84c" opacity="0.6" />
      {/* Flutes */}
      {[9, 13, 17, 21, 25].map((x) => (
        <rect key={x} x={x} y="7" width="1" height="30" fill="#0a0a0a" opacity="0.4" />
      ))}
      {/* Base */}
      <rect x="3" y="37" width="30" height="3" fill="#c9a84c" />
      <rect x="0" y="40" width="36" height="4" fill="#c9a84c" />
    </svg>
  );
}

function MPMonogram() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="text-2xl font-display font-semibold leading-none tracking-widest"
        style={{ color: "#c9a84c" }}
      >
        MP
      </div>
      {/* Laurel detail under monogram */}
      <svg width="38" height="10" viewBox="0 0 38 10" fill="none">
        <path
          d="M0,5 Q4,1 8,5 Q12,9 16,5 Q17.5,3.5 19,5 Q20.5,6.5 22,5 Q26,1 30,5 Q34,9 38,5"
          stroke="#c9a84c"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="home"
      className="relative z-50"
      style={{
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid #c9a84c",
      }}
    >
      {/* Top gold line */}
      <div style={{ height: "2px", background: "#c9a84c", width: "100%" }} />

      {/* Greek key strip */}
      <div
        style={{
          height: "10px",
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(201,168,76,0.15) 0px,
              rgba(201,168,76,0.15) 4px,
              transparent 4px,
              transparent 8px
            )
          `,
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      />

      {/* Main nav row */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <MPMonogram />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display text-[10px] xl:text-[11px] tracking-[0.25em] uppercase transition-colors duration-200"
                style={{ color: "#c9a84c" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#e4c875")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#c9a84c")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Column icon — right */}
        <div className="hidden lg:block flex-shrink-0">
          <ColumnIcon />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#c9a84c",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Bottom decorative line */}
      <div
        style={{
          height: "10px",
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(201,168,76,0.15) 0px,
              rgba(201,168,76,0.15) 4px,
              transparent 4px,
              transparent 8px
            )
          `,
          borderTop: "1px solid rgba(201,168,76,0.3)",
        }}
      />

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            backgroundColor: "#0a0a0a",
            borderTop: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-[11px] tracking-[0.25em] uppercase"
                  style={{ color: "#c9a84c" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
