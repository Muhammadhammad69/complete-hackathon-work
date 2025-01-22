import { Star } from "lucide-react";
interface ProductInfo {
  name: string;
  description: string;
  price: number;
  discountPercent: number;
}
export const ProductInfo = ({ info }: { info: ProductInfo }) => {
  // console.log("productInfo", info);
  const { name, description, price, discountPercent } = info;

  return (
    <>
      <div className="font-satoshi">
        <h1 className="text-[24px] sm:text-[40px] font-bold font-oswald">
          {name}
        </h1>
        <div className="flex items-center space-x-2">
          {/* <span className="text-yellow-500"></span> */}
          {[...Array(4)].map((_, i) => {
            return (
              <Star
                key={i}
                fill="#FFC633"
                size={16}
                className="text-[#FFC633]"
              />
            );
          })}
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>
        <div className="flex items-center space-x-4 mt-3">
          <p className="text-xl font-bold">${price}</p>
          {discountPercent > 0 && (
            <>
              <p className="text-gray-500 line-through">${((price * discountPercent)/100)}</p>
              <span className="text-red-500 font-medium bg-[#ffebeb] text-[16px] py-1 px-4 rounded-[62px] ">
                {discountPercent}%
              </span>
            </>
          )}
        </div>
        <p className="text-gray-600 mt-3 text-[16px] font-normal line-clamp-3 ">
          {description}
        </p>
        <hr className="my-4 " />
      </div>
    </>
  );
};
