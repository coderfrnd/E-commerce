import React from "react";

function SuccessStories() {
    return (
        <div>
            <div className="m-5">
                <div className="flex items-center">
                    <div className="text-blue-800 text-xl mr-1">
                        <b>Seller Success</b>
                    </div>{" "}
                    Stories
                </div>
            </div>

            <div>
                <div className="flex flex-col justify-center items-center bg-sky-50 rounded-2xl m-2">
                    <div className="rounded-full m-3">
                        <img
                            src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Vinay_Garg_yellow.webp"
                            alt="" className="rounded-full"
                        />
                    </div>

                    <div className="flex flex-col items-center text-lg m-3">
                        <div className="m-2"><b>Vinay Garg,</b></div>
                        <div className="m-2"><b>Activa and Digi Smart</b></div>
                        <div>
                            <p className="text-center text-slate-600 text-[15px]">
                                When moving from offline to online business, our aim was to sell
                                300 orders per month. Today, we sell more than 700 orders per day
                                and this has been possible because of the growth features on the
                                Flipkart seller dashboard, Flipkart Ads and regular payments.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SuccessStories;
