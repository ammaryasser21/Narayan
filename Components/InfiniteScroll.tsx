"use client";

import React, { useEffect, useRef } from "react";

interface Scroll {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}

const InfiniteScroll: React.FC<Scroll> = ({ items, direction, speed }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (
      scroller &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  return (
    <section
      ref={scrollerRef}
      className={`scroller overflow-hidden relative `}
      data-speed={speed}
      data-direction={direction}
    >
      <ul
        className={`flex ${
          direction === "right" ? "animate-scrolling-text" : "animate-reverse"
        } animate-none left-[50%]  whitespace-nowrap flex flex-nowrap gap-28 text-[104px] font-righteous font-light list-disc`}
      >
        {items.map((item) => (
          <li key={item} className="flex-none">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfiniteScroll;
