"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { smoothEasing } from "@/lib/animations";

const works = [
  {
    title: "Snipd",
    description: "Making AI podcasts look as smart as they sound.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop",
    href: "/projects/snipd",
  },
  {
    title: "Soil",
    description: "Rebranding a D2C leader for 2x market expansion.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&h=900&fit=crop",
    href: "/projects/soil",
  },
  {
    title: "Explore",
    description: "The visual backbone for high-stakes venture tech.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
    href: "/projects/explore",
  },
];

export function SelectedWorks() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Selected Work
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-4 text-display-md font-bold tracking-tight">
                Recent Projects
              </h2>
            </TextReveal>
          </div>
          <RevealOnScroll delay={0.2}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </RevealOnScroll>
        </div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <RevealOnScroll key={work.title} delay={index * 0.1}>
              <WorkCard work={work} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface WorkCardProps {
  work: (typeof works)[0];
}

function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={work.href} className="group block">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-card"
        whileHover={{ scale: 0.99 }}
        transition={{ duration: 0.5, ease: smoothEasing }}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: smoothEasing }}
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">{work.title}</h3>
                <p className="mt-2 text-lg text-white/80">{work.description}</p>
              </div>
              <span className="hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
