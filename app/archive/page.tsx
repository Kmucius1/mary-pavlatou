import type { Metadata } from "next";
import ArchivePageClient from "@/components/ArchivePageClient";

export const metadata: Metadata = {
  title: "The Archive — Mary Pavlatou Memorial Archive",
  description:
    "The official archive and research room of Mary Pavlatou — photographs, newspaper clippings, fashion records, personal notes, and family memory. Preserved by her sons. Restored by Mary James.",
};

export default function ArchivePage() {
  return <ArchivePageClient />;
}
