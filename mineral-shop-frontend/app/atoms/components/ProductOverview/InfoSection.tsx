import { Size, Stone } from "../../types/ProductTypes";

interface InfoSectionProps {
  name: string;
  price: number;
  stones: Stone[];
  size: Size;
}

const InfoSection: React.FC<InfoSectionProps> = ({ name, price, stones, size}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price} zł</p>
      <p>{stones.map(s => s.name)}</p>
      <p>Rozmiar: {size.name}</p>
    </div>
  )
};

export default InfoSection;