"use client";
import React, { useState } from "react";
import { workItems, WorkItem } from "../Components/WorkItems";
import Image from "next/image";
import Info from "./Info";
import Special from "./Special";
import Link from "next/link";

interface SpacificWorkProps {
  title?: string;
}

const SpacificWork: React.FC<SpacificWorkProps> = ({ title }) => {
  console.log(title);
  const [items] = useState<WorkItem[]>(workItems);

  const renderItem = () => {
    const item = items.find((item) => item.title[0] === title);

    if (!item) {
      return <div>Item not found</div>;
    }

    return (
      <div className="grid place-items-center">
        <div className="max-w-[600px] text-center">
          {" "}
          <Info
            secondaryTitle=""
            mainTitle=""
            title={item.title[0]}
            description=""
            subTitle=""
            subDescription=""
          />
        </div>
        <div className="flex gap-4 items-center justify-center  py-[80px]">
          <Special
            style="w-[fit-content] flex gap-[14px] items-center justify-center py-[4px] px-[22px]"
            hover="cursor-pointer"
          >
            <Image
              src={item.tagIcons[0]}
              alt={item.title[0]}
              width={18}
              height={18}
            />
            <p className="font-jetbrains text-[14px] leading-[32px]">
              {item.tag[0]}
            </p>
          </Special>
          <Special
            style="w-[fit-content] flex gap-[14px] items-center justify-center py-[4px] px-[22px]"
            hover="cursor-pointer"
          >
            <Image
              src={item.tagIcons[1]}
              alt={item.title[0]}
              width={18}
              height={18}
            />
            <p className="font-jetbrains text-[14px] leading-[32px]">
              {item.tag[1]}
            </p>
          </Special>
          <Special
            style="w-[fit-content] flex gap-[14px] items-center justify-center py-[4px] px-[22px]"
            hover="cursor-pointer"
          >
            <Image
              src={item.tagIcons[2]}
              alt={item.title[0]}
              width={18}
              height={18}
            />
            <p className="font-jetbrains text-[14px] leading-[32px]">
              {item.tag[2]}
            </p>
          </Special>
        </div>
        <Image
          src={item.image[0]}
          alt={item.title[0] + "1"}
          className="h-[revert-layer] rounded-[32px] "
          width={1200}
          height={784}
        />
        <div className="max-w-[600px]  py-[80px]">
          {" "}
          <Info
            secondaryTitle=""
            mainTitle={item.title[1]}
            title=""
            description={item.description[1]}
            subTitle=""
            subDescription=""
          />
        </div>
        <Image
          src={item.image[1]}
          alt={item.title[0] + "2"}
          className="h-[revert-layer]  rounded-[32px]"
          width={1200}
          height={784}
        />
        <div className="max-w-[600px]  py-[80px]">
          {" "}
          <Info
            secondaryTitle=""
            mainTitle={item.title[2]}
            title=""
            description={item.description[2]}
            subTitle=""
            subDescription=""
          />
          {!item.title[5] ? (
            <Info
              secondaryTitle=""
              mainTitle={item.title[3]}
              title=""
              description={item.description[2]}
              subTitle=""
              subDescription=""
            />
          ) : (
            <Info
              secondaryTitle=""
              mainTitle={item.title[4]}
              title=""
              description={item.description[3]}
              subTitle=""
              subDescription=""
            />
          )}
        </div>
        <Image
          src={item.image[2]}
          alt={item.title[0] + "3"}
          className="h-[revert-layer]  rounded-[32px] "
          width={1200}
          height={784}
        />
        <div className="max-w-[600px]  py-[80px]">
          {" "}
          {item.title[5] ? (
            <Info
              secondaryTitle=""
              mainTitle={item.title[5]}
              title=""
              description={item.description[4]}
              subTitle=""
              subDescription=""
            />
          ) : (
            <Info
              secondaryTitle=""
              mainTitle={item.title[4]}
              title=""
              description={item.description[3]}
              subTitle=""
              subDescription=""
            />
          )}
        </div>

        <Link href="/Work" className="text-[44px] font-righteous pb-[120px]">
          <p className="hover:transition-all hover:duration-500 transition-all duration-500 hover:text-gray-300 text-white">
            View All Work
          </p>
        </Link>
      </div>
    );
  };

  return <div>{renderItem()}</div>;
};

export default SpacificWork;
