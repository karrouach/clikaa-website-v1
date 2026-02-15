"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { smoothEasing } from "@/lib/animations";

const clients = [
  { name: "Snipd", logo: "SNIPD" },
  { name: "Soil", logo: "SOIL" },
  { name: "Explore", logo: "EXPLORE" },
];

export function LogoCloud() {
  return (
    <section className="py-20 border-y border-border">
      <Container>
        <RevealOnScroll className="text-center mb-12">
          <p className="text-lg text-muted">
            The cool kids we hang out with.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <RevealOnScroll key={client.name} delay={index * 0.1}>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-foreground/40 transition-colors duration-300 hover:text-foreground cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: smoothEasing }}
              >
                {client.logo}
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
