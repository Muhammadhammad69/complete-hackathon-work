
import { ProductCard } from "@/components/productcard/card";
import { useProductContext } from "@/context/productContext/productContext";
import { IProductContext } from "@/context/contextTypes";
import { IProduct } from "@/types/productType";
export const ProductSuggestions = ({ product }: { product: IProduct }) => {
  // console.log("product getting", product.subCategory);
  const { isLoading, products } = useProductContext() as IProductContext;
  const productInfo: IProduct[] = products
    .filter(
      (item) =>
        item.subCategory.toLowerCase() === product.subCategory.toLowerCase()
    )
    .slice(0, 4);
  // console.log("productInfo", productInfo);
 
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="mb-10">
        <h1 className="mt-16 uppercase font-oswald text-[30px] sm:text-[48px] font-bold text-center">
          You Might Also Like
        </h1>
      </div>
      <div className="sm:grid grid-cols-1 xs:grid-cols-2 cs:grid-cols-3 xl:grid-cols-4 gap-8 hidden">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        productInfo.map((Item: any, i) => {
          return <ProductCard key={i} product={Item} />;
        })
        }
      </div>
      <div className="grid grid-cols-2 gap-8 sm:hidden">
        {productInfo.slice(0, 2).map((product: IProduct, i: number) => {
          return (
            // <Link >
            <ProductCard product={product} key={i} />
            // </Link>
          );
        })}
      </div>
    </>
  );
};

{
  /* <>
        {productInfo.map((item, i) => {
          return (
            <div className=" overflow-hidden mx-auto font-satoshi" key={i}>
              {/* Image Section */
}
// <div className="h-[240px] sm:h-[298px] rounded-[2rem] bg-[#f0eeed]">
//   <Image
//     src={`${item.image}`}
//     width={300}
//     height={300}
//     alt="T-SHIRT WITH TAPE DETAILS"
//     // xs:w-full h-[240px] sm:h-[298px]
//     className=" object-contain h-full  rounded-[2rem] "
//   />
// </div>

{
  /* Details Section */
}
//               <div className="px-4 pb-4 mt-4 ">
//                 {/* Title */}
//                 <h3 className="font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
//                   {item.title}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center gap-x-3  text-gray-600 mt-1">
//                   <div className="flex items-center text-yellow-500">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <FaStar key={i} size={16} fill="currentColor" />
//                     ))}
//                     {/* <Star size={16} className="text-gray-300" />Partial Star */}
//                     {item.halfRating && (
//                       <FaStarHalf
//                         size={16}
//                         fill="currentColor"
//                         className=" text-yellow-500"
//                         // Half-filled
//                       />
//                     )}
//                   </div>
//                   <span className="text-[12px] sm:text-[14px] font-satoshi">
//                     {item.rating}
//                     {item.halfRating ? <span>.5</span> : <span>.0</span>}
//                     /5
//                   </span>
//                 </div>

//                 {/* Price and Discount */}
//                 <div
//                   className="flex items-center space-x-2 mt-2 font-satoshi text-[20px]
// sm:text-[24px]"
//                 >
//                   <span className=" font-bold text-black">{item.price}</span>
//                   {item.discountPrice && (
//                     <>
//                       <span className="line-through  font-bold  text-gray-500">
//                         $260
//                       </span>
//                       <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
//                         -20%
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </div>
// </div>
// );
// })}
// </> */}
