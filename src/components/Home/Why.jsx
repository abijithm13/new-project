import React from "react";
// import Qm from "../assets/img/Qm.jpg"
export default function Why() {
    return(
        <div className="max-w-[1240px] p-1 mx-auto my-10 md:grid grid-cols-2">
            <div className="col-span-1 md:w-[50%] text-center flex justify-center items-center">
            <h1 className="text-red-600 ml-24 font-bold text-6xl my-20">Why Streams?</h1>
                {/* <img src={Qm} alt="" className="inline" /> */}
            </div>
            <div className="col-span-1 flex flex-col justify-center">
                <p className="my-2 text-justify font-bold md:text-xl mt-3 md:p-[24px] sm:px-9">
                Our team of experienced professionals is dedicated to providing high-quality services and delivering exceptional results to our clients. We take a personalized approach to every project we undertake, tailoring our solutions to meet the unique needs and goals of each client.
                At Streams, we understand that our success is tied to the success of our clients, which is why we strive to build long-lasting partnerships based on trust, transparency, and open communication. Whether you are looking for help with IT training, software development, or HR management, we are here to support you every step of the way.
                </p>
                <button className="bg-red-600 text-black p-2 rounded font-bold text-xl md:text-2xl mt-5">Know more</button>
            </div>

        </div>

    )
}