import ProductOverviewContainer from '@/app/atoms/components/ProductOverview/ProductOverviewContainer';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <ProductOverviewContainer slug={slug} />;
};
