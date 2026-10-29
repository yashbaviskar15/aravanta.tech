import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  activeBorder?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  activeBorder = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8 transition-all duration-300 relative",
        hoverEffect &&
          "hover:border-brand-borderHighlight hover:bg-brand-surfaceElevated hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5",
        activeBorder && "border-brand-gold/40 shadow-sm shadow-brand-gold/10",
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
      className={cn("text-xl font-bold text-white tracking-tight", className)}
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
      className={cn("text-sm text-brand-gray-400 leading-relaxed mt-2", className)}
      {...props}
    >
      {children}
    </p>
  );
}
