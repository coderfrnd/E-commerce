"use client"
import React, { useState, useEffect } from "react";
import Desktop from "./Component/Header/Desktop";
import Mobile from "./Component/Header/Mobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false); // Default value when window object is not available

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    if (typeof window !== 'undefined') { // Check if window object is available
      setIsMobile(window.innerWidth < 600); // Initial check for mobile screen size
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div className={isMobile ? 'sm:hidden' : 'xl:h-full border-2 border-black'}>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </div>
  );
}
