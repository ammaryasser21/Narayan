import React, { ReactNode } from "react";

interface SpecialProps {
  children: ReactNode;
  style?: string;
  hover?: string;
}

const Special: React.FC<SpecialProps> = ({ children, style, hover }) => {
  return (
    <div
      className={`bg-[#1A1A1A] rounded-[24px] border-t border-[#424242] ${style} ${hover}`}
    >
      {children}
    </div>
  );
};

export default Special;
