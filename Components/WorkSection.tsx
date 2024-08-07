import Image, { StaticImageData } from "next/image";
import React from "react";
import arrowIcon from "../public/assets/arrow-icon.png";import Special from "./Special";
import work1 from "../public/assets/work-1.png";
import work2 from "../public/assets/work-2.png";
import work3 from "../public/assets/work-3.png";
import work4 from "../public/assets/work-4.png";


interface WorkItem {
  title: string;
  description: string;
  image: StaticImageData;
}

const workItems: WorkItem[] = [
  { title: "Zephyr", description: "Branding & App", image: work1 },
  { title: "NovaTech", description: "Website & App", image: work2 },
  { title: "Orion", description: "App & Website", image: work3 },
  { title: "ArtFest24", description: "Branding & Posters", image: work4 },
];

const Card: React.FC<WorkItem> = ({ title, description, image }) => (
  <Special
    width="w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)]"
    hover="hover:translate-y-[-5px] transition-all cursor-pointer"
  >
    <div className="card p-4 group">
      <div className="info flex items-center justify-between py-4">
        <div className="content flex flex-col gap-1 font-jetbrains">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[16px] text-[#808080]">
            {description}
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
        src={image}
        alt={`${title} Project`}
        width={556}
        height={368}
        className="w-full h-auto object-cover"
      />
    </div>
  </Special>
);

const WorkSection: React.FC = () => {
  return (
      <section className="work py-8 pt-[176px]">
        <h1 className="text-[28px] font-righteous pb-[27px]">RECENT WORK</h1>
        <div className="cards flex flex-wrap gap-4">
          {workItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
  );
};

export default WorkSection;
