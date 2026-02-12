"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github, LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Linkedin,
  Instagram,
  Github,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  iconClassName,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = iconMap[link.icon];

        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 text-muted transition-colors hover:text-foreground",
              iconClassName
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {Icon && <Icon className="h-5 w-5" />}
            {showLabels && <span className="text-sm">{link.label}</span>}
          </motion.a>
        );
      })}
    </div>
  );
}
