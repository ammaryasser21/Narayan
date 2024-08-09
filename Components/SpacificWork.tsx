"use client";
import React, { useState } from "react";
import { workItems, WorkItem } from "../Components/WorkItems";
import Image from "next/image";
import Info from "./Info";
import Special from "./Special";
import Link from "next/link";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface SpacificWorkProps {
  title?: string;
}

const SpacificWork: React.FC<SpacificWorkProps> = ({ title }) => {
  const TitleRef = useIntersectionObserver("spacific-work1");
  const badgeRef = useIntersectionObserver("spacific-work2");
  const imageRef1 = useIntersectionObserver("spacific-work3");
  const imageRef2 = useIntersectionObserver("spacific-work4");
  const imageRef3 = useIntersectionObserver("spacific-work5");
  const subtitleRef1 = useIntersectionObserver("spacific-work6");
  const subtitleRef2 = useIntersectionObserver("spacific-work7");
  const subtitleRef3 = useIntersectionObserver("spacific-work8");
  const [items] = useState<WorkItem[]>(workItems);

  const renderItem = () => {
    const item = items.find((item) => item.title[0] === title);

    if (!item) {
      return <div>Item not found</div>;
    }

    return (
      <div className="grid place-items-center">
        <section ref={TitleRef} className="spacific-work1 max-w-[600px] text-center  fade-up">
          {" "}
          <Info title={item.title[0]} auto={false} />
        </section>
        <section
          ref={badgeRef}
          className="fade-up spacific-work2 flex gap-4 items-center justify-center  py-[80px]"
        >
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
        </section>
        <section ref={imageRef1} className="fade-up spacific-work3 ">
          <Image
            src={item.image[0]}
            alt={item.title[0] + "1"}
            className="h-[revert-layer] rounded-[32px] "
            width={1200}
            height={784}
          />
        </section>

        <section ref={subtitleRef1} className="max-w-[600px]  py-[80px] fade-up spacific-work4 ">
          {" "}
          <Info
            mainTitle={item.title[1]}
            description={item.description[1]}
            auto={false}
          />
        </section>
        <section ref={imageRef2} className="fade-up spacific-work5 ">
          <Image
            src={item.image[1]}
            alt={item.title[0] + "2"}
            className="h-[revert-layer]  rounded-[32px]"
            width={1200}
            height={784}
          />
        </section>

        <section ref={subtitleRef2} className="max-w-[600px]  py-[80px] fade-up spacific-work6 ">
          {" "}
          <Info
            mainTitle={item.title[2]}
            description={item.description[2]}
            auto={false}
          />
          {!item.title[5] ? (
            <Info
              mainTitle={item.title[3]}
              description={item.description[2]}
              auto={false}
            />
          ) : (
            <Info
              mainTitle={item.title[4]}
              description={item.description[3]}
              auto={false}
            />
          )}
        </section>
        <section ref={imageRef3} className="fade-up spacific-work7 ">
          <Image
            src={item.image[2]}
            alt={item.title[0] + "3"}
            className="h-[revert-layer]  rounded-[32px] "
            width={1200}
            height={784}
          />
        </section>

        <section ref={subtitleRef3} className="max-w-[600px]  py-[80px] fade-up spacific-work8 ">
          {" "}
          {item.title[5] ? (
            <Info
              mainTitle={item.title[5]}
              description={item.description[4]}
              auto={false}
            />
          ) : (
            <Info
              mainTitle={item.title[4]}
              description={item.description[3]}
              auto={false}
            />
          )}
        </section>

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
