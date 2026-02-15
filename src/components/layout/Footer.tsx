"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Pitch Decks", href: "/services" },
      { label: "Brand Identity", href: "/services" },
      { label: "Digital Products", href: "/services" },
      { label: "Design Teams", href: "/services" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-muted">
              We build the visual narratives that turn &ldquo;maybe&rdquo; into &ldquo;where do I sign?&rdquo;
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-7">
            {footerLinks.map((group, groupIndex) => (
              <RevealOnScroll key={group.title} delay={groupIndex * 0.1}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-foreground transition-colors hover:text-muted"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="lg:col-span-3" delay={0.2}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Contact
            </h3>
            <address className="not-italic">
              <p className="mt-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-foreground font-medium transition-colors hover:text-accent"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </address>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            Made with caffeine and pixels by Clikaa.
          </p>
          <p className="text-sm text-muted">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </RevealOnScroll>
      </Container>
    </footer>
  );
}
