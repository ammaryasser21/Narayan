import React, { ReactNode } from "react";

interface SpecialProps {
    children: ReactNode;
    width: string;
    hover: string;
  }
  
  const Special: React.FC<SpecialProps> = ({ children, width, hover }) => {
    return (
      <div className={`bg-[#1A1A1A] rounded-[24px] border-t border-[#424242] ${width} ${hover}`}>
        {children}
      </div>
    );
  };

  export default Special;