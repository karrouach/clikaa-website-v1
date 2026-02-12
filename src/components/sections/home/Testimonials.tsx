"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { Marquee } from "@/components/shared/Marquee";
import { testimonials } from "@/data/team";
import { smoothEasing } from "@/lib/animations";

export function Testimonials() {
  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Testimonials
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-4 text-display-md font-bold">
              What Our Clients Say
            </h2>
          </TextReveal>
        </div>
      </Container>

      <Marquee speed="slow" pauseOnHover>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="w-[400px] shrink-0 rounded-2xl border border-border bg-card p-8"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <Quote className="mb-4 h-8 w-8 text-muted" />
      <p className="mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
