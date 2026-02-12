"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useMousePositionRelative } from "@/hooks/useMousePosition";
import { useReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  scale?: number;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.3,
  scale = 1.05,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { position, isInside } = useMousePositionRelative(ref);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const textX = useMotionValue(0);
  const textY = useMotionValue(0);
  const textXSpring = useSpring(textX, springConfig);
  const textYSpring = useSpring(textY, springConfig);

  const handleMouseMove = () => {
    if (reducedMotion || isMobile) return;
    x.set(position.x * strength);
    y.set(position.y * strength);
    textX.set(position.x * 0.1);
    textY.set(position.y * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    textX.set(0);
    textY.set(0);
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center",
    "rounded-full bg-foreground px-8 py-4 text-background",
    "font-medium transition-colors hover:bg-foreground/90",
    className
  );

  if (reducedMotion || isMobile) {
    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative inline-flex items-center justify-center",
        "rounded-full bg-foreground px-8 py-4 text-background",
        "font-medium cursor-pointer",
        className
      )}
    >
      <motion.span
        style={{
          x: textXSpring,
          y: textYSpring,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}
