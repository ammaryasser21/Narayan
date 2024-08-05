import Image, { StaticImageData } from "next/image";
import React from "react";
import arrowIcon from "../public/assets/arrow-icon.png";
import work1 from "../public/assets/work-1.png";
import work2 from "../public/assets/work-2.png";
import work3 from "../public/assets/work-3.png";
import work4 from "../public/assets/work-4.png";
import Special from "./Special";

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
    width="w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)]  "
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

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero-section pt-[calc(158px - 48px)]">
        <Special
          width="w-[fit-content]"
          hover="hover:translate-y-[-5px] transition-all cursor-pointer"
        >
          <p className="font-jetbrains text-[14px] leading-[32px] px-[16px]  font-medium before:content-[''] relative before:block before:absolute before:size-[10px] before:bg-[#7DAA69] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2 ">
            <span className="pl-[22px]">Available for hire</span>
          </p>
        </Special>
        <div className="text-[60px] font-righteous sm:w-[588px] leading-[66px] pt-[24px] pb-[32px]">
          <h1>Hi, I’m Narayan,</h1>
          <h1>a product designer from Ireland.</h1>
        </div>
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px]  sm:w-[575px]">
          With a background in industrial design and a keen eye for detail, I
          excel at transforming concepts into tangible realities by seamlessly
          integrating aesthetics with practical functionality.
        </p>
      </section>
      <section className={`relative overflow-hidden py-8 mask-image`}>
        <ul className="relative whitespace-nowrap flex flex-nowrap gap-4 animate-scrolling-text">
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • UI/UX
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • PRODUCT DESIGN
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • STRATEGY
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • RESEARCH
          </li>
        </ul>
      </section>
      <section className={`relative overflow-hidden py-8 mask-image`}>
        <ul className="relative whitespace-nowrap flex flex-nowrap gap-4 animate-scrolling-text">
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • UI/UX
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • PRODUCT DESIGN
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • STRATEGY
          </li>
          <li className="flex-shrink-0 text-[104px] font-righteous font-light">
            • RESEARCH
          </li>
        </ul>
      </section>
      <section className="work  py-8">
        <h1 className="text-[28px] font-righteous pb-[27px]">RECENT WORK</h1>
        <div className="cards flex flex-wrap gap-4">
          {workItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
