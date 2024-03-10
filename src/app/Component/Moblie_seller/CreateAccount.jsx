import React from "react";
import { CiUser } from "react-icons/ci";
import { PiNoteDuotone } from "react-icons/pi";
import { ImFilesEmpty } from "react-icons/im";

function CreateAccount() {
    return (
        <div className="m-5">
            <div className="mb-5">
                <h2 className="text-2xl">
                    <b>Create Account</b>
                </h2>
            </div>

            <div>
                <p className="text-sm text-slate-800 mt-1 mb-1 pb-4 pt-4">
                    Creating your Flipkart seller account is a quick process, taking less
                    than 10 minutes, and requires only 3 documents. Follow the checklist
                    to ensure a amless account creation experience. By having these
                    documents ready, you can streamline the account creation process and
                    get started on Flipkart s an online seller in no time.
                </p>

                <p className="text-sm text-slate-500 mt-1 mb-1 pb-4 pt-4">
                     for selling in all categories except for books
                </p>

                <p className="text-sm text-slate-500 mt-1 mb-1 pb-4 pt-4">
                     for selling under books category
                </p>

                <div className="mb-5">
                    <img
                        className="w-full"
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/MSite1.webp"
                        alt=""
                    />
                </div>

                {/* GST  */}

                <div className="mt-5 border rounded-3xl pt-2 pb-2">
                    <div className="w-[90%] mb-1 m-auto">
                        <b>Don't have a GSTIN ?</b>
                    </div>
                    <p className="w-[90%] mb-5 m-auto text-slate-600">
                        Follow the steps below to generate for your online business
                    </p>
                    <div className="w-[90%] m-auto">
                        <div className="flex items-center pt-2 pb-2">
                            <CiUser className="h-10 w-10" />
                            <div className="ml-1 pl-5">Register/login to www.gst.gov.in</div>
                        </div>
                        <div className="flex items-center pt-2 pb-2">
                            <PiNoteDuotone className="h-10 w-10" />
                            <div className="ml-1 pl-5">
                                Fill in the GST Enrolment Application Form
                            </div>
                        </div>
                        <div className="flex items-center pt-2 pb-2">
                            <ImFilesEmpty className="h-10 w-10" />
                            <div className="ml-1 pl-5">Submit Enrolment Application</div>
                        </div>
                    </div>
                </div>

                {/* Description  */}

                <p className="font-light mt-4 mb-4">
                    Flipkart offers a diverse range of over 3000+ categories where you can
                    sell your products. These categories represent just a fraction of the
                    wide variety available on Flipkart, providing ample opportunities for
                    sellers to showcase their products to a large customer base. Here are
                    some popular categories to consider for online selling:
                </p>

                {/* Categories  */}

                <div className="main border rounded-3xl shadow-md shadow-slate-400 p-3 mb-10">
                    <div className="heading mt-5">
                        <h2>Popular categories to sell accross India</h2>
                    </div>

                    <div className="lists mt-4">
                        <ul className="grid grid-cols-2 text-blue-700 ">
                            <li className="pt-2 pb-2 text-xs">Sell Mobile Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Clothes Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Sarees Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Electronics Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Women Clothes Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Shoes Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Jewellery Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell TShirts Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Furniture Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Makeup Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Paintings Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Books Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Kurties Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Home Products Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Beauty Products Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Toys Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Appliances Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Shirts Online </li>
                            <li className="pt-2 pb-2 text-xs">Sell Watch Online  </li>
                            <li className="pt-2 pb-2 text-xs">Sell Indian Clothes Online</li>
                        </ul>
                    </div>
                </div>

                <hr />

            </div>
        </div>
    );
}

export default CreateAccount;
