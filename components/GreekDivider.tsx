type GreekDividerVariant = "star" | "diamond" | "line" | "minimal";

export default function GreekDivider({ variant = "star", className }: { variant?: GreekDividerVariant; className?: string }) {
  const gold = "#f5d050";
  const dimGold = "rgba(245,208,80,0.72)";

  const ornament = {
    star: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" fill={gold} opacity="0.7" />
      </svg>
    ),
    diamond: (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill={gold} opacity="0.7" />
      </svg>
    ),
    line: null,
    minimal: (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <circle cx="3" cy="3" r="2.5" fill={dimGold} />
      </svg>
    ),
  }[variant];

  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: "14px", width: "100%", margin: "0 auto", maxWidth: "480px" }}
    >
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${dimGold})` }} />
      {ornament}
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to left, transparent, ${dimGold})` }} />
    </div>
  );
}
