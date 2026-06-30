import type { Metadata } from "next";
import HomeBannerHero from "@/components/HomeBannerHero";
import HomeFeatureStrip from "@/components/HomeFeatureStrip";
import HomePathwayCards from "@/components/HomePathwayCards";
import LifeInLightSlider from "@/components/LifeInLightSlider";
import HomeClosingQuote from "@/components/HomeClosingQuote";

export const metadata: Metadata = {
  title: "Mary Pavlatou — An Official Memorial Archive",
  description:
    "An official memorial archive dedicated to Mary Pavlatou — Greek icon of postwar fashion, the first Greek certified professional mannequin, and a woman remembered for her grace, intelligence, artistry, and love.",
};

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#F8F4EA" }}>
      <HomeBannerHero />
      <HomeFeatureStrip />
      <HomePathwayCards />
      <LifeInLightSlider />
      <HomeClosingQuote />
    </main>
  );
}
