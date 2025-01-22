
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state:any, action:any) => {
   if(action.type === "addToCart"){
    const {color, size, quantity, product} = action.payload;
   //  console.log("global ", color);
    
    const cartItem = {
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      color,
      size,
      quantity,
      stockQuantity: product.stockQuantity,

    }
    return {
      ...state,
      cart: [...state.cart, cartItem]
    }
   }
   return state
}