"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { processSteps } from "@/data/services";
import { smoothEasing } from "@/lib/animations";

export function ProcessSteps() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-16 text-center">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              How We Work
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-2 text-display-md font-bold leading-tight">Our Process</h2>
          </TextReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 0.1}>
              <ProcessStepCard step={step} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface ProcessStepCardProps {
  step: (typeof processSteps)[0];
  index: number;
}

function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <motion.div
      className="relative rounded-2xl border border-border bg-background p-8"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <span className="text-6xl font-bold text-border">{step.number}</span>
      <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
      <p className="mt-2 text-muted">{step.description}</p>

      {index < processSteps.length - 1 && (
        <div className="absolute right-0 top-1/2 z-10 hidden translate-x-[calc(50%+1rem)] -translate-y-1/2 lg:flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-muted"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}
