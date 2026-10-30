import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "emerald" | "lime" | "neutral" | "success" | "outline" | "cyan";
  size?: "xs" | "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "emerald",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-medium uppercase tracking-wider rounded-md transition-colors select-none";

  const sizeStyles = {
    xs: "text-[10px] px-2 py-0.5",
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    emerald: "bg-emerald-950/50 text-emerald-300 border border-emerald-500/30",
    lime: "bg-lime-950/50 text-lime-300 border border-lime-500/30",
    gold: "bg-amber-950/50 text-amber-300 border border-amber-500/30",
    neutral: "bg-brand-surfaceElevated text-brand-gray-300 border border-brand-border",
    success: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
    cyan: "bg-sky-950/60 text-sky-400 border border-sky-800/40",
    outline: "border border-white/10 text-brand-gray-400 bg-transparent",
  };

  const dotColors = {
    emerald: "bg-emerald-400",
    lime: "bg-lime-400",
    gold: "bg-amber-400",
    neutral: "bg-zinc-400",
    success: "bg-emerald-400",
    cyan: "bg-sky-400",
    outline: "bg-zinc-400",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse shrink-0",
            dotColors[variant] || "bg-emerald-400"
          )}
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
