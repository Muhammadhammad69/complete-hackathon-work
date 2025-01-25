

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state: any, action: any) => {

  switch (action.type) {

    case "addToCart":
      const { color, size, quantity, product } = action.payload;
      let itemUpdated = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedCart = state.cart.map((item: any) => {
        if (item.id === product._id && item.color === color && item.size === size) {
          // Update quantity if the same item exists
          itemUpdated = true; // Mark as updated
          return {
            ...item,
            quantity: item.quantity + quantity, // Update quantity
          };
        }
        return item; // Return unchanged item
      });

      if (itemUpdated) {
        // If an item was updated, return the updated cart
        return {
          ...state,
          cart: [...updatedCart],
          totalQuantity: state.totalQuantity + quantity
        };
      }

      const cartItem = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        discountPercent: product.discountPercent,
        color,
        size,
        quantity,
        stockQuantity: product.stockQuantity,

      }
      return {
        ...state,
        cart: [...state.cart, cartItem],
        totalQuantity: state.totalQuantity + quantity
      }
    case "removeToCart":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateCart = state.cart.filter((item: any) => !(item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size))
      let newTotalQuantity = 0;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateCart.forEach((item: any) => {
        newTotalQuantity += item.quantity;
      });
       
      return {
        ...state,
        cart: [...updateCart],
        totalQuantity: newTotalQuantity
      }
    case "clearCart":
      return {
        ...state,
        cart: [],
        totalQuantity: 0
      }
    default:
      return state
  }


  //  }

}