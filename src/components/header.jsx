import React, { useState } from "react";
import{AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

export default function Header() {
    const [toggle,setToggle] = useState(false);
    return (
        <div className="bg-[#000000] p-4 ">
            <div className="max-w-[1240px] py-[10px] items-center flex justify-between border-white mx-auto text-white">
                <div className="text-2xl font-bold ">
                    Streamsss
                </div>
                {
                    toggle ?
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-red-600 text-2xl md:hidden block"/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-red-600 text-2xl md:hidden block "/>

                }
                <ul className="hidden md:flex text-red-600 gap-5 font-bold text-1xl ">
                    <li className="cursor-pointer hover:text-white">
                        Home
                    </li>
                    <li className="cursor-pointer hover:text-white">
                        About
                    </li>
                    <li className="cursor-pointer hover:text-white">
                        Service
                    </li>
                    <li className="cursor-pointer hover:text-white">
                        Contact
                    </li>
                    <button className="cursor-pointer hover:text-white">
                        login
                    </button>
                </ul>

                {/* responsive menu */}

                <ul className={`duration-300 md:hidden w-full h-screen text-red-600 font-bold text-1xl fixed bg-black top-[83px]
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                    <li className="p-5 cursor-pointer hover:text-white">
                        Home
                    </li>
                    <li className="p-5 cursor-pointer hover:text-white">
                        About
                    </li>
                    <li className="p-5 cursor-pointer hover:text-white">
                        Service
                    </li>
                    <li className="p-5 cursor-pointer hover:text-white">
                        Contact
                    </li>
                    <button className="p-5 cursor-pointer hover:text-white">
                        login
                    </button>
                </ul>
            </div>
        </div>
    ) 
} 