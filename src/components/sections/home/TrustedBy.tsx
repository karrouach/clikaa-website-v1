"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const clients = [
  { name: "Jovari", logo: "JOVARI", href: "https://jovari.com/" },
  { name: "Snipd", logo: "SNIPD", href: "https://www.snipd.com/" },
  { name: "Xplor Technologies", logo: "XPLOR", href: "https://www.xplortechnologies.com/" },
  { name: "Youkaver", logo: "YOUKAVER", href: "https://youkaver.youcan.store/" },
];

export function TrustedBy() {
  return (
    <section className="mt-12 md:mt-16 py-12 md:py-16 border-y border-border">
      <Container>
        <RevealOnScroll className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Trusted by innovative teams and founders
          </p>
        </RevealOnScroll>

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-10 md:gap-16 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-lg md:text-2xl font-bold text-foreground/20 transition-colors duration-300 hover:text-foreground/60 select-none"
              >
                {client.logo}
              </a>
            ))}
          </div>
          <div
            aria-hidden
            className="flex shrink-0 items-center gap-10 md:gap-16 animate-marquee"
          >
            {[...clients, ...clients].map((client, index) => (
              <a
                key={`${client.name}-dup-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="whitespace-nowrap text-lg md:text-2xl font-bold text-foreground/20 transition-colors duration-300 hover:text-foreground/60 select-none"
              >
                {client.logo}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
