import FilterBar from '@/app/atoms/components/FilterBar/FilterBar';
import ProductListContainer from '@/app/atoms/components/ProductList/ProductListContainer';


const page = () => {
  return (
    <>
      <div className='filter-bar'><FilterBar /></div>
      <ProductListContainer />
    </>
  )
};

export default page;