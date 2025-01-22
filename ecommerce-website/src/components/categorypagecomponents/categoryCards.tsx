"use client";
import { ProductCard } from "../productcard/card";
import { IProduct } from "@/types/productType";
import { useProductContext } from "@/context/product/productContext";
import { useSearchParams } from "next/navigation";
import { Pagination } from "./categoryEnd";
import {IProductContext} from "@/context/contextTypes"
let totalProducts: number;
const defaultPage = 1; 
const productsPerPage = 9;
export let totalPage: number;

export const CategoryCards = () => {
  // console.log(searchParams);
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  console.log("search", searchPage);

  const page: number = searchPage ? Number(searchPage) : defaultPage;
  // console.log("productType", productType);
  const { isLoading, products } = useProductContext() as IProductContext;

  // console.log(newArrivals);
  const productInfo: IProduct[] = products;
  totalProducts = products.length;
  totalPage = Math.ceil(totalProducts / productsPerPage);
  if(isLoading) return <div>Loading...</div>
  if (page < 1 || page > totalPage) return <div>Page not found</div>
  return (
    <>
      <div className="w-full grid grid-cols-[repeat(2,minmax(0,1fr))] sm:grid-cols-[repeat(3,minmax(0,1fr))]  md:grid-cols-[repeat(3,minmax(0,1fr))] lg:grid-cols-[repeat(2,minmax(0,1fr))] xl:grid-cols-[repeat(3,minmax(0,1fr))]  justify-around sm:justify-between gap-6 sm:gap-8">
        {productInfo
          .slice((page - 1) * productsPerPage, page * productsPerPage)
          .map((product: IProduct, i) => {
            return <ProductCard product={product} key={i} />;
          })}
      </div>
      <hr className="mt-4" />
      <Pagination page={page} />
    </>
  );
};
