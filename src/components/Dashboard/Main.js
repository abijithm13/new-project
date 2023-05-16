import React from 'react';
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa';
import Charts from "./Charts";
import PieComponent from './PieComponent';






const Main = () => {
    return (
      <div className="pt-[25px] px-[25px] bg-[#000000]">
        <div className="flex items-center justify-between">
          <h1 className="text-red-600  text-[28px]  leading-[34px] font-bold cursor-pointer">
            DASHBOARD
          </h1>
          <button className="bg-red-600 h-[32px] rounded-[3px] text-black font-bold flex items-center justify-center px-[30px] cursor-pointer">
            Generate Report
          </button>
        </div>

        <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-red-600 text-[11px] leading-[17px] font-bold">
                WORK TIME
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-black mt-[5px]">
                9 HRS
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-red-600 text-[11px] leading-[17px] font-bold">
                STUDY TIME
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                2 HRS
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-red-600 text-[11px] leading-[17px] font-bold">
                PLAY TIME
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                2 HRS
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale:[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-red-600 text-[11px] leading-[17px] font-bold">
                TASK{" "}
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                3 HRS
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="" />
          </div>

          <div className="flex mt-[22px] w-full gap-[30px]">
            <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[10px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                <h2>Overview</h2>
                <Charts />
                <FaEllipsisV color="gray" className="cursor-pointer" />
              </div>
            </div>
            <div className="basis-[50px] w-full border  bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="bg-[#F8F9FC] w-96  flex items-center justify-between py-[15px] px-[20px]  border-b-[1px] border-[#EDEDED]">
                <h2> Revenue Resources</h2>
                <FaEllipsisV color="gray" className="cursor-pointer" />
              </div>

              <div className="pl-[8px]">
                <PieComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;