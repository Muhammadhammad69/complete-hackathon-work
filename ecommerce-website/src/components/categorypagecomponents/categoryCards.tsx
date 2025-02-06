"use client";
import { ProductCard } from "../productcard/card";
import { IProduct } from "@/types/productType";
import { useSearchParams } from "next/navigation";
import { Pagination } from "./categoryEnd";
import { IFilterContext, IProductContext} from "@/context/contextTypes";
import {useFilterContext} from "@/context/filterContext/filtercontext"
import { useProductContext } from "@/context/productContext/productContext";
import {Loader} from "@/components/loaders/loader"
import { useRouter } from "next/navigation";
let totalProducts: number;
const defaultPage = 1; 
const productsPerPage = 9;
export let totalPage: number;

export const CategoryCards = () => {
  // console.log(searchParams);
  const router = useRouter();
  const {products} = useProductContext() as IProductContext
  const {isLoading, sortingProducts} = useFilterContext() as IFilterContext;
  // console.log("sortingProducts", sortingProducts);
  
  // console.log("sortingProducts", products);
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  // console.log("search", searchPage);
  const page: number = searchPage ? Number(searchPage) : defaultPage;
  // console.log("pagesNumber", page);
  const productInfo: IProduct[]  = sortingProducts.length===0 ? products : sortingProducts;
  totalProducts = sortingProducts.length === 0 ? products.length : sortingProducts.length;
  totalPage = Math.ceil(totalProducts / productsPerPage);
  if (sortingProducts.length > 0 && sortingProducts.length < 10) {
    router.push("/shop")
 }
  if(isLoading) return <div><Loader  info={{height:"min-h-screen",size:150}}/></div>
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
