"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  staggerDelay?: number;
  splitBy?: "char" | "word";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function SplitText({
  text,
  className = "",
  charClassName = "",
  delay = 0,
  staggerDelay = 0.02,
  splitBy = "char",
  as: Component = "div",
}: SplitTextProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const reducedMotion = useReducedMotion();

  const items = splitBy === "char" ? text.split("") : text.split(" ");

  if (reducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={cn("flex flex-wrap", className)}>
      {items.map((item, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: smoothEasing,
            }}
            className={cn("inline-block", charClassName)}
          >
            {item}
            {splitBy === "word" && i < items.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
