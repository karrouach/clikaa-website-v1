"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="relative">
        {label && (
          <motion.label
            htmlFor={inputId}
            className={cn(
              "absolute left-0 transition-all duration-300 pointer-events-none",
              isFocused || hasValue
                ? "text-xs text-muted -top-5"
                : "text-base text-muted top-3"
            )}
            animate={{
              top: isFocused || hasValue ? -20 : 12,
              fontSize: isFocused || hasValue ? "12px" : "16px",
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full bg-transparent border-b-2 border-border py-3 text-foreground",
            "outline-none transition-colors duration-300",
            "placeholder:text-transparent",
            "focus:border-foreground",
            error && "border-red-500",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value !== "");
          }}
          onChange={(e) => setHasValue(e.target.value !== "")}
          {...props}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-foreground"
          initial={{ width: "0%" }}
          animate={{ width: isFocused ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
