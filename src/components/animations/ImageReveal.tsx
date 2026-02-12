"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  containerClassName = "",
  delay = 0,
  duration = 1,
  direction = "up",
  priority = false,
}: ImageRevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const reducedMotion = useReducedMotion();

  const clipPaths = {
    up: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0% 0 0 0)",
    },
    down: {
      hidden: "inset(0 0 100% 0)",
      visible: "inset(0 0 0% 0)",
    },
    left: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0%)",
    },
    right: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0% 0 0)",
    },
  };

  if (reducedMotion) {
    return (
      <div className={cn("overflow-hidden", containerClassName)}>
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={className}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", containerClassName)}>
      <motion.div
        initial={{ clipPath: clipPaths[direction].hidden }}
        animate={
          isInView
            ? { clipPath: clipPaths[direction].visible }
            : { clipPath: clipPaths[direction].hidden }
        }
        transition={{
          duration,
          delay,
          ease: smoothEasing,
        }}
        className="relative h-full w-full"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{
            duration: duration * 1.5,
            delay,
            ease: smoothEasing,
          }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={className}
            priority={priority}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
