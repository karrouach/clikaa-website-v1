import { Metadata } from "next";
import { BentoGrid, ProcessSteps } from "@/components/sections/services";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive digital services including web design, branding, UI/UX, and digital strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <BentoGrid />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
