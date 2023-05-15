import React, { useState } from "react";
import{AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";

export default function Header() {
    const [toggle,setToggle] = useState(false);
    return (
        <div className="bg-[#000000] p-4 ">
            <div className="max-w-[1240px] py-[10px] items-center flex justify-between border-white mx-auto text-white">
            <Link to={"/"}><div className="cursor-pointer text-2xl font-bold ">
                    Streamsss
                </div></Link>
                {
                    toggle ?
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-red-600 text-2xl md:hidden block"/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-red-600 text-2xl md:hidden block "/>

                }
                <ul className="hidden md:flex text-red-600 gap-5 font-bold text-1xl ">

                <Link to={"/dashboard"}><li className="cursor-pointer hover:text-white">
                        Dashboard
                    </li></Link>

                    <Link to={"/"}><li className="cursor-pointer hover:text-white">
                        Home
                    </li></Link>
                    <Link to={"/about"}><li className="cursor-pointer hover:text-white">
                        About
                    </li></Link>
                    <Link to={"/service"}><li className="cursor-pointer hover:text-white">
                        Service
                    </li></Link>
                    <li className="cursor-pointer hover:text-white">
                        Contact
                    </li>
                    <Link to={"/login"}><button className="cursor-pointer hover:text-white">
                        login
                    </button></Link>
                </ul>

                {/* responsive menu */}

                <ul className={`duration-300 md:hidden w-full h-screen text-red-600 font-bold text-1xl fixed bg-black top-[83px]
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                    <Link to={"/"}><li className="p-5 cursor-pointer hover:text-white">
                        Home
                    </li></Link>
                    <Link to={"/about"}><li className="p-5 cursor-pointer hover:text-white">
                        About
                    </li></Link>
                    <Link to={"/service"}><li className="p-5 cursor-pointer hover:text-white">
                        Service
                    </li></Link>
                    <li className="p-5 cursor-pointer hover:text-white">
                        Contact
                    </li>
                    <Link to={"/login"}><button className="p-5 cursor-pointer hover:text-white">
                        login
                    </button></Link>
                </ul>
            </div>
        </div>
    ) 
} 