import React from "react";

function ItemsMob({ imgURL, Name, Specs, Price, Discount }) {
    return (
        <div className="w-screen border m-1">
            {/* Items list and photos */}
            <div className="flex">
                <div className=" mr-2 ml-2">
                    <div className="h-40 w-35 flex items-center overflow-hidden">
                        <img className="  " src={imgURL} alt="" />
                    </div>
                    <div>{Name}</div>
                    <div className="text-xs text-gray-600">{Specs}</div>

                    <div className="flex items-center">
                        <div>{Price}</div>
                        <div>
                            <img
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                alt="" className="h-3.5 ml-4"
                            />
                        </div>
                    </div>

                    <div className="text-green-500 text-xs"><b>{Discount}</b></div>
                </div>
            </div>
        </div>
    );
}

export default ItemsMob;
