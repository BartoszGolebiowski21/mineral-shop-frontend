import { ProductDetail } from "../../types/ProductTypes";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import ProductActions from "./ProductActions";


interface ProductOverviewProps {
  product: ProductDetail;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {

  return (
    <div className="product-overview-container">
      <ImageSection
        images={product.images}
      />

      <div className="product-overview-info-container">
        <InfoSection
          product={product}
        />

        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default ProductOverview;
