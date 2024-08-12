"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Button from "./SpecialBtn";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/Blog/BlogPage", label: "BLOG" },
  { href: "/Blog/Contact", label: "CONTACT" },
];

interface Navigation {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<Navigation> = ({ href, label, isActive }) => (
  <Link
    href={href}
    className="leading-none relative hover:transition-all hover:duration-500 transition-all duration-500 font-[300] text-[14px]"
  >
    {""}
    <span
      className={`leading-none hover:underline ${
        isActive ? "text-[#f0f0f0]" : "text-[#f0f0f099]"
      } transition-colors hover:text-[#f0f0f0]`}
    >
      {label}
    </span>
    <span
      className={`text-[#f0f0f099] ${label === "CONTACT" ? "hidden" : "pl-4"}`}
    >
      |
    </span>
  </Link>
);

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full grid place-items-center text-white font-jetbrains px-[32px] pt-[32px] pb-[64px] my-[120px]">
      <div className="mainFooter container px-[24px] sm:p-0 xl:max-w-[1200px] flex flex-col justify-center items-center gap-[48px]">
        <div className="w-[802px] h-[1px] bg-[#f0f0f099]"></div>
        <div className={`navLinks lg:flex-row lg:h-auto lg:bg-transparent `}>
          <ul className={`flex gap-4  lg:flex-row`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  label={label}
                  isActive={pathname === href}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="navBrand flex items-center gap-2">
          <Link
            href="/Blog"
            className="flex items-center gap-4 text-[14px] text-[#f0f0f0]"
          >
            <h1 className="text-[14px] flex gap-4">
              John Doe <span className="text-[#f0f0f099]">/</span> MonoFlow
            </h1>
          </Link>
        </div>
        <div className="w-[802px] h-[1px] bg-[#f0f0f099]"></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-[6px]">
            <p className="underline text-[#ccebff] text-[14px] hover:text-[#f0f0f0] cursor-pointer">
              MonoFlow
            </p>
            <div className="w-[8px] h-[1px] leading-[1.2em] bg-[#f0f0f099]"></div>
            <p className=" text-[14px] text-[#f0f0f099] w-[168px]">
              Blog Framer Template by{" "}
              <span className="underline text-[#ccebff] text-[14px] hover:text-[#f0f0f0] cursor-pointer">
                Lauri Lännenmäki
              </span>{" "}
            </p>
            <p className=" text-[14px] text-[#f0f0f099] leading-[1.2em]">
              Built using Framer
            </p>
          </div>
          <Button title="buy this template" to="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
