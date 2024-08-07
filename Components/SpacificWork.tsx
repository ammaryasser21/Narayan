"use client"
import React, { useState } from "react";
import { workItems, WorkItem } from "../Components/WorkItems"; 
import Image from "next/image";
import Info from "./Info";

interface SpacificWorkProps {
    title?: string;
}

const SpacificWork: React.FC<SpacificWorkProps> = ({ title }) => {
console.log(title);
  const [items] = useState<WorkItem[]>(workItems);

  const renderItem = () => {
    const item = items.find(item => item.title[0] === title);
    
    if (!item) {
      return <div>Item not found</div>;
    }

    return (
      <div className="grid place-items-center">
        <div className="max-w-[600px]"> <Info title={item.title[0]} description={item.description[0]} subTitle="" subDescription=""/></div>
       

        <Image src={item.image[0]} alt={item.title[0]} width={1200} height={1200} />
      </div>
    );
  };

  return (
    <div>
      {renderItem()}
    </div>
  );
};

export default SpacificWork;
