import type { Metadata } from "next";
import StoryLifeClient from "@/components/StoryLifeClient";

export const metadata: Metadata = {
  title: "Her Life — Mary Pavlatou Memorial Archive",
  description:
    "The full life of Mary Pavlatou — Greek heritage, wartime resilience, fashion discipline, international recognition, and eternal memory. Preserved through the love of her family.",
};

export default function StoryPage() {
  return <StoryLifeClient />;
}
