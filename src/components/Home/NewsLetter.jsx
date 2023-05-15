import React from "react";

export default function NewsLetter(){
    return(
        <div className="w-full bg-black p-5">
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
                <div className="m-2">
                    <h1 className="text-[20px] md:text-[30px] font-bold text-white">Why choose us?</h1>
                    <span className="text-red-600">
                        Sign-up to our service and know more about us.
                    </span>
                </div>
                <div className="m-2">
                    <input type="text" className="sm:w-full rounded mb-2 p-3 mr-2 text-black" placeholder="Email"/>
                    <button className="bg-red-600 text-black p-2 rounded font-bold text-xl mt-2">Get started</button>
                    <br />
                    <p className="text-red-600 mt-2">
                        We care about the protection of your data. Read our <br/> <a href="/" className="text-white"> Privacy Policy </a>
                    </p>
                </div>
            </div>
        </div>
    )
}