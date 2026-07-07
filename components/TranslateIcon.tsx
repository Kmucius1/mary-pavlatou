/**
 * Google-Translate-style glyph: two speech bubbles with circular swap arrows.
 * Left bubble carries a Greek Ω (omega), right bubble a Latin A — signalling
 * Greek ⇄ English. Decorative; inherits `color` via currentColor.
 */
export default function TranslateIcon({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {/* top swap arrow (points right) */}
      <path
        d="M40 13 A34 34 0 0 1 88 27"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M74 22 L90 27 L84 11 Z" fill="currentColor" />

      {/* bottom swap arrow (points left) */}
      <path
        d="M60 87 A34 34 0 0 1 12 73"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M26 78 L10 73 L16 89 Z" fill="currentColor" />

      {/* top-left speech bubble — outlined, Greek Ω */}
      <path
        d="M17 22 H43 A11 11 0 0 1 54 33 V51 A11 11 0 0 1 43 62 H28 L19 71 L20 62 H17 A11 11 0 0 1 6 51 V33 A11 11 0 0 1 17 22 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="30"
        y="41"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="30"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="currentColor"
      >
        Ω
      </text>

      {/* bottom-right speech bubble — filled, Latin A */}
      <path
        d="M57 44 H83 A11 11 0 0 1 94 55 V73 A11 11 0 0 1 83 84 H80 L81 93 L72 84 H57 A11 11 0 0 1 46 73 V55 A11 11 0 0 1 57 44 Z"
        fill="currentColor"
      />
      <text
        x="70"
        y="65"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="30"
        fontWeight="700"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="#F5F1E6"
      >
        A
      </text>
    </svg>
  );
}
