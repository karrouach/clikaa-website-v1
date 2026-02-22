"use client";

import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function TeamGrid() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mb-12 md:mb-16">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Meet the Founder
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-2 text-display-md font-bold leading-tight">
              Senior strategy on every project.
            </h2>
          </TextReveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <RevealOnScroll>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                I founded Clikaa because I kept watching exceptional tech
                companies lose deals to lesser competitors who simply looked
                better. After years embedded in the SaaS, Tech, and AI
                ecosystems, I saw the gap clearly: the most innovative products
                in the world were being outcompeted by superior design.
              </p>
              <p>
                At Clikaa, you work directly with leadership—not a junior
                account manager who receives your brief and passes it down a
                chain. Every strategy, every visual system, and every pitch deck
                receives senior-level thinking from day one.
              </p>
              <p>
                My background sits at the intersection of technology and
                storytelling. I understand the &ldquo;black box&rdquo; of AI, the complexity
                of SaaS growth metrics, and the pressure of a fundraise. That
                context is not something you can brief into a generalist
                designer. It is built from years of working inside the
                ecosystem—and it is what separates a strategist from a
                pixel-pusher.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="rounded-2xl bg-card p-8 lg:p-10 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Behind the Vision</h3>
                <p className="text-muted leading-relaxed">
                  Behind every project is an agile, founder-led collective. Our
                  Head of Growth—a discipline we believe is inseparable from
                  design—ensures every visual decision is anchored to a
                  measurable business outcome. We do not separate strategy from
                  execution, because the best design is always in service of
                  growth.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold mb-3">The Collective</h3>
                <p className="text-muted leading-relaxed">
                  Our curated network of copywriters, motion designers, and web
                  developers is activated based on exactly what your project
                  demands. We are not a &ldquo;small business.&rdquo; We are a
                  high-performance creative collective with the expertise of a
                  full-service agency and the speed of a startup—built
                  specifically for founders who refuse to wait.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
