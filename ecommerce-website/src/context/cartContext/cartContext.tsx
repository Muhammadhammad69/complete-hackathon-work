"use client";

import { createContext, useContext, useReducer } from "react";
import { IProduct } from "@/types/productType";
import { reducer } from "@/context/reducer/cartReducer";
import { ICartStates, ICartContext } from "../contextTypes";

const CartContext = createContext<ICartContext | undefined>(undefined);

const initialState: ICartStates = {
  cart: [],
  totalItems: "",
  totalQuantity: 0,

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
  const removeToCart = (id:string, color:string, size:string) => {
    dispatch({
      type: "removeToCart", payload:{id, color , size}});

  }
  const clearCart = () => {
    dispatch({
      type: "clearCart",
    });
  }
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart };
