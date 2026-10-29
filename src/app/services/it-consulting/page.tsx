import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "IT Consulting | Architecture Reviews & Strategic Roadmaps",
  description:
    "Unbiased technical architecture reviews, vendor evaluations, and engineering roadmaps by ARAVANTA TECH.",
};

export default function ITConsultingPage() {
  const service = servicesData["it-consulting"];
  return <ServiceDetailTemplate service={service} />;
}
