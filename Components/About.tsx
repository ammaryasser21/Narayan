"use client";
import React from "react";
import Testimonial from "./Testimonial";
import Info from "./Info";
import Image from "next/image";
import ApproachCard from "./ApproachCard";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";
import { useIntersectionObserver } from "./useIntersectionObserver";

const About: React.FC = () => {
  const infoRef = useIntersectionObserver("about-info");
  const addToRefs1 = useIntersectionObserver("about-section1");
  const addToRefs2 = useIntersectionObserver("about-section2");
  const addToRefs3 = useIntersectionObserver("about-section3");
  const addToRefs4 = useIntersectionObserver("about-section4");

  return (
    <div>
      <section ref={infoRef} className="about-info fade-up">
        {" "}
        <Info
          title="About."
          subTitle="I’m a designer from Ireland 🇮🇪 with a passion for pixels."
          description="When I'm not designing, I'm out exploring nature, hiking, scuba diving, and surfing. Whether trekking through forests, diving into the depths of the ocean, or riding waves, I find joy and inspiration in outdoor adventures."
          auto={false}
        />
      </section>

      <section
        className="about-section1 flex justify-center gap-[24px] pt-[48px] pb-[145px] fade-up"
        ref={addToRefs1}
      >
        <Image
          className="rounded-[32px] w-[32%] "
          src="/assets/about-page1.avif"
          alt=""
          width={384}
          height={384}
        />
        <Image
          className="rounded-[32px] w-[32%] "
          src="/assets/about-page2.avif"
          alt=""
          width={384}
          height={384}
        />
        <Image
          className="rounded-[32px] w-[32%] "
          src="/assets/about-page3.avif"
          alt=""
          width={384}
          height={384}
        />
      </section>
      <section className="about-section2 fade-up" ref={addToRefs2}>
        <h1 className="text-[28px] font-righteous pb-[29px]">MY APPROACH</h1>
        <div className="cards flex flex-row flex-wrap xl:flex-nowrap gap-6 flex-[0 0 auto]">
          <ApproachCard
            imageSrc="/assets/user-icon.png"
            mainTitle="User centred"
            imgWidth={32.5}
            imgHeight={30}
            description="The primary focus of product design is to prioritize the needs, preferences, and experiences of the end users. This would involve thorough research and understanding of the users behavior, ensuring that the product is intuitive and enjoyable to use."
          />
          <ApproachCard
            imageSrc="/assets/functional-icon.png"
            mainTitle="Functional"
            imgWidth={27.5}
            imgHeight={32.37}
            description="Designers must concentrate on creating products that not only look good but also deliver high functionality and performance. Balancing aesthetics with practicality ensures that the product meets its intended purpose effectively for its intended user base."
          />
          <ApproachCard
            imageSrc="/assets/rocket-icon.png"
            mainTitle="Innovative"
            imgWidth={32.5}
            imgHeight={32.5}
            description="A key aspect of product design is fostering innovation and creativity. By pushing boundaries and thinking outside the box, designers can develop unique and groundbreaking solutions that set the product apart from competitors and meet emerging market needs."
          />
          <ApproachCard
            imageSrc="/assets/heart-icon.png"
            mainTitle="Ethical"
            imgWidth={30}
            imgHeight={27.5}
            description="With a growing awareness of environmental and ethical concerns, product designers are increasingly focusing on creating sustainable and socially responsible products. This involves considering the product's life cycle and the overall impact on the environment."
          />
        </div>
      </section>
      <section className="about-section3 py-[160px] fade-up" ref={addToRefs3}>
        <h1 className="text-[28px] font-righteous pb-[29px]">SKILLS</h1>
        <div className="cards flex flex-row gap-6 flex-[0 0 auto] flex-wrap">
          <SkillCard
            imageSrc="/assets/product-design-icon.png"
            skillName="Product design"
            imgWidth={24}
            imgHeight={24}
          />
          <SkillCard
            imageSrc="/assets/iterface-design-icon.png"
            skillName="Interface design"
            imgWidth={26}
            imgHeight={26}
          />
          <SkillCard
            imageSrc="/assets/user-icon.png"
            skillName="User experience"
            imgWidth={26}
            imgHeight={24}
          />
          <SkillCard
            imageSrc="/assets/systems-thinking-icon.png"
            skillName="Systems thinking"
            imgWidth={27.73}
            imgHeight={23.21}
          />
          <SkillCard
            imageSrc="/assets/product-strategey-icon.png"
            skillName="Product strategy"
            imgWidth={32}
            imgHeight={32}
          />
          <SkillCard
            imageSrc="/assets/development-icon.png"
            skillName="Development"
            imgWidth={24}
            imgHeight={22}
          />
        </div>
      </section>
      <section className="about-section4 fade-up" ref={addToRefs4}>
        <h1 className="text-[28px] font-righteous pb-[29px]">Experience</h1>
        <div className="cards flex flex-row gap-6 flex-wrap">
          <ExperienceCard
            period="2021 - Present"
            title="Senior Product Designer"
            company="Facebook"
          />
          <ExperienceCard
            period="2019 - 2021"
            title="Product Designer"
            company="Google"
          />
          <ExperienceCard
            period="2018 - 2019"
            title="Mid Level Designer"
            company="National Academy"
          />
          <ExperienceCard
            period="2016 - 2018"
            title="Junior Designer"
            company="Webworks"
          />
        </div>
      </section>

      <Testimonial />
    </div>
  );
};

export default About;
