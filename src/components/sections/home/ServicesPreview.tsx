"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Palette, Layers, ShoppingCart, Target, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { services } from "@/data/services";
import { smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Palette,
  Layers,
  ShoppingCart,
  Target,
  Sparkles,
};

export function ServicesPreview() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                What We Do
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-2 text-display-lg font-bold leading-tight">
                Our Services
              </h2>
            </TextReveal>
          </div>
          <RevealOnScroll delay={0.2}>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              View All Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} Icon={Icon} index={index} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  Icon: React.ElementType;
  index: number;
}

function ServiceCard({ service, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-background p-8",
        "transition-colors hover:border-foreground/20"
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-card">
        {Icon && <Icon className="h-6 w-6" />}
      </div>

      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
      <p className="text-muted line-clamp-3">{service.description}</p>

      <Link
        href="/services"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
      >
        Learn More
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
