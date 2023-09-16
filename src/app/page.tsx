"use client";

import React, { useEffect, useState } from "react";

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

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShouldShowTransition(true);
  //     setShowWelcome(false);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true);
      setShowWelcome(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProviderWrapper>
      <div className="bg-black h-[100vh]">
        <StarsCanvas />
        {showWelcome && <Welcome onWelcomeComplete={handleWelcomeComplete} />}
        {/* {shouldShowTransition && <Transition />} */}
        {showMainPage && (
          <div className="relative">
            <ToasterProvider />
            <Settings />
            <Header />
          </div>
        )}
      </div>
    </ThemeProviderWrapper>
  );
}
