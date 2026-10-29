import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
        <span className="text-xs font-mono uppercase tracking-wider text-brand-gray-400">
          Loading ARAVANTA TECH...
        </span>
      </div>
    </div>
  );
}
