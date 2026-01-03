import ProductList from './ProductList';

const fetchProducts = async () => {
  const res = await fetch(
    `http://localhost:8000/api/products/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
};


const ProductListContainer = async () => {
  const products = await fetchProducts();

  return <ProductList products={products} />
};

export default ProductListContainer;