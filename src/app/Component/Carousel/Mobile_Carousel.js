"use client"
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Mobile_Carousel = () => {
  // useState
  const [trey, setTrey] = useState(0);

  const caro = [
    {
      imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3614e4f686524e06.jpg?q=20",
    },
    {
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20",
    },
    {
      imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8f09a8ab0b80ea07.jpg?q=20",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(stright, 3000); // Call the correct function here
    return () => clearInterval(slideInterval);
  }, [trey]);

  function stright() {
    if (trey === caro.length - 1) {
      setTrey(0);
    } else {
      setTrey(trey + 1);
    }
  }

  function backup() {
    if (trey === 0) {
      setTrey(caro.length - 1);
    } else {
      setTrey(trey - 1);
    }
  }

  return (
    <div className="overflow-hidden relative h-[320px]">
      <div className="flex h-full ">
        {caro.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt=""
            className={
              index === trey
                ? "w-full h-full ease-out duration-500"
                : "hidden ease-out duration-500"
            }
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-gray-200 text-gray-900 hover:bg-white"
          onClick={backup}
        >
          <FaChevronLeft size={15} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-900 hover:bg-white"
          onClick={stright}
        >
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Mobile_Carousel;