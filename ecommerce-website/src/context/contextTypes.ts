import { IProduct } from "@/types/productType";
type Product = IProduct[] | [];

export interface IFilterAction {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export interface IProductContext {
    isLoading: boolean;
    isError: boolean;
    products: IProduct[];
    newArrivals: IProduct[];
}


export interface ICartStates {
    cart: [];
    databaseCart: [];
    totalItems: string;
    totalQuantity: number;
}
export interface ICartContext extends ICartStates {

    addToCart: (color: string, size: string, quantity: number, product: IProduct) => void;
    removeToCart: (id: string, color: string, size: string) => void
    clearCart: () => void
}

//Filter context types

export interface IFilterStates {
    isLoading: boolean;
    isError: boolean;
    allProducts: Product;
    sortingProducts: Product;
    filterProducts: Product;
    searchBarProducts: Product;
    sortingProductsValue: string;
    searchValue: string;
    setValue: string;
    filterCategories: string[];
    filterPrice: number[];
    filterColors: string[];
    filterSizes: string[];


}
export interface IFilterContext extends IFilterStates {
    sortingProductsValueFunc: (value: string) => void;
    getSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeSearchValue: () => void;
    setValueFunc: (value: string) => void;
    applyFilters: () => void;
    getFilterValues: (type: string, categories: string[]|number[]) => void
}

//Auth context types
export type DialogType = 'Login' | 'signUp';


export interface IDialogContextType {
    isOpen: boolean;
    dialogType: DialogType;
    openDialog: (type: DialogType) => void;
    closeDialog: () => void;
    checkTokenFunc: () => void;
    isLoggedIn: boolean;
}


export interface IUserData {
    name: string;
    email: string;
    id: string;
}
export interface IUserContext {
    isLoading: boolean;
    userData: IUserData | undefined;
    loadUserData: () => void;
    isUserLoggedIn: boolean;
}