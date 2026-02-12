import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  const sizes = {
    default: "max-w-container",
    narrow: "max-w-4xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-gutter",
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
