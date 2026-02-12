import React from 'react';
import { Product } from '../../types/ProductTypes';
import ImagesWrapper from './ImagesWrapper';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <ImagesWrapper images={product.images} />
      <h3>{product.name}</h3>
      <p>{product.price} PLN</p>
    </Link>
  )
};

export default ProductCard;