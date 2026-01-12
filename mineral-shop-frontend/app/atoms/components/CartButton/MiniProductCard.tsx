import React from 'react';
import { Product } from '../../types/ProductTypes'
import { useCartContext } from '../../context/CartContext';
import TrashIcon from '@/assets/svg-icons/TrashIcon';
import Image from "next/image";
import Link from 'next/link';

interface MiniProductCardProps {
  product: Product;
}

const MiniProductCard: React.FC<MiniProductCardProps> = ({ product }) => {
  const {removeFromCart } = useCartContext();

  return (
    <div className='minicart__product-container mb-4'>
      <Link href={`/products/rings/${product.slug}`}>
        <Image
          src={product.images[0].upload}
          alt={product.images[0].upload}
          width={100}
          height={100}
          unoptimized
        />
      </Link>

      <Link href={`/products/rings/${product.slug}`}>
        <span>{product.name}</span>
      </Link>
      
      <div
        className='cursor-pointer ml-auto'
        onClick={() => removeFromCart(product.id)}
        title="Usuń produkt"
      >
        <TrashIcon />
      </div>
    </div>
  )
};

export default MiniProductCard;