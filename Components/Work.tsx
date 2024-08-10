"use client";

import React from "react";
import WorkSection from "./WorkSection";
import Info from "./Info";
import { useIntersectionObserver } from "./useIntersectionObserver";
const Work = () => {
  
  const workRef = useIntersectionObserver("work-section");
  return (
    <div className="pb-[160px]">
      <section
        ref={workRef}
        className="work-section pt-[calc(255px - 128px)] flex flex-col gap-[16px]  fade-up pb-[160px]"
      >
        <Info
          title="Work."
          subTitle="Here are some of my projects from the last few months."
          description="I've had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries."
          className="gap-[16px]"
        />
      </section>
      <WorkSection />
    </div>
  );
};

export default Work;
