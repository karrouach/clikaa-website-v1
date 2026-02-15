"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { smoothEasing } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "The Brainstorm",
    description: "We talk, we listen, we drink coffee.",
  },
  {
    number: "02",
    title: "The Sprint",
    description: "We design like our hair is on fire (but with better focus).",
  },
  {
    number: "03",
    title: "The Launch",
    description: "You get the assets, the applause, and the results.",
  },
];

export function Process() {
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
            <h2 className="mt-4 text-display-md font-bold tracking-tight">
              The Clikaa Process
            </h2>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <ProcessStep step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface ProcessStepProps {
  step: (typeof steps)[0];
}

function ProcessStep({ step }: ProcessStepProps) {
  return (
    <motion.div
      className="text-center md:text-left"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <span className="text-6xl md:text-7xl font-bold text-border">
        {step.number}
      </span>
      <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
      <p className="mt-2 text-lg text-muted">{step.description}</p>
    </motion.div>
  );
}
