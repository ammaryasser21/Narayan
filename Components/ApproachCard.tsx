import React from "react";
import Special from "./Special";
import Image from "next/image";
import Info from "./Info";

interface ApproachCardProps {
  imageSrc: string;
  mainTitle: string;
  description: string;
  imgWidth: number;
  imgHeight: number;
}

const ApproachCard: React.FC<ApproachCardProps> = ({
  imageSrc,
  mainTitle,
  description,
  imgWidth,
  imgHeight,
}) => (
  <Special style="w-[100%]" hover="">
    <div className="card flex flex-col gap-[13px] flex-[1 0 0] flex-shrink-0 flex-grow-1 pt-[31px] pl-[16px] pr-[24px] pb-[20px]">
      <div className="w-[40px] h-[40px]">
        <Image src={imageSrc} alt="" width={imgWidth} height={imgHeight} />
      </div>
      <Info mainTitle={mainTitle} auto={true} smallText={description} className="gap-[8px]" />
    </div>
  </Special>
);

export default ApproachCard;
