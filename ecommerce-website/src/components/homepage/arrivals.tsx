import { useProductContext } from "../../context/productContext/productContext";
import { IProduct } from "@/types/productType";
import { ProductCard } from "../productcard/card";
import Link from "next/link";
import {IProductContext} from "@/context/contextTypes"
import {Loader} from "../loaders/loader"
export const Arrivalsection = () => {
 
  const { isLoading, newArrivals } = useProductContext() as IProductContext;
  const productInfo: IProduct[] = newArrivals.filter(
    (item: IProduct, index: number) => {
      return index < 4;
    }
  );
  
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto">
        <div className="mt-12 mb-8">
          <h1 className="uppercase font-oswald text-[48px] font-bold text-center">
            New Arrivals
          </h1>
        </div>
        {isLoading === true ? <Loader info={{height:"h-[10rem]",size:100}} /> :(
          <>
        <div className="sm:grid grid-cols-1 xs:grid-cols-2 cs:grid-cols-3 xl:grid-cols-4 gap-8 hidden  justify-items-center">
          
          {productInfo.map((product: IProduct, i:number) => {
            return (
              // <Link >
            <ProductCard  product={product} key={i} />
              // </Link>
          );
          })}
        </div>
        <div className="grid grid-cols-2 gap-8 sm:hidden">
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
          <Link href= "/newarrivals">
          <button className="text-[16px] font-satoshi px-12 py-2 sm:py-4 border-2 border-gray-300 sm:w-[13.5rem] hover:font-bold hover:underline hover:underline-offset-4 rounded-[2rem]">
            View All
          </button>
          </Link>
        </div>
      </div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto mt-14">
        <hr />
      </div>
    </div>
  );
};
