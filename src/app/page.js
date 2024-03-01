"use client"
import React from "react";
import Desktop from "./Component/Header/Desktop";
import Mobile from "./Component/Header/Mobile";

// import { useMediaQuery } from "@react-hook/media-query";
import { useMediaQuery } from "@react-hook/media-query";

// import { useMediaQuery } from "@react-hook/media-query";
// import { useMediaQuery } from "@react-hook/media-query";


export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full h-screen">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}
