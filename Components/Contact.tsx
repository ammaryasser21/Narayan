import React from "react";

const Contact = () => {
  return (
    <section className="w-[100%] grid place-content-center">
      <div className="pt-[calc(255px - 128px)] pb-[160px] flex flex-col gap-[16px] max-w-[600px] w-[100%]  flex-auto">
        <h1 className="text-[60px] pb-[32px] font-righteous sm:w-[588px] leading-[66px]">
          Contact.
        </h1>
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[24px] sm:w-[575px]">
          Get in touch if you would like to work together.
        </p>
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[24px] sm:w-[575px]">
          Thanks for stopping
          by. 🤘
        </p>
        <form className="w-full flex flex-col gap-4 font-jetbrains pt-[36px]">
          <div className="flex gap-[16px]">
          <input className="bg-[#292929] p-4 w-1/2  rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0" type="text" title="Name" placeholder="Name" />
          <input className="bg-[#292929] p-4  w-1/2 rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0" type="email" title="Email" placeholder="Email" />
          
          </div>
          <textarea className="bg-[#292929] p-4 h-36  rounded-[10px] text-[#767676] placeholder-[#767676] focus:outline-none focus:border-gray-600 focus:ring-0" title="Message" placeholder="Message" />
          <button className="p-4 bg-[#FCFCFC] hover:bg-[#c7c7c7] rounded-[10px] focus:outline-none text-[#0F0F0F] hover:transition-all font-bold"  type="button" title="button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
