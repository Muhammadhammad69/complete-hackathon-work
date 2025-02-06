"use client";
import React from "react";
import Link from "next/link";
import { X, ShoppingCart, ChevronDown } from "lucide-react";
import Sidebar from "../sidebar";
import { useCart } from "@/context/cartContext/cartContext";
import {ICartContext } from "@/context/contextTypes";
import { DropdownMenuDemo } from "@/components/userComponent/profileComponents/profile"
import SearchBar from "../searchBar/search";
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
  const { totalQuantity } = useCart() as ICartContext;
  return (
    <div>
      <nav className="w-[95%] 2xl:w-[1400px] flex justify-between items-center   py-4 mx-auto relative">
        {/* Logo */}

        <div className=" font-oswald items-center flex ">
          {/* <Menu strokeWidth={1.75} className="self-center sm:hidden" /> */}
          <Sidebar />

          <Link href={"./"} className="">
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
        
        

        {/* Icons */}
        <div className="ml-2 flex items-center text-gray-700  w-full  smc:max-w-[85%] cs:max-w-[40%] space-x-3   absolute sm:static right-0">
        <div className=" w-full">
          <SearchBar />
        </div>
          {/* <Search className="hover:text-black  sm:hidden" /> */}
          <Link href="/user/cart" className="relative">
            {totalQuantity > 0 && (
              <span className="absolute -top-4 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-red-500 rounded-full text-[10px]">
                {totalQuantity}
              </span>
            )}
            <ShoppingCart
              className=" hover:text-black cursor-pointer text-gray-700"
              size={26}
            />
          </Link>
          <Link href={"#"} className="">
          <DropdownMenuDemo />
          {/* <User
            className="hover:text-black cursor-pointer stroke-2 "
            size={26}
            
            /> */}
            </Link>
        </div>
      </nav>
    </div>
  );
};
