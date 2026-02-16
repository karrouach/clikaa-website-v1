"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { smoothEasing } from "@/lib/animations";

const achievements = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
  { value: "3x", label: "Avg. Conversion Lift" },
];

export function WhoIsClikaa() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Who is Clikaa
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-2 text-display-lg font-bold tracking-tight leading-tight">
                We turn startups into standout brands.
              </h2>
            </TextReveal>
            <RevealOnScroll delay={0.2} className="mt-5">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Clikaa is a creative agency built for ambitious founders and teams
                who refuse to blend in. We combine strategic thinking with
                world-class design to create digital experiences that don&apos;t
                just look good — they perform.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3} className="mt-3">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                From pitch decks that close rounds to websites that convert
                visitors into customers, we handle the creative heavy lifting so
                you can focus on building what matters.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-5">
            {achievements.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="rounded-2xl bg-card p-6 md:p-8 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: smoothEasing }}
                >
                  <span className="block text-3xl md:text-4xl font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs md:text-sm text-muted font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
