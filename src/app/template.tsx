"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { smoothEasing } from "@/lib/animations";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: smoothEasing,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
