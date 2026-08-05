# Captions / Subtitles

Place WebVTT (`.vtt`) English caption files here, one per video, named to match
the video file (e.g. `mary-interview-1958-en.vtt`).

Requirements from the family brief:
- Standard WebVTT format, `srclang="en"`, track label "English"
- Transcribed from the video's real spoken-audio transcript — do not
  auto-generate or invent translations without a source transcript
- Wire the file into `components/VideoPlayer.tsx` via its `captionsSrc` prop

See `example-en.vtt` in this folder for the minimal valid file structure.
