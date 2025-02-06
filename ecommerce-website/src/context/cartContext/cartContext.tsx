"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { IProduct } from "@/types/productType";
import { reducer } from "@/context/reducer/cartReducer";
import { ICartStates, ICartContext,IUserContext } from "../contextTypes";
import {useUserContext} from "../userContext/usercontext";
const CartContext = createContext<ICartContext | undefined>(undefined);

const initialState: ICartStates = {
  cart: [],
  databaseCart:[],
  totalItems: "",
  totalQuantity: 0,

};
export const CartProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {isUserLoggedIn, userData} = useUserContext() as IUserContext;
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if(isUserLoggedIn) {
      // console.log("userDataCart", userData);
      // dispatch({type:"checkDatabase",payload:userData});
      const fetchCartItems = async() => {
           try {
            const resp = await fetch(`/api/get-cart-items`,{
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({id:userData?.id}),
            })
            const data = await resp.json();
            const {cartItems} = data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cartItems.map((item:any)=>{
              addToCart(item.color,item.size,item.quantity,item.product);
            })
            // console.log("respData", cartItems);
           } catch (error) {
             console.log("error", error);
           }
      }
      fetchCartItems();
    }else {
      state.cart = [];
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isUserLoggedIn]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    
    // if(true) return;
    if(state.cart.length > 0) {
      const sendData =async () => {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const sendData = await fetch("/api/send-cart-items",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id:userData?.id , cart: state.cart}),
          
        });
      }
      sendData(); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cart]);
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
