"use client";
import React from "react";
import Testimonial from "./Testimonial";
import Info from "./Info";
import Image from "next/image";
import ApproachCard from "./ApproachCard";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";
import { useIntersectionObserver } from "./useIntersectionObserver";

const ImageCard: React.FC<{ src: string }> = ({ src }) => (
  <Image
    className="rounded-[32px] w-[32%]"
    src={src}
    alt=""
    width={384}
    height={384}
  />
);

const About: React.FC = () => {
  const infoRef = useIntersectionObserver("about-info");
  const addToRefs1 = useIntersectionObserver("about-section1");
  const addToRefs2 = useIntersectionObserver("about-section2");
  const addToRefs3 = useIntersectionObserver("about-section3");
  const addToRefs4 = useIntersectionObserver("about-section4");
  const testimonialRef = useIntersectionObserver("testimonial");

  const approachCards = [
    {
      imageSrc: "/assets/user-icon.png",
      mainTitle: "User centred",
      imgWidth: 32.5,
      imgHeight: 30,
      description:
        "The primary focus of product design is to prioritize the needs, preferences, and experiences of the end users. This would involve thorough research and understanding of the users behavior, ensuring that the product is intuitive and enjoyable to use.",
    },
    {
      imageSrc: "/assets/functional-icon.png",
      mainTitle: "Functional",
      imgWidth: 27.5,
      imgHeight: 32.37,
      description:
        "Designers must concentrate on creating products that not only look good but also deliver high functionality and performance. Balancing aesthetics with practicality ensures that the product meets its intended purpose effectively for its intended user base.",
    },
    {
      imageSrc: "/assets/rocket-icon.png",
      mainTitle: "Innovative",
      imgWidth: 32.5,
      imgHeight: 32.5,
      description:
        "A key aspect of product design is fostering innovation and creativity. By pushing boundaries and thinking outside the box, designers can develop unique and groundbreaking solutions that set the product apart from competitors and meet emerging market needs.",
    },
    {
      imageSrc: "/assets/heart-icon.png",
      mainTitle: "Ethical",
      imgWidth: 30,
      imgHeight: 27.5,
      description:
        "With a growing awareness of environmental and ethical concerns, product designers are increasingly focusing on creating sustainable and socially responsible products. This involves considering the product's life cycle and the overall impact on the environment.",
    },
  ];

  const skillCards = [
    {
      imageSrc: "/assets/product-design-icon.png",
      skillName: "Product design",
      imgWidth: 24,
      imgHeight: 24,
    },
    {
      imageSrc: "/assets/iterface-design-icon.png",
      skillName: "Interface design",
      imgWidth: 26,
      imgHeight: 26,
    },
    {
      imageSrc: "/assets/user-icon.png",
      skillName: "User experience",
      imgWidth: 26,
      imgHeight: 24,
    },
    {
      imageSrc: "/assets/systems-thinking-icon.png",
      skillName: "Systems thinking",
      imgWidth: 27.73,
      imgHeight: 23.21,
    },
    {
      imageSrc: "/assets/product-strategey-icon.png",
      skillName: "Product strategy",
      imgWidth: 32,
      imgHeight: 32,
    },
    {
      imageSrc: "/assets/development-icon.png",
      skillName: "Development",
      imgWidth: 24,
      imgHeight: 22,
    },
  ];

  const experienceCards = [
    {
      period: "2021 - Present",
      title: "Senior Product Designer",
      company: "Facebook",
    },
    {
      period: "2019 - 2021",
      title: "Product Designer",
      company: "Google",
    },
    {
      period: "2018 - 2019",
      title: "Mid Level Designer",
      company: "National Academy",
    },
    {
      period: "2016 - 2018",
      title: "Junior Designer",
      company: "Webworks",
    },
  ];

  return (
    <div>
      <section ref={infoRef} className="about-info fade-up pb-[48px] pt-[127px]">
        <Info
          title="About."
          subTitle="I’m a designer from Ireland 🇮🇪 with a passion for pixels."
          description="When I'm not designing, I'm out exploring nature, hiking, scuba diving, and surfing. Whether trekking through forests, diving into the depths of the ocean, or riding waves, I find joy and inspiration in outdoor adventures."
          auto={false}
                    className="gap-[16px]"
        />
      </section>

      <section
        className="about-section1 flex justify-center gap-[24px] pt-[48px] pb-[145px] fade-up"
        ref={addToRefs1}
      >
        {[
          "/assets/about-page1.avif",
          "/assets/about-page2.avif",
          "/assets/about-page3.avif",
        ].map((src) => (
          <ImageCard key={src} src={src} />
        ))}
      </section>

      <section className="about-section2 fade-up" ref={addToRefs2}>
        <h1 className="text-[28px] font-righteous pb-[29px]">MY APPROACH</h1>
        <div className="cards flex flex-row flex-wrap xl:flex-nowrap gap-6 flex-[0 0 auto]">
          {approachCards.map((card) => (
            <ApproachCard
              key={card.mainTitle}
              imageSrc={card.imageSrc}
              mainTitle={card.mainTitle}
              imgWidth={card.imgWidth}
              imgHeight={card.imgHeight}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="about-section3 py-[160px] fade-up" ref={addToRefs3}>
        <h1 className="text-[28px] font-righteous pb-[29px]">SKILLS</h1>
        <div className="cards flex flex-row gap-6 flex-[0 0 auto] flex-wrap">
          {skillCards.map((card) => (
            <SkillCard
              key={card.skillName}
              imageSrc={card.imageSrc}
              skillName={card.skillName}
              imgWidth={card.imgWidth}
              imgHeight={card.imgHeight}
            />
          ))}
        </div>
      </section>

      <section className="about-section4 fade-up" ref={addToRefs4}>
        <h1 className="text-[28px] font-righteous pb-[29px]">Experience</h1>
        <div className="cards flex flex-row gap-6 flex-wrap">
          {experienceCards.map((card) => (
            <ExperienceCard
              key={card.title}
              period={card.period}
              title={card.title}
              company={card.company}
            />
          ))}
        </div>
      </section>
      <section ref={testimonialRef} className="testimonial py-[160px] fade-up">
        <Testimonial />
      </section>
    </div>
  );
};

export default About;
