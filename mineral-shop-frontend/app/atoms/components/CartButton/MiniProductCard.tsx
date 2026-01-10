import React from 'react';
import { Product } from '../../types/ProductTypes'
import { useCartContext } from '../../context/CartContext';
import TrashIcon from '@/assets/svg-icons/TrashIcon';
import Image from "next/image";

interface MiniProductCardProps {
  product: Product;
}

const MiniProductCard: React.FC<MiniProductCardProps> = ({ product }) => {
  const {removeFromCart } = useCartContext();

  return (
    <div className='minicart__product-container mb-4'>
      <Image
        src={product.images[0].upload}
        alt={product.images[0].upload}
        width={100}
        height={100}
        unoptimized
      />

      <span>{product.name}</span>

      <div
        className='trash-icon'
        onClick={() => removeFromCart(product.id)}
      >
        <TrashIcon />
      </div>
    </div>
  )
};

export default MiniProductCard;