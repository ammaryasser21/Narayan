"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import Special from "./Special";
import WorkSection from "./WorkSection";
import Testimonial from "./Testimonial";
import Info from "./Info";
import FAQList from "./FAQS";
import { useIntersectionObserver } from "./useIntersectionObserver";

const items = ["UI/UX", "PRODUCT DESIGN", "STRATEGY", "RESEARCH"];

const Home: React.FC = () => {
  const heroRef = useIntersectionObserver("hero-section");
  const workRef = useIntersectionObserver("work-section");
  const faqRef = useIntersectionObserver("faq-section");
  const testimonialRef = useIntersectionObserver("testimonial");

  return (
    <div className="home">
      <section
        ref={heroRef}
        className="hero-section pt-[calc(158px - 48px)] pb-[130px] fade-up"
      >
        <Special style="w-[fit-content]">
          <p className="font-jetbrains text-[14px] leading-[32px] px-[16px] font-medium before:content-[''] relative before:block before:absolute before:size-[10px] before:bg-[#7DAA69] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
            <span className="pl-[22px]">Available for hire</span>
          </p>
        </Special>
        <Info
          title="Hi, I’m Narayan,"
          secondaryTitle="a product designer from Ireland."
          description=" With a background in industrial design and a keen eye for detail, I
          excel at transforming concepts into tangible realities by seamlessly
          integrating aesthetics with practical functionality."
          auto={false}
        />
      </section>
      <InfiniteScroll items={items} direction="left" speed="fast" />
      <InfiniteScroll items={items} direction="right" speed="fast" />
      <section ref={workRef} className="work-section  pt-[120px] pb-[160px] fade-up">
        <WorkSection />
      </section>
      <section ref={faqRef} className="fade-up">
        <FAQList />
      </section>
      <section ref={testimonialRef} className="testimonial py-[120px] fade-up">
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
