import { ImageObj } from "../../types/ProductTypes";
import Image from "next/image";

interface ImageSectionProps {
  images: ImageObj[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  const image1 = images[0];
  const image2 = images[1];

  return (
    <div className="product-detail-image-container">
      {/* <div className="image-wrapper">
        <Image
          src={image1.upload}
          alt={image1.upload}
          width={300}
          height={300}
          unoptimized
        />
      </div>
      <div className="image-wrapper">
        <Image
          src={image2.upload}
          alt={image2.upload}
          width={300}
          height={300}
          unoptimized
        />
      </div> */}

      <div className="image-wrapper">
        <img
          src={image1.upload}
          alt={image1.upload}
        />
      </div>
      <div className="image-wrapper">
        <img
          src={image2.upload}
          alt={image2.upload}
        />
      </div>
    </div>
  )
};

export default ImageSection;