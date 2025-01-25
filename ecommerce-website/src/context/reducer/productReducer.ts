import { IStates } from "../productContext/productContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state: IStates, action: any) => {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: true };
    case "Success":
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isNew = action.payload.filter((item: any) => {
        return item.isNew === true
      })
      state.newArrivals = isNew;
      return { ...state, isLoading: false, products: action.payload };
    case "isError":
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
}