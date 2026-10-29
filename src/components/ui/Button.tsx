import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "goldOutline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      href,
      external,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 gap-2 h-11",
      lg: "text-base px-6 py-3.5 gap-2.5 h-13",
    };

    const variantStyles = {
      primary:
        "bg-brand-gold text-brand-dark font-semibold hover:bg-brand-gold-light shadow-md hover:shadow-brand-gold/20",
      secondary:
        "bg-brand-surfaceElevated text-white hover:bg-brand-surfaceHover border border-brand-border hover:border-brand-borderHighlight",
      outline:
        "border border-brand-border text-brand-gray-200 hover:text-white hover:bg-brand-surfaceElevated hover:border-brand-gray-400",
      goldOutline:
        "border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold",
      ghost:
        "text-brand-gray-300 hover:text-white hover:bg-brand-surfaceElevated/60",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
