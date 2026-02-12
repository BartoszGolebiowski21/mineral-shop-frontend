import FilterSection from "./reusable/FilterSection";

const FilterBar = () => {
  return (
    <>
      <div className='mb-4'>
        <div className='font-medium'>SORTOWANIE</div>
        <div>Domyślne</div>
      </div>

      <div className='mb-4'>
        <FilterSection
          url={'/api/categories'}
          filterKey={'categories'}
          name={'KATEGORIE'}
        />
      </div>

      <div className='mb-4'>
        <FilterSection
          url={'/api/stones'}
          filterKey={'stones'}
          name={'KAMIENIE'}
        />
      </div>
      
      <div className='mb-4'>
        <div className='font-medium'>CENA</div>
        <div>0-999.99</div>
      </div>
    </>
  )
};

export default FilterBar;