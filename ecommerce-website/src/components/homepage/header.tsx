"use client";
import React from "react";
import Link from "next/link";
import { X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import Sidebar from "../sidebar";

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
  // console.log("headers", searchParams)
  return (
    <div>
      <nav className="w-[95%] 2xl:w-[1400px] flex justify-between items-center   py-4 mx-auto">
        {/* Logo */}

        <div className=" font-oswald items-center flex ">
          {/* <Menu strokeWidth={1.75} className="self-center sm:hidden" /> */}
          <Sidebar />
          
          <Link href={"./"}>
          
            <h1 className="text-[32px] mr-2">SHOP.CO</h1>
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
        <div className="hidden sm:flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-full max-w-[60%] cs:max-w-[30%]  ">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 text-gray-700">
          <Search className="hover:text-black  sm:hidden" />
          <Link href={"/cart"}>
          <ShoppingCart className="hover:text-black cursor-pointer" />
          </Link>
          <User className="hover:text-black cursor-pointer stroke-2" />
        </div>
      </nav>
    </div>
  );
};
