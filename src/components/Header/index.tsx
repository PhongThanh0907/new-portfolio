"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useThemeContext } from "@/providers/ThemeColor";
import { MENU_HEADER } from "@/constants";
import Github from "../../../public/github.png";
import Linkedin from "../../../public/linkedin.png";
import ButtonMenuBar from "./ButtonMenuBar";

const HeaderMemo = () => {
  const { currentTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openButtonMenu, setOpenButtonMenu] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    setOpenButtonMenu(false);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        if (!buttonRef.current?.contains(event.target as Node)) {
          closeModal();
        }
      }
    };

    if (openButtonMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openButtonMenu, closeModal]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex items-center fixed top-0 w-full z-30 ${
        scrolled
          ? "h-16 duration-300 bg-[#1e1e1e78] transition-all"
          : "h-24 duration-300 bg-[#1e1e1e78] transition-all"
      }`}
    >
      <div className="width-80 flex-between">
        <div
          id="button-menu"
          ref={buttonRef}
          onClick={() => setOpenButtonMenu(!openButtonMenu)}
        >
          <ButtonMenuBar open={openButtonMenu} />
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/PhongThanh0907" target="_blank">
            <Image
              className="h-10 w-10 bg-white rounded-full cursor-pointer hover-item"
              src={Github}
              alt="github"
              priority
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-034480248/"
            target="_blank"
          >
            <Image
              className="h-10 w-10 cursor-pointer hover-item"
              src={Linkedin}
              alt="linkedin"
              priority
            />
          </Link>
        </div>
      </div>
      {openButtonMenu ? (
        <div
          ref={modalRef}
          className={`z-50 absolute left-0 right-0 bg-[#1e1e1e78] rounded-md ${
            scrolled ? "top-[60px]" : "top-[95px]"
          }  flex flex-col pl-8 font-semibold text-xl h-80 w-full lg:w-96 opacity-100 duration-500 text-stone-100 overflow-hidden`}
        >
          {MENU_HEADER.map((item, index) => (
            <div key={index} className="relative w-full py-6">
              <a
                onClick={() => setOpenButtonMenu(false)}
                className="absolute left-[10px] opacity-100 hover-item"
                href={item.id}
                style={{ transition: `all ${item.delay}ms` }}
              >
                <p className="relative inline-block group">
                  {item.title}
                  <span
                    style={{ backgroundColor: `${currentTheme.primary}` }}
                    className={`absolute left-0 right-0 bottom-0 h-1 transform scale-x-0 transform-origin-center transition-transform rounded-xl duration-300 group-hover:scale-x-100`}
                  ></span>
                </p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="z-50 absolute top-[95px] left-0 text-stone-100 bg-[#1e1e1e78] flex flex-col pt-6 pl-8 text-xl gap-y-3  h-0 w-96 duration-500 opacity-0">
          {MENU_HEADER.map((item, index) => (
            <div key={index} className="relative w-full py-3.5">
              <a
                onClick={() => setOpenButtonMenu(false)}
                className="text-white absolute left-[70%] opacity-0"
                href={item.id}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = React.memo(HeaderMemo);

export default Header;
