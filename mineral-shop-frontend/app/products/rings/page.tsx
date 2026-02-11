import FilterBar from '@/app/atoms/components/FilterBar/FilterBar';
import ProductListContainer from '@/app/atoms/components/ProductList/ProductListContainer';
import { SearchParamsType } from '@/app/atoms/types/NavigationTypes';

interface PageProps {
  searchParams: SearchParamsType;
}

const page = async ({ searchParams }: PageProps) => {
  return (
    <>
      <div className='filter-bar'>
        <FilterBar /> 
      </div>
      
      <ProductListContainer searchParams={searchParams} />
    </>
  )
};

export default page;