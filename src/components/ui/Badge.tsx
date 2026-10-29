import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "neutral" | "success" | "outline" | "cyan";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "gold",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium uppercase tracking-wider rounded-full transition-colors select-none";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    gold: "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
    neutral: "bg-brand-surfaceElevated text-brand-gray-300 border border-brand-border",
    success: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
    cyan: "bg-sky-950/60 text-sky-400 border border-sky-800/40",
    outline: "border border-brand-border text-brand-gray-400 bg-transparent",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
