import React from 'react';
import { Product } from '../../types/ProductTypes';
import ImagesWrapper from './ImagesWrapper';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <ImagesWrapper images={product.images} />
      <h3>{product.name}</h3>
      <p>{product.price} PLN</p>
    </div>
  )
};

export default ProductCard;