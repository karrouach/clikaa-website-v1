"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { teamMembers } from "@/data/team";
import { smoothEasing } from "@/lib/animations";

export function TeamGrid() {
  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-16 text-center">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Our Team
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="mt-2 text-display-md font-bold leading-tight">
              Meet the Creatives
            </h2>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface TeamMemberCardProps {
  member: (typeof teamMembers)[0];
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: smoothEasing }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-background">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: smoothEasing }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <motion.div
          className="absolute bottom-4 left-4 right-4 flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </motion.div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-muted">{member.role}</p>
      </div>
    </motion.div>
  );
}
