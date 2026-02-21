"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { smoothEasing } from "@/lib/animations";

const pillars = [
  {
    title: "Strategic Alignment",
    description:
      "Monthly planning sessions to align design priorities with your product roadmap and growth targets.",
  },
  {
    title: "Priority Execution",
    description:
      "Dedicated senior designers embedded in your workflow. Same-week turnarounds on critical deliverables.",
  },
  {
    title: "System Continuity",
    description:
      "No context loss between projects. Your design system evolves consistently as your product scales.",
  },
  {
    title: "Flexible Scale",
    description:
      "Scale design capacity up or down based on sprint needs. No hiring overhead, no agency project minimums.",
  },
];

export function DesignPartnership() {
  return (
    <section className="section-padding bg-background text-foreground">
      <Container>
        <div className="max-w-3xl mb-12">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Design Partnership
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-3 text-display-md font-bold tracking-tight">
              Your external design team,{" "}
              <span className="text-accent">embedded.</span>
            </h2>
          </TextReveal>
          <RevealOnScroll delay={0.2} className="mt-5">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Not a retainer. Not a task queue. A long-term strategic design
              partnership built for companies that need consistent, high-quality
              output without the overhead of building an in-house team.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <motion.div
                className="rounded-2xl border border-border bg-card p-6 md:p-7 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: smoothEasing }}
              >
                <h3 className="text-base font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll delay={0.3} className="mt-10 text-center">
          <MagneticButton href="/contact">
            Explore Partnership
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </MagneticButton>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
