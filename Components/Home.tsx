"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import Special from "./Special";
import WorkSection from "./WorkSection";
import Testimonial from "./Testimonial";
import Info from "./Info";
import FAQList from "./FAQS";

const items = ["UI/UX", "PRODUCT DESIGN", "STRATEGY", "RESEARCH"];

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero-section pt-[calc(158px - 48px)] pb-[186px]">
        <Special
          style="w-[fit-content]"
          hover="hover:translate-y-[-5px] transition-all cursor-pointer"
        >
          <p className="font-jetbrains text-[14px] leading-[32px] px-[16px] font-medium before:content-[''] relative before:block before:absolute before:size-[10px] before:bg-[#7DAA69] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
            <span className="pl-[22px]">Available for hire</span>
          </p>
        </Special>
        <Info
          secondaryTitle="a product designer from Ireland."
          title="Hi, I’m Narayan,"
          description=" With a background in industrial design and a keen eye for detail, I
          excel at transforming concepts into tangible realities by seamlessly
          integrating aesthetics with practical functionality."
          auto={false}
        />
      </section>
      <InfiniteScroll items={items} direction="left" speed="fast" />
      <InfiniteScroll items={items} direction="right" speed="fast" />
      <WorkSection />
      <section className="py-20">
        <h1 className="font-righteous text-[24px] font-medium py-6">FAQs</h1>
        <Special style="w-[100%]" hover="cursor-pointer">
          <FAQList />
        </Special>
      </section>
      <Testimonial />
    </div>
  );
};

export default Home;
