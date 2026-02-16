"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const clients = [
  { name: "Stripe", logo: "STRIPE" },
  { name: "Notion", logo: "NOTION" },
  { name: "Figma", logo: "FIGMA" },
  { name: "Vercel", logo: "VERCEL" },
  { name: "Linear", logo: "LINEAR" },
  { name: "Framer", logo: "FRAMER" },
  { name: "Arc", logo: "ARC" },
  { name: "Raycast", logo: "RAYCAST" },
];

export function TrustedBy() {
  return (
    <section className="mt-12 md:mt-16 py-12 md:py-16 border-y border-border">
      <Container>
        <RevealOnScroll className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Trusted by forward-thinking brands
          </p>
        </RevealOnScroll>

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-10 md:gap-16 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client.name}-${index}`}
                className="whitespace-nowrap text-lg md:text-2xl font-bold text-foreground/20 transition-colors duration-300 hover:text-foreground/60 cursor-default select-none"
              >
                {client.logo}
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="flex shrink-0 items-center gap-10 md:gap-16 animate-marquee"
          >
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client.name}-dup-${index}`}
                className="whitespace-nowrap text-lg md:text-2xl font-bold text-foreground/20 transition-colors duration-300 hover:text-foreground/60 cursor-default select-none"
              >
                {client.logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
