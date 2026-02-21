"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Layers, TrendingUp, Target, Sparkles, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { services } from "@/data/services";
import { smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Palette,
  Layers,
  TrendingUp,
  Target,
  Sparkles,
};

export function BentoGrid() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mb-16">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              What We Offer
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="mt-2 text-display-lg font-bold leading-tight">Our Services</h1>
          </TextReveal>
          <RevealOnScroll delay={0.2} className="mt-6 max-w-2xl">
            <p className="text-xl text-muted">
              We offer a comprehensive suite of digital services to help your
              brand thrive in the modern landscape.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLarge = index === 0 || index === 3;

            return (
              <RevealOnScroll
                key={service.id}
                delay={index * 0.1}
                className={cn(isLarge && "md:col-span-2 lg:col-span-1")}
              >
                <ServiceCard service={service} Icon={Icon} isLarge={isLarge} />
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  Icon: LucideIcon;
  isLarge: boolean;
}

function ServiceCard({ service, Icon, isLarge }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group rounded-2xl border border-border bg-card p-8 h-full",
        "transition-colors hover:border-foreground/20"
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
      <p className="mb-6 text-muted">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
