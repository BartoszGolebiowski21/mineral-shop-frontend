import { ImageObj } from "../../types/ProductTypes";
import Image from "next/image";

interface ImageSectionProps {
  images: ImageObj[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {

  return (
    <div className="product-detail-image-container">
      {images.map((image, index) =>
        // <div key={index} className="image-wrapper">
        //   <Image
        //     src={image.upload}
        //     alt={image.upload}
        //     width={1000}
        //     height={1000}
        //     unoptimized
        //   />
        // </div>

        <div key={index} className="image-wrapper">
          <img
            src={image.upload}
            alt={image.upload}
          />
        </div>
      )}
    </div>
  )
};

export default ImageSection;