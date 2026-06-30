"use client";
import { useEffect, useState } from "react";

interface Chapter {
  id: string;
  number: string;
  label: string;
}

export default function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [chapters]);

  return (
    <nav
      className="hidden xl:block"
      style={{
        position: "sticky",
        top: "120px",
        width: "160px",
        flexShrink: 0,
        alignSelf: "flex-start",
      }}
      aria-label="Chapter navigation"
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {chapters.map(({ id, number, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                textDecoration: "none",
                padding: "6px 0",
                opacity: active === id ? 1 : 0.4,
                transition: "opacity 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "9px",
                  color: "#8B7030",
                  letterSpacing: "0.1em",
                  width: "24px",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}
              >
                {number}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "11px",
                  color: active === id ? "#8B7030" : "rgba(139,112,48,0.6)",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
