"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function VisionSection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <Container>
        <TextReveal>
          <span className="text-sm font-medium uppercase tracking-widest opacity-40">
            Our Vision
          </span>
        </TextReveal>

        <TextReveal delay={0.1}>
          <p className="mt-4 text-[clamp(2.5rem,8vw,7.5rem)] font-bold leading-[1.05] max-w-5xl">
            We believe design is a growth lever, not just decoration.
          </p>
        </TextReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 border-t border-background/20 pt-12">
          <RevealOnScroll delay={0.2}>
            <p className="text-lg leading-relaxed opacity-60">
              In a crowded market, trust is the most valuable currency. Clikaa
              was built to help ambitious businesses look as professional as they
              act. We strip away the noise and focus on clarity, ensuring your
              brand signals authority from the very first interaction.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <p className="text-lg leading-relaxed opacity-60">
              We don&apos;t just hand over files and walk away; we act as an
              extension of your team, ensuring your visual language evolves as
              fast as your business does.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
