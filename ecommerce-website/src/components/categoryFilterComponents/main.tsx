"use client";
import { ColorPicker } from "./colorpicker";
import { DressStyle } from "./dressStyle";
import { Filter } from "./filter";
import { StaticPriceRange } from "./priceRange";
import { SizeSelector } from "./sizeSelector";
import { useProductContext } from "@/context/productContext/productContext";
import { IProductContext } from "@/context/contextTypes";
import { IProduct } from "@/types/productType";
export const MainFilter = () => {
  const { isLoading, products } = useProductContext() as IProductContext;
  const category = Array.from(new Set(
    products.map((product) => product.subCategory.toLowerCase()))
  );
  const colors = Array.from(new Set(
    products.map((product, index) =>
      product.colors[product.colors.length > index ? index : 0].toLowerCase()
    )
  ));
  const sizes = Array.from(new Set(
    products.map((product, index) =>
      product.sizes[product.sizes.length > index ? index : 0].toLowerCase()
    )
  ));
  const priceRange: IProduct[] = products.sort((a, b) => {
    return a.price - b.price;
  });
  let minMaxPrice: { minPrice: number; maxPrice: number } = { minPrice: 0, maxPrice: 0 };
  if (priceRange.length > 0) {
    minMaxPrice = {
      minPrice: priceRange[0].price,
      maxPrice: priceRange[priceRange.length - 1].price,
    };
    // console.log("price Range", minMaxPrice);
  }
//   console.log("sizes", sizes);
//   console.log("colors", colors);
//   console.log("category", category);
//   console.log("productsMain", products);
  if (isLoading) return;
  return (
    <div className="w-[295px] min-h-[600px] max-h-[1330px] border py-6 rounded-[20px] border-borderColor">
      <Filter category={category} />
      <StaticPriceRange  price ={minMaxPrice} />
      <ColorPicker colors={colors} />
      <SizeSelector sizes = {sizes} />
      <DressStyle />
    </div>
  );
};
