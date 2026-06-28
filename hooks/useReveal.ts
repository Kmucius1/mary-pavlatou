"use client";
import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.remove("reveal-hidden", "reveal-hidden-left", "reveal-hidden-right", "reveal-hidden-scale");
      el.classList.add("reveal-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const hidden = el.classList.contains("reveal-hidden") ? "reveal-hidden" :
            el.classList.contains("reveal-hidden-left") ? "reveal-hidden-left" :
            el.classList.contains("reveal-hidden-right") ? "reveal-hidden-right" :
            "reveal-hidden-scale";
          const visible = hidden.replace("hidden", "visible");
          el.classList.remove(hidden);
          el.classList.add(visible);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}
