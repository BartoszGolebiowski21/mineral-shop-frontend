"use client"

import React from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Stone } from '@/app/atoms/types/ProductTypes';

interface StoneButtonProps {
  stone: Stone;
}

const StoneButton: React.FC<StoneButtonProps> = ({ stone }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentStones = searchParams.get('stones')?.split(',') || [];
  const isChecked = currentStones.includes(stone.slug);

  const toggleFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    let newStones: string[];

    if (isChecked) {
      newStones = currentStones.filter(s => s !== stone.slug);
    } else {
      newStones = [...currentStones, stone.slug];
    }

    if (newStones.length > 0) {
      params.set('stones', newStones.join(','));
    } else {
      params.delete('stones');
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div 
      className={`filter-button ${isChecked ? "checked" : ""}`} 
      onClick={toggleFilter}
    >
      {stone.name}
    </div>
  )
}

export default StoneButton