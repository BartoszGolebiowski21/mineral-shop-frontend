import React from 'react'
import FilterOptionList from './FilterOptionList';

const fetchOptions = async (url: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Options not found");
  }

  return res.json();
};

interface FilterSectionType {
  url: string;
  filterKey: string;
  name: string;
}

const FilterSection: React.FC<FilterSectionType> = async ({ url, filterKey, name }) => {
  const filterOptions = await fetchOptions(url);

  return (
    <>
      <div className='font-medium'>{name}</div>
      <FilterOptionList filterOptions={filterOptions} filterKey={filterKey} />
    </>
  )
}

export default FilterSection