"use client";

import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useLanguage } from "@/lib/language";

/**
 * A title / subtitle that carries both languages.
 * The globally-selected primary language renders large; the other language
 * renders as a small translation directly underneath. Flip the whole site
 * with the ΕΛ | EN toggle in the header.
 */
export default function BilingualHeading({
  el,
  en,
  as = "h2",
  className,
  style,
  subClassName,
  subStyle,
}: {
  el: ReactNode;
  en: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  subClassName?: string;
  subStyle?: CSSProperties;
}) {
  const { primary } = useLanguage();
  const main = primary === "el" ? el : en;
  const sub = primary === "el" ? en : el;

  const defaultSubStyle: CSSProperties = {
    display: "block",
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    color: "#6A4F1E",
    opacity: 1,
    letterSpacing: "0.04em",
    fontWeight: 700,
    marginTop: "0.35em",
    fontSize: "0.58em",
    lineHeight: 1.35,
  };

  return (
    <>
      {createElement(as, { className, style }, main)}
      <span
        aria-hidden="false"
        className={subClassName}
        style={subClassName ? { display: "block", ...subStyle } : { ...defaultSubStyle, ...subStyle }}
      >
        {sub}
      </span>
    </>
  );
}
