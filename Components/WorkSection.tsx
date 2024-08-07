import React from "react";
import Image from "next/image";
import Link from "next/link";
import Special from "./Special";
import {workItems,WorkItem}  from "../Components/WorkItems"; 
import arrowIcon from "../public/assets/arrow-icon.png"

const Card: React.FC<WorkItem> = ({ title, description, image ,tag}) => (
  <Special
    width="w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)]"
    hover="hover:translate-y-[-5px] transition-all cursor-pointer"
  >
    <Link href={`/Work/${title[0]}`} className="card p-4 group">
      <div className="info flex items-center justify-between py-4 px-[1rem]">
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
        className="w-full h-auto object-cover px-[1rem]"
      />
    </Link>
  </Special>
);

const WorkSection: React.FC = () => {
  return (
    <section className="work py-8 pt-[176px]">
      <h1 className="text-[28px] font-righteous pb-[27px]">RECENT WORK</h1>
      <div className="cards flex flex-wrap gap-4">
        {workItems.map((item) => (
          <Card key={item.title[0]} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
