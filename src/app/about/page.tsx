import { Metadata } from "next";
import {
  AboutHero,
  VisionSection,
  TeamGrid,
  Timeline,
  Values,
} from "@/components/sections/about";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our team, our values, and our journey in creating exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionSection />
      <TeamGrid />
      <Timeline />
      <Values />
      <CTASection />
    </>
  );
}
