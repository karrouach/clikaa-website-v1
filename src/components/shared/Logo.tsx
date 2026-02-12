"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function Logo({ className, animated = true }: LogoProps) {
  const letters = "CLIKAA".split("");

  if (!animated) {
    return (
      <Link
        href="/"
        className={cn(
          "text-2xl font-bold tracking-tight",
          className
        )}
      >
        CLIKAA
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-bold tracking-tight inline-flex",
        className
      )}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -2,
            transition: { duration: 0.2 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </Link>
  );
}
