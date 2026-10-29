import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Sparkles, Zap, ArrowRight, CheckCircle2, Target, Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrandPrimaryAsset } from "@/components/ui/BrandLogo";
import { companyData } from "@/lib/content/companyData";

export const metadata: Metadata = {
  title: "About Us | Brand Vision & Engineering Mindset",
  description:
    "Learn about ARAVANTA TECH, our engineering philosophy of Simpler. Safer. Smarter., and our mission in empowering cloud transformation.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Badge variant="gold" size="sm">
              ABOUT ARAVANTA TECH
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Cloud <br />
              <span className="gold-gradient-text">Transformation.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-brand-gold font-light">
              Build Smarter. Grow Faster.
            </p>
            <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed pt-2">
              {companyData.positioning}
            </p>
            <div className="pt-4 flex items-center gap-4">
              <Button href="/contact" variant="primary" size="md" className="font-semibold">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/technology" variant="secondary" size="md" className="font-medium">
                <span>Our Technology Stack</span>
              </Button>
            </div>
          </div>

          {/* Official Brand Identity Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <BrandPrimaryAsset
              size="md"
              caption="ARAVANTA TECH — Official Brand Identity & Mark"
            />
          </div>
        </div>
      </div>

      {/* Philosophy: Simpler. Safer. Smarter. */}
      <section className="py-16 md:py-24 border-t border-brand-border/60 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="neutral" size="sm" className="mb-2">
              OUR GUIDING PRINCIPLE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Simpler. Safer. Smarter.
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-300 mt-2">
              Three commitments guiding our technical architecture, systems design, and consulting delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8 hover:border-brand-gold/40 transition-colors"
              >
                <div className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-3">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 md:py-24 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" className="mb-2">
              ENGINEERING CULTURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How We Solve Technology Problems
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-300 mt-2">
              Disciplined systems engineering standards applied across every project milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.engineeringPrinciples.map((ep, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-brand-surface border border-brand-border p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>{ep.title}</span>
                </h3>
                <p className="text-sm text-brand-gray-300 leading-relaxed pl-7">
                  {ep.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 pt-16 border-t border-brand-border/60 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Partner With Us
          </h2>
          <p className="text-base text-brand-gray-300">
            Let us help you design, modernize, and scale your technology systems with confidence.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg" className="font-semibold">
              <span>Discuss Your Next Initiative</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
