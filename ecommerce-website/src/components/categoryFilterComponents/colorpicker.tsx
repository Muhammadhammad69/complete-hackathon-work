"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, Check } from "lucide-react";

export const ColorPicker = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="bg-white w-[100%] sm:w-[248px] mx-auto ">
      <div
        className="flex justify-between  cursor-pointer"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        <h2 className="text-[20px] font-bold  ">Color</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <>
          {/* Color options */}
          <div className="grid grid-cols-5 gap-4 mt-8 ">
            <div className="bg-green-700 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-green-700 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-blue-700 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-blue-700 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-red-700 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-red-700 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-purple-700 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-purple-700 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-yellow-500 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-yellow-500 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-pink-500 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-pink-500 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-[#F57906] w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-[#F57906] hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-white w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-white hover:text-black  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-blue-500 w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-blue-500 hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
            <div className="bg-black w-[37px] h-[37px] rounded-[22px] flex justify-center items-center text-black hover:text-white  cursor-pointer border-2 border-[#d6d6d6]">
              <Check strokeWidth={2}  />
            </div>
          </div>
        </>
      )}
      <hr className="mt-4 mb-4"/>
    </div>
  );
};


