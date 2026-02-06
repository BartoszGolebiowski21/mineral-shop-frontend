import ProductOverview from "./ProductOverview";

interface ProductOverviewContainerProps {
  slug: string;
}

const fetchProduct = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
};

const ProductOverviewContainer = async ({ slug }: ProductOverviewContainerProps) => {
  const product = await fetchProduct(slug);

  return <ProductOverview product={product}/>;
};

export default ProductOverviewContainer;
