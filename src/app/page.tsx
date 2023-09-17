"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Welcome from "@/components/Welcome";
import Transition from "@/components/Transition";
import StarsCanvas from "@/components/canvas/Stars";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import ToasterProvider from "@/providers/ToasterProvider";
import { ThemeProviderWrapper } from "@/providers/ThemeColor";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [shouldShowTransition, setShouldShowTransition] =
    useState<boolean>(false);
  const [showMainPage, setShowMainPage] = useState<boolean>(false);

  const controls = useAnimation();

  useEffect(() => {
    const animateAndHide = async () => {
      // Xuất hiện trong vòng 2 giây
      await controls.start({ opacity: 1 });
      // Sau đó, biến mất sau 2 giây
      await new Promise((resolve) => setTimeout(resolve, 2000));
      controls.start({ opacity: 0 });
    };

    animateAndHide();
  }, [controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProviderWrapper>
      <div className="bg-black h-[100vh]">
        <StarsCanvas />
        {showWelcome && <Welcome />}
        {!showWelcome && (
          <div>
            <Settings />
            <Header />
          </div>
        )}
      </div>
    </ThemeProviderWrapper>
  );
}
