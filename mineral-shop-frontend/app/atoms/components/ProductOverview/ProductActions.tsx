"use client";

interface ProductActionsProps {
  productId: number;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId }) => {

  return (
    <div
      onClick={() => console.log(`DODANO ${productId}`)}
      className="custom-button"
    >
      Do koszyka
    </div>
  )
};

export default ProductActions;