import React from "react";

import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import { useThemeContext } from "@/providers/ThemeColor";

const ButtonBanner = () => {
  const { currentTheme } = useThemeContext();

  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1ZMgNLaPsGv1GWyJX8TNjwjxtbxcePMiL/view"
      className="text-stone-100 w-40 rounded-[40px] group relative cursor-pointer py-1 h-12 flex items-center overflow-hidden"
      style={{ background: "linear-gradient(-90deg, #380036, #0cbaba)" }}
    >
      <span className="z-10 font-bold ml-6">My CV</span>
      <div
        style={{ background: `${currentTheme.backgroundSecondary}` }}
        className={`absolute top-0.5 right-2 w-11 h-11 rounded-full group-hover:w-full group-hover:right-0 group-hover:h-full group-hover:duration-500 duration-500 group-hover:top-0`}
      />
      <div className="z-10 absolute right-[19px] bottom-0 top-0 flex items-center">
        <ArrowSmallDownIcon className="h-5 w-5 up-down" />
      </div>
    </a>
  );
};

export default ButtonBanner;
