import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";
import { ProductVariant } from "./productVariant";
import { Tabs, ReviewHead } from "./ProductReview/reviewTop";
import { ProductReviewCards } from "./ProductReview/productReviewCards";
import {ProductSuggestions} from "./productSuggestion/productSuggestion";
import {ChevronRightIcon} from "lucide-react"
import { IProduct } from "@/types/productType";
export const ProductDetailComp = ({product}: {product: IProduct}) => {
  // console.log("productDetailedCOmponent",product)

const {name, image, description,price, discountPercent, subCategory} = product

  return (
    <>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto text-[14px]">
        <hr className="mb-8" />
        <div className="my-4 font-satoshi text-gray-600 text-[16px] flex items-center gap-1">
          <span>Home</span>
          {/* <ChevronRightIcon size={20}/>
          <span>Shop</span>
          <ChevronRightIcon size={20}/>
          <span>Men</span> */}
          <ChevronRightIcon size={20}/>
          <span className="text-black capitalize">{subCategory}</span>
        </div>
      </div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto  ">
        {/* Image Section */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImage images= {image} />
          <div className="">
            {/* Product Info Section */}
            <ProductInfo info = {{name,description, price,discountPercent}}/>
            {/* Product Variant Section */}
            <ProductVariant product = {product}/>
          </div>
        </div>
        <hr className="mt-14  border-none" />
        <div className="space-y-8">
          <Tabs />
          <ReviewHead />
          <ProductReviewCards />
          <ProductSuggestions product={product}/>
        </div>
      </div>
    </>
  );
};
