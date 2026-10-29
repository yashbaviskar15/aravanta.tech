import React from "react";
import type { Metadata } from "next";
import { JourneyContainer } from "@/components/home/journey/JourneyContainer";

export const metadata: Metadata = {
  title: "ARAVANTA TECH — Empowering Cloud Transformation | Simpler. Safer. Smarter.",
  description:
    "Engineering the next step in your digital transformation. From complexity to clarity through resilient cloud infrastructure, modern software engineering, and Aravanta CloudOS.",
  openGraph: {
    title: "ARAVANTA TECH — Empowering Cloud Transformation",
    description:
      "Simpler. Safer. Smarter. Build Smarter, Grow Faster with modern cloud infrastructure and software engineering.",
  },
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#05070a]">
      {/* Cinematic 3D Journey: FROM COMPLEXITY TO CLARITY (Scenes 01 - 08) */}
      <JourneyContainer />
    </main>
  );
}
