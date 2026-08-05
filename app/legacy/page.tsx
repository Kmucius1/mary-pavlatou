import type { Metadata } from "next";
import LegacyPageClient from "@/components/LegacyPageClient";

export const metadata: Metadata = {
  title: "Legacy — Mary Pavlatou Memorial Archive",
  description:
    "What Mary Pavlatou left behind — the standard she carried, the world she moved through, and the legacy preserved with love by her three sons.",
};

export default function LegacyPage() {
  return <LegacyPageClient />;
}
