import React from "react";
import Service1 from './img/service-1.png';
import Service2 from './img/service-2.png';
import Service3 from './img/service-3.png';
import Service4 from './img/service-4.png';

export default function Services(){
    return(
        <div className="py-[100px] px-15">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-5">
                <div className="shadow-xl  h-[470px] my-5 hover:scale-110 bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <img className='w-20 mx-auto mt-[-3rem]' src={Service1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Strategy & Discovery</h2>
                <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-2'> 
                        We unleash the skills of each individual through our internship and training programs. With our optimized solutions, Streams will help you find the best job position!.
                        </p>
                </div>
                </div>
                <div className="shadow-xl  h-[470px] my-5 hover:scale-110 bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <img className='w-20 mx-auto mt-[-3rem]' src={Service2} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Custom Software Solution</h2>
                <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-2'> 
                        We completely understand the software development cycle and provide customized, sustainable software solutions one step at a time.                        
                        </p>
                </div>
                </div>
                <div className="shadow-xl  h-[470px] my-5 hover:scale-110  bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <img className='w-20 mx-auto mt-[-3rem]' src={Service3} alt="/" />
                <h2 className='text-2xl font-bold text-center py-10'>Technology Consulting</h2>
                <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-2'> 
                        We guide you for the best-fit technologies that align with your business strategies. Consult us!                        
                        </p>
                </div>
                </div>
                <div className="shadow-xl  h-[470px] my-5 hover:scale-110  bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <img className='w-20 mx-auto mt-[-3rem]' src={Service4} alt="/" />
                <h2 className='text-2xl font-bold text-center py-10'>Business Analytics</h2>
                <div className='text-center font-medium'>
                        <p className='py-2 mx-8 mt-2'> 
                        Our support from precise analysis and working with accuracy uplift your business to the next level.                        
                        </p>
                </div>
                </div>
            </div>
        </div>
    )
}