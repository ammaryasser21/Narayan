"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

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

const Navbar: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
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
    <nav className="nav p-[32px] bg-[#14141480] backdrop-blur-sm  flex flex-row justify-between items-center  sticky top-0 w-full z-50  transition-colors duration-300 bg-transparent font-jetbrains">
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
      <div
        ref={menuRef}
        className={`navLinks flex justify-end lg:flex-row lg:h-auto lg:bg-transparent ${
          menuOpen
            ? "flex-col container h-auto justify-evenly absolute top-20 bg-[#0f0f0f] p-[20px] pl-0 pt-8"
            : "hidden lg:flex items-center"
        }`}
      >
        <ul
          className={`flex gap-4 ${
            menuOpen ? "flex-col items-start " : "flex-row items-center "
          } lg:flex-row`}
        >
          {navLinks.map(({ href, label }, index) => (
            <li key={href} onClick={() => setMenuOpen(false)}>
              <NavLink href={href} label={label} isActive={pathname === href} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`burger flex flex-col justify-end items-end ${
          menuOpen ? "gap-0" : "gap-2"
        } lg:hidden`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={"Open menu"}
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
    </nav>
  );
};

export default Navbar;
