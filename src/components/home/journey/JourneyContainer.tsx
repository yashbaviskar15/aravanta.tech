"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Scene01Landscape } from "./Scene01Landscape";
import { CompanyIntroSection } from "@/components/home/CompanyIntroSection";
import { CoreCapabilitiesSection } from "@/components/home/CoreCapabilitiesSection";
import { FeaturedSolutionsSection } from "@/components/home/FeaturedSolutionsSection";
import { CloudOSShowcaseSection } from "@/components/home/CloudOSShowcaseSection";
import { EngineeringMethodologySection } from "@/components/home/EngineeringMethodologySection";
import { TechEcosystemSection } from "@/components/home/TechEcosystemSection";
import { ProjectsCaseStudiesSection } from "@/components/home/ProjectsCaseStudiesSection";
import { InteractiveLabSection } from "@/components/home/InteractiveLabSection";
import { TrustCredibilitySection } from "@/components/home/TrustCredibilitySection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { ConversionContactSection } from "@/components/home/ConversionContactSection";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaServiceCards } from "@/lib/content/cardStackData";
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

  // Track window scroll and calculate active scene & progress
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

          // Detect active section
          const sectionIds = [
            "scene-01",
            "company-intro",
            "capabilities",
            "solutions",
            "cloudos",
            "methodology",
            "technology",
            "case-studies",
          ];

          let detectedIndex = 0;
          const threshold = window.innerHeight * 0.45;

          sectionIds.forEach((id, idx) => {
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

      {/* Complete 14-Section Architecture */}
      <div className="relative z-10">
        {/* SECTION 02: HERO EXPERIENCE */}
        <Scene01Landscape />

        {/* SECTION 03: COMPANY INTRODUCTION */}
        <CompanyIntroSection />

        {/* SECTION 04: CORE CAPABILITIES */}
        <CoreCapabilitiesSection />

        {/* Core Architecture Practices Card Stack */}
        <section id="capabilities-stack" className="py-20 sm:py-28 bg-[#06080e]/95 border-y border-brand-border/60 relative overflow-hidden backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surfaceElevated border border-brand-border mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4a342] animate-pulse" />
              <span className="text-xs font-mono text-[#d4a342] font-semibold uppercase tracking-wider">
                FLAGSHIP DISCIPLINE DOSSIERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Interactive Architecture Practices
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-300 max-w-2xl mx-auto mt-3">
              Examine live blueprints, service deliverables, and target metrics across our engineering practices.
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

        {/* SECTION 05: FEATURED SOLUTIONS */}
        <FeaturedSolutionsSection />

        {/* SECTION 06: ARAVANTA CLOUDOS SHOWCASE */}
        <CloudOSShowcaseSection />

        {/* SECTION 07: ENGINEERING METHODOLOGY */}
        <EngineeringMethodologySection />

        {/* SECTION 08: TECHNOLOGY ECOSYSTEM */}
        <TechEcosystemSection />

        {/* SECTION 09: ENGINEERING PROJECTS / CASE STUDIES */}
        <ProjectsCaseStudiesSection />

        {/* SECTION 10: INTERACTIVE ENGINEERING LAB */}
        <InteractiveLabSection />

        {/* SECTION 11: TRUST & CREDIBILITY */}
        <TrustCredibilitySection />

        {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
        <HomeFAQSection />

        {/* SECTION 13: CONTACT & CONVERSION CTA */}
        <ConversionContactSection />
      </div>
    </div>
  );
}

export default JourneyContainer;
