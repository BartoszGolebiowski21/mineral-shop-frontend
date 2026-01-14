import { ProductDetail } from "../../types/ProductTypes";
import ImageCarousel from "./ImageCarousel";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import ProductActions from "./ProductActions";


interface ProductOverviewProps {
  product: ProductDetail;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {

  return (
    <div className="product-overview__container">
      <div className="product-detail__image-container">
        <ImageCarousel>
          <ImageSection
            images={product.images}
          />
        </ImageCarousel>
      </div>

      <div className="product-overview__info-container">
        <InfoSection
          product={product}
        />

        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default ProductOverview;
