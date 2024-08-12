"use client";
import React, { useState } from "react";
import { BlogItems, BlogItem } from "./BlogItems";
import Button from "./SpecialBtn";
import Image from "next/image";

interface SpacificBlogProps {
  title: string;
}

const SpacificBlog: React.FC<SpacificBlogProps> = ({ title }) => {
  const [items] = useState<BlogItem[]>(BlogItems);
  const item = items.find((item) => item.link.includes(title));
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div>
      <div className="buttons">
        <Button title="view all articles" to="/Blog" />
      </div>
      <div className="content">
        <h1>{item.mainTitle}</h1>
        <div className="badge">
          <p>{item.tag.Day}</p>
          <p>{item.tag.Date}</p>
          <p>{item.tag.Author}</p>
        </div>
      </div>
      <div className="img">
        <Image src={item.image} alt={item.mainTitle} width={100} height={100} />
      </div>

      <div className="paragraphContent">
        {item.content.map((content) => (
          <div key={content.title} className="content">
            <h1>{content.title}</h1>
            {content.description.map((description) => (
              <div key={description} className="contentP">
                {description}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="buttons">
        <Button title="view all articles" to="/Blog" />
      </div>
    </div>
  );
};

export default SpacificBlog;
