"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const navLinks = [
  { href: "/Blog", label: "Blog" },
  { href: "/Work", label: "Work" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

interface Navigation {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<Navigation> = ({ href, label, isActive }) => (
  <Link
    href={href}
    className="leading-none relative hover:transition-all hover:duration-500 transition-all duration-500 font-[300] lg:text-[15px] text-[40px]"
    
  >
    /{""}
    <span
      className={`leading-none ${
        isActive ? "text-[#C7C7C7]" : "text-white"
      } transition-colors hover:text-[#C7C7C7]`}
    >
      {label}
    </span>
  </Link>
);

const Navbar: React.FC = () => {
  const navRef = useIntersectionObserver("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fade-up nav grid place-items-center relative top-0 w-full z-50 py-[48px] transition-colors duration-300 bg-transparent font-jetbrains"
    >
      <div className="container px-[24px] sm:p-0 xl:max-w-[1200px] flex flex-row justify-between items-center">
        <div className="navBrand flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-4 font-[100] text-lg font-righteous"
          >
            <Image
              src="/assets/nav-icon.png"
              alt="icon"
              width={32}
              height={32}
            />
            <h1 className="text-[18px]">Narayan</h1>
          </Link>
        </div>
        <div
          ref={menuRef}
          className={`navLinks flex justify-end lg:flex-row lg:h-auto lg:bg-transparent ${
            menuOpen
              ? "flex-col container h-auto justify-evenly absolute top-20 bg-[#0f0f0f] p-[20px] pl-0 pt-8"
              : "hidden lg:flex items-center"
          }`}
        >
          <ul
            className={`flex ${
              menuOpen
                ? "flex-col items-start gap-1"
                : "flex-row items-center gap-[24px]"
            } lg:flex-row`}
          >
            {navLinks.map(({ href, label }, index) => (
              <li
                key={href}
                className={`fade-right ${
                  menuOpen ? `animation-delay-${index}` : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <NavLink
                  href={href}
                  label={label}
                  isActive={pathname === href}
                />
              </li>
            ))}
            {menuOpen && (
              <ul className="w-full">
                <li className="pt-8 xl:pt-0 xl:border-t-0 border-t w-[100%] xl:mt-0 mt-8 border-[#373737] fade-right animation-delay-3">
                  <Link
                    href=""
                    className="relative hover:transition-all hover:duration-500 transition-all duration-500 font-[500] text-[15px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      className={`"text-white" transition-colors hover:text-[#C7C7C7]`}
                    >
                      Twitter
                    </span>
                  </Link>
                </li>
                <li className=" fade-right animation-delay-4">
                  <Link
                    href=""
                    className="relative hover:transition-all hover:duration-500 transition-all duration-500 font-[500] text-[15px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      className={`"text-white" transition-colors hover:text-[#C7C7C7]`}
                    >
                      GitHub
                    </span>
                  </Link>
                </li>
                <li className=" fade-right animation-delay-5">
                  <Link
                    href=""
                    className="relative hover:transition-all hover:duration-500 transition-all duration-500 font-[500] text-[15px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      className={`"text-white" transition-colors hover:text-[#C7C7C7]`}
                    >
                      Instagram
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <button
          className={`burger flex flex-col justify-end items-end ${
            menuOpen ? "gap-0" : "gap-2"
          } lg:hidden`}

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          type="button"
        >
          <div
            className={`w-6 h-[3px] bg-gray-500 transition-transform ${
              menuOpen ? "rotate-45 translate-x-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] bg-gray-500 transition-transform ${
              menuOpen ? "-rotate-45 translate-x-1.5 -translate-y-[4px]" : ""
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;