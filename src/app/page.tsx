import {
  Hero,
  TrustedBy,
  WhoIsClikaa,
  FeaturedProjects,
  ServicesPreview,
  Testimonials,
  FAQ,
  CTASection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhoIsClikaa />
      <FeaturedProjects />
      <ServicesPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
