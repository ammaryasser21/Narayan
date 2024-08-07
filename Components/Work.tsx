import React from "react";
import WorkSection from "./WorkSection";

const Work = () => {
  return (
    <div>
      <section className="pt-[calc(255px - 128px)] pb-[25px] flex flex-col gap-[16px] ">
        <h1 className="text-[60px] font-righteous sm:w-[588px] leading-[66px]">
          Work.
        </h1>
        <p className="font-jetbrains text-[32px] text-white leading-[40px] sm:w-[575px]">
          Here are some of my projects from the last few months.
        </p>
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
          I&apos;ve had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries.
        </p>
      </section>

      <WorkSection />
    </div>
  );
};

export default Work;
