import React from 'react';
import { Product } from '../../types/ProductTypes';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h3>{product.name}</h3>
      <p>Cena: {product.price} zł</p>
    </div>
  )
};

export default ProductCard;