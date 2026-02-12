"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { smoothEasing } from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
}

const getItemVariants = (direction: Direction, distance: number): Variants => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
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

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
  duration = 0.6,
}: StaggerItemProps) {
  const variants = getItemVariants(direction, distance);

  return (
    <motion.div
      variants={variants}
      transition={{
        duration,
        ease: smoothEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
