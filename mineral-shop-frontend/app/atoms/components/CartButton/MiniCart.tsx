"use client";

import { useCartContext } from "../../context/CartContext";
import MiniProductCard from "./MiniProductCard";

const MiniCart = () => {
  const { productsInCart } = useCartContext();

  return (
    <div className='minicart'>
      {productsInCart.map((product) => (
        <MiniProductCard key={product.id} product={product} />
      ))}
    </div>
  )
};

export default MiniCart;