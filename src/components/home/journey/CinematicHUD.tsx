"use client";

import React, { useState } from "react";
import { Compass, Sparkles, Eye, EyeOff, Layers, Activity, Menu, X, ArrowUp } from "lucide-react";

export interface SceneMeta {
  id: string;
  index: string;
  name: string;
  subtitle: string;
}

export const JOURNEY_SCENES: SceneMeta[] = [
  { id: "scene-01", index: "01", name: "HERO", subtitle: "Engineering the Infrastructure of Tomorrow" },
  { id: "company-intro", index: "02", name: "ABOUT", subtitle: "Company & Engineering Philosophy" },
  { id: "capabilities", index: "03", name: "PRACTICES", subtitle: "Core Engineering Disciplines" },
  { id: "solutions", index: "04", name: "SOLUTIONS", subtitle: "Industry Solutions & Blueprints" },
  { id: "cloudos", index: "05", name: "CLOUDOS", subtitle: "Aravanta CloudOS Platform" },
  { id: "methodology", index: "06", name: "PROCESS", subtitle: "5-Stage Engineering Methodology" },
  { id: "case-studies", index: "07", name: "BLUEPRINTS", subtitle: "Verified Case Studies" },
  { id: "interactive-lab", index: "08", name: "LAB & SCOPE", subtitle: "Interactive Simulators & Contact" },
];

interface CinematicHUDProps {
  activeScene: number;
  scrollProgress: number;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export function CinematicHUD({
  activeScene,
  scrollProgress,
  isReducedMotion,
  onToggleReducedMotion,
}: CinematicHUDProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const current = JOURNEY_SCENES[activeScene] || JOURNEY_SCENES[0];

  const scrollToScene = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileDrawerOpen(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <aside aria-label="Journey Navigation and Telemetry" className="pointer-events-none">

      {/* Floating Top-Left Scene Status Badge (Desktop & Tablet) */}
      <div className="fixed top-24 left-6 z-40 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-xl shadow-2xl pointer-events-auto">
        <span className="w-2.5 h-2.5 rounded-full bg-[#d4a342] animate-pulse shadow-[0_0_10px_#d4a342]" />
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#dfe7e0]">
          <span className="text-[#d4a342] font-bold">CHAPTER {current.index}</span>
          <span className="text-zinc-600">//</span>
          <span className="text-white font-medium">{current.name}</span>
        </div>
        <span className="text-[10px] font-mono text-zinc-500 pl-1 border-l border-[#222533]">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* Floating Right-Side Chapter Navigation Rail (Desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
        {JOURNEY_SCENES.map((scene, idx) => {
          const isActive = idx === activeScene;
          return (
            <button
              key={scene.id}
              onClick={() => scrollToScene(scene.id)}
              className="group flex items-center gap-3 text-right focus:outline-none focus:ring-1 focus:ring-[#d4a342] rounded py-1 pl-3"
              aria-label={`Jump to Chapter ${scene.index}: ${scene.subtitle}`}
            >
              {/* Expandable Label on Hover or Active */}
              <span
                className={`text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "opacity-100 text-[#d4a342] translate-x-0 font-bold"
                    : "opacity-0 group-hover:opacity-100 text-zinc-400 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {scene.name}
              </span>

              {/* Indicator Dot / Bar */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-8 h-1.5 bg-[#d4a342] shadow-[0_0_12px_#d4a342]"
                    : "w-2 h-2 bg-white/20 group-hover:bg-white/60 group-hover:scale-125"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Floating Bottom-Right Control Cluster */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto">
        {/* Toggle Reduced Motion / Animation Mode */}
        <button
          onClick={onToggleReducedMotion}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-xl border text-xs font-mono transition-all duration-200 shadow-xl ${
            isReducedMotion
              ? "bg-[#1f221e] border-amber-500/50 text-amber-300"
              : "bg-[#0a0e14]/90 border-[#222533] text-zinc-400 hover:text-white hover:border-white/30"
          }`}
          aria-label={isReducedMotion ? "Enable full 3D motion" : "Reduce motion for accessibility"}
          title={isReducedMotion ? "Motion: Static Mode" : "Motion: GPU Dynamic Mode"}
        >
          {isReducedMotion ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Static Mode</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">GPU 3D</span>
            </>
          )}
        </button>

        {/* Quick Back to Top Shortcut */}
        {scrollProgress > 0.15 && (
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#0a0e14]/90 border border-[#222533] text-zinc-400 hover:text-white hover:border-[#d4a342] backdrop-blur-xl shadow-xl transition-all duration-200 hover:scale-105"
            aria-label="Scroll to top of journey"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#d4a342]" />
          </button>
        )}
      </div>

    </aside>
  );
}

export default CinematicHUD;
