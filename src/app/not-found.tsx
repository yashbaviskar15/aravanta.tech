import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, Terminal, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-[#08090d] text-white">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <Badge variant="emerald" size="sm" dot>
            HTTP 404 • ROUTE UNRESOLVED
          </Badge>
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Routing Fault Detected
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none font-sans">
            Page Not <br />
            <span className="emerald-gradient-text">Found.</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-md mx-auto pt-2">
            The requested URI does not exist within the ARAVANTA TECH cluster topology or may have been consolidated under our updated architecture taxonomy.
          </p>
        </div>

        {/* Diagnostic Card */}
        <div className="p-4 rounded-xl bg-[#0d0f15] border border-white/10 text-left font-mono text-xs text-zinc-400 space-y-1.5 max-w-md mx-auto">
          <div className="flex items-center justify-between text-zinc-500 pb-1 border-b border-white/5">
            <span>EDGE_ROUTER_STATUS</span>
            <span className="text-emerald-400">RESOLVER_ACTIVE</span>
          </div>
          <div>STATUS: <span className="text-white font-semibold">404 NOT_FOUND</span></div>
          <div>REMEDY: Redirect to primary gateway or service catalog</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Gateway</span>
          </Button>
          <Button href="/services" variant="secondary" size="md">
            <Compass className="w-4 h-4 mr-2" />
            <span>Explore Services</span>
          </Button>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs font-mono text-zinc-500">
          <Link href="/cloudos" className="hover:text-emerald-400 transition-colors">CloudOS</Link>
          <span>•</span>
          <Link href="/solutions" className="hover:text-emerald-400 transition-colors">Solutions</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Inquiry Desk</Link>
        </div>
      </div>
    </div>
  );
}
