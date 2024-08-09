"use client";
import React from "react";
import WorkSection from "./WorkSection";
import Info from "./Info";
import { useIntersectionObserver } from "./useIntersectionObserver";
const Work = () => {
  
  const workRef = useIntersectionObserver("work-section");
  return (
    <div>
      <section
        ref={workRef}
        className="work-section pt-[calc(255px - 128px)] pb-[25px] flex flex-col gap-[16px]  fade-up"
      >
        <Info
          title="Work."
          subTitle="Here are some of my projects from the last few months."
          description="I've had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries."
        />
      </section>
      <WorkSection />
    </div>
  );
};

export default Work;
