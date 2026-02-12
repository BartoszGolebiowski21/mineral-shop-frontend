import { SearchParamsType } from '../../types/NavigationTypes';
import ProductList from './ProductList';

interface Props {
  searchParams?: SearchParamsType;
}

const fetchProducts = async (stones?: string, categories?: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
  
  if (stones) {
    url.searchParams.append('stones', stones);
  }

  if (categories) {
    url.searchParams.append('categories', categories)
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

  const stonesFilter = typeof params.stones === 'string' ? params.stones : undefined;
  const categoriesFilter = typeof params.categories === 'string' ? params.categories : undefined;

  const products = await fetchProducts(stonesFilter, categoriesFilter);

  return <ProductList products={products} />
};

export default ProductListContainer;