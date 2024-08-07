import React from "react";
interface Info {
    title: string;
    subTitle: string;
    description: string;
    subDescription: string;
  }
const Info: React.FC<Info> = ({ title, subTitle, description, subDescription }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[60px] font-righteous leading-[66px] pt-[24px] pb-[32px]">
        {title}
      </h1>
      <p className="font-jetbrains text-[32px] text-white leading-[40px] sm:w-[575px]">
        {subTitle}
      </p>
      <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
        {description}
      </p>
      <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
        {subDescription}
      </p>
    </div>
  );
};

export default Info;
