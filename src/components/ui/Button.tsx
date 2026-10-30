import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "emerald"
    | "emeraldOutline"
    | "goldOutline"
    | "outline"
    | "ghost";
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
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.97] gpu-accelerated";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8 font-mono",
      md: "text-sm px-5 py-2.5 gap-2 h-10",
      lg: "text-base px-6 py-3 gap-2.5 h-12",
    };

    const variantStyles = {
      primary:
        "bg-white text-black font-semibold hover:bg-zinc-100 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all",
      emerald:
        "bg-emerald-500 text-black font-semibold hover:bg-emerald-400 hover:shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 shadow-md shadow-emerald-950/40 transition-all",
      emeraldOutline:
        "border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 font-mono transition-colors",
      secondary:
        "bg-brand-surfaceElevated text-white hover:bg-brand-surfaceHover border border-white/10 hover:border-white/20 transition-colors",
      outline:
        "border border-white/12 text-brand-gray-200 hover:text-white hover:bg-white/5 hover:border-white/25 transition-colors",
      goldOutline:
        "border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 font-mono transition-colors",
      ghost:
        "text-brand-gray-300 hover:text-white hover:bg-white/5 transition-colors",
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

export default Button;
