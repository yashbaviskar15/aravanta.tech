"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, Search, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { generalFaqs } from "@/lib/content/faqData";

type CategoryType = "All" | "General" | "Services" | "Security" | "CloudOS" | "Engagement";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: CategoryType[] = [
    "All",
    "General",
    "Services",
    "Security",
    "CloudOS",
    "Engagement",
  ];

  const filteredFaqs = useMemo(() => {
    return generalFaqs.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="emerald" size="sm" dot>
            ENTERPRISE KNOWLEDGE BASE &amp; DISCLOSURES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Frequently Asked <br />
            <span className="emerald-gradient-text">Questions.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Clear, candid answers regarding our approach, services, and platform initiative.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs by keyword (e.g. SOC 2, latency, migration, CloudOS)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0d0f15] border border-white/10 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-md"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500/15 border border-emerald-500/50 text-emerald-400 font-bold"
                  : "bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 shadow-xl">
          {filteredFaqs.length > 0 ? (
            <Accordion
              items={filteredFaqs.map((f) => ({
                id: f.id,
                question: f.question,
                answer: f.answer,
              }))}
              defaultOpenId={filteredFaqs[0]?.id}
            />
          ) : (
            <div className="py-12 text-center text-zinc-500 space-y-2">
              <p className="text-sm font-medium text-zinc-400">
                No matching answers found for "{searchQuery}".
              </p>
              <p className="text-xs">
                Try searching for broader keywords or contact our engineering leads directly.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Still have questions CTA */}
      <div className="mt-20 pt-16 border-t border-white/10 max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Have a Question Not Answered Here?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Our engineering leads are always open to reviewing specific architecture requirements, custom compliance constraints, or scoping timelines.
        </p>
        <div className="pt-2 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            <span>Contact Engineering Leads</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
