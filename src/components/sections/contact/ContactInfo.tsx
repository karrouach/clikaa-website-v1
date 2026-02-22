"use client";

import { Mail } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { SITE_CONFIG } from "@/lib/constants";

interface ContactInfoProps {
  part?: "top" | "bottom" | "all";
}

export function ContactInfo({ part = "all" }: ContactInfoProps) {
  const showTop = part === "all" || part === "top";
  const showBottom = part === "all" || part === "bottom";

  return (
    <div>
      {showTop && (
        <>
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Get in Touch
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="mt-2 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight">
              Let&apos;s start a conversation
            </h1>
          </TextReveal>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-xl text-muted">
              Have a project in mind? We&apos;d love to hear about it. Fill out the
              form and we&apos;ll get back to you within 24 hours.
            </p>
          </RevealOnScroll>
        </>
      )}

      {showBottom && (
        <>
          <RevealOnScroll delay={0.3} className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4} className="mt-12">
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <SocialLinks />
          </RevealOnScroll>
        </>
      )}
    </div>
  );
}
