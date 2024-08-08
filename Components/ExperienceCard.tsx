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
    <Special style="w-[100%] flex items-center gap-[91px] p-[26px]" hover="">
      <div className="flex gap-4 items-center">
        <Image
          src="/assets/experience-icon.png"
          alt=""
          width={24}
          height={24}
        />
        <p className="text-[#E8CD82] text-[18px] leading-[24px] font-jetbrains w-[167px] font-bold">
          {period}
        </p>
      </div>
      <p className="text-[18px] leading-[32px] font-jetbrains w-[252px] font-bold">
        {title}
      </p>
      <p className="text-[#808080] text-[18px] leading-[32px] font-jetbrains  pl-[269px]">
        {company}
      </p>
    </Special>
  );
};

export default ExperienceCard;
