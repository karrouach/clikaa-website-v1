"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  invert?: boolean;
}

export function Logo({ className, width = 120, height = 30, invert = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.svg"
        alt="Clikaa"
        width={width}
        height={height}
        priority
        className={cn("h-auto", invert && "brightness-0 invert")}
      />
    </Link>
  );
}
