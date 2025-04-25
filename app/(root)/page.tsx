"use server";

import CTASection from "@/components/CTASection";
import InterviewSection from "@/components/InterviewSection";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  try {
    const isAuth = await isAuthenticated();
    if (!isAuth) {
      redirect("/sign-in");
    }

    return (
      <>
        <CTASection />
        <InterviewSection />
      </>
    );
  } catch (error) {
    console.error("Authentication error:", error);
    redirect("/sign-in");
  }
};

export default Page;
