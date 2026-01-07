import { ProductDetail } from "../../types/ProductTypes";

interface InfoSectionProps {
  product: ProductDetail;
}

const InfoSection: React.FC<InfoSectionProps> = ({ product }) => {
  return (
    <>
      <p className="text-[1.6rem] font-medium">{product.name}</p>
      <p className="mb-3">Kod produktu: {product.code}</p>
      <p className="font-medium mb-3">{product.price} zł</p>
      <p className="font-medium mb-4">Rozmiar: {product.size.name}</p>
      <div className="pill-container mb-4">
        {product.stones.map((stone, index) => 
          <div key={index} className="pill">
            {stone.name}
          </div>
        )}
      </div>

      <p className="description mb-4">{product.description}</p>
    </>
  )
};

export default InfoSection;