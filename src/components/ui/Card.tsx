import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  activeBorder?: boolean;
  variant?: "default" | "glass" | "subtle";
}

export function Card({
  className,
  hoverEffect = true,
  activeBorder = false,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] relative gpu-accelerated",
        variant === "default" && "bg-[#0d0f15] border border-white/10",
        variant === "glass" && "bg-[#0d0f15]/80 backdrop-blur-xl border border-white/10",
        variant === "subtle" && "bg-white/[0.02] border border-white/5",
        hoverEffect &&
          "hover:border-white/25 hover:bg-[#12151e] hover:shadow-[0_16px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1",
        activeBorder && "border-emerald-500/40 shadow-sm shadow-emerald-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold text-white tracking-tight font-sans", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-zinc-400 leading-relaxed mt-2", className)}
      {...props}
    >
      {children}
    </p>
  );
}
