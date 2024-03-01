"use client"
import React, { useState, useEffect } from "react";
import Desktop from "./Component/Header/Desktop";
import Mobile from "./Component/Header/Mobile";
import Card from "./Component/Category/Card";
Card

export default function Home() {
  
  return (
    <div className="w-full h-screen">
      {/* <div className={isMobile ? 'sm:hidden' : 'xl:h-16 border-black'}>
        {isMobile ? <div className='h-full w-full'><Mobile /></div> : <Desktop />}
      </div> */}
      <Desktop />
      {/* <Mobile/> */}
      <Card />
    </div>
  );
}
