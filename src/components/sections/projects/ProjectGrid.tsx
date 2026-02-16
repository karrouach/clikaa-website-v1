"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { ProjectFilter } from "./ProjectFilter";
import { projects, getProjectsByCategory } from "@/data/projects";
import { smoothEasing } from "@/lib/animations";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <section className="section-padding">
      <Container>
        <div className="mb-16">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Our Work
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="mt-2 text-display-lg font-bold leading-tight">Projects</h1>
          </TextReveal>
        </div>

        <div className="mb-12">
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: smoothEasing }}
    >
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/10 px-3 py-1 text-xs backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted">
              {project.category} &mdash; {project.year}
            </p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
