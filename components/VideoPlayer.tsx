"use client";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  /** Path to a WebVTT (.vtt) English caption file — see public/captions/README.md */
  captionsSrc?: string;
  title: string;
  /** Describes the video's original spoken language, e.g. "Original Greek audio". */
  originalLanguageLabel?: string;
};

/**
 * Reusable video player prepared for the archive's future video content.
 * Not yet wired into any page — no video assets have been supplied.
 * When a video is ready, render <VideoPlayer src="..." captionsSrc="..." .../>.
 */
export default function VideoPlayer({
  src,
  poster,
  captionsSrc,
  title,
  originalLanguageLabel = "Original audio",
}: VideoPlayerProps) {
  return (
    <figure style={{ margin: 0 }}>
      <video
        controls
        preload="none"
        poster={poster}
        aria-label={title}
        style={{ width: "100%", height: "auto", display: "block", border: "1px solid #C5A84A", background: "#0a0a0a" }}
      >
        <source src={src} type="video/mp4" />
        {captionsSrc && (
          <track kind="captions" src={captionsSrc} srcLang="en" label="English" default={false} />
        )}
        Your browser does not support embedded video.
      </video>
      <figcaption
        className="font-serif italic"
        style={{ fontSize: 14, color: "#7A6E5E", marginTop: 8, lineHeight: 1.6 }}
      >
        {title} · {originalLanguageLabel}
        {captionsSrc && " · English captions available via the CC control"}
      </figcaption>
    </figure>
  );
}
