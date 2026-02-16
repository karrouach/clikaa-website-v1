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
  const cs = project.caseStudy;

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <Container>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <TextReveal>
                <span className="text-sm font-medium uppercase tracking-widest text-muted">
                  {project.category}
                </span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h1 className="mt-2 text-display-lg font-bold leading-tight">
                  {project.title}
                </h1>
              </TextReveal>
              <RevealOnScroll delay={0.2}>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  {project.description}
                </p>
              </RevealOnScroll>
              {project.link && (
                <RevealOnScroll delay={0.3} className="mt-6">
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

      {/* Hero Image */}
      {project.images[0] && (
        <section className="pb-section">
          <Container>
            <ImageReveal
              src={project.images[0]}
              alt={`${project.title} - Hero`}
              width={1400}
              height={800}
              className="rounded-2xl object-cover"
              containerClassName="rounded-2xl"
            />
          </Container>
        </section>
      )}

      {/* Case Study Content */}
      {cs && (
        <>
          {/* Challenge & Approach */}
          <section className="section-padding">
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <RevealOnScroll>
                  <div>
                    <span className="text-sm font-medium uppercase tracking-widest text-muted">
                      The Challenge
                    </span>
                    <div className="mt-2 h-px w-12 bg-foreground" />
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {cs.challenge}
                    </p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.1}>
                  <div>
                    <span className="text-sm font-medium uppercase tracking-widest text-muted">
                      Our Approach
                    </span>
                    <div className="mt-2 h-px w-12 bg-foreground" />
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {cs.approach}
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </Container>
          </section>

          {/* Sections with images interspersed */}
          {cs.sections.map((section, index) => (
            <div key={index}>
              {/* Image between sections */}
              {project.images[index + 1] && (
                <section className="pb-section">
                  <Container>
                    <ImageReveal
                      src={project.images[index + 1]}
                      alt={`${project.title} - ${section.title}`}
                      width={1400}
                      height={800}
                      className="rounded-2xl object-cover"
                      containerClassName="rounded-2xl"
                      delay={0.1}
                    />
                  </Container>
                </section>
              )}

              <section className="section-padding">
                <Container>
                  <div className="max-w-3xl">
                    <RevealOnScroll>
                      <span className="text-sm font-medium uppercase tracking-widest text-muted">
                        {section.title}
                      </span>
                      <div className="mt-2 h-px w-12 bg-foreground" />
                      <p className="mt-4 text-lg leading-relaxed text-muted">
                        {section.body}
                      </p>
                    </RevealOnScroll>
                  </div>
                </Container>
              </section>
            </div>
          ))}

          {/* Results */}
          {cs.results && cs.results.length > 0 && (
            <section className="section-padding bg-card">
              <Container>
                <RevealOnScroll>
                  <div className="text-center">
                    <span className="text-sm font-medium uppercase tracking-widest text-muted">
                      Results
                    </span>
                    <div className="mx-auto mt-2 h-px w-12 bg-foreground" />
                  </div>
                </RevealOnScroll>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {cs.results.map((result, index) => (
                    <RevealOnScroll key={index} delay={index * 0.1}>
                      <div className="rounded-2xl bg-background p-6 text-center">
                        <p className="text-lg font-medium">{result}</p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </Container>
            </section>
          )}
        </>
      )}

      {/* Fallback: just show images if no case study data */}
      {!cs && project.images.length > 1 && (
        <section className="pb-section">
          <Container>
            <div className="space-y-8">
              {project.images.slice(1).map((image, index) => (
                <ImageReveal
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
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
      )}
    </>
  );
}
