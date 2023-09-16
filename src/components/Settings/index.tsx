"use client";

import React, { useState } from "react";
import {
  Cog6ToothIcon,
  XMarkIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { useThemeContext } from "@/providers/ThemeColor";
import {
  IconButton,
  Button,
  Typography,
  Switch,
  useTheme,
  Tooltip,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import PaletteIcon from "@mui/icons-material/Palette";
import { themes } from "@/themes/theme";

interface SettingsProps {}

const SettingsMemo: React.FC<SettingsProps> = ({}) => {
  const [openMenuSettings, setOpenMenuSettings] = useState<boolean>(false);
  const { currentTheme, changeTheme } = useThemeContext();
  const [selectedColor, setSelectedColor] = useState<string>("blue");

  return (
    <div className="fixed top-0 right-0 z-50 h-[100vh]">
      <div
        style={{
          borderRadius: "50% 0px 0px 50%",
          right: `${openMenuSettings ? "300px" : "0"}`,
          boxShadow: "rgba(80, 80, 80, 0.2) -3px 0px 4px 0px",
          background: "#424242bf",
        }}
        className="fixed top-[320px] duration-300"
      >
        <IconButton
          onClick={() => setOpenMenuSettings(!openMenuSettings)}
          sx={{ margin: "8px 8px" }}
        >
          {openMenuSettings ? (
            <ClearOutlinedIcon sx={{ color: "white" }} />
          ) : (
            <SettingsOutlinedIcon
              sx={{ color: "white" }}
              className={`spin-button`}
            />
          )}
        </IconButton>
      </div>
      <div
        style={{
          width: `${openMenuSettings ? "300px" : "0px"}`,
          boxShadow: "rgba(80, 80, 80, 0.2) 0px 5px 10px 1px",
          opacity: `${openMenuSettings ? "1" : "0"}`,
          background: "#424242bf",
        }}
        className="duration-300 h-full px-2 pt-4"
      >
        <div className="bg-[#181818ed] rounded-md px-4 py-4">
          <div className="flex gap-2 items-center">
            <PaletteIcon />
            <span className="text-lg">THEME COLOR</span>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-6 pb-2">
            {Object.keys(themes)
              .slice(0, 8)
              .map((themeKey) => (
                <Tooltip key={themeKey} placement="top" title={`${themeKey}`}>
                  <div
                    style={{
                      border: `2px solid ${
                        selectedColor === themeKey
                          ? `${currentTheme.primary}`
                          : "#ffffff00"
                      }`,
                      transition: "all 0.3s",
                    }}
                    className="cursor-pointer rounded-xl relative text-center block p-1.5"
                  >
                    <div
                      onClick={() => {
                        setSelectedColor(themeKey);
                        changeTheme(themeKey);
                      }}
                      style={{ backgroundColor: `${themes[themeKey].primary}` }}
                      className="h-[80px] w-full rounded-lg cursor-pointer"
                    ></div>
                  </div>
                </Tooltip>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = React.memo(SettingsMemo);

export default Settings;
