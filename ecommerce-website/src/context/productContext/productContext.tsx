"use client";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { reducer } from "../reducer/productReducer";
import axios from "axios";

export interface IStates {
  isLoading: boolean;
  isError: boolean;
  products: [];
  newArrivals: [];
}
export const ProductContext = createContext({}) ;
const initialState: IStates = {
  isLoading: false,
  isError: false,
  products: [],
  newArrivals: [],

};
export const ProductProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "isLoading" });
      try {
        const response = await axios.get("/api/products");
        const { data } = response.data;
        dispatch({ type: "Success", payload: data });
        // console.log("message ==>", message);
      } catch (error) {
        console.log(error);
        dispatch({ type: "isError" });
      }
    };
    getProducts();
  }, []);

  // console.log("state ==>",state);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext };
