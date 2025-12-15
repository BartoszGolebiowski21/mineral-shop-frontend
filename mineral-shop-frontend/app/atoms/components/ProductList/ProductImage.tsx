import React from 'react'
import { Image } from '../../types/ProductTypes';

interface ProductImageProps {
  image1: Image;
  image2: Image;
}

const ProductImage: React.FC<ProductImageProps> = ({ image1, image2 }) => {
  return (
    <div className="product-image-wrapper">
      <img 
        src={image1.upload}
        alt={image1.upload}
        className='product-image main-image'
      />
      
      {image2 &&
        <img 
          src={image2.upload}
          alt={image2.upload}
          className='product-image second-image'
        />
      }
    </div>
  )
}

export default ProductImage