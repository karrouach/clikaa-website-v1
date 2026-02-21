"use client";

import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="max-w-5xl">
          <TextReveal delay={0.2}>
            <h1 className="text-display-xl font-bold leading-[1.05] tracking-tight">
              <span className="block">Design for the Speed of</span>
              <span className="text-gradient">Innovation.</span>
            </h1>
          </TextReveal>

          <RevealOnScroll delay={0.4} className="mt-8 max-w-2xl">
            <p className="text-lg text-muted leading-relaxed">
              We are a design partner for the companies building the future. We
              combine strategic clarity with world-class aesthetics to help
              startups and founders scale with confidence.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5} className="mt-10">
            <MagneticButton href="/contact">Work With Us</MagneticButton>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
