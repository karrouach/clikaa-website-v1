"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { projects } from "@/data/projects";
import { smoothEasing } from "@/lib/animations";

const featuredProjects = projects.slice(0, 4);

export function FeaturedProjects() {
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
              <h2 className="mt-4 text-display-md font-bold">
                Featured Projects
              </h2>
            </TextReveal>
          </div>
          <RevealOnScroll delay={0.2}>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.5, ease: smoothEasing }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: smoothEasing }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: smoothEasing }}
        >
          <span className="text-sm text-muted">{project.category}</span>
          <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
        </motion.div>
      </motion.div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
