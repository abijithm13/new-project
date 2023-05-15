import React from "react";
import { FaSearch ,FaRegBell, FaEnvelope} from "react-icons/fa";
import profile from "../Dashboard/assets/images/profile1.jpg";


const Dashboardview = () => {
return(
    <div>
        <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
        <div className="flex items-center rounded-[5px]">
            <input type="text" className="bg-[#f8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal placeholder='Search for...'"/>
            <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
            <FaSearch color='white'/>
            </div>
        </div>
        <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell />
                <FaEnvelope />
            </div>
            <div className='flex items-center gap-[15px] relative' >
                <p>Nikila </p>
                <div className="h-[30px] w-[30px]  cursor-pointer flex items-center justify-center relative">
                    <img src={profile}  alt=""/>
                </div>
            </div>
        </div>
    </div>
   
    </div>
)
}

export default Dashboardview; 