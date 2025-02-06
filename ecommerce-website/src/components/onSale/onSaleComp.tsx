"use client";
import React from "react";
import { IProduct } from "@/types/productType";
import { ProductCard } from "../productcard/card";
import { useProductContext } from "@/context/productContext/productContext";
import { IProductContext } from "@/context/contextTypes";
import { Loader } from "../loaders/loader";

export const OnSale = () => {
  const { isLoading, products } = useProductContext() as IProductContext;
  const saleProducts = products.filter((product: IProduct) => {
    return product.discountPercent > 0;
  });
if(isLoading) return <div><Loader info={{height:"min-h-screen",size:150}}/></div>
  return (
    <div className=" w-[95%] 2xl:w-[1400px] mx-auto">
      <hr />
      <div className="grid xxs:grid-cols-2 md:grid-cols-3 dl:grid-cols-4 gap-4 mt-8">
        {saleProducts.map((product: IProduct, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </div>
    </div>
  );
};
