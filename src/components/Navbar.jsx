import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

// ✅ import local assets
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //Function to determine the active section while scrolling.
  const determineActiveSection = () => {
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const section = document.getElementById(navLinks[i].id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          //set the active link based on the section ID
          setActive(navLinks[i].title);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      determineActiveSection();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0  z-50 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-primary"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* ✅ Centered Logo + Text */}
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold uppercase text-white">
            Mohd Aman &nbsp;
            <span className="hidden sm:block">
              |&nbsp;{" "}
              <span className=" gradient-text">MERN Stack Developer</span>
            </span>
          </p>
        </Link>

        {/* ✅ Desktop Nav Links */}
        <ul className="ml-auto hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Hamburger */}
        <div className="z-20 ml-auto flex sm:hidden">
          <img
            src={toggle ? close : menu} // <-- using local assets
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* ✅ Mobile Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-primary fixed left-0 top-20 z-30 min-w-[100%]  p-6`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
