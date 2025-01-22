"use client";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const SizeSelector = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="bg-white   mx-auto w-[100%] sm:w-[248px]">
      <div
        className="flex justify-between  cursor-pointer"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        <h2 className="text-[20px] font-bold  ">Size</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <div className="grid  gap-4 font-satoshi text-[14px] mt-8">
          <div className="flex gap-2">
            <button className="bg-mainColor w-[7rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
              XX-Small
            </button>
            <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
              X-Small
            </button>
          </div>
          <div>
            <div className="flex gap-2">
              <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
                Small
              </button>
              <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
                Medium
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white  ">
                Large
              </button>
              <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
                X-Large
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <button className="bg-mainColor w-[7rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
                XX-Large
              </button>
              <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
                3X-Large
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
                4X-Large
              </button>
            </div>
          </div>
        </div>
      )}
      <hr className="mt-4 mb-4"/>
    </div>
  );
};


