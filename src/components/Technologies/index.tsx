"use client";

import React from "react";
import { motion } from "framer-motion";

import { TECHNOLOGIES } from "@/constants";
import BallCanvas from "../canvas/Ball";

const TechnologiesMemo = () => {
  return (
    <div
      id="technologies"
      className="grid grid-cols-3 py-20 lg:flex lg:flex-row lg:flex-wrap justify-center gap-x-4 gap-y-8 lg:gap-x-10 lg:gap-y-10 max-w-7xl mx-auto "
    >
      {TECHNOLOGIES.map((technology, index) => (
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className={`w-20 h-20 lg:w-28 lg:h-28 moveUpDown ml-4 lg:ml-0
      ${index % 2 == 0 ? "animation" : "animation-1"}
        `}
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

const Technologies = React.memo(TechnologiesMemo);

export default Technologies;
