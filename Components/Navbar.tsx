"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="grid place-items-center relative top-0 w-full z-50 py-[48px] transition-colors duration-300 bg-transparent font-jetbrains">
      <div className="container w-[1200px] flex flex-row justify-between items-center">
        <div className="navBrand flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-4 font-[100] text-lg font-righteous "
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
          className={`navLinks flex items-center justify-end lg:flex-row lg:h-auto lg:bg-transparent ${
            menuOpen
              ? "flex-col w-full h-auto justify-evenly text-center absolute top-16 left-0 right-0"
              : "hidden lg:flex"
          }`}
        >
          <ul
            className={`flex gap-[20px] items-center justify-center ${
              menuOpen ? "flex-col gap-6" : "flex-row"
            } lg:flex-row `}
          >
            <li>
              <Link
                href="/Work"
                className={` relative hover:transition-all hover:duration-500  transition-all duration-500
                   font-[500] text-[15px]`}
              >
                /
                <span
                  className={` ${
                    pathname === "/Work" ? "text-[#C7C7C7]" : "text-white"
                  } transition-colors hover:text-[#C7C7C7]`}
                >
                  Work
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className={`relative hover:transition-all hover:duration-500  transition-all duration-500
                   font-[500] text-[15px]`}
              >
                /
                <span
                  className={` ${
                    pathname === "/About" ? "text-[#C7C7C7]" : "text-white"
                  } transition-colors hover:text-[#C7C7C7]`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className={` relative hover:transition-all hover:duration-500  transition-all duration-500"
                   font-[500] text-[15px]`}
              >
                /
                <span
                  className={` ${
                    pathname === "/Contact" ? "text-[#C7C7C7]" : "text-white"
                  } transition-colors hover:text-[#C7C7C7]`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="burger flex flex-col justify-end items-end gap-3 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          type="button"
        >
          <div
            className={`w-6 h-0.5 bg-gray-500 transition-transform ${
              menuOpen ? "rotate-45 translate-x-1.5 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-500 transition-transform ${
              menuOpen ? "-rotate-45 translate-x-1.5 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
