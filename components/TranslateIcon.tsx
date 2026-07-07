export default function TranslateIcon({ size = 13, color = "#B9974D" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-label="Translation available"
      role="img"
      style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M6.2 2.2h6.4a2 2 0 0 1 2 2v4.4a2 2 0 0 1-2 2H9.4l-3.6 2.6V10.6H6.2a2 2 0 0 1-2-2V4.2a2 2 0 0 1 2-2Z"
        fill={color}
      />
      <text x="9.4" y="7.9" textAnchor="middle" fontSize="5.6" fontWeight="700" fill="#F8F4EA" fontFamily="serif">文</text>
      <path
        d="M11.6 9.4h6.4a1.6 1.6 0 0 1 1.6 1.6v3.6a1.6 1.6 0 0 1-1.6 1.6H15l.05 2.1-3-2.1h-.45a1.6 1.6 0 0 1-1.6-1.6V11a1.6 1.6 0 0 1 1.6-1.6Z"
        fill={color}
        opacity="0.55"
      />
      <text x="15.6" y="14.1" textAnchor="middle" fontSize="5.2" fontWeight="700" fill="#F8F4EA" fontFamily="sans-serif">A</text>
    </svg>
  );
}
