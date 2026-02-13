"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 172, height = 42 }: LogoProps) {
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
        className="h-auto"
      />
    </Link>
  );
}
