"use client";

import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function CTASection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TextReveal>
            <h2 className="text-display-lg font-bold tracking-tight">
              Ready to upgrade your visual authority?
            </h2>
          </TextReveal>
          <RevealOnScroll delay={0.2} className="mt-10">
            <MagneticButton href="/contact" scale={1.08}>
              Book a Strategy Call
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
