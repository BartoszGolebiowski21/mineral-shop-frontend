import { ProductDetail } from "../../types/ProductTypes";

interface InfoSectionProps {
  product: ProductDetail;
}

const InfoSection: React.FC<InfoSectionProps> = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price} zł</p>
      <p>{product.stones.map(s => s.name)}</p>
      <p>Rozmiar: {product.size.name}</p>
      <p>{product.description}</p>
    </>
  )
};

export default InfoSection;