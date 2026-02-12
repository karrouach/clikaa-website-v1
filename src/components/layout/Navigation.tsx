"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden lg:flex items-center gap-8", className)}>
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          isActive={pathname === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: xSpring, y: ySpring }}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative text-sm font-medium transition-colors",
          isActive ? "text-foreground" : "text-muted hover:text-foreground"
        )}
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
}
