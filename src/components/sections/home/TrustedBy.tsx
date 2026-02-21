"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const clients = [
  { name: "Jovari", logo: "/partner-logos/Jovari.svg", href: "https://jovari.com/" },
  { name: "Snipd", logo: "/partner-logos/Snipd.svg", href: "https://www.snipd.com/" },
  { name: "Youkaver", logo: "/partner-logos/Youkaver.svg", href: "https://youkaver.youcan.store/" },
  { name: "Flic", logo: "/partner-logos/Flic.svg", href: "#" },
  { name: "Quantum", logo: "/partner-logos/Quantum.svg", href: "#" },
  { name: "Themar", logo: "/partner-logos/Themar-Logo.svg", href: "#" },
  { name: "Zapp", logo: "/partner-logos/Zapp.svg", href: "#" },
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
          <div className="flex shrink-0 items-center gap-12 md:gap-20 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 select-none"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 md:h-9 w-auto object-contain brightness-0 opacity-30 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
          <div
            aria-hidden
            className="flex shrink-0 items-center gap-12 md:gap-20 animate-marquee pl-20 md:pl-36"
          >
            {[...clients, ...clients].map((client, index) => (
              <a
                key={`${client.name}-dup-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="shrink-0 select-none"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 md:h-9 w-auto object-contain brightness-0 opacity-30 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
