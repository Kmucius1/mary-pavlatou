import { useCallback, useRef } from "react";

/**
 * Holds an element at its current height while its content is swapped
 * (slide fade-outs, etc.). Without this the page briefly shrinks/grows under
 * the cursor, which makes the browser clamp or shift the scroll position and
 * the screen appears to jump.
 */
export function useHeightLock<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const lock = useCallback(() => {
    const el = ref.current;
    if (el) el.style.minHeight = `${el.offsetHeight}px`;
  }, []);

  const release = useCallback(() => {
    const el = ref.current;
    if (el) el.style.minHeight = "";
  }, []);

  return { ref, lock, release };
}
