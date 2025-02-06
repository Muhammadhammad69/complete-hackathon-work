import { CartItem } from "../cartPageComponents/cartItems";
import { OrderSummary } from "@/components/cartPageComponents/cartItems";
import { ChevronRightIcon } from "lucide-react";
import { useCart } from "@/context/cartContext/cartContext";
import { ICartContext } from "@/context/contextTypes";
export const CartPage = () => {
  const { cart } = useCart() as ICartContext;
  // console.log("cart", cart);
  return (
    <div className="w-[95%] 2xl:w-[1400px] mx-auto ">
      <div className="space-y-8">
        <hr />
        <div className="font-satoshi text-gray-600 text-[16px] flex items-center">
          <span>Home</span>
          <ChevronRightIcon size={20} />
          <span className="text-black">Cart</span>
        </div>
      </div>
      <h1 className="text-[40px] font-bold font-oswald mt-4 mb-3">{cart.length === 0 ? "Your Cart is Empty" : "Your Cart"}</h1>
      <div className=" grid grid-cols-1 md:grid-cols-[minmax(0,60%),minmax(0,40%)] gap-4">
        {cart.length > 0 && (
          <>
            <CartItem cartItemInfo={cart} />
            <OrderSummary cartItem = {cart}/>
          </>
        )}

        <div></div>
      </div>
    </div>
  );
};
