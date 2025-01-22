import React from "react";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { IProduct } from "@/types/productType";
import Link from "next/link";



export const ProductCard: React.FC<{ product: IProduct }> = ({
  product,
}) => {
  // console.log(productInfo);
  return (
    <>
    <Link href={`/product/${product._id}`}>
    <div className=" overflow-hidden mx-auto font-satoshi">
      {/* Image Section */}
      <div className=" rounded-[2rem] flex justify-center items-center ">
        <Image
          src={urlFor(product.image).width(300).height(298).url()}
          width={300}
          height={300}
          alt={product.name}
          className="object-cover object-center rounded-[2rem] shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <div className="px-4 pb-4 mt-4 ">
        {/* Title */}
        <h3 className="font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-x-3  text-gray-600 mt-1">
          <div className="flex items-center text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} size={16} fill="currentColor" />
            ))}
            {/* <Star size={16} className="text-gray-300" />Partial Star */}

            {/* <FaStarHalf
                               size={16}
                               fill="currentColor"
                               className=" text-yellow-500"
                               // Half-filled
                             /> */}
          </div>
          <span className="text-[12px] sm:text-[14px] font-satoshi">
            {/* {item.rating}
                           {item.halfRating ? <span>.5</span> : <span>.0</span>} */}
            4/5
          </span>
        </div>

        {/* Price and Discount */}
        <div
          className="flex items-center space-x-2 mt-2 font-satoshi text-[20px]
                     sm:text-[24px]"
        >
          <span className=" font-bold text-black">${product.price}</span>
          {product.discountPercent > 0 && (
            <>
              <span className="line-through  font-bold  text-gray-500">
                {Math.round((product.discountPercent / 100) * product.price)}
              </span>
              <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
                {product.discountPercent}%
              </span>
            </>
          )}
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};
