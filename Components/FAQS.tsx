import React, { useState } from "react";
import Special from "./Special";

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

interface FAQItem {
  faq: FAQ;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItem> = ({ faq, isOpen, toggle }) => (
  <div
    className={`${
      faq.id === "faq5" ? "border-0 border-b-0 pb-0" : "border-b-2"
    } border-[#202020] py-[14px] ${faq.id === "faq1" ? "pt-0" : ""}`}
  >
    <div
      className={`flex justify-start gap-[22px] items-center cursor-pointer font-bold text-[16px] ${
        faq.id === "faq5" ? "border-0 border-b-0 pb-0" : ""
      } leading-[32px] font-jetbrains`}
      onClick={toggle}
    >
      <span
        className={`transition-transform text-[31px] font-jetbrains font-[300] text-[#4D6460] duration-300 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      >
        +
      </span>
      {faq.question}
    </div>
    <div
      className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
        isOpen ? "max-h-[1000px]" : "max-h-0"
      }`}
    >
      <div className="pt-4 text-[#666666] font-jetbrains pl-[40px]">
        {faq.answer}
      </div>
    </div>
  </div>
);

const FAQList: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
    <h1 className="font-righteous text-[24px] font-medium py-6">FAQS</h1>
    <Special style="w-[100%] cursor-pointer">
    <div className="faqs flex flex-col p-5">
      
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openItems[faq.id] || false}
          toggle={() => toggle(faq.id)}
        />
      ))}
    </div></Special></>
  );
};

export default FAQList;
