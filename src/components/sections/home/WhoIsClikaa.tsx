"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { smoothEasing } from "@/lib/animations";

const achievements = [
  { value: "41+", label: "Projects Delivered" },
  { value: "$5M+", label: "Capital Raised by Clients" },
  { value: "12+", label: "Industries Served" },
  { value: "3x", label: "Avg. Engagement Lift" },
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
                Turning complexity into clear design.
              </h2>
            </TextReveal>
            <RevealOnScroll delay={0.2} className="mt-5">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Clikaa is a creative partner for businesses that refuse to blend
                in. We don&apos;t just make things look good; we apply design
                thinking to solve business problems. Whether you are an
                early-stage startup needing a pitch deck or a growing tech
                company needing consistent design support, we handle the heavy
                lifting so you can focus on growth.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-6 md:gap-8">
            {achievements.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="rounded-2xl bg-card p-8 md:p-10 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: smoothEasing }}
                >
                  <span className="block text-4xl md:text-5xl font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm md:text-base text-muted font-medium">
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
