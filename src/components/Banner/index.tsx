"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import ButtonBanner from "./ButtonBanner";
import Background from '../../../public/background (1).jpg'
import { useTranslation } from "@/providers/TranslateProvider";
import { useThemeContext } from "@/providers/ThemeColor";

const BannerMemo = () => {
    const { t } = useTranslation();
    const { currentTheme } = useThemeContext();

  const [text, count] = useTypewriter({
    words: [
      `${t("welcome")}`,
      `${t("name")}`,
      `${t("work")}`,
    ],
    loop: true,
    delaySpeed: 2000,
  });


  return (
    <div
      id="banner"
      className="text-stone-100 h-[450px] lg:h-[44rem] relative pt-24 overflow-hidden"
    >
      <div className="h-40 lg:h-64 relative font-semibold width-80 pt-16 lg:pt-40 z-10 pl-6">
        <h1 className="text-3xl lg:text-5xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#2cf9fa" />
        </h1>
        <h2 className="absolute bottom-0 text-xs uppercase text-gray-400 tracking-[6px]">
         {t("job-name")}
        </h2>

        <motion.div
          initial={{
            y: 150,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-10 lg:top-28 -left-2"
        >
          <div className={`rounded-full w-5 h-5 ${currentTheme.bgCircle}`} />
          <div className={`w-1 h-56 lg:h-80 ml-2 ${currentTheme.bgGradient}`} />
        </motion.div>
      </div>
      <div className="relative z-10 width-80 mt-6 pl-6">
        <ButtonBanner />
      </div>
      <Image
        className="absolute inset-0 h-[94%] w-full object-cover top-20 lg:top-32 opacity-70"
        src={Background}
        alt="background"
      />
    </div>
  );
};

const Banner = React.memo(BannerMemo);

export default Banner;