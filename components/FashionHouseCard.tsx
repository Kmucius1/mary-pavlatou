"use client";
import { useState } from "react";

interface FashionHouseCardProps {
  name: string;
  city: string;
  note: string;
  type: "paris" | "athens";
}

export default function FashionHouseCard({ name, city, note, type }: FashionHouseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const borderColor = type === "paris" ? "#C5A84A" : "rgba(197,168,74,0.78)";

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
      aria-expanded={expanded}
      style={{
        border: `1px solid ${borderColor}`,
        padding: "20px 24px",
        cursor: "pointer",
        backgroundColor: expanded ? "rgba(139,112,48,0.06)" : "transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8B7030",
              marginBottom: "4px",
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "8px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(139,112,48,0.78)",
            }}
          >
            {city}
          </p>
        </div>
        <span style={{ color: "rgba(139,112,48,0.6)", fontSize: "8px", lineHeight: 1 }}>
          {expanded ? "−" : "+"}
        </span>
      </div>
      {expanded && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "9px",
            color: "#7A6E5E",
            lineHeight: 1.75,
            marginTop: "14px",
            borderTop: "1px solid #D0C4A0",
            paddingTop: "14px",
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}
