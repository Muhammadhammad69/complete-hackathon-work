import {IProduct} from "@/types/productType";
export interface IProductContext {
    isLoading: boolean;
    isError: boolean;
    products: IProduct[];
    newArrivals: IProduct[];
    isSingleLoading: boolean;
    singleProduct:IProduct;
    setIsFetch: (isFetch: boolean) => void
    setIsId: (id: string) => void
}

export interface ICartContext {
    cart: [],
    totalItems:string;
    totalQuantity:string;
    addToCart : (color:string, size:string, quantity:number, product:IProduct) => void;
    
}