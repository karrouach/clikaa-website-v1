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
            <h2 className="mt-2 text-display-lg font-bold leading-tight">
              Building something ambitious? So are we.
            </h2>
          </TextReveal>
          <RevealOnScroll delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              We partner with founders who are moving fast and need design that
              moves with them.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3} className="mt-8">
            <MagneticButton href="/contact" scale={1.08}>
              Book a Strategy Call
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
