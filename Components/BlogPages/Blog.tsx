"use client";
import BlogCard from "./BlogCard";
import React, { useState } from "react";
import { BlogItems, BlogItem } from "./BlogItems";
const Blog = () => {
  const [items] = useState<BlogItem[]>(BlogItems);
  return (
    <div className="pb-[160px]">
      <main className="hero-section pt-[100px] pb-[160px] ">
        <h1 className="text-[64px] font-[600] text-[#f0f0f0] pb-8">Blog</h1>
        <p className="text-[24px] font-[400] text-[#f0f0f099] leading-[1.8em] sm:w-[672.33px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante sapien, placerat sed condimentum et, commodo vitae ipsum.
        </p>
      </main>
      <section className="Blog-section flex flex-col flex-wrap gap-[48px]">
        <div className="Blog-section flex flex-row flex-wrap gap-[63px]">
          {items.map((item) => (
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

export default Blog;
