import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  mainTitle?: string;
  date: string;
  Author: string;
  image: string;
  mainDescription: string;
  link?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  mainTitle,
  date,
  Author,
  image,
  mainDescription,
  link = "/",
}) => (
  <Link
    className="flex flex-col gap-[32px] group w-[528.3px]"
    href={`/Blog/BlogPage/${link}`}
  >
    <div className="content flex flex-col gap-4 ">
      <div className="badge flex flex-row gap-4 text-[14px]">
        <p className="text-[#f0f0f099] leading-[1.2em]">{date}</p>
        <span className="text-[#f0f0f099] leading-[1.2em]">/</span>
        <p className="text-[#f0f0f099] leading-[1.2em]">{Author}</p>
      </div>
      <h1 className="group-hover:underline text-[36px] text-[#f0f0f0] font-[600] leading-[1.2em]">
        {mainTitle}
      </h1>
    </div>
    <div className="img  w-[528.3px] ">
      <Image
        className="rounded-[8px] h-[revert-layer] object-cover object-center"
        src={image}
        alt="blog"
        width={528.3}
        height={396.22}
      />
    </div>
    {}
    <p className="text-[20px] leading-[1.8em] font-[400] text-[#f0f0f099]  transition-all duration-500 group-hover:text-[#f0f0f0de]">
      {mainDescription}
    </p>
    <div className="group-hover:translate-x-4 fill-[#f0f0f077] transition-all duration-500 group-hover:fill-[#f0f0f0]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20px]"
        viewBox="0 0 256 256"
        focusable="false"
        color="rgb(240, 240, 240)"
      >
        <g color="rgb(240, 240, 240)">
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
        </g>
      </svg>
    </div>
  </Link>
);

export default BlogCard;
