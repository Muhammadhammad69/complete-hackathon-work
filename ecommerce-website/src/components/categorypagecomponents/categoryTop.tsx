"use client";
import { ChevronDownIcon, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "../categoryFilterComponents/colorpicker"
import {DressStyle} from "../categoryFilterComponents/dressStyle"
import { Filter } from "../categoryFilterComponents/filter"
import { StaticPriceRange } from "../categoryFilterComponents/priceRange"
import {SizeSelector} from "../categoryFilterComponents/sizeSelector"

export const CategoryTop = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="flex justify-between mb-4 ">
      <div className="flex w-full justify-between">
        <h1 className="self-center font-satoshi text-[32px] font-bold">Casual</h1>
        <div className="flex items-center font-light gap-x-2 pt-2">
          <h1 className="text-[14px] sm:text-[16px] font-satoshi self-center sm:justify-self-center text-center">
            Showing 1-10 of 100 Products
          </h1>
          <div className="text-[12px] dl:text-[16px] font-satoshi  gap-x-2 hidden lg:flex">
            <p>Sort By:</p>
            <span className="text-black font-normal">Product</span>
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 z-10 right-0 h-full  bg-white  transition-transform  ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } w-screen sm:w-[auto] pl-5 sm:px-8 overflow-y-auto`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black "
        >
          <X className=""/>
        </button>
        {/* <div className="p-6 overflow-y-auto h-full  ">
          <h1 className="text-xl  font-bold mb-6">Sidebar</h1>
          <ul>
            <li className="mb-4 hover:text-gray-300 cursor-pointer">Home</li>
            <li className="mb-4 hover:text-gray-300 cursor-pointer">About</li>
            <li className="mb-4 hover:text-gray-300 cursor-pointer">
              Services
            </li>
            {[...Array(10)].map((item, i) => {
              return (
                <li className="mb-4 hover:text-gray-300 cursor-pointer" key={i}>
                  Contact
                </li>
              );
            })}
            <li className="mb-4 hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div> */}
        <div className=" overscroll-y-auto h-full w-[90%] mx-auto  sm:w-[295px] py-12 ">
        <Filter />
        <StaticPriceRange />
        <ColorPicker />
        <SizeSelector />
        <DressStyle />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 m-4 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
        >
          <SlidersHorizontal size={24} />
        </button>
        
      </div>
    </div>

      
    </div>
  );
};
