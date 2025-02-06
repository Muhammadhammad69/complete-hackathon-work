"use client"
import React, {useEffect, useState} from "react";

import { ProductDetailComp } from "@/components/ProductDetailPageComp/productDetailPage";
import { IProduct } from "@/types/productType";
import { Loader } from "@/components/loaders/loader";
const Product = ({ params }: { params: { id: string } }) => {
  const [singleProduct, setSingleProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getProduct = async() =>{
      
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/products/${params.id}`, 
          {cache: "no-store"}
        );
        const data = await response.json();
        // singleProduct = data.singleProduct;
        
        setSingleProduct(data.singleProduct);
        setIsLoading(false);
        // console.log("singleProduct", );
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    }
    getProduct();
  }, [params.id]);
  
  if(isLoading) return <div><Loader info={{height:"min-h-screen",size:150}}/></div>
  if(isError) return <div>Something went wrong</div>

  if(singleProduct._id) return (
    <div>
      <ProductDetailComp product={singleProduct} />
    </div>
  );
};

export default Product;
