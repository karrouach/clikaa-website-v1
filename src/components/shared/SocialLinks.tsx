"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Dribbble, LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
    </svg>
  );
}

const iconMap: Record<string, LucideIcon> = {
  Linkedin,
  Instagram,
  Dribbble,
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
        const isX = link.icon === "X";

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
            {isX ? (
              <XIcon className="h-[18px] w-[18px]" />
            ) : (
              Icon && <Icon className="h-5 w-5" />
            )}
            {showLabels && <span className="text-sm">{link.label}</span>}
          </motion.a>
        );
      })}
    </div>
  );
}
