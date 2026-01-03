import React from 'react'
import { ImageObj } from '../../types/ProductTypes';
import Image from "next/image";

interface ProductImageProps {
  image1: ImageObj;
  image2: ImageObj;
}

const ProductImage: React.FC<ProductImageProps> = ({ image1, image2 }) => {
  return (
    <div className="product-image-wrapper">
      <Image 
        src={image1.upload}
        alt={image1.upload}
        width={600}
        height={600}
        unoptimized
        className='product-image main-image'
      />
      
      {image2 &&
        <Image 
          src={image2.upload}
          alt={image2.upload}
          width={600}
          height={600}
          unoptimized
          className='product-image second-image'
        />
      }
    </div>
  )
}

export default ProductImage