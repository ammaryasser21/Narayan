import React from "react";
import Special from "./Special";
import Image from "next/image";

interface SkillCardProps {
  imageSrc: string;
  skillName: string;
  imgWidth: number;
  imgHeight: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  imageSrc,
  skillName,
  imgWidth,
  imgHeight,
}) => (
  <Special style="flex items-center gap-6 p-[26px] w-[384px]" hover="">
    <div className="w-[32px] h-[32px]">
      <Image
        src={imageSrc}
        alt={skillName}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
    <p className="text-[20px] leading-[32px] font-jetbrains">{skillName}</p>
  </Special>
);

export default SkillCard;
