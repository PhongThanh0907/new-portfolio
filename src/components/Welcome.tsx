import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Typer = ({ text, duration, delay, ...props }: any) => {
  const letters = Array.from(text);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: (i: number) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const item = {
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
      opacity: 1,
    },
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="flex overflow-hidden text-white font-semibold text-3xl"
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    >
      {letters.map((letter: any, index) => (
        <motion.span key={index} variants={item}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Welcome = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateAndHide = async () => {
      // Xuất hiện trong vòng 2 giây
      await controls.start({ opacity: 1 });
      // Sau đó, biến mất sau 2 giây
      await new Promise((resolve) => setTimeout(resolve, 4000));
      controls.start({ opacity: 0 });
    };

    animateAndHide();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      className="h-[100vh] w-full flex justify-center items-center bg-black"
    >
      <Typer
        custom={6}
        text="Welcome to my portfolio"
        delay={0.1}
        duration={0.05}
      />
    </motion.div>
  );
};

export default Welcome;
