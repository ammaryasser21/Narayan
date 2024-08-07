import React from "react";
interface Info {
  mainTitle:string,
    title: string;
    subTitle: string;
    description: string;
    subDescription: string;
  }
const Info: React.FC<Info> = ({ title, subTitle, description, subDescription , mainTitle }) => {
  return (
    <div className="flex flex-col">
      {title &&       <h1 className="text-[60px] font-righteous leading-[66px] pt-[24px] pb-[32px]">
        {title}
      </h1>}

     {mainTitle &&  <h1 className="text-[28px] font-righteous leading-[66px]">
        {mainTitle}
      </h1>}
      
      {subTitle && <p className="font-jetbrains text-[32px] text-white leading-[40px] sm:w-[575px]">
        {subTitle}
      </p>}
      {description && <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
        {description}
      </p>}
      
      {subDescription && <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
        {subDescription}
      </p>}
    </div>
  );
};

export default Info;
