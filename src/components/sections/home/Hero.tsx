"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { smoothEasing } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="max-w-5xl">
          <TextReveal delay={0.2} className="mb-6">
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Digital Agency
            </span>
          </TextReveal>

          <TextReveal delay={0.3}>
            <h1 className="text-[clamp(3rem,7vw,8rem)] font-bold leading-[1.05] tracking-tight">
              Your Dedicated Partner For{" "}
              <span className="text-gradient">Strategic Design</span>
            </h1>
          </TextReveal>

          <RevealOnScroll delay={0.6} className="mt-8 max-w-xl">
            <p className="text-lg text-muted">
              We provide strategic design support for ambitious founders and
              growing teams. From pitch decks that raise capital to websites that
              drive conversion, we build the visual infrastructure your business
              needs to scale.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.7} className="mt-10 flex flex-col sm:flex-row gap-4">
            <MagneticButton href="/contact">
              Book a Strategy Call
            </MagneticButton>
            <MagneticButton
              href="/projects"
              className="bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background whitespace-nowrap"
            >
              View Case Studies
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: smoothEasing }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
