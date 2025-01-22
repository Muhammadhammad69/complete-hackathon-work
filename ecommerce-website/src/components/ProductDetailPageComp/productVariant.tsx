"use client";
import { useState } from "react";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { IProduct } from "@/types/productType";
import {useCart} from "@/context/cartContext/cartContext"
import {ICartContext} from "@/context/contextTypes"
export const ProductVariant = ({ product }: { product: IProduct }) => {
  const {addToCart} = useCart() as ICartContext;
  const { colors, sizes, stockQuantity } = product;
  // const stockQuantity = 2
  const sortOrder = ['S', 'M', 'L', 'XL', 'XXL'];
  const sortedSizes = sortOrder.filter((size) => sizes.includes(size));
  const [quantity, setQuantity] = useState(1);
  const [colorName, setColorName] = useState(colors[0]);
  const [isSize, setIsSize] = useState(sortedSizes[0]);
  // console.log(stockQuantity)
  const incrementQuantity = () => {
    if (quantity < stockQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      {/* Choose Color */}
      <div className="font-satoshi">
        <h3 className="text-lg font-medium">Select Colors</h3>
        <div className="flex space-x-3 mt-2">
          {/* {colors && ( */}

          
          {colors && colors.map((color: string, i:number) => {
            return (
              <button
              style={{ backgroundColor: color.toLowerCase() }}
                className={`w-8 h-8 rounded-full flex justify-center items-center
                  ${color.toLowerCase() === "white"? "border-black border":""}
                ${colorName.toLowerCase() === color.toLowerCase() ? "opacity-100" : ""}
               ${color.toLowerCase() === "black" ? "text-white" : "text-black"}  border-black `}
                
                onClick={()=>setColorName(color)}
                key={i}
              >
                {colorName.toLowerCase() === color.toLowerCase() && <Check size={20} />}
                {/* <Check size={20}  /> */}
              </button>
            );
          })}
        </div>
      </div>
      <hr className="my-5" />
      {/* Choose Size */}
      <div>
        <h3 className="text-lg font-medium">Choose Size</h3>
        {/* <div className="grid grid-cols-3 xs:flex gap-y-3 gap-x-4 mt-2"> */}
        <div className="flex flex-wrap gap-y-3 gap-x-4 mt-2">
          {sortedSizes.map((size) => (
            <button
              key={size}
              className={`w-12 h-12 p-1 flex justify-center items-center font-normal  border rounded-full 
                text-gray-700  
                ${size === isSize ? "bg-black text-white" : "bg-mainColor"}
                hover:bg-black hover:text-white text-[14px] xs:text-[16px] `}
                onClick={() => setIsSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <hr className="my-4" />
      {/* Quantity and Add to Cart */}
      <div className="flex items-center flex-col dl:flex-row dl:space-x-4 gap-y-4 xs:gap-y-2">
        <div className="flex items-center space-x-4 border rounded-[62px] px-4 py-2 bg-mainColor  justify-between w-full xs:w-1/2 md:w-[70%] dl:w-1/2">
          <button
            onClick={decrementQuantity}
            className={`text-gray-500 ${quantity > 1 ?"hover:text-black":   ""}`}
            disabled = {quantity > 1 ? false : true}
          >
            <Minus size={20} />
          </button>
          {Number(stockQuantity) === 0 ? (<span className="flex items-center justify-center text-[14px] text-center  font-satoshi">Out of Stock</span>):
          (<span className="text-[14px] sm:text-[20px]">{quantity}</span>)}
          <button
            onClick={incrementQuantity}
            className={`text-gray-500 ${quantity < stockQuantity ?"hover:text-black": "" } `
            }
            disabled = {quantity < stockQuantity ? false : true}
          >
            <Plus size={20} />
          </button>
        </div>
        {/* <Link href="/cart" className="flex w-full xs:w-[90%] md:w-full dl:w-1/2"> */}
        <button className="flex items-center space-x-4 bg-black text-white px-6 py-3 rounded-[62px] w-full xs:w-[90%] md:w-full dl:w-1/2  justify-center"
        onClick={() => addToCart(colorName,isSize,quantity,product)}
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};
