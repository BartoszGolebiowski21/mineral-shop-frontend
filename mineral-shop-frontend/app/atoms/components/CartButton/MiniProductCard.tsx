import React from 'react';
import { Product } from '../../types/ProductTypes'
import { useCartContext } from '../../context/CartContext';

interface MiniProductCardProps {
  product: Product;
}

const MiniProductCard: React.FC<MiniProductCardProps> = ({ product }) => {
  const {removeFromCart } = useCartContext();

  return (
    <span>
      {product.name}
      <div
        onClick={() => removeFromCart(product.id)}
      >
        X
      </div>
    </span>
  )
};

export default MiniProductCard;