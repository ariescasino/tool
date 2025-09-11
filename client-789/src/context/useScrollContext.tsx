"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ScrollContextProps {
  scrollPosition: number;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <ScrollContext.Provider value={{ scrollPosition }}>{children}</ScrollContext.Provider>;
};

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
