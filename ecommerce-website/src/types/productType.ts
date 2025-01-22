export interface IProduct {
    _id:string;
    name:string;
    description:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image:any;
    price:number;
    discountPercent:number;
    colors:string[];
    sizes:string[];
    isNew:boolean;
    stockQuantity:number;
    unitSold:number;
    subCategory:string;
}