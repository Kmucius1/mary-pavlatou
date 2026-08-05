"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";

/**
 * An inline Greek term inside body copy. Shows the globally-selected primary
 * language with a dotted underline; hovering (or focusing) reveals the other
 * language in a small tooltip.
 */
export default function GreekTerm({ el, en }: { el: string; en: string }) {
  const { primary } = useLanguage();
  const [open, setOpen] = useState(false);

  const shown = primary === "el" ? el : en;
  const other = primary === "el" ? en : el;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        tabIndex={0}
        role="button"
        aria-label={`${shown} — ${other}`}
        style={{
          borderBottom: "1px dotted currentColor",
          cursor: "help",
          outline: "none",
        }}
      >
        {shown}
      </span>
      {open && (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            bottom: "calc(100% + 7px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#2A2018",
            color: "#F5F1E6",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "15px",
            lineHeight: 1.4,
            padding: "5px 11px",
            borderRadius: "5px",
            whiteSpace: "nowrap",
            zIndex: 300,
            boxShadow: "0 4px 16px rgba(0,0,0,0.28)",
            pointerEvents: "none",
          }}
        >
          {other}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid #2A2018",
            }}
          />
        </span>
      )}
    </span>
  );
}
