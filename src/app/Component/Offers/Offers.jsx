import React from "react";

function Offers({ imageUrl, title, price }) {
  return (
    <div className="w-[97%] m-auto">
      <div className="">
        <div className="">
          <img src={imageUrl} alt={title} className="" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
