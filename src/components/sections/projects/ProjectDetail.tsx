"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="section-padding">
        <Container>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <TextReveal>
                <span className="text-sm font-medium uppercase tracking-widest text-muted">
                  {project.category}
                </span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h1 className="mt-4 text-display-md font-bold">
                  {project.title}
                </h1>
              </TextReveal>
              <RevealOnScroll delay={0.2}>
                <p className="mt-6 text-xl text-muted">{project.description}</p>
              </RevealOnScroll>
              {project.link && (
                <RevealOnScroll delay={0.3} className="mt-8">
                  <Button href={project.link} variant="outline">
                    Visit Website
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </RevealOnScroll>
              )}
            </div>

            <div className="space-y-6">
              <RevealOnScroll>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted">Client</dt>
                      <dd className="font-medium">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">Year</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">Services</dt>
                      <dd className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-background px-3 py-1 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-section">
        <Container>
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <ImageReveal
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                width={1400}
                height={800}
                className="rounded-2xl object-cover"
                containerClassName="rounded-2xl"
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
