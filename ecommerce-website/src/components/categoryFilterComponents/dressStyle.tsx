"use client";
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

export const DressStyle = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="bg-white mx-auto  w-[100%] sm:w-[248px] font-satoshi">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        <h2 className="text-[20px] font-bold ">Dress Style</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <>
        <div className="mt-8 space-y-4 font-satoshi font-light text-[16px]">
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">Casual</h3>
            <ChevronRightIcon size={18}  />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">Formal</h3>
            <ChevronRightIcon size={18}  />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">Party</h3>
            <ChevronRightIcon size={18}  />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">Gym</h3>
            <ChevronRightIcon size={18}  />
          </div>
          {/* Rest of the filter options */}
        </div>
        </>
      )}
      <button className="w-full bg-mainColor border border-borderColor font-satoshi text-[14px] h-[3rem]   rounded-[2rem] mt-4 hover:bg-black hover:text-white shadow-none font-medium">Apply Filter</button>
      
    </div>
  );
};


