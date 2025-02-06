"use client";
import React, { useState } from "react";
import { X, Search } from "lucide-react";
import { useFilterContext } from "@/context/filterContext/filtercontext";
import { IFilterContext } from "@/context/contextTypes";
import { IProduct } from "@/types/productType";
import Link from "next/link";

const SearchBar = () => {
  const {
    searchValue,
    setValue,
    searchBarProducts,
    getSearchValue,
    removeSearchValue,
    setValueFunc,
  } = useFilterContext() as IFilterContext;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="  shadow-sm sm:hidden"
        >
          <Search className="hover:text-black text-gray-700" size={26} />
        </button>

        <div className="hidden sm:flex flex-grow items-center gap-2 relative  bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-[95%]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 hover:bg-gray-100 rounded-full"
          >
            <Search className=" text-gray-700" size={26} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-[92%]"
            value={setValue}
            onChange={getSearchValue}
          />
          {searchBarProducts?.length > 0 && searchValue.length > 0 && (
            <div
              className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10
          max-h-56 overflow-auto "
            >
              {searchBarProducts?.map((item: IProduct, index: number) => {
                return (
                  <Link
                    href={`/product/${item._id}`}
                    onClick={() => {
                      removeSearchValue();
                      setValueFunc(item.name);
                    }}
                    key={index}
                  >
                    <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer font-satoshi">
                      <b>{item.name.slice(0, 3)}</b>
                      {item.name.slice(3)}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
{/* Mobile screen */}
      {isOpen && (
        <div className="absolute z-10 bg-white border border-gray-300 mt-4 rounded-lg shadow-lg p-4 w-full  sm:w-auto sm:hidden ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-1 right-2 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="sm:hidden mb-4 mt-6 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-4xl ">
            <input
              type="text"
              placeholder="Search..."
              className=" bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-full"
             
              value={setValue}
              onChange={getSearchValue}
            />
          </div>
          
          {/* Suggestions UI */}
          {searchBarProducts?.length > 0 && searchValue.length > 0 && (
            <>
            <hr className="h-1 bg-gray-300 rounded-full mb-2" />
            <div className="space-y-2 max-h-56 overflow-auto font-satoshi">
              {searchBarProducts?.map((item: IProduct, index: number) => {
                return (
                  <Link
                    href={`/product/${item._id}`}
                    onClick={() => {
                      removeSearchValue();
                      setValueFunc(item.name);
                      setIsOpen(false);
                    }}
                    key={index}
                  >
                    <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <b>{item.name.slice(0, 3)}</b>
                      {item.name.slice(3)}
                    </div>
                  </Link>
                );
              })}
              
            </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
