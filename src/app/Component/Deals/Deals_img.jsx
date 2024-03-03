import React from "react";

function Deals_img({ imgURL, brand, discount }) {
  return (
    <div className="w-[98%] h[70%] cursor-pointer">
      <div className="flex flex-col items-center justify-center m-2 border-black-100 h-[70%] border-2">
       
        
        <img
          src={imgURL}
          alt=""
          className="h-[70%] w-[70%] "
          />
        <div>{brand}</div>
        <div><b>{discount}</b></div>
      </div>


    </div> 
  );
}

export default Deals_img;
