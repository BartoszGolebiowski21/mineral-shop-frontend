import React from 'react';
import { Image } from '../../types/ProductTypes';
import ProductImage from './ProductImage';

interface ImagesWrapperProps {
  images: Image[];
}

const ImagesWrapper: React.FC<ImagesWrapperProps> = ({ images }) => {
  const image1 = images[0];
  const image2 = images[1];

  return (
    <ProductImage image1={image1} image2={image2}/>
  );
};

export default ImagesWrapper;
