import React from "react";
import Image, { StaticImageData } from "next/image";
import arrowIcon from "../public/assets/arrow-icon.png";
import twitterIcon from "../public/assets/twitter.png";
import behanceIcon from "../public/assets/behance.png";
import dribbbleIcon from "../public/assets/dribbble.png";
import instagramIcon from "../public/assets/instagram.png";
import Special from "./Special";

const SocialIcon = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <Special
    style="flex items-center justify-center size-[129px]"
    hover="hover:translate-y-[-5px] transition-all cursor-pointer hover:duration-200 transition-all duration-200"
  >
    <Image src={src} alt={alt} width={32} height={32} />
  </Special>
);

const Footer = () => {
  return (
    <footer className="w-full grid place-items-center text-white font-jetbrains py-[40px]">
      <div className="w-[1200px] flex flex-col gap-[29px]">
        <h1 className="text-[28px] font-righteous">LET&apos;S WORK TOGETHER</h1>
        <div className="w-full flex flex-row gap-[16px] items-stretch">
          <Special
            style="w-[588px] px-[22px] py-[10px] flex justify-between p-5 group items-center"
            hover="hover:translate-y-[-5px] hover:transition-all cursor-pointer hover:duration-200 transition-all duration-200"
          >
            <div className="content flex flex-col gap-[12px]">
              <p className="text-[#616161] text-[16px] font-jetbrains">
                Please email for enquiries
              </p>
              <p className="text-[20px] font-jetbrains">hi@pwilson.co</p>
            </div>
            <Image
              className="self-center rotate-0 group-hover:rotate-45 group-hover:transition-all group-hover:duration-200 transition-all duration-200"
              src={arrowIcon}
              alt="Arrow icon"
              width={20}
              height={20}
            />
          </Special>
          <SocialIcon src={twitterIcon} alt="Twitter icon" />
          <SocialIcon src={instagramIcon} alt="Instagram icon" />
          <SocialIcon src={dribbbleIcon} alt="Dribbble icon" />
          <SocialIcon src={behanceIcon} alt="Behance icon" />
        </div>
        <div className="author pt-[160px] flex justify-between">
          <p className="text-[#999999] text-[13px] font-jetbrains">
            © Patrick Wilson 2024.
          </p>
          <p className="text-[#76BDBF] text-[13px] cursor-pointer transition-all duration-500 font-jetbrains flex gap-2 items-center group">
            Buy me a coffee{" "}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-45 group-hover:transition-all group-hover:duration-500 transition-all duration-500"
            >
              <path
                d="M4.09389 1.46275L5.26133 0.295312L10.0598 0.920395L10.6756 5.72801L9.5174 6.88626L9.05778 3.11738C9.05166 3.07448 9.04553 3.03158 9.0394 2.98868C9.03327 2.94578 9.02714 2.90289 9.02101 2.85999L0.931712 10.9493L0.0308587 10.0484L8.11097 1.96833C8.06807 1.9622 8.02211 1.95913 7.97308 1.95913C7.92406 1.94688 7.87197 1.93769 7.81681 1.93156L4.09389 1.46275Z"
                fill="#76BDBF"
              />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
