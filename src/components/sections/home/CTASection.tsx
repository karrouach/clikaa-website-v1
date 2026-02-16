"use client";

import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function CTASection() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Let&apos;s Work Together
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-6 text-display-lg font-bold">
              Have a project in mind?
            </h2>
          </TextReveal>
          <RevealOnScroll delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              We&apos;re always excited to work on new challenges. Whether you have a
              clear vision or just a spark of an idea, we&apos;d love to hear from
              you and explore how we can bring it to life.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3} className="mt-10">
            <MagneticButton href="/contact" scale={1.08}>
              Start a Project
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
