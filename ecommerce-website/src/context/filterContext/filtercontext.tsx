"use client";
import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "../productContext/productContext";
import { IProductContext, IFilterStates } from "../contextTypes";
import reducer from "../reducer/filterReducer";
import { IFilterContext } from "../contextTypes";
const FilterContext = createContext<IFilterContext | undefined>(undefined);

const initialState: IFilterStates = {
  isLoading: false,
  isError: false,
  allProducts: [],
  filterProducts: [],
  sortingProducts: [],
  searchBarProducts: [],
  sortingProductsValue: "products",
  searchValue: "",
  setValue: "",
  filterCategories: [],
  filterPrice: [],
  filterColors: [],
  filterSizes: [],
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
    // console.log("value", value);
  };
  //searchbar products value function

  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("hi", event.target.value);

    dispatch({ type: "setSearchValue", payload: event.target.value });
  };
  const removeSearchValue = () => {
    dispatch({ type: "removeSearchValue" });
  };
  const setValueFunc = (setValue: string) => {
    // console.log("hi set Valeu", setValue);
    dispatch({ type: "setValue", payload: setValue });
  };
  const getFilterValues = (type: string, filterValues: string[] | number[]) => {
    // console.log("getting categories ==>", filterValues);
    switch (type) {
      case "category":
        state.filterCategories = filterValues as string[];
        break;
      case "price":
        state.filterPrice = filterValues as number[];
        break;
      case "color":
        state.filterColors = filterValues as string[];
        break;
      case "size":
        state.filterSizes = filterValues as string[];
        break;
      default:
        break;
    }
  };
  const applyFilters = () => {
    dispatch({ type: "applyFilter" });
  };
  useEffect(() => {
    dispatch({ type: "sortingSearchProducts" });
  }, [state.searchValue]);
  useEffect(() => {
    dispatch({ type: "sortingProducts" });
  }, [state.sortingProductsValue]);
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: "isLoading" });
      return;
    }

    dispatch({ type: "loadProduct", payload: products });
  }, [products, isLoading]);

  return (
    <FilterContext.Provider
      value={
        {
          ...state,
          sortingProductsValueFunc,
          getSearchValue,
          removeSearchValue,
          setValueFunc,
          applyFilters,
          getFilterValues,
        } as IFilterContext
      }
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
