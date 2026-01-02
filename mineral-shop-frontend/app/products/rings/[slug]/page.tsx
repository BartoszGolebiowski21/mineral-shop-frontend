import ProductOverview from '@/app/atoms/components/ProductOverview/ProductOverview';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <ProductOverview slug={slug} />;
};
