import React from 'react'
import { FilterOption } from '@/app/atoms/types/ProductTypes';
import FilterOptionButton from './FilterOptionButton';


interface FilterOptionListProps {
  filterOptions: FilterOption[];
  filterKey: string;
}

const FilterItemList: React.FC<FilterOptionListProps> = ({ filterOptions, filterKey }) => {
  return (
    <div className='filter-item-list'>
      {filterOptions.map((filterOption) => (
        <FilterOptionButton key={filterOption.id} filterItem={filterOption} filterKey={filterKey} />
      ))}
    </div>
  )
}

export default FilterItemList