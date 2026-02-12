"use client"

import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { FilterOption } from '@/app/atoms/types/ProductTypes';

interface FilterOptionButtonProps {
  filterItem: FilterOption;
  filterKey: string;
}

const FilterOptionButton: React.FC<FilterOptionButtonProps> = ({ filterItem, filterKey }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentStones = searchParams.get(filterKey)?.split(',') || [];
  const isChecked = currentStones.includes(filterItem.slug);

  const toggleFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    let newStones: string[];

    if (isChecked) {
      newStones = currentStones.filter(s => s !== filterItem.slug);
    } else {
      newStones = [...currentStones, filterItem.slug];
    }

    if (newStones.length > 0) {
      params.set(filterKey, newStones.join(','));
    } else {
      params.delete(filterKey);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div 
      className={`filter-button ${isChecked ? "checked" : ""}`} 
      onClick={toggleFilter}
    >
      {filterItem.name}
    </div>
  )
}

export default FilterOptionButton