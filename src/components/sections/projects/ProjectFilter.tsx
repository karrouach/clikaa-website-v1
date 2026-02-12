"use client";

import { motion } from "framer-motion";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === category ? "text-foreground" : "text-muted hover:text-foreground"
          )}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 rounded-full border border-foreground"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
