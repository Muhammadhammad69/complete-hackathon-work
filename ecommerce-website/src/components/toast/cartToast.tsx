"use client";
import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useCart } from "@/context/cartContext/cartContext";
import { ICartContext } from "@/context/contextTypes";
import { ShoppingCart } from "lucide-react";
import { IProduct } from "@/types/productType";
interface CartItemInfo {
  colorName: string;
  isSize: string;
  quantity: number;
  product: IProduct;
}
export const CartToast = ({cartInfo}: {cartInfo: CartItemInfo}) => {
    const { colorName, isSize, quantity, product } = cartInfo;
//   console.log("cartInfo", cartInfo);
  const { addToCart } = useCart() as ICartContext;
//   console.log("totalQuantity", totalQuantity);
  const notify = () =>
    toast.success("Product Added Successfully", {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const buttonClickHandler = () => {
        addToCart(colorName, isSize, quantity, product);
        notify();
      }
  return (
    <>
      <button
        className="flex items-center space-x-4 bg-black text-white px-6 py-3 rounded-[62px] w-full justify-center"
        onClick={buttonClickHandler}
      >
        <ShoppingCart size={16} />
        <span>Add to Cart</span>
      </button>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
