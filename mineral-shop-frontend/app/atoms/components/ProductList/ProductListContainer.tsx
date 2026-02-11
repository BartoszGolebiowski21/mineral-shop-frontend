import { SearchParamsType } from '../../types/NavigationTypes';
import ProductList from './ProductList';

interface Props {
  searchParams?: SearchParamsType;
}

const fetchProducts = async (stones?: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
  
  if (stones) {
    url.searchParams.append('stones', stones);
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Products not found");
  }

  return res.json();
};

const ProductListContainer = async ({ searchParams }: Props) => {
  const params = searchParams ? await searchParams : {};

  const stonesFilter = params && typeof params.stones === 'string' 
    ? params.stones 
    : undefined;

  const products = await fetchProducts(stonesFilter);

  return <ProductList products={products} />
};

export default ProductListContainer;