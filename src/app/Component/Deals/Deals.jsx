import React from "react";

const Brands = ({ imgURL, brand, discount }) => {
  <div>
    <img src={imgURL} alt="nmnvm" />
    <div>{brand}</div>
    <div>{discount}</div>
  </div>
};

function Deals() {
  return (
    <div className="">
      <div className="w-[98%] m-auto bg-white mt-5 flex flex-col">
        <div className="bg-white flex flex-row justify-between">
          <div>Top Deals</div>
          <div>Icon</div>
        </div>

        <Brands imgURL='https://dev1-cdn.helioswatchstore.com/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/a/x/ax7153set_1.jpg' brand='Armani Watch' discount='35% off' />

        {/* <div className="flex flex-row justify-between	">
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <img
              src="https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg"
              alt=""
              className="h-[75%] w-[25%]"
            />
            <div>Armani Exchange</div>
            <div>35% off</div>
          </div>
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <img
              src="https://www.verywellhealth.com/thmb/CXkPB3b0u5u9oz7BylGvwGpVIAc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-730132839-5a1e0b74482c520037eed28c.jpg"
              alt=""
              className="h-[75%] w-[25%]"
            />
            <div>Armani Exchange</div>
            <div>35% off</div>
          </div>
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <img
              src="https://5.imimg.com/data5/BR/GE/MY-43691381/formal-shirts-for-men-dark-green-shirt-mens-supplier.jpg"
              alt=""
              className="h-[75%] w-[55%]"
            />
            <div>Armani Exchange</div>
            <div>35% off</div>
          </div>
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <img
              src="https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg"
              alt=""
              className="h-[75%] w-[25%]"
            />
            <div>Armani Exchange</div>
            <div>35% off</div>
          </div>
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <img
              src="https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg"
              alt=""
              className="h-[75%] w-[25%]"
            />
            <div>Armani Exchange</div>
            <div>35% off</div>
          </div>
          <div className="flex flex-col justify-center ml-1 mr-1 border-black-100	border-2 w-[50%]">
            <div className="m-auto">
              <img
                src="https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg"
                alt=""
                className="h-[75%] w-[25%] m-auto"
              />
              <div>Armani Exchange</div>
              <div>35% off</div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Deals;
