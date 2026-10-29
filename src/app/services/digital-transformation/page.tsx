import React from "react";
import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { servicesData } from "@/lib/content/servicesData";

export const metadata: Metadata = {
  title: "Digital Transformation | Modernize Systems & Workflows",
  description:
    "Legacy-system modernization, workflow automation, and digital product strategy by ARAVANTA TECH.",
};

export default function DigitalTransformationPage() {
  const service = servicesData["digital-transformation"];
  return <ServiceDetailTemplate service={service} />;
}
