"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import TextLight from "../TextLight";
import HeroBG from "../../../public/hero-bg.jpg";
import { useTranslation } from "@/providers/TranslateProvider";

const OverViewMemo = () => {
  const { t } = useTranslation();

  return (
    <div id="overview" className="py-14">
      <div className="width-80 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-gray-400 text-md lg:text-lg pb-2">
              {t("introduction")}
            </h4>
            <TextLight title={t("overview")} />
          </motion.div>

          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 text-md tracking-widest mt-8 ">
              {t("textoverview")}
            </p>
            <div className="pt-4 flex flex-col space-y-4">
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration text-stone-100 font-semibold">
                  {t("short-term")}: {` `}
                </span>
                {t("text-short-term")}
              </p>
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration-neonblue/50 text-stone-100 font-semibold">
                  {t("long-term")}
                </span>{" "}
                {t("text-long-term")}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center"
        >
          <div className="hero-img h-80 w-[90%]">
            <Image
              src={HeroBG}
              alt="hero"
              className="w-full h-full object-cover rounded-lg border-4 border-gray-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const OverViews = React.memo(OverViewMemo);

export default OverViews;
