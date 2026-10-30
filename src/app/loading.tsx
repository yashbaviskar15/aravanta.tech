import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#08090d] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-emerald-500/20 border-t-emerald-400 animate-spin" />
          <div className="absolute w-6 h-6 rounded-full bg-emerald-500/10 backdrop-blur-md" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            ARAVANTA TECH
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            INITIALIZING WORKLOAD RUNTIME...
          </span>
        </div>
      </div>
    </div>
  );
}
