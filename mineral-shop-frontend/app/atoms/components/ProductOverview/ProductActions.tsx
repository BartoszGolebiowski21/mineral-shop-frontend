"use client";

import { useCartContext } from "../../context/CartContext";
import { Product } from "../../types/ProductTypes";

interface ProductActionsProps {
  product: Product;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {

  const { addToCart } = useCartContext();

  return (
    <div
      onClick={() => addToCart(product)}
      className="custom-button"
    >
      Do koszyka
    </div>
  )
};

export default ProductActions;