import React from "react";
interface Info {
  mainTitle: string;
  title: string;
  subTitle: string;
  description: string;
  subDescription: string;
  secondaryTitle: string;
}
const Info: React.FC<Info> = ({
  title,
  subTitle,
  description,
  subDescription,
  mainTitle,
  secondaryTitle,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {(title || secondaryTitle) && (
        <div className="pt-[24px]">
          {title && (
            <h1 className="text-[60px] font-righteous leading-[66px]">
              {title}
            </h1>
          )}
          {secondaryTitle && (
            <h1 className="w-1/2 text-[60px] font-righteous leading-[66px]">
              {secondaryTitle}
            </h1>
          )}
        </div>
      )}

      {mainTitle && (
        <h1 className="text-[28px] font-righteous leading-[66px]">
          {mainTitle}
        </h1>
      )}

      {subTitle && (
        <p className="font-jetbrains text-[32px] text-white leading-[40px] sm:w-[561px]">
          {subTitle}
        </p>
      )}
      {description && (
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
          {description}
        </p>
      )}

      {subDescription && (
        <p className="font-jetbrains text-[1rem] text-[#919191] leading-[28px] sm:w-[575px]">
          {subDescription}
        </p>
      )}
    </div>
  );
};

export default Info;
