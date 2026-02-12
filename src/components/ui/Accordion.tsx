"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { smoothEasing } from "@/lib/animations";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-border", className)}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: smoothEasing }}
        >
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEasing }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("divide-y divide-border border-t border-border", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
