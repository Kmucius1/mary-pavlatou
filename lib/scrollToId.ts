/**
 * Scrolls to an element by id AFTER React has re-rendered and the layout has
 * settled (two animation frames). Doing this instead of relying on the
 * browser's `#hash` jump avoids landing in the wrong place when a click also
 * changes state (e.g. swapping the book grid for the page spread changes the
 * page height mid-scroll). The sticky-header offset comes from the global
 * `scroll-padding-top` on <html>.
 */
export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    })
  );
}
