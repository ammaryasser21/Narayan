"use client";
import React from "react";
import Info from "./Info";
import { useIntersectionObserver } from "./useIntersectionObserver";

const Contact = () => {
  
  const contactRef = useIntersectionObserver("contact-section");

  return (
    <section
      ref={contactRef}
      className="w-[100%] grid place-content-center fade-up contact-section "
    >
      <div className="pt-[calc(255px - 128px)] pb-[120px] flex flex-col xl:max-w-[600px] w-[100%]  flex-auto">
        <Info
          title="Contact."
          description="Get in touch if you would like to work together."
          subDescription="Thanks for stopping by. 🤘"
          className="gap-[32px]"
        />
        <form className="w-full flex flex-col gap-4 font-jetbrains pt-[36px]">
          <div className="flex gap-[16px]">
            <input
              className="bg-[#292929] p-4 w-1/2  rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0"
              type="text"
              title="Name"
              placeholder="Name"
            />
            <input
              className="bg-[#292929] p-4  w-1/2 rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0"
              type="email"
              title="Email"
              placeholder="Email"
            />
          </div>
          <textarea
            className="bg-[#292929] p-4 h-36  rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0"
            title="Message"
            placeholder="Message"
          />
          <button
            className="p-4 bg-[#FCFCFC] hover:bg-[#c7c7c7] rounded-[10px] focus:outline-none text-[#0F0F0F] font-bold hover:transition-all hover:duration-500  transition-all duration-500"
            type="button"
            title="button"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
