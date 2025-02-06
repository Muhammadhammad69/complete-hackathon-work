import React from "react";
import { IStates } from "@/context/productContext/productContext";
import { useProductContext } from "@/context/productContext/productContext";
import { IProduct } from "@/types/productType";
import { ProductCard } from "@/components/productcard/card";
import Link from "next/link";
import { Loader } from "../loaders/loader";
export const Topselling = () => {
  const { isLoading, products } = useProductContext() as IStates;
  const productInfo: IProduct[] = products
    .sort((a: IProduct, b: IProduct) => b.unitSold - a.unitSold)
    .slice(0, 4);
  
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto mt-12 mb-4">
        <div className="my-8">
          <h1 className="font-oswald text-[48px] font-bold text-center">
            TOP SELLING
          </h1>
        </div>
        {isLoading === true ? <Loader  info={{height:"h-[10rem]",size:100}} /> :( 
        <>
        <div className="sm:grid grid-cols-1 xs:grid-cols-2 cs:grid-cols-3 xl:grid-cols-4 gap-8 hidden justify-items-center">
          {productInfo.map((product: IProduct, i:number) => {
            return (
              <ProductCard product={product} key={i}/>
            );
          })}
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-8 sm:hidden">
        {productInfo.slice(0, 2).map((product: IProduct, i:number) => {
            return (
              // <Link >
            <ProductCard  product={product} key={i} />
              // </Link>
          );
          })}
        </div>
        </>
        )} 
        <div className="flex justify-center mt-4">
          <Link href={"/shop"}>
            <button className="text-[16px] font-satoshi px-12 py-2  sm:py-4 border-2 border-gray-300  sm:w-[13.5rem] hover:font-bold hover:underline hover:underline-offset-4 rounded-[2rem]">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
