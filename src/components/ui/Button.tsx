"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { smoothEasing } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
  isLoading?: boolean;
}

type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
  secondary: "bg-card text-foreground hover:bg-card/80 border border-border",
  outline:
    "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background",
  ghost: "bg-transparent text-foreground hover:bg-foreground/10",
  accent:
    "bg-accent text-white hover:bg-accent/90 border border-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      href,
      isLoading,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center font-medium",
      "rounded-full transition-all duration-300 ease-smooth",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span className={cn("inline-flex items-center whitespace-nowrap", isLoading && "invisible")}>{children}</span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

interface AnimatedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  className?: string;
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
}: AnimatedButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-medium",
    "rounded-full overflow-hidden",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: smoothEasing }}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: smoothEasing }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
