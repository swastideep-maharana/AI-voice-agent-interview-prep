"use client";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { interviewCovers, mappings } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeTechName(tech: string): string {
  return tech.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function checkIconExists(tech: string): boolean {
  const normalizedTech = normalizeTechName(tech);
  return mappings[normalizedTech] !== undefined;
}

export async function getTechLogos(techStack: string[]): Promise<string[]> {
  const logos: string[] = [];
  for (const tech of techStack) {
    if (checkIconExists(tech)) {
      const normalizedTech = normalizeTechName(tech);
      const logoPath = `/tech-logos/${mappings[normalizedTech]}.svg`;
      logos.push(logoPath);
    }
  }
  return logos;
}

export function getRandomInterviewCover(): string {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return interviewCovers[randomIndex];
}
