interface ProductOverviewProps {
  slug: string;
}

const getProduct = async (slug: string) => {
  const res = await fetch(
    `http://localhost:8000/api/products/${slug}/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
};

const ProductOverview = async ({ slug }: ProductOverviewProps) => {
  const product = await getProduct(slug);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} zł</p>
    </div>
  );
};

export default ProductOverview;
