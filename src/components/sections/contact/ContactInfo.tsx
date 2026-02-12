"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div>
      <TextReveal>
        <span className="text-sm font-medium uppercase tracking-widest text-muted">
          Get in Touch
        </span>
      </TextReveal>
      <TextReveal delay={0.1}>
        <h1 className="mt-4 text-display-md font-bold">
          Let&apos;s start a conversation
        </h1>
      </TextReveal>
      <RevealOnScroll delay={0.2}>
        <p className="mt-6 text-xl text-muted">
          Have a project in mind? We&apos;d love to hear about it. Fill out the
          form and we&apos;ll get back to you within 24 hours.
        </p>
      </RevealOnScroll>

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

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted">{SITE_CONFIG.address}</p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.4} className="mt-12">
        <h3 className="mb-4 font-semibold">Follow Us</h3>
        <SocialLinks />
      </RevealOnScroll>
    </div>
  );
}
