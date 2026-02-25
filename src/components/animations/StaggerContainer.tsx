"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      custom={{ staggerDelay, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
