import { IProduct } from "@/types/productType";
import { IFilterStates, IFilterAction } from "../contextTypes";

const reducer = (state: IFilterStates, action: IFilterAction) => {
    switch (action.type) {
        case "isLoading":
            return {
                ...state,
                isLoading: true
            }
        case "setSortingValue":
            return {
                ...state,
                sortingProductsValue: action.payload
            }
        case "loadProduct":
            const productList = action.payload ?? [];
            return {
                ...state,
                isLoading: false,
                allProducts: [...productList],
                filterProducts: [...productList],

            }
        case "sortingProducts":
            
            const {sortingProductsValue, filterProducts } = state;
            const tempSortData = [...filterProducts];
            // console.log("sorting reducer before product", state.sortingProducts)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sortingProductsFunc = (a: any, b: any) => {
                switch (sortingProductsValue) {
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    case "high-to-low":
                        return b.price - a.price;
                    case "low-to-high":
                        return a.price - b.price;
                    default:
                        return;
                }
            }
            const newSortData = tempSortData.sort(sortingProductsFunc)
            return {
                ...state,
                sortingProducts: [...newSortData]
            }
        case "setSearchValue":
            return {
                ...state,
                setValue: action.payload,
                searchValue: action.payload
            }
        case "sortingSearchProducts":
            // console.log("sorting Case", state.searchValue)
            let newSearchData;

            const { searchValue } = state;
            const tempSearchData = [...state.allProducts]
            if (searchValue.length > 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newSearchData = tempSearchData.filter((item: any) => {
                    return item.name.toLowerCase().includes(searchValue.toLowerCase())
                })
            } else {
                return {
                    ...state,
                    searchBarProducts: []
                };
            }
            return {
                ...state,
                searchBarProducts: [...newSearchData]
            }
        case "removeSearchValue":
            return {
                ...state,
                searchValue:"",
                setValue: "",
                searchBarProducts: [],
            }
        case "setValue":
            return {
                ...state,
                setValue:action.payload
            }
        case "applyFilter":
            
            
            let tempFilterData = [...state.allProducts];
            const { filterCategories, filterPrice, filterColors, filterSizes } = state;
            // console.log("filterPrice", filterCategories);
            // console.log("BEFORE TEMP DATA", tempFilterData);
            tempFilterData = tempFilterData.filter((item:IProduct) => {
                let match = true;
                if(filterCategories.length > 0 && !filterCategories.includes(item.subCategory.toLowerCase())) match = false;
                if(filterColors.length > 0 && filterColors.every((color) => !item.colors.includes(color.toLowerCase()))) match = false;
                if(filterSizes.length > 0 && filterSizes.every((size) => !item.sizes.includes(size.toLowerCase()))) match = false;
                if(filterPrice.length > 0 && (filterPrice[0] > item.price || filterPrice[1] < item.price)) match = false;
                return match;
            })
            // console.log("AFTER TEMP DATA", tempFilterData);
            return {
                ...state,
                sortingProducts: [...tempFilterData],
                filterProducts: [...tempFilterData]
            }
        case "isError":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default reducer