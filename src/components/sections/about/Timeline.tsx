"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { timeline } from "@/data/team";

export function Timeline() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mb-16">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Our Journey
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-4 text-display-md font-bold">
              Milestones
            </h2>
          </TextReveal>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, index) => (
              <RevealOnScroll
                key={item.year}
                delay={index * 0.1}
                className="relative lg:flex lg:items-center"
              >
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:ml-auto"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <span className="text-sm font-bold text-muted">{item.year}</span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-foreground lg:left-1/2 lg:block" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
