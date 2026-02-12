"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function VisionSection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Our Vision
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="mt-4 text-display-lg font-bold">
                Creating meaningful digital experiences
              </h1>
            </TextReveal>
          </div>
          <div className="flex flex-col justify-center">
            <RevealOnScroll>
              <p className="text-xl leading-relaxed text-muted">
                We believe that great design has the power to transform businesses
                and connect people. Our mission is to create digital experiences
                that are not only visually stunning but also strategically sound
                and user-centered.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                Founded in 2018, we&apos;ve grown from a small team with big dreams
                to a full-service digital agency serving clients worldwide. Our
                approach combines creativity with strategy, artistry with
                technology.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
