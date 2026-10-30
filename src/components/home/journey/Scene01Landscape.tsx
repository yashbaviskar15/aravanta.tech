"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  RefreshCw,
  Server,
  Cloud,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
  Activity,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Scene01Landscape() {
  // 3D Card Tilt on Cursor Move for the Arched Showcase
  const frameRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="scene-01"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Swiss Enterprise Split Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollReveal direction="up" delay={0.05} duration={0.75} distance={20}>
              {/* Telemetry Status Ticker Eyebrow */}
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-[#d4a342]/40 transition-colors shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a342] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a342]" />
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#d4a342] font-mono">
                  ENTERPRISE CLOUD &amp; SYSTEMS ENGINEERING
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  ALL SYSTEMS NOMINAL (99.999% SLA)
                </span>
              </div>

              {/* Main Headline matching Swiss Enterprise editorial style */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
                People who care <br />
                about your <span className="gold-gradient-text">growth.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15} duration={0.75} distance={20}>
              {/* Subtext */}
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl font-sans">
                Powerful, self-serve cloud infrastructure, resilient software engineering, and modern DevOps built to help you convert, scale, and retain more.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25} duration={0.75} distance={20}>
              {/* CTA Buttons side-by-side matching Swiss Enterprise editorial style */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Primary Start Project Button */}
                <Link
                  href="/contact"
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-[#08090d] font-bold text-sm shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all select-none active:scale-[0.98]"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#08090d]" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </Link>

                {/* Secondary Demo Button */}
                <a
                  href="#scene-06"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all backdrop-blur-md shadow-sm group select-none cursor-pointer active:scale-[0.98]"
                >
                  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-105 group-hover:border-[#d4a342] transition-all">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5 group-hover:fill-[#d4a342] group-hover:text-[#d4a342] transition-colors" />
                  </div>
                  <span>Interactive CloudOS Demo</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} duration={0.75} distance={20}>
              {/* Proof Badges Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-white font-semibold">99.999% SLA Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4a342] shrink-0" />
                  <span className="text-white font-semibold">Zero-Drift IaC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-white font-semibold">Zero-Trust Vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-white font-semibold">SOC 2 Type II Aligned</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive 3D Arched Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.2} duration={0.85} distance={30}>
              {/* Background Angled Hatch Pattern */}
              <div className="absolute -top-6 -right-6 w-48 h-48 opacity-20 pointer-events-none hidden sm:block">
                <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
                  <pattern id="hatch-pattern" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="16" stroke="#d4a342" strokeWidth="2" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hatch-pattern)" />
                </svg>
              </div>

              {/* Main Arched Showcase Frame with Cursor 3D Parallax */}
              <motion.div
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-lg mx-auto lg:max-w-none perspective-1000"
              >
                
                {/* Arched Visual Container */}
                <div className="relative h-[480px] sm:h-[530px] rounded-tl-[100px] sm:rounded-tl-[140px] rounded-br-[36px] rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gradient-to-b from-[#151926] via-[#0d1017] to-[#07090f] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center p-8 group">
                  
                  {/* Subtle Radial Backlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,163,66,0.14),transparent_65%)] pointer-events-none" />
                  
                  {/* Tech Grid Schematic Texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Professional Brand Logo Presentation */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                    {/* Outer Concentric Depth Rings */}
                    <div className="relative p-6 sm:p-7 rounded-full bg-gradient-to-b from-[#ffffff]/5 to-transparent border border-[#d4a342]/40 shadow-[0_0_55px_rgba(212,163,66,0.18)] group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-1 rounded-full border border-white/10 animate-spin" style={{ animationDuration: "35s" }} />
                      <div className="absolute inset-3 rounded-full border border-dashed border-[#d4a342]/30" />
                      
                      {/* Minted Logo Emblem */}
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f8f8fa] to-[#e4e6ea] p-4 shadow-2xl flex items-center justify-center border-2 border-[#d4a342]/70">
                        <Image
                          src="/brand/icon.png"
                          alt="ARAVANTA TECH Emblem"
                          width={110}
                          height={110}
                          priority
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Brand Typography */}
                    <div className="space-y-1">
                      <div className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-mono">
                        ARAVANTA<span className="text-[#d4a342] ml-1">TECH</span>
                      </div>
                      <div className="text-xs font-mono text-[#d4a342] tracking-widest uppercase">
                        SIMPLER. SAFER. SMARTER.
                      </div>
                    </div>
                  </div>

                  {/* Top Corner Status Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                      CLOUD ARCHITECTURE LABS
                    </span>
                  </div>
                </div>

                {/* Overlapping Floating UI Cards with Smooth Continuous Float */}
                <div className="absolute -bottom-6 -left-3 sm:-left-8 z-20 flex flex-col gap-3 w-[94%] sm:w-[380px] pointer-events-auto">
                  
                  {/* Floating Card 1: Core Migration Progress */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#0e121a]/95 text-white border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all hover:border-[#d4a342]/50 hover:shadow-[0_20px_45px_rgba(212,163,66,0.15)] group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-pink-500/20 text-pink-300 border border-pink-500/30 tracking-wider uppercase shrink-0">
                          CLOUD
                        </span>
                        <div className="font-bold text-xs sm:text-sm text-white leading-snug truncate">
                          Core Migration — Multi-AZ Cluster
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-medium">
                      <span>24 of 24 Workloads</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1 font-mono">
                        ✓ Synced &amp; Operational
                      </span>
                    </div>

                    {/* 100% Progress Bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-[#d4a342]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-300 shrink-0">
                        100%
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating Card 2: Aravanta CloudOS Telemetry Stream */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut", delay: 0.8 }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#0e121a]/95 text-white border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(56,189,248,0.15)] group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 tracking-wider uppercase shrink-0">
                          TELEMETRY
                        </span>
                        <div className="font-bold text-xs sm:text-sm text-white leading-snug truncate">
                          Aravanta CloudOS Data Stream
                        </div>
                      </div>
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin shrink-0 mt-0.5" style={{ animationDuration: "6s" }} />
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-medium">
                      <span className="font-mono">p99 Latency: 0.42ms</span>
                      <span className="text-cyan-400 font-semibold font-mono flex items-center gap-1">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>Active Telemetry</span>
                      </span>
                    </div>

                    {/* Live Progress Bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-300 shrink-0">
                        85%
                      </span>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Scene01Landscape;
