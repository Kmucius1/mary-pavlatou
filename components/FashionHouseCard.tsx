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
  const borderColor = type === "paris" ? "#f5d050" : "rgba(245,208,80,0.78)";

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
        backgroundColor: expanded ? "rgba(245,208,80,0.06)" : "transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#f5d050",
              marginBottom: "4px",
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245,208,80,0.78)",
            }}
          >
            {city}
          </p>
        </div>
        <span style={{ color: "rgba(245,208,80,0.5)", fontSize: "28px", lineHeight: 1 }}>
          {expanded ? "−" : "+"}
        </span>
      </div>
      {expanded && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "24px",
            color: "rgba(245,240,232,0.7)",
            lineHeight: 1.75,
            marginTop: "14px",
            borderTop: "1px solid rgba(245,208,80,0.15)",
            paddingTop: "14px",
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}
