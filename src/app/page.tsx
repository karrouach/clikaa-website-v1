import {
  Hero,
  FeaturedProjects,
  ServicesPreview,
  Testimonials,
  CTASection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
