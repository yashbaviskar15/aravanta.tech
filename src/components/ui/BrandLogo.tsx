import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "primary" | "icon" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
}

export function BrandLogo({
  variant = "primary",
  size = "md",
  showTagline = false,
  className,
  asLink = true,
}: BrandLogoProps) {
  // Dimension mappings based on size
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 42, height: 42 },
    lg: { width: 54, height: 54 },
    xl: { width: 72, height: 72 },
  };

  const badgeDimensions = {
    sm: { width: 140, height: 38 },
    md: { width: 175, height: 48 },
    lg: { width: 220, height: 60 },
    xl: { width: 280, height: 76 },
  };

  const logoContent = (
    <div
      className={cn(
        "flex items-center gap-3 select-none transition-opacity hover:opacity-95",
        className
      )}
    >
      {/* Luxury Minted Emblem Badge - Safely frames the authentic A-shaped symbol */}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-gradient-to-b from-[#ffffff] via-[#f8f8fa] to-[#eceef2] p-1 shadow-md border-2 border-brand-gold/50 shadow-brand-gold/20 transition-transform duration-200 flex items-center justify-center shrink-0 group-hover:scale-105",
          size === "sm" && "w-9 h-9",
          size === "md" && "w-11 h-11",
          size === "lg" && "w-14 h-14",
          size === "xl" && "w-20 h-20"
        )}
      >
        <Image
          src="/brand/icon.png"
          alt="ARAVANTA TECH Emblem"
          width={iconDimensions[size].width}
          height={iconDimensions[size].height}
          priority
          className="object-contain w-full h-full"
        />
      </div>

      {/* Official Wordmark presentation adhering to black/gold & typography identity */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tight font-bold font-sans">
          <span className="text-white text-base md:text-lg tracking-wider font-extrabold uppercase">
            ARAVANTA
          </span>
          <span className="ml-1.5 text-brand-gold text-base md:text-lg font-black tracking-wider uppercase">
            TECH
          </span>
        </div>
        {(showTagline || variant === "badge") && (
          <span className="text-[9px] uppercase tracking-widest text-brand-gray-400 font-medium">
            Empowering Cloud Transformation
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-md"
        aria-label="ARAVANTA TECH - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

/**
 * Dedicated component to display the full primary uploaded brand asset
 * with full dimensions and authentic composition.
 */
export function BrandPrimaryAsset({
  className,
  size = "md",
  caption,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  caption?: string;
}) {
  const sizeClasses = {
    sm: "w-48 max-w-full",
    md: "w-72 max-w-full",
    lg: "w-96 max-w-full",
  };

  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative overflow-hidden rounded-xl border border-brand-border bg-[#ffffff] p-4 shadow-xl", sizeClasses[size])}>
        <Image
          src="/brand/primary-logo.png"
          alt="ARAVANTA TECH - Official Brand Identity"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-brand-gray-400 text-center font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
