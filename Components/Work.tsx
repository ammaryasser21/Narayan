import React from "react";
import WorkSection from "./WorkSection";
import Info from "./Info";

const Work = () => {
  return (
    <div>
      <section className="pt-[calc(255px - 128px)] pb-[25px] flex flex-col gap-[16px] ">
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
