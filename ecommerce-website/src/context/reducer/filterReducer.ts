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

            }
        case "sortingProducts":
            
            const { allProducts, sortingProductsValue } = state;
            const tempSortData = [...allProducts];
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
                searchValue: "",
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