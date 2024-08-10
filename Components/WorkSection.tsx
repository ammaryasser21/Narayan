"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Special from "./Special";
import { workItems, WorkItem } from "../Components/WorkItems";
import arrowIcon from "../public/assets/arrow-icon.png";
import { useIntersectionObserver } from "./useIntersectionObserver";

const Card: React.FC<WorkItem> = ({ title, image, tag }) => (
  <Special
    style="w-[calc(100%-2rem)] xl:w-[calc(50%-1rem)] p-[24px]"
    hover="hover:translate-y-[-5px] hover:transition-all transition-all cursor-pointer translate-y-0"
  >
    <Link href={`/Work/${title[0]}`} className=" group m-0">
      <div className="info flex items-center justify-between pb-[28px]">
        <div className="content flex flex-col gap-1 font-jetbrains">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            {title[0]}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[16px] text-[#808080]">
            {tag[0]}
          </p>
        </div>
        <div className="more">
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            width={24}
            height={24}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </div>
      </div>
      <Image
        src={image[0]}
        alt={`${title[0]} Project`}
        width={556}
        height={368}
        className="w-full xl:w-auto xl:object-cover rounded-[12px]"
      />
    </Link>
  </Special>
);

const WorkSection: React.FC = () => {
  const worksRef = useIntersectionObserver("work-images");
  return (
    <section ref={worksRef} className="work-images fade-up">
      <h1 className="text-[28px] font-righteous pb-[27px]">RECENT WORK</h1>
      <div className="cards flex flex-wrap gap-[24px]">
        {workItems.map((item) => (
          <Card key={item.title[0]} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
