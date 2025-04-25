"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview-Ready with Ai-powerd Practice & Feedback</h2>
        <p className="text-lg">
          Practice with realistic mock interviews and get instant feedback
        </p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start An Interview</Link>
        </Button>
      </div>

      <Image
        src="/robot.png"
        alt="robot"
        width={400}
        height={400}
        className="max-sm:hidden"
      />
    </section>
  );
};

export default CTASection;
