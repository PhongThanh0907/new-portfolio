"use client";

import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

import Welcome from "@/components/Welcome";
import StarsCanvas from "@/components/canvas/Stars";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import ToasterProvider from "@/providers/ToasterProvider";
import { ThemeProviderWrapper } from "@/providers/ThemeColor";
import Banner from "@/components/Banner";
import { LanguageProvider } from "@/providers/TranslateProvider";
import Overviews from "@/components/Overviews";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [shouldShowTransition, setShouldShowTransition] =
    useState<boolean>(false);
  const [showMainPage, setShowMainPage] = useState<boolean>(false);

  const controls = useAnimation();

  useEffect(() => {
    const animateAndHide = async () => {
      await controls.start({ opacity: 1 });
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
      <LanguageProvider>
      <div className="bg-black">
        {/* <StarsCanvas /> */}
        {showWelcome && <Welcome />}
        {!showWelcome && (
          <div>
            <Settings />
            <Header />
            <Banner />
            <Overviews />
          </div>
        )}
      </div>
      </LanguageProvider>
    </ThemeProviderWrapper>
  );
}
