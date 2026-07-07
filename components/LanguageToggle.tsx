"use client";

import { useLanguage, type Lang } from "@/lib/language";

/**
 * ΕΛ | EN pill. Flips whether Greek or English reads as the primary (large)
 * language for every bilingual title, subtitle, and inline term site-wide.
 */
export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { primary, setPrimary } = useLanguage();
  const options: { code: Lang; label: string }[] = [
    { code: "el", label: "ΕΛ" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      role="group"
      aria-label="Choose language"
      className="font-display"
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid #D8C48E",
        borderRadius: "999px",
        overflow: "hidden",
        background: "#F3ECDA",
      }}
    >
      {options.map(({ code, label }) => {
        const active = primary === code;
        return (
          <button
            key={code}
            onClick={() => setPrimary(code)}
            aria-pressed={active}
            title={code === "el" ? "Ελληνικά — Greek first" : "English first"}
            style={{
              border: "none",
              cursor: "pointer",
              padding: compact ? "4px 9px" : "5px 11px",
              fontSize: compact ? "8.5px" : "9px",
              letterSpacing: "0.14em",
              fontWeight: active ? 700 : 600,
              background: active ? "#8B7030" : "transparent",
              color: active ? "#F5F1E6" : "#8A6A2F",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
