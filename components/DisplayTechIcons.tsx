"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/client-utils";
import { getTechLogos } from "@/lib/client-utils";

interface TechIconProps {
  techStack: string[];
}

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTechIcons = async () => {
      try {
        const logos = await getTechLogos(techStack);
        setTechIcons(logos);
      } catch (error) {
        console.error("Error loading tech icons:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTechIcons();
  }, [techStack]);

  if (isLoading) {
    return <div className="flex flex-row gap-2">Loading...</div>;
  }

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 4).map((logo, index) => (
        <div
          key={index}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{techStack[index]}</span>
          <Image
            src={logo}
            alt={`${techStack[index]} logo`}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
