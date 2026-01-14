import ArrowIcon from "@/assets/svg-icons/ArrowIcon";
import { ImageObj } from "../../types/ProductTypes";
import Image from "next/image";
import ImageArrows from "./ImageArrows";

interface ImageSectionProps {
  images: ImageObj[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {

  return (
    <div className="product-detail-image-container">
      {images.map((image, index) =>
        <div key={index} className="image-wrapper"  data-index={index}>
          <Image
            src={image.upload}
            alt="Product image"
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>

        

        // <div key={index} className="image-wrapper">
        //   <img
        //     src={image.upload}
        //     alt={image.upload}
        //   />
        // </div>
      )}
    
      <ImageArrows />
    </div>
  )
};

export default ImageSection;