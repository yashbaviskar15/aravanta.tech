import { clsx, type ClassValue } from "clsx";
// @ts-ignore
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  try {
    if (typeof twMerge === "function") {
      return twMerge(clsx(inputs));
    }
  } catch {
    // fallback to clsx if twMerge fails
  }
  return clsx(inputs);
}
