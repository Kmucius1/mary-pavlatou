"use client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

export interface LightboxItem {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  date?: string;
  location?: string;
  fashionHouse?: string;
  credit?: string;
  width: number;
  height: number;
  mode?: "portrait" | "full-body" | "clipping" | "landscape";
}

interface LightboxState {
  items: LightboxItem[];
  index: number;
}

// Module-level store so useLightbox can communicate with the rendered component
let _setState: ((s: LightboxState | null) => void) | null = null;

export function useLightbox() {
  return {
    open: (items: LightboxItem[], index: number) => {
      _setState?.({ items, index });
    },
    close: () => {
      _setState?.(null);
    },
  };
}

interface MuseumLightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function LightboxPanel({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: MuseumLightboxProps) {
  const item = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const isPortrait = item.height / item.width > 1;
  const imageStyle: React.CSSProperties = isPortrait
    ? {
        maxHeight: "80vh",
        width: "auto",
        maxWidth: "100%",
        display: "block",
        objectFit: "contain",
      }
    : {
        width: "100%",
        maxWidth: "900px",
        height: "auto",
        display: "block",
        objectFit: "contain",
      };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        backgroundColor: "rgba(5,5,5,0.96)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px,3vw,40px)",
        transition: prefersReducedMotion ? "none" : "opacity 0.2s ease",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#f5d050",
          fontSize: "28px",
          lineHeight: 1,
          zIndex: 10,
          padding: "4px 8px",
        }}
      >
        ×
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "1px solid rgba(245,208,80,0.68)",
            cursor: "pointer",
            color: "#f5d050",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          ‹
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "1px solid rgba(245,208,80,0.68)",
            cursor: "pointer",
            color: "#f5d050",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          ›
        </button>
      )}

      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          maxWidth: "1000px",
          width: "100%",
          maxHeight: "95vh",
          overflowY: "auto",
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          style={imageStyle}
          priority
          unoptimized={item.src.startsWith("/")}
        />

        {/* Museum label block */}
        <div style={{ textAlign: "center", maxWidth: "600px" }}>
          <p
            style={{
              fontFamily: "var(--font-cinzel, var(--font-display, serif))",
              fontSize: "26px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#f5d050",
              marginBottom: "8px",
            }}
          >
            {item.title}
          </p>

          {(item.date || item.location || item.fashionHouse) && (
            <p
              style={{
                fontFamily: "var(--font-cinzel, var(--font-display, serif))",
                fontSize: "24px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,208,80,0.82)",
                marginBottom: "12px",
              }}
            >
              {[item.date, item.location, item.fashionHouse]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          {item.caption && (
            <p
              style={{
                fontFamily:
                  "var(--font-cormorant, var(--font-serif, Georgia, serif))",
                fontStyle: "italic",
                fontSize: "26px",
                color: "rgba(245,240,232,0.90)",
                lineHeight: 1.7,
              }}
            >
              {item.caption}
            </p>
          )}

          {item.credit && (
            <p
              style={{
                fontFamily: "var(--font-cinzel, var(--font-display, serif))",
                fontSize: "28px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245,208,80,0.68)",
                marginTop: "14px",
              }}
            >
              {item.credit}
            </p>
          )}
        </div>

        {/* Counter */}
        {items.length > 1 && (
          <p
            aria-live="polite"
            style={{
              fontFamily: "var(--font-cinzel, var(--font-display, serif))",
              fontSize: "28px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,208,80,0.62)",
            }}
          >
            {currentIndex + 1} / {items.length}
          </p>
        )}
      </div>
    </div>
  );
}

// Self-contained component that registers itself with the module store
export default function MuseumLightbox() {
  const [state, setState] = useState<LightboxState | null>(null);

  useEffect(() => {
    _setState = setState;
    return () => {
      _setState = null;
    };
  }, []);

  if (!state) return null;

  return (
    <LightboxPanel
      items={state.items}
      currentIndex={state.index}
      onClose={() => setState(null)}
      onPrev={() =>
        setState((s) => (s && s.index > 0 ? { ...s, index: s.index - 1 } : s))
      }
      onNext={() =>
        setState((s) =>
          s && s.index < s.items.length - 1
            ? { ...s, index: s.index + 1 }
            : s
        )
      }
    />
  );
}
