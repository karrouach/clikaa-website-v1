"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function PainPoint() {
  return (
    <section className="section-padding">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md font-bold tracking-tight">
              Tech is hard.
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-display-md font-bold tracking-tight">
              Looking like a billion dollars shouldn&apos;t be.
            </h2>
          </TextReveal>

          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="text-xl text-muted md:text-2xl leading-relaxed">
              Most startups are 90% genius and 10% &ldquo;we&apos;ll fix the design later.&rdquo;
              We handle the 10% so your genius actually gets noticed by the people with the checks.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
