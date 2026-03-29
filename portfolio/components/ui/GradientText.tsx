"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "full" | "blue-cyan";
}

export function GradientText({
  children,
  className,
  variant = "full",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        variant === "full" ? "gradient-text" : "gradient-text-blue",
        className
      )}
    >
      {children}
    </span>
  );
}
