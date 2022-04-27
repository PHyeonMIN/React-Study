import React, { useReducer } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (itme) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider vlaue={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
