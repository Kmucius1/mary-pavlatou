"use client";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "mp-ambient-audio";
const VOLUME = 0.25;

/**
 * Floating play/pause control for subtle background violin music.
 * - Never autoplays with sound; playback only starts after an explicit click.
 * - Remembers the visitor's choice for the current browser session only.
 * - Lives in the root layout, so it is never remounted (and never restarted)
 *   by client-side navigation between pages.
 * - Honors prefers-reduced-motion by skipping the automatic session resume —
 *   those visitors can still start playback manually if they choose to.
 */
export default function AmbientMusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      if (stored === "on" && audioRef.current) {
        audioRef.current.volume = VOLUME;
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => setUnavailable(true));
      }
    } catch {
      /* sessionStorage unavailable — control still works, just doesn't persist */
    }
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      try { window.sessionStorage.setItem(STORAGE_KEY, "off"); } catch { /* ignore */ }
    } else {
      audio.volume = VOLUME;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          try { window.sessionStorage.setItem(STORAGE_KEY, "on"); } catch { /* ignore */ }
        })
        .catch(() => setUnavailable(true));
    }
  }

  return (
    <>
      <audio ref={audioRef} preload="none" loop onError={() => setUnavailable(true)}>
        <source src="/audio/mary-theme.mp3" type="audio/mpeg" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        aria-label={unavailable ? "Background music unavailable" : playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        title={unavailable ? "Background music coming soon" : playing ? "Pause background music" : "Play background music"}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: 200,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "1.5px solid #B9974D",
          background: "#F8F4EA",
          color: "#8A6A2F",
          cursor: unavailable ? "default" : "pointer",
          opacity: unavailable ? 0.5 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 14px rgba(139,106,47,0.28)",
        }}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="2" y="1" width="3.5" height="12" fill="currentColor" />
            <rect x="8.5" y="1" width="3.5" height="12" fill="currentColor" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 1L13 7L2 13V1Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </>
  );
}
