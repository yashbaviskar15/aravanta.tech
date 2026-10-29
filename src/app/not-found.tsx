import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <Badge variant="gold" size="sm">
          ERROR 404
        </Badge>
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-gray-300 leading-relaxed">
          The requested route does not exist or has been relocated. Check our primary services directory or return to the homepage.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Return Home</span>
          </Button>
          <Button href="/services" variant="secondary" size="md">
            <Compass className="w-4 h-4 mr-2" />
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
