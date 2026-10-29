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
  { id: "scene-01", index: "01", name: "LANDSCAPE", subtitle: "The Digital Landscape" },
  { id: "scene-02", index: "02", name: "CLOUD", subtitle: "Cloud Transformation" },
  { id: "scene-03", index: "03", name: "APPLICATION", subtitle: "Application Engineering" },
  { id: "scene-04", index: "04", name: "DEVOPS", subtitle: "DevOps & Automation" },
  { id: "scene-05", index: "05", name: "SECURITY", subtitle: "Security & Reliability" },
  { id: "scene-06", index: "06", name: "CLOUDOS", subtitle: "Aravanta CloudOS" },
  { id: "scene-07", index: "07", name: "APPROACH", subtitle: "Engineering Approach" },
  { id: "scene-08", index: "08", name: "CONVERSION", subtitle: "Let's Build What's Next" },
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
      el.scrollIntoView({ behavior: "smooth" });
      setMobileDrawerOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Journey Navigation and Telemetry" className="pointer-events-none">

      {/* 2. Floating Top-Left Scene Status Badge (Desktop & Tablet) */}
      <div className="fixed top-24 left-6 z-40 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-xl shadow-2xl pointer-events-auto">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_#c9a24a]" />
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#dfe7e0]">
          <span className="text-brand-gold font-bold">CHAPTER {current.index}</span>
          <span className="text-brand-gray-600">//</span>
          <span className="text-white font-medium">{current.name}</span>
        </div>
        <span className="text-[10px] font-mono text-brand-gray-500 pl-1 border-l border-[#222533]">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* 3. Floating Right-Side Chapter Navigation Rail (Desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
        {JOURNEY_SCENES.map((scene, idx) => {
          const isActive = idx === activeScene;
          return (
            <button
              key={scene.id}
              onClick={() => scrollToScene(scene.id)}
              className="group flex items-center gap-3 text-right focus:outline-none focus:ring-1 focus:ring-brand-gold rounded py-1 pl-3"
              aria-label={`Jump to Chapter ${scene.index}: ${scene.subtitle}`}
            >
              {/* Expandable Label on Hover or Active */}
              <span
                className={`text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "opacity-100 text-brand-gold translate-x-0 font-bold"
                    : "opacity-0 group-hover:opacity-100 text-brand-gray-400 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {scene.name}
              </span>

              {/* Indicator Dot / Bar */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-8 h-2 bg-brand-gold shadow-[0_0_12px_#c9a24a]"
                    : "w-2 h-2 bg-brand-gray-600 group-hover:bg-brand-gray-300 group-hover:scale-125"
                }`}
              />
            </button>
          );
        })}

        {/* Scroll Progress Meter & Scroll to Top */}
        <div className="mt-4 pt-4 border-t border-brand-border/60 flex items-center gap-3 font-mono text-[10px] text-brand-gray-400">
          <span>PROGRESS</span>
          <span className="text-white font-semibold">
            {Math.round(scrollProgress * 100)}%
          </span>
          <button
            onClick={scrollToTop}
            title="Return to top"
            className="p-1 rounded bg-[#121622] hover:bg-brand-gold/20 text-brand-gray-400 hover:text-brand-gold transition-colors ml-1"
          >
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 4. Floating Bottom-Left Controls Bar */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={onToggleReducedMotion}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0e14]/90 border border-[#222533] text-brand-gray-300 hover:text-white hover:border-brand-gold/40 text-[11px] font-mono tracking-wider backdrop-blur-xl shadow-xl transition-all"
          title="Toggle camera motion & heavy 3D transforms"
        >
          {isReducedMotion ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-amber-400" />
              <span>MOTION: PAUSED</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>MOTION: ACTIVE</span>
            </>
          )}
        </button>

        {/* Mobile Chapter Drawer Button */}
        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0e14]/90 border border-[#222533] text-brand-gold hover:text-white text-[11px] font-mono tracking-wider backdrop-blur-xl shadow-xl"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>CH. {current.index}</span>
        </button>
      </div>

      {/* Mobile Chapter Selector Modal Drawer */}
      {mobileDrawerOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileDrawerOpen(false);
          }}
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex flex-col justify-end p-4 pointer-events-auto lg:hidden"
        >
          <div className="p-6 rounded-2xl bg-[#0c1017] border border-[#222533] shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-brand-gold font-bold">CHAPTER NAVIGATION</span>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-md text-brand-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {JOURNEY_SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => scrollToScene(scene.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    idx === activeScene
                      ? "bg-brand-gold/10 border-brand-gold text-white"
                      : "bg-[#141824] border-white/5 text-brand-gray-300"
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-mono text-brand-gold">CHAPTER {scene.index}</div>
                    <div className="text-sm font-semibold">{scene.subtitle}</div>
                  </div>
                  <span className="text-xs font-mono text-brand-gray-500">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default CinematicHUD;
