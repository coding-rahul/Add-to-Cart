import React, { createContext, useEffect, useReducer } from 'react';
import "./Cart.css";
import CartContext from "./CartContext";
import { products } from "./Product";
import { Reducer } from "./Reducer";

export const CartData = createContext();

const intialState = { items: products, totalAmount: 0, totalItem: 0 };
const Cart = () => {
  // const [items, setitems] = useState(products);
  const [state, dispatch] = useReducer(Reducer, intialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE",
      payload: id,
    })
  };
  const clearCart = () => {
    return dispatch({
      type: "REMOVEALL",
    })
  };
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      Payload: id,
    })
  };
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    })
  };
  useEffect(() => {
    dispatch({ type: "TOTAL" })
  }, [state.items]);
  
  return (
    <CartData.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <CartContext />
    </CartData.Provider>
  )
}
export default Cart;