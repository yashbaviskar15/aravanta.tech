"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SubpageHeroProps {
  badgeText: string;
  badgeVariant?: BadgeProps["variant"];
  title: React.ReactNode;
  kicker?: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  metrics?: MetricItem[];
  accentColor?: "emerald" | "gold" | "cyan" | "indigo";
  rightContent?: React.ReactNode;
  className?: string;
}

export function SubpageHero({
  badgeText,
  badgeVariant = "emerald",
  title,
  kicker,
  description,
  primaryCtaText = "Start a Project",
  primaryCtaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  metrics,
  accentColor = "emerald",
  rightContent,
  className = "",
}: SubpageHeroProps) {
  const glowGradients = {
    emerald: "from-emerald-500/12 via-emerald-500/5 to-transparent",
    gold: "from-[#d4a342]/15 via-[#d4a342]/5 to-transparent",
    cyan: "from-sky-500/15 via-sky-500/5 to-transparent",
    indigo: "from-indigo-500/15 via-indigo-500/5 to-transparent",
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 text-white border-b border-white/8 bg-[#08090d]",
        className
      )}
    >
      {/* Ambient Radial Glow */}
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-60 bg-gradient-to-b",
          glowGradients[accentColor]
        )}
      />

      {/* Tech Grid Schematic Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className={cn("space-y-6", rightContent ? "lg:col-span-7" : "lg:col-span-10 max-w-4xl")}>
            <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
              <div className="inline-flex items-center gap-2">
                <Badge variant={badgeVariant} size="sm" dot>
                  {badgeText}
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                {title}
              </h1>
            </ScrollReveal>

            {kicker && (
              <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
                <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
                  {kicker}
                </p>
              </ScrollReveal>
            )}

            <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal max-w-2xl">
                {description}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            {(primaryCtaText || secondaryCtaText) && (
              <ScrollReveal direction="up" delay={0.35} duration={0.7} distance={18}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {primaryCtaText && primaryCtaHref && (
                    <Link
                      href={primaryCtaHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-[#08090d] font-bold text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all select-none group"
                    >
                      <span>{primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#08090d]" />
                    </Link>
                  )}

                  {secondaryCtaText && secondaryCtaHref && (
                    <Link
                      href={secondaryCtaHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all backdrop-blur-md shadow-sm group select-none"
                    >
                      <span>{secondaryCtaText}</span>
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold ml-1 group-hover:rotate-12 transition-transform" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Metrics Ticker Row */}
            {metrics && metrics.length > 0 && (
              <ScrollReveal direction="up" delay={0.42} duration={0.7} distance={18}>
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                        {m.label}
                      </div>
                      {m.sublabel && (
                        <div className="text-[11px] text-zinc-500 font-sans">
                          {m.sublabel}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right Column (Visual / Interactive Card) */}
          {rightContent && (
            <div className="lg:col-span-5 relative flex justify-center">
              <ScrollReveal direction="left" delay={0.25} duration={0.8} distance={28}>
                {rightContent}
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SubpageHero;
