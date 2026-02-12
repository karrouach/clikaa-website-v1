"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  as: Component = "div",
}: TextRevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold,
    triggerOnce: true,
  });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration,
          delay,
          ease: smoothEasing,
        }}
      >
        {Component === "div" || Component === "span" ? (
          children
        ) : (
          <Component>{children}</Component>
        )}
      </motion.div>
    </div>
  );
}

interface TextRevealByLineProps {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextRevealByLine({
  text,
  className = "",
  lineClassName = "",
  delay = 0,
  staggerDelay = 0.1,
}: TextRevealByLineProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const reducedMotion = useReducedMotion();
  const lines = text.split("\n");

  if (reducedMotion) {
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <div key={i} className={lineClassName}>
            {line}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * staggerDelay,
              ease: smoothEasing,
            }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
