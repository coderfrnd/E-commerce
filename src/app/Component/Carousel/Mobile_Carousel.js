import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";

const Mobile_Carousel = () => {
  // useState
  const [trey, setTrey] = useState(0);

  const caro = [
    {
      imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20"
    },
    {
      imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg?q=20"
    },
    {
      imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a09d2a782bf2442f.jpg?q=20"
    }
  ];

  function stright() {
    if (trey === caro.length - 1) {
      setTrey(0); 
    } else {
      setTrey(trey + 1);
    }
  }
  function backup (){
    if (trey === 0) {
      setTrey(caro.length-1); 
    }
    else{
      setTrey(trey-1)

    }
  }

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden relative"> {/* Added relative positioning */}
      <div className="carousel flex w-screen relative">
        <img src={caro[trey].imageUrl} alt={`Image ${trey}`} className="w-full h-40 object-cover" />
        {/* <MdNavigateNext className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black text-[200%]" /> Added Tailwind classes for positioning */}
        <button
        type="button"
        className="absolute top-1 end-0 z-35 flex items-center justify-center h-full px-[85%] cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={stright}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/20 ">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={stright}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/20 ">
          <svg
            className="w-4 h-4 text-white dark:text-gray-600 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      </div>
     
    </div>
  );
}

export default Mobile_Carousel;
