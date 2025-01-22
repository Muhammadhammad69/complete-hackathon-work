"use client";

import { createContext, useContext, useReducer } from "react";
import { IProduct } from "@/types/productType";
import { reducer } from "@/context/reducer/cartReducer";
const CartContext = createContext({});
interface ICart {
  cart: [];
  totalItems: string;
  totalQuantity: string;
}
const initialState: ICart = {
  cart: [],
  totalItems: "",
  totalQuantity: "",
};
export const CartProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (
    color: string,
    size: string,
    quantity: number,
    product: IProduct
  ) => {
    dispatch({
      type: "addToCart",
      payload: { color, size, quantity, product },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart };
