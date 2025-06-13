'use client';
import { createContext, useReducer, useContext } from "react";
import { cartReducer, initialState } from "./cartReducer";

export const CartCountContext = createContext();

export const CartCountProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartCountContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartCountContext.Provider>
  );
};


