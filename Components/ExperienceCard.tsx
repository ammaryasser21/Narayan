import React from "react";
import Image from "next/image";
import Special from "./Special";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  period,
  title,
  company,
}) => {
  return (
    <Special style="w-[100%] flex items-center sm:flex-row flex-col sm:justify-between justify-center   xl:gap-[91px] gap-[9px] sm:gap-8 p-[26px]">
      <div className="flex gap-4 items-center sm:flex-row flex-col sm:justify-between justify-center">
        <Image
          src="/assets/experience-icon.png"
          alt=""
          width={24}
          height={24}
        />
        <p className="text-[#E8CD82] text-[18px] sm:leading-[24px] font-jetbrains xl:w-[167px] sm:w-[161px] font-bold">
          {period}
        </p>
      </div>
      <p className="text-[18px] sm:leading-[32px] font-jetbrains xL:w-[252px] font-bold">
        {title}
      </p>
      <p className="text-[#808080] text-[18px] sm:leading-[32px] font-jetbrains   sm:w-[200px] ">
        {company}
      </p>
    </Special>
  );
};

export default ExperienceCard;
