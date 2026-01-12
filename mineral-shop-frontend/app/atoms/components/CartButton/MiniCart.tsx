"use client";

import { useCartContext } from "../../context/CartContext";
import MiniProductCard from "./MiniProductCard";

const MiniCart = () => {
  const { productsInCart } = useCartContext();

  return (
    <div className='minicart'>
      <p className="text-[1.4rem] font-medium mb-4">Mój koszyk</p>
      <div className="minicart__product-list-container">
        {productsInCart.length === 0 ? (
          <span>Koszyk jest pusty</span>
        ) : (
          productsInCart.map((product) => (
            <MiniProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MiniCart;