import React, { useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { MdNavigateNext } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


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
  // useEffect(() => {
  //   const slideInterval = setInterval(stright, 1000); // Call the correct function here
  //   return () => clearInterval(slideInterval);
  // }, []);
  

  return (
    <div className='overflow-hidden relative h-auto' > {/* Adjust the height here */}
      <div className='flex h-full '
      >
        {caro.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt=""
            className={index === trey ? 'w-full h-full' : 'hidden'} 
          />
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button className='p-1 rounded-full shadow bg-gray-200 text-gray-900 hover:bg-white'
        onClick={stright}
        >
<FaChevronLeft size={30}/>
        </button>
        <button className='p-1 rounded-full shadow bg-white/80 text-gray-900 hover:bg-white'
        onClick={backup}
        >
<FaChevronRight size={30}/>
        </button>

      </div>
      {/* <div className='absolute bottom-4 right-0 left-0'>
  <div className='flex items-center justify-center gap-2'>
    {caro.map((_, i) => (
      <div
        key={i}
        className={`transition-all w-3 h-3 bg-white rounded-full ${trey === i ? "p-2" : "bg-opacity-50"}`}
      />
    ))}
  </div>
</div> */}

    </div>
  );
}

export default Mobile_Carousel;
