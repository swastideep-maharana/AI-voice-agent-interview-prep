"use client";

import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/interviewCard";

const InterviewSection = () => {
  return (
    <>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take An Interview</h2>

        <div className="interview-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          <p>You haven't taken any interviews yet</p>
        </div>
      </section>
    </>
  );
};

export default InterviewSection;
