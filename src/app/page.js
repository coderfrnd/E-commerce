"use client"
import React from "react";
import Desktop from "./Component/Header/Desktop";
import Mobile from "./Component/Header/Mobile";
<<<<<<< HEAD
import Card from "./Component/Category/Card";
Card
=======
// import { useMediaQuery } from "@react-hook/media-query";
import { useMediaQuery } from "@react-hook/media-query";
>>>>>>> 52595d835f6c38584f59f3f0077303a688dd7305

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full h-screen">
<<<<<<< HEAD
      {/* <div className={isMobile ? 'sm:hidden' : 'xl:h-16 border-black'}>
        {isMobile ? <div className='h-full w-full'><Mobile /></div> : <Desktop />}
      </div> */}
      <Desktop />
      {/* <Mobile/> */}
      <Card />
=======
      {isMobile ? <Mobile /> : <Desktop />}
>>>>>>> 52595d835f6c38584f59f3f0077303a688dd7305
    </div>
  );
}
