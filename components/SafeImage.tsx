import Image from "next/image";

type ImageMode = "portrait" | "full-body" | "clipping" | "landscape" | "decorative";

interface SafeImageProps {
  src: string;
  alt: string;
  mode: ImageMode;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxHeight?: string;
  maxWidth?: string;
}

export default function SafeImage({ src, alt, mode, width, height, caption, priority, className, style, maxHeight, maxWidth }: SafeImageProps) {
  const aspectRatio = width / height;

  const imageStyles: React.CSSProperties = (() => {
    switch (mode) {
      case "portrait":
        return { width: "auto", height: "auto", maxHeight: maxHeight || "clamp(280px, 55vh, 620px)", maxWidth: maxWidth || "100%", display: "block" };
      case "full-body":
        return { width: "100%", height: "auto", maxWidth: maxWidth || "420px", display: "block" };
      case "clipping":
        return { width: "100%", height: "auto", display: "block" };
      case "landscape":
        return { width: "100%", height: "auto", maxWidth: maxWidth || "100%", display: "block" };
      case "decorative":
        return { width: "100%", height: "auto", display: "block" };
    }
  })();

  return (
    <figure className={className} style={{ margin: 0, ...style }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          style={imageStyles}
          sizes={mode === "portrait" ? "(max-width: 768px) 80vw, 40vw" : "(max-width: 768px) 95vw, 55vw"}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(245,208,80,0.82)",
            marginTop: "14px",
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
