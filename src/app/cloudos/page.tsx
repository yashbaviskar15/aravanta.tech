import React from "react";
import type { Metadata } from "next";
import { CloudOSOverview } from "@/components/cloudos/CloudOSOverview";

export const metadata: Metadata = {
  title: "Aravanta CloudOS | The Unified Cloud Transformation Platform",
  description:
    "Aravanta CloudOS is our cloud platform initiative designed to simplify infrastructure governance, automate zero-trust security guardrails, and provide unified telemetry.",
};

export default function CloudOSPage() {
  return <CloudOSOverview />;
}
