"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { values } from "@/data/team";

export function Values() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-16 text-center">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              What We Believe
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-4 text-display-md font-bold">Our Values</h2>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2">
          {values.map((value, index) => (
            <StaggerItem key={value.title}>
              <div className="rounded-2xl border border-border bg-background p-8">
                <span className="text-5xl font-bold text-border">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
