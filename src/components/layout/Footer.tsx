"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Navigation",
    links: NAVIGATION,
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services#web-design" },
      { label: "Branding", href: "/services#branding" },
      { label: "Development", href: "/services#development" },
      { label: "Strategy", href: "/services#strategy" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#111111] text-white">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-5">
            <Logo invert />
            <p className="mt-6 max-w-sm text-white/60">
              {SITE_CONFIG.description}.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-7">
            {footerLinks.map((group, groupIndex) => (
              <RevealOnScroll key={group.title} delay={groupIndex * 0.1}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white"
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <address className="not-italic">
              <p className="text-white/80">{SITE_CONFIG.address}</p>
              <p className="mt-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </address>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </footer>
  );
}
