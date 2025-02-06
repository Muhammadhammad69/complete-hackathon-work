"use client";
import React from "react";
import { IProduct } from "@/types/productType";
import { ProductCard } from "@/components/productcard/card";
import { useProductContext } from "@/context/productContext/productContext";
import { IStates } from "@/context/productContext/productContext";
import { Loader } from "../loaders/loader";


export const ArrivalsPage = () => {
  const { isLoading, newArrivals } = useProductContext() as IStates;
  // console.log("newArrivals ==>", newArrivals);
  if(isLoading) return <div><Loader info={{height:"min-h-screen",size:150}}/></div>
  return (
    <div className=" w-[95%] 2xl:w-[1400px] mx-auto">
      <hr />

      {/* <div className="mt-4 font-satoshi text-gray-600 text-[16px] flex items-center gap-1">
        <span>Home</span>
        <ChevronRightIcon size={20} />
        <span className="text-black">Arrivals</span>
      </div> */}
      <div className="grid xxs:grid-cols-2 md:grid-cols-3 dl:grid-cols-4 gap-4 mt-8">
        {newArrivals.map((product: IProduct, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </div>
    </div>
  );
};
