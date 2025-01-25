import {IProduct} from "@/types/productType";
type Product =   IProduct[] | [];

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
    totalItems: string;
    totalQuantity: string;
  }
export interface ICartContext extends ICartStates{
    
    addToCart : (color:string, size:string, quantity:number, product:IProduct) => void;
    removeToCart : (id:string, color:string, size:string) => void
    clearCart : () => void
}

//Filter context types

export interface IFilterStates {
    isLoading: boolean;
    isError:boolean;
    allProducts:Product;
    sortingProducts:Product;
    filterProducts: Product;
    searchBarProducts:Product;
    sortingProductsValue:string;
    searchValue:string;
}
export interface IFilterContext extends IFilterStates{
    sortingProductsValueFunc: (value: string) => void;
    getSearchValue : (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeSearchValue : () => void
}