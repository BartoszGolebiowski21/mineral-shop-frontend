"use client";

interface ProductActionsProps {
  productId: number;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId }) => {

  const addToCart = (id: number) => {
    const cartString = localStorage.getItem("cart");
    const cart: number[] = cartString ? JSON.parse(cartString) : [];

    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Produkt dodany do koszyka!");
    } else {
      alert("Produkt już jest w koszyku!");
    }
  };


  return (
    <div
      onClick={() => addToCart(productId)}
      className="custom-button"
    >
      Do koszyka
    </div>
  )
};

export default ProductActions;