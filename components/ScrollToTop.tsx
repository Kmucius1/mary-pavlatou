"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Every page opens from the very top. Anchor links (#archive-viewer etc.) are
 * left alone so they still scroll to their target.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
