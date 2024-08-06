"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import arrowIcon from "../public/assets/arrow-icon.png";
import work1 from "../public/assets/work-1.png";
import work2 from "../public/assets/work-2.png";
import work3 from "../public/assets/work-3.png";
import work4 from "../public/assets/work-4.png";
import Special from "./Special";
import InfiniteScroll from "./InfiniteScroll";

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

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "What is my approach to web design?",
    answer:
      "My approach to web design revolves around understanding your specific needs and objectives. I kickstart projects with comprehensive research to grasp your brand identity, target audience, and project goals. From there, I craft bespoke designs that not only visually resonate but also prioritize user experience and functionality.",
  },
  {
    id: "faq2",
    question: "How long does the web design process take?",
    answer:
      "The timeline for web design projects can vary depending on the project's scope and complexity. Typically, I aim to provide an estimated timeframe during our initial consultation phase after understanding your project requirements. Factors such as the number of pages, features, and client feedback cycles can influence the overall duration.",
  },
  {
    id: "faq3",
    question: "Can I update my website content myself after it’s launched?",
    answer:
      "Absolutely! I understand the importance of having control over your website content. That's why I often build websites on user-friendly content management systems (CMS) like WordPress, which allow you to easily update text, images, and other elements without needing technical expertise. I also provide training and support to ensure you feel confident managing your site.",
  },
  {
    id: "faq4",
    question: "What is the process for website maintenance and support?",
    answer:
      "I offer ongoing maintenance and support services to keep your website running smoothly post-launch. My maintenance plans typically include regular software updates, security monitoring, backups, and technical support. I'm committed to providing reliable and prompt assistance to address any issues or updates you may require, ensuring your website remains secure and up-to-date.",
  },
  {
    id: "faq5",
    question: "How do you handle project pricing and payments?",
    answer:
      "I believe in transparent and fair pricing practices. After our initial consultation and understanding your project requirements, I provide a detailed proposal outlining the scope of work and associated costs. Payments are typically structured in milestones, with an initial deposit required to commence work. I'm open to discussing flexible payment options based on your needs and preferences. Throughout the project, I maintain clear communication regarding payment schedules and ensure transparency every step of the way.",
  },
];

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Patrick Wilson's product design skills are nothing short of exceptional. His ability to infuse creativity and innovation into every project is truly commendable. From concept to execution, Patrick consistently demonstrates a keen eye for detail and a unique approach to design that sets his work apart.",
    name: "Orla Fagan",
    position: "Fashion Designer",
    image: "/assets/test-1.png",
  },
  {
    text: "Working with Patrick Wilson on product design projects has been a consistent positive experience. His attention to detail and commitment to delivering high-quality work. One of the standout aspects of Patrick's professionalism is his ability to adhere to deadlines without compromising on quality of the final product.",
    name: "Peter Smith",
    position: "Lead Developer",
    image: "/assets/test-2.png",
  },
  {
    text: "The seamless integration of aesthetics with functionality is a hallmark of Patrick's work. His designs not only look visually appealing but also result in products that are intuitive and user-friendly. Patrick's dedication to creating designs that resonate with the end-users truly sets him apart in the field of design.",
    name: "Niamh Regan",
    position: "Consultant",
    image: "/assets/test-3.avif",
  },
];

const items = ["UI/UX", "PRODUCT DESIGN", "STRATEGY", "RESEARCH"];

const Home: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };



  const renderFAQs = () =>
    faqs.map((faq) => (
      <div
        key={faq.id}
        className={`${faq.id === "faq5" ? "border-0 border-b-0 pb-0" : "border-b-2"}  border-[#202020] py-[14px] ${
          faq.id === "faq1" ? "pt-0" : ""
        } `}
      >
        <div
          className={`flex justify-start gap-[22px] items-center cursor-pointer font-bold text-[16px] ${faq.id === "faq5" ? "border-0 border-b-0 pb-0" : ""} leading-[32px] font-jetbrains`}
          onClick={() => toggle(faq.id)}
        >
          <span
            className={`transition-transform text-[31px] font-jetbrains font-[300] text-[#4D6460] duration-300 ${
              openItems[faq.id] ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
          {faq.question}
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            openItems[faq.id] ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="pt-4 text-[#666666] font-jetbrains pl-[40px]">
            {faq.answer}
          </div>
        </div>
      </div>
    ));

  const renderTestimonials = () =>
    testimonials.map(({ text, name, position, image }) => (
      <Special key={name} width="w-[100%]" hover="">
        <div className="card flex flex-col gap-8 flex-[1 0 0] flex-shrink-0 flex-grow-1 pt-[29.3px] pl-[24px] pr-[34px] pb-[24px]">
          <span>
            <svg
              width="29"
              height="20"
              viewBox="0 0 29 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3209 19.0719L23.1657 0.304688H28.8984L24.0709 19.0719H15.3209ZM0.898438 19.0719L8.74327 0.304688H14.476L9.64844 19.0719H0.898438Z"
                fill="#3366AC"
              />
            </svg>
          </span>
          <p className="font-jetbrains text-[14px] leading-[24px] pb-[48px]">
            {text}
          </p>
          <div className="person flex align-middle gap-[16px]">
            <div className="avatar">
              <Image className="rounded-full" src={image} alt="icon" width={48} height={48} />
            </div>
            <div className="content">
              <p className="text-[16px] font-jetbrains font-bold">{name}</p>
              <p className="text-[14px] font-jetbrains font-normal text-[#808080]">
                {position}
              </p>
            </div>
          </div>
        </div>
      </Special>
    ));

  return (
    <div className="home">
      <section className="hero-section pt-[calc(158px - 48px)] pb-[186px]">
        <Special
          width="w-[fit-content]"
          hover="hover:translate-y-[-5px] transition-all cursor-pointer"
        >
          <p className="font-jetbrains text-[14px] leading-[32px] px-[16px] font-medium before:content-[''] relative before:block before:absolute before:size-[10px] before:bg-[#7DAA69] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
            <span className="pl-[22px]">Available for hire</span>
          </p>
        </Special>
        <div className="text-[60px] font-righteous sm:w-[588px] leading-[66px] pt-[24px] pb-[32px]">
          <h1>Hi, I’m Narayan,</h1>
          <h1>a product designer from Ireland.</h1>
        </div>
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
          With a background in industrial design and a keen eye for detail, I
          excel at transforming concepts into tangible realities by seamlessly
          integrating aesthetics with practical functionality.
        </p>
      </section>
      <InfiniteScroll items={items} direction="left" speed="fast" />
      <InfiniteScroll items={items} direction="right" speed="fast" />
      <section className="work py-8 pt-[176px]">
        <h1 className="text-[28px] font-righteous pb-[27px]">RECENT WORK</h1>
        <div className="cards flex flex-wrap gap-4">
          {workItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="py-20">
        <h1 className="font-righteous text-[24px] font-medium py-6">FAQs</h1>
        <Special width="w-[100%]" hover="cursor-pointer">
          <div className="faqs flex flex-col p-5">{renderFAQs()}</div>
        </Special>
      </section>
      <section className="testimonial py-[160px]">
        <h1 className="text-[28px] font-righteous pb-[29px]">Testimonials</h1>
        <div className="cards flex flex-row gap-6 flex-[0 0 auto]">
          {renderTestimonials()}
        </div>
      </section>
    </div>
  );
};

export default Home;
