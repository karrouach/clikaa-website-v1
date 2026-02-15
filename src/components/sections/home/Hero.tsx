"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="max-w-5xl">
          <TextReveal delay={0.2}>
            <h1 className="text-display-xl font-bold leading-[1.1] tracking-tight">
              Stop explaining your tech.
            </h1>
          </TextReveal>
          <TextReveal delay={0.3}>
            <h1 className="text-display-xl font-bold leading-[1.1] tracking-tight">
              Start showing it.
            </h1>
          </TextReveal>

          <RevealOnScroll delay={0.5} className="mt-8 max-w-2xl">
            <p className="text-xl text-muted md:text-2xl">
              We build the visual narratives that turn &ldquo;maybe&rdquo; into &ldquo;where do I sign?&rdquo;
              High-impact pitch decks, brand systems, and digital products for founders who move fast.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.6} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton href="/contact">
              Let&apos;s build something
            </MagneticButton>
            <p className="text-sm text-muted">
              (No long-term contracts. Just great design.)
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
