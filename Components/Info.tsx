import React from "react";

interface Info {
  mainTitle?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  subDescription?: string;
  secondaryTitle?: string;
  auto?: boolean;
  smallText?: string;
  className?:string;
}

const Info: React.FC<Info> = ({
  title,
  subTitle,
  description,
  subDescription,
  mainTitle,
  secondaryTitle,
  auto,
  smallText,
  className
}) => {
  return (
    <div className={`flex flex-col ${className} ${
            !auto && "sm:w-[561px]"
          } w-full`}>
      {(title || secondaryTitle) && (
        <div className="pt-[24px]">
          {title && (
            <h1 className="text-[60px] font-righteous leading-[66px]">
              {title}
            </h1>
          )}
          {secondaryTitle && (
            <h1 className="text-[60px] font-righteous leading-[66px] pb-[32px]">
              {secondaryTitle}
            </h1>
          )}
        </div>
      )}

      {mainTitle && (
        <h1
          className={`${smallText ? "text-[20px]" : "text-[28px]"} ${
            smallText ? "leading-[32px]" : "leading-[66px]"
          } ${smallText ? "font-jetbrains" : "font-righteous"}  `}
        >
          {mainTitle}
        </h1>
      )}

      {subTitle && (
        <p
          className={`font-jetbrains text-[32px] text-white leading-[40px] ${
            !auto && "sm:w-[561px]"
          }`}
        >
          {subTitle}
        </p>
      )}
      {description && (
        <p
          className={`font-jetbrains text-[1rem] text-[#919191] leading-[28px] ${
            auto ? "sm:w-auto" : "sm:w-[561px]"
          }`}
        >
          {description}
        </p>
      )}

      {subDescription && (
        <p
          className={`font-jetbrains text-[1rem] text-[#919191] leading-[28px]  ${
            auto ? "sm:w-auto" : "sm:w-[561px]"
          }`}
        >
          {subDescription}
        </p>
      )}
      {smallText && (
        <p
          className={`font-jetbrains text-[14px] text-[#616161] leading-[28px]  ${
            auto ? "sm:w-auto" : "sm:w-[561px]"
          }`}
        >
          {smallText}
        </p>
      )}
    </div>
  );
};

export default Info;
