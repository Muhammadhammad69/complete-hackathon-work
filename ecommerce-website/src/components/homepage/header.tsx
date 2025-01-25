"use client";
import React from "react";
import Link from "next/link";
import { X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import Sidebar from "../sidebar";
import { useFilterContext } from "@/context/filterContext/filtercontext";
import { IFilterContext } from "@/context/contextTypes";
import { IProduct } from "@/types/productType";
export const TopHeader = () => {
  return (
    <div className="bg-black">
      <div className="w-[95%] h-[38px] 2xl:w-[1400px] text-[12px]  text-white mx-auto flex justify-center items-center relative sm:text-[14px]">
        <div className="flex gap-2">
          <p>Sign up and get 20% off to your first order.</p>

          <Link href={""} className="hover:underline hover:underline-offset-2">
            Sign Up Now
          </Link>
        </div>
        <div className="absolute right-0 top-[5px] hidden sm:block">
          <X strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const {searchValue, getSearchValue, searchBarProducts, removeSearchValue } =
    useFilterContext() as IFilterContext;
  // console.log("headers", searchParams)
  // const getSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log("changed", event.target.value);
  // };
  // console.log("headerSearchData", searchBarProducts);
  return (
    <div >
      <div className="uppercase text-[32px] mr-2 font-oswald items-center flex justify-center text-center smc:hidden">

      <h1>Shop.co</h1>
      </div>
      <nav className="w-[95%] 2xl:w-[1400px] flex justify-between items-center   py-4 mx-auto ">
        {/* Logo */}

        <div className=" font-oswald items-center flex ">
          {/* <Menu strokeWidth={1.75} className="self-center sm:hidden" /> */}
          <Sidebar />

          <Link href={"./"} className="hidden smc:block">
            <h1 className="text-[30px] sm:text-[32px] mr-2">SHOP.CO</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden cs:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black flex">
            Shop
            <ChevronDown strokeWidth={1.75} />
          </Link>
          <Link href="/sale" className="hover:text-black">
            On Sale
          </Link>
          <Link href="/newarrivals" className="hover:text-black">
            New Arrivals
          </Link>
          {/* <Link href="#" className="hover:text-black">
            Brands
          </Link> */}
        </div>

        {/* Search Bar */}
        <div className="self-end justify-self-end  w-full max-w-[70%] smc:max-w-[60%] cs:max-w-[30%] relative ">
          {/* hidden sm:flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-full max-w-[60%] cs:max-w-[30%]   */}
          <div className="  bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-full flex">
            <Search className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              value = {searchValue}
              onChange={getSearchValue}
            />
          </div>
          {searchBarProducts?.length > 0 && searchValue.length > 0 && (

         
          <ul className="absolute bg-white border border-gray-400 w-full mt-2  rounded-[0.5rem] z-10 ">
            {searchBarProducts?.map((item: IProduct, index:number) => {
              return (
                <Link href={`/product/${item._id}`} onClick={removeSearchValue}  key={index}>
                  <li className="pl-8 pr-2 py-1 border-b-2 border-gray-200 relative cursor-pointer hover:bg-slate-100 hover:text-gray-900">
                    <svg
                      className="absolute w-4 h-4 left-2 top-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <b>{item.name.slice(0, 3)}</b>
                    {item.name.slice(3)}
                  </li>
                </Link>
              );
            })}
          </ul> 
        )}
        </div>

        {/* Icons */}
        <div className="ml-2 flex items-center space-x-3 text-gray-700">
          {/* <Search className="hover:text-black  sm:hidden" /> */}
          <Link href={"/cart"}>
            <ShoppingCart className="hover:text-black cursor-pointer" />
          </Link>
          <User className="hover:text-black cursor-pointer stroke-2" />
        </div>
      </nav>
    </div>
  );
};
