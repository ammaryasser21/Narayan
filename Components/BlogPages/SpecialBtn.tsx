import React from "react";

import Link from "next/link";
import { UrlObject } from "url";

interface ButtonProps {
  title?: string;
  to?: string | UrlObject;
}

const Button: React.FC<ButtonProps> = ({ title, to = "/Blog" }) => (
  <Link
    href={to}
    className="leading-0"
  >
    <p className="rounded-[4px] w-fit text-[16px] bg-[#1a1a1a] hover:bg-[#1f1f1f] px-[16px] py-[12px] border-t-[1px]  border-b-[1px]  border-l-[1px]  border-r-[1px] border-[#242424] leading-none">{title}</p>
  </Link>
);

export default Button;
