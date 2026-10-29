import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "Cloud Solutions | Architecture, Migration & Optimization",
  description:
    "End-to-end cloud strategy, cloud architecture, zero-downtime migration, and FinOps optimization from ARAVANTA TECH.",
};

export default function CloudSolutionsPage() {
  const service = servicesData["cloud-solutions"];
  return <ServiceDetailTemplate service={service} />;
}
