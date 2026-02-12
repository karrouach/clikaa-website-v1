"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { smoothEasing } from "@/lib/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  href,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseClasses = cn(
    "bg-card rounded-2xl border border-border overflow-hidden",
    paddings[padding],
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={baseClasses}
          whileHover={hover ? { y: -4 } : undefined}
          transition={{ duration: 0.3, ease: smoothEasing }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: smoothEasing }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

export function CardImage({
  src,
  alt,
  className,
  aspectRatio = "video",
}: CardImageProps) {
  const ratios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  return (
    <div className={cn("overflow-hidden", ratios[aspectRatio], className)}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: smoothEasing }}
      />
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={cn("text-xl font-semibold", className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("mt-2 text-muted", className)}>{children}</p>
  );
}
