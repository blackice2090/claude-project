"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "status" | "outline";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        variant === "default" &&
          "bg-[#4f8ef7]/10 text-[#4f8ef7] border border-[#4f8ef7]/20 px-3 py-1 rounded-full",
        variant === "status" &&
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full",
        variant === "outline" &&
          "border border-white/10 text-slate-400 px-3 py-1 rounded-full",
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
