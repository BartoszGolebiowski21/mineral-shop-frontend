"use client";

import { useCartContext } from "../../context/CartContext";

const CartProductCounter = () => {
  const { productsInCart } = useCartContext();

  if (productsInCart.length === 0) return null;
  
  return (
    <div className='cart__product-counter'>
      {productsInCart.length}
    </div>
  )
};

export default CartProductCounter;