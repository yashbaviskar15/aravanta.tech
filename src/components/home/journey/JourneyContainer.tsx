"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Scene01Landscape } from "./Scene01Landscape";
import { Scene02Cloud } from "./Scene02Cloud";
import { Scene03AppEngineering } from "./Scene03AppEngineering";
import { Scene04DevOps } from "./Scene04DevOps";
import { Scene05Security } from "./Scene05Security";
import { Scene06CloudOS } from "./Scene06CloudOS";
import { Scene07Approach } from "./Scene07Approach";
import { Scene08Conversion } from "./Scene08Conversion";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaServiceCards } from "@/lib/content/cardStackData";
import { CloudCostCalculator } from "@/components/home/CloudCostCalculator";
import { CinematicHUD } from "./CinematicHUD";

// Dynamically import the Three.js WebGL canvas (client-only)
const CinematicJourneyCanvas = dynamic(
  () => import("./CinematicJourneyCanvas"),
  { ssr: false }
);

export function JourneyContainer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Motion state defaults to active for rich interactive experience
  // Users can manually toggle via the HUD controls anytime

  // 2. Track window scroll and calculate active scene & progress
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const rect = container.getBoundingClientRect();
          const totalHeight = container.offsetHeight - window.innerHeight;
          const currentScroll = -rect.top;

          // Compute normalized scroll progress
          const progress = Math.max(0, Math.min(1, currentScroll / (totalHeight || 1)));
          setScrollProgress(progress);

          // Detect active scene by measuring each scene section
          const sceneIds = [
            "scene-01",
            "scene-02",
            "scene-03",
            "scene-04",
            "scene-05",
            "scene-06",
            "scene-07",
            "scene-08",
          ];

          let detectedIndex = 0;
          const threshold = window.innerHeight * 0.45;

          sceneIds.forEach((id, idx) => {
            const el = document.getElementById(id);
            if (el) {
              const elRect = el.getBoundingClientRect();
              if (elRect.top <= threshold && elRect.bottom >= threshold) {
                detectedIndex = idx;
              }
            }
          });

          setActiveScene(detectedIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#05070a] text-white overflow-hidden">
      {/* Three.js GPU WebGL Ambient World */}
      <CinematicJourneyCanvas
        scrollProgress={scrollProgress}
        activeScene={activeScene}
        isReducedMotion={isReducedMotion}
      />

      {/* Floating HUD & Chapter Rail */}
      <CinematicHUD
        activeScene={activeScene}
        scrollProgress={scrollProgress}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={() => setIsReducedMotion(!isReducedMotion)}
      />

      {/* 8-Scene Narrative Scroll Progression: FROM COMPLEXITY TO CLARITY */}
      <div className="relative z-10">
        <Scene01Landscape />
        <Scene02Cloud />

        {/* SmoothUI 3D Scrollable Card Stack Section */}
        {/* Flagship Architecture Practices Card Stack Section */}
        <section id="capabilities-stack" className="py-20 sm:py-28 bg-[#06080e]/95 border-y border-brand-border/60 relative overflow-hidden backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surfaceElevated border border-brand-border mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4a342] animate-pulse" />
              <span className="text-xs font-mono text-[#d4a342] font-semibold uppercase tracking-wider">
                Core Engineering Disciplines
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Flagship Architecture Practices
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-300 max-w-2xl mx-auto mt-3">
              Battle-tested engineering capabilities engineered for multi-cloud resiliency, distributed microservices, automated GitOps pipelines, and zero-trust security postures.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 pb-6">
            <ScrollableCardStack
              items={aravantaServiceCards}
              cardHeight={490}
              cardWidth="w-[94vw] max-w-[620px]"
            />
          </div>
        </section>

        <Scene03AppEngineering />
        <Scene04DevOps />
        <Scene05Security />
        <Scene06CloudOS />

        {/* FinOps & Cloud Value Estimator */}
        <CloudCostCalculator />

        <Scene07Approach />
        <Scene08Conversion />
      </div>
    </div>
  );
}

export default JourneyContainer;
