"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { smoothEasing } from "@/lib/animations";

const services = [
  {
    title: "Investor-Ready Pitch Decks",
    description: "Decks that make VCs lean in. We turn complex data into a story that sticks.",
    href: "/services",
  },
  {
    title: "Visual Identity Systems",
    description: "Logo, type, and vibes. A brand that feels like a Series A company before you even apply.",
    href: "/services",
  },
  {
    title: "High-Conversion Digital Products",
    description: "SaaS and Web design that doesn't need a manual. If it's not intuitive, it's not Clikaa.",
    href: "/services",
  },
  {
    title: "Your Fractional Design Team",
    description: "All the perks of a creative director, none of the awkward HR meetings. On-demand support for scaling teams.",
    href: "/services",
  },
];

export function ServicePillars() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-16 text-center">
          <TextReveal>
            <h2 className="text-display-sm font-bold tracking-tight">
              What we do best
            </h2>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={service.href} className="group block">
      <motion.div
        className="h-full rounded-2xl border border-border bg-background p-8 md:p-10 transition-colors hover:border-foreground/20"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: smoothEasing }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-4 text-muted text-lg">{service.description}</p>
      </motion.div>
    </Link>
  );
}
