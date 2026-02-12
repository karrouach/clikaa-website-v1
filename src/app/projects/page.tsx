import { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/projects";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of web design, branding, and digital projects for clients across industries.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectGrid />
      <CTASection />
    </>
  );
}
