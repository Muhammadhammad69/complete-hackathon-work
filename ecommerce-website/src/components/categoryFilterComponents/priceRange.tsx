// components/StaticPriceRange.tsx
"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
export const StaticPriceRange: React.FC = () => {
  const minValue = 50; // Fixed minimum price
  const maxValue = 200; // Fixed maximum price
  const [icon, setIcon] = useState(false);
  

  return (
    <div className="bg-white mx-auto w-[100%] sm:w-[248px] font-satoshi ">
      <div className="flex justify-between  cursor-pointer" onClick={()=> {
        setIcon(!icon)
      }}>
        <h2 className="text-[20px] font-bold ">Price</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon &&
      <>
      <div className="relative w-full mb-8 mt-8">
        {/* Range Track */}
        <div className="relative w-full h-2 bg-mainColor rounded-full">
          <div className="absolute h-full bg-black rounded-full left-[21%] w-[56%]"></div>
        </div>

        {/* Min Handle */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black rounded-full left-[19%] "></div>

        {/* Max Handle */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black rounded-full left-[73%]"></div>
      </div>

       {/* Price Labels */}
      <div className="flex justify-around gap-x-3 mt-4 font-satoshi text-[14px]">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
      </>
      }
      <hr className="mt-4 mb-4"/>
    </div>
  );
};


