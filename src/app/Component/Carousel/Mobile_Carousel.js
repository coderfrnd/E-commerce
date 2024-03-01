"use client"
import React from 'react'
// import { Carousel } from "@material-tailwind/react"
const Mobile_Carousel = ({ imageUrl}) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={imageUrl}  className="w-full h-40 object-cover" />
      
    </div>
  )
}

export default Mobile_Carousel