import React from "react";
import Typed from 'react-typed';
import NewsLetter from "./NewsLetter";
import Why from "./Why";
import Services from "./Services";
import Footer from "../Layouts/Footer";
export default function Banner() {
    return(
        <>
        <div className="bg-[#000000] w-full py-[120px]">
            <div className="max-w-[1240px] my-[20px] mx-auto text-white text-center ">
                <div className="font-bold text-xl md:text-2xl mt-3 md:p-[24px]">
                STREAMS SOFTWARE SOLUTIONS
                </div>
                <h2 className="text-red-600 font-bold text-4xl md:text-5xl mt-3 md:p-[24px]">
                    We bring great ideas to life!
                </h2>
                <div className="font-bold text-xl md:text-2xl mt-3 md:p-[24px]">
                    We do 
                    <Typed 
                    className="text-red-600 font-bold pl-2"
                    strings={['Strategy & Discovery','Custom Software Solution','Technology Consulting','Business Analytics']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                />
                </div>
                <button className="bg-red-600 text-black p-2 rounded font-bold text-xl md:text-2xl mt-20">Know more</button>
            </div>
            
        </div>
        <Why />
        <NewsLetter />
        <Services />
        <Footer />
        </>
        
    )
}   