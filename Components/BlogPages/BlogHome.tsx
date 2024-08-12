"use client";
import BlogCard from "./BlogCard";
import Button from "./SpecialBtn";
import React, { useState } from "react";
import { BlogItems, BlogItem } from "./BlogItems";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  const [items] = useState<BlogItem[]>(BlogItems);

  return (
    <div>
      <main className="hero-section pt-[88px] pb-[130px] ">
        <h1 className="text-[64px] font-[600] text-[#f0f0f0] pb-8">MonoFlow</h1>
        <p className="text-[24px] font-[400] text-[#fcfcfcc7] leading-[1.8em] sm:w-[784px]">
          My name is <span className="font-[600] text-[#f0f0f0]">John Doe</span>{" "}
          and I&apos;m a{" "}
          <span className="font-[600] text-[#f0f0f0]">UX Engineer</span> with a
          passion for{" "}
          <span className="font-[600] text-[#f0f0f0]">
            Figma, Framer, Design Systems
          </span>{" "}
          and <span className="font-[600] text-[#f0f0f0]">Web Development</span>{" "}
          with over a decade of experience in the industry.
        </p>
        <div className="buttons flex flex-row gap-[8px] pt-[16px] items-center">
          <Button title="read more" to="/Blog/BlogPage" />
          <Button title="buy this template" to="/" />
        </div>
      </main>
      <section className="Blog-section pt-[120px] pb-[160px] ">
        <Link
          className="flex flex-row gap-[32px] group"
          href={`/Blog/BlogPage/${items[0].link}`}
        >
          <div className="content flex flex-col gap-4 sm:w-[653px]">
            <div className="badge flex flex-row gap-4 text-[14px]">
              <p className="text-[#f0f0f099] leading-[1.2em]">
                {items[0].tag.Date}
              </p>
              <span className="text-[#f0f0f099] leading-[1.2em]">/</span>
              <p className="text-[#f0f0f099] leading-[1.2em]">
                {items[0].tag.Author}
              </p>
              <span className="text-[#f0f0f099] leading-[1.2em]">/</span>{" "}
              <p className="text-[#f0f0f0] leading-[1.2em]">
                {items[0].tag.Type}
              </p>
            </div>
            <h1 className="group-hover:underline text-[64px] text-[#f0f0f0] font-[600] leading-[1.2em]">
              {items[0].mainTitle}
            </h1>
            <p className="text-[24px] leading-[1.8em] font-[400] text-[#f0f0f099]  transition-all duration-500 group-hover:text-[#f0f0f0de]">
              {items[0].mainDescription}
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
          </div>
          <div className="img  w-[435px] ">
            <Image
              className="rounded-[8px] h-[revert-layer] object-cover object-center"
              src={items[0].image}
              alt="blog"
              width={435}
              height={326}
            />
          </div>
        </Link>
      </section>
      <section className="Blog-section flex flex-col flex-wrap gap-[48px]">
        <h2 className=" text-[16px] text-[#f0f0f0]  leading-[1.2em]">Latest articles</h2>
        <div className="Blog-section flex flex-row flex-wrap gap-[63px]">
          {items.slice(1, 5).map((item) => (
            <BlogCard
              key={item.mainTitle}
              mainTitle={item.mainTitle}
              link={item.link}
              mainDescription={item.mainDescription}
              image={item.image}
              date={item.tag.Date}
              Author={item.tag.Author}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
