"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { smoothEasing } from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const getVariants = (direction: Direction, distance: number = 50): Variants => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  once = true,
}: RevealOnScrollProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold,
    triggerOnce: once,
  });
  const reducedMotion = useReducedMotion();

  const variants = getVariants(direction);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: smoothEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
