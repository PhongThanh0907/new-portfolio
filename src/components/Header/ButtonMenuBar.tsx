import { useThemeContext } from "@/providers/ThemeColor";
import React from "react";

interface ButtonMenuBarProps {
  open: boolean;
}

const ButtonMenuBarMemo: React.FC<ButtonMenuBarProps> = ({ open }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="h-[26px] w-11 relative flex justify-center z-30 cursor-pointer">
      <div
        style={{ background: `${currentTheme.backgroundSecondary}` }}
        className={`h-1.5 w-9  absolute rounded-sm  ${
          open
            ? "top-0 bottom-0 rotate-45 my-auto duration-500"
            : "top-0 duration-300"
        } `}
      />
      <div
        style={{ background: `${currentTheme.backgroundSecondary}` }}
        className={`h-1.5 w-9  absolute top-0 bottom-0 m-auto line-center duration-300 rounded-sm ${
          open ? " opacity-0" : "opacity-100 "
        }`}
      />
      <div
        style={{ background: `${currentTheme.backgroundSecondary}` }}
        className={`h-1.5 w-9 absolute  line-bottom rounded-sm ${
          open
            ? "top-0 bottom-0 -rotate-45 my-auto duration-500"
            : "bottom-0 duration-300"
        }`}
      />
    </div>
  );
};

const ButtonMenuBar = React.memo(ButtonMenuBarMemo);

export default ButtonMenuBar;
