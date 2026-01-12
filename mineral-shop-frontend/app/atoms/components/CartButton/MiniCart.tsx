"use client";

import Link from "next/link";
import { useCartContext } from "../../context/CartContext";
import MiniProductCard from "./MiniProductCard";

const MiniCart = () => {
  const { productsInCart, totalPrice } = useCartContext();

  return (
    <div className='minicart'>
      <p className="text-[1.4rem] font-medium mb-4">Mój koszyk</p>
      {productsInCart.length === 0 ? (
        <span>Koszyk jest pusty</span>
      ) : (
        <>
          <div className="minicart__product-list-container">
            {productsInCart.map((product) => (
              <MiniProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mb-2 flex">
            <span>Do zapłaty:</span>
            <span className="font-medium ml-auto">{totalPrice} zł</span>
          </div>

          <Link
            href="/cart"
            className="custom-button"
          >
            Koszyk
          </Link>
        </>
      )}
    </div>
  );
};

export default MiniCart;