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
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Who is Clikaa
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-4 text-display-md font-bold tracking-tight text-[#111111]">
                We turn startups into
                <span className="text-[#091CCA]"> standout brands.</span>
              </h2>
            </TextReveal>
            <RevealOnScroll delay={0.2} className="mt-6">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Clikaa is a creative agency built for ambitious founders and teams
                who refuse to blend in. We combine strategic thinking with
                world-class design to create digital experiences that don&apos;t
                just look good — they perform.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3} className="mt-4">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                From pitch decks that close rounds to websites that convert
                visitors into customers, we handle the creative heavy lifting so
                you can focus on building what matters.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right: Achievement Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6">
            {achievements.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="rounded-2xl bg-[#D7D3CC] p-6 md:p-8 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: smoothEasing }}
                >
                  <span className="block text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm md:text-base text-[#111111]/60 font-medium">
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
