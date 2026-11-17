import type { Metadata } from "next";
import VideoPageClient from "@/components/VideoPageClient";

export const metadata: Metadata = {
  title: "Video — Mary Pavlatou Memorial Archive",
  description: "Watch the film of Mary Pavlatou's life, preserved with love by her three sons.",
};

export default function VideoPage() {
  return <VideoPageClient />;
}
