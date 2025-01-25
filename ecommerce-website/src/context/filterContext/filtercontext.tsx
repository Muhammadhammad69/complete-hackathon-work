"use client";
import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "../productContext/productContext";
import { IProductContext, IFilterStates } from "../contextTypes";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext({});

const initialState: IFilterStates = {
  isLoading: false,
  isError: false,
  allProducts: [],
  filterProducts: [],
  sortingProducts: [],
  searchBarProducts: [],
  sortingProductsValue: "products",
  searchValue: "",
};

export const FilterContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isLoading, products } = useProductContext() as IProductContext;

 
  const [state, dispatch] = useReducer(reducer, initialState);

  // sorting products value function
  const sortingProductsValueFunc = (value: string) => {
    dispatch({ type: "setSortingValue", payload: value });
    console.log("value", value);
  };
//searchbar products value function
 const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
  // console.log("hi", event.target.value);
   dispatch({ type: "setSearchValue", payload: event.target.value });
 }
 const removeSearchValue = () => {
  dispatch({ type: "removeSearchValue" });
 }
 useEffect(() => {
  dispatch({ type: "sortingSearchProducts" });
 }, [state.searchValue]);
  useEffect(() => {
    dispatch({ type: "sortingProducts" });
    
  },[state.sortingProductsValue, products]);
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: "isLoading" });
      return;
    }

    dispatch({ type: "loadProduct", payload: products });
    
  }, [products, isLoading]);

  return (
    <FilterContext.Provider value={{ ...state, sortingProductsValueFunc, getSearchValue, removeSearchValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
