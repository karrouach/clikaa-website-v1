"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";

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

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-12 md:gap-20 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...clients, ...clients].map((client, index) => (
          <span
            key={`${client.name}-${index}`}
            className="whitespace-nowrap text-2xl md:text-4xl font-bold text-[#111111]/30 grayscale transition-all duration-300 hover:text-[#091CCA] hover:opacity-100 hover:grayscale-0 cursor-default select-none"
          >
            {client.logo}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-12 md:gap-20 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...clients, ...clients].map((client, index) => (
          <span
            key={`${client.name}-dup-${index}`}
            className="whitespace-nowrap text-2xl md:text-4xl font-bold text-[#111111]/30 grayscale transition-all duration-300 hover:text-[#091CCA] hover:opacity-100 hover:grayscale-0 cursor-default select-none"
          >
            {client.logo}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="py-20 md:py-28 bg-[#F6F4EF]">
      <Container>
        <div className="mb-12 text-center">
          <TextReveal>
            <h3 className="text-display-sm font-medium tracking-tight text-[#111111]">
              Trusted by forward-thinking brands
            </h3>
          </TextReveal>
        </div>
      </Container>

      <div className="space-y-8">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
