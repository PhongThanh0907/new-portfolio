import React from "react";

import { motion } from "framer-motion";

const TransAnimation = {
    hidden: { scaleY: 2, y: 500 },
    show: { scaleY: 3, y: -2000 },
    hide: { scaleY: 2, y: 1200 },
  };
  

const Transition = () => {
    
  return (
    <motion.div
      className="w-[100vw] h-[100vh] inset-0 fixed transition"
      variants={TransAnimation}
      initial="hidden"
      animate="show"
      exit="hide"
      transition={{ duration: 2 }}
    ></motion.div>
  );
};

export default Transition;
